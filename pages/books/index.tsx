import { categories } from "../../lib/constants/categories";
import { booksData } from "../../lib/constants/booksData";
import { Dispatch, SetStateAction, useState } from "react";
import { Book } from "../../components/book";
import styles from "../../styles/books.module.css";
import Layout from "../../components/layout";
import Head from "next/head";

type selectedCategoriesType = [ string[], Dispatch<SetStateAction<any[]>> ];

export default function Books() {
  const [selectedCategories, setSelectedCategories]: selectedCategoriesType = useState([]);

  function addCategorie(category: string) {
    setSelectedCategories(selectedCategories => [...selectedCategories, category]);
  }
  function toggleFilter() {
    let filterPanel = document.getElementById("filter_panel");
    if(filterPanel.style.display === "none") {
      return filterPanel.style.display = "flex";
    }
    filterPanel.style.display = "none";
  }
  function clearFilters() {
    let books = document.getElementsByClassName("book") as HTMLCollectionOf<HTMLDivElement>;
    for(let book of books) {
      book.style.display = "block";
    }
    setSelectedCategories([]);
  }
  return (
    <Layout>
      <Head>
        <title>Luch Library · Livros</title>
        <meta name="description" content="Aqui você pode ver todos os livros da biblioteca do Lucas Christian, leia os livros que quiser." />
      </Head>
      <main style={{justifyContent: "normal", marginBottom: "20px"}}>
        <div className={styles.filter}>
          <div className={styles.filter_actions}>
            <button onClick={toggleFilter}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth="1.5" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
              </svg>          
              <p>Filtrar</p>
            </button>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" strokeWidth="1.5" 
              stroke="currentColor" className="trash_icon"
              onClick={clearFilters}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
          <div className={styles.filter_panel} id="filter_panel" style={{display: "none"}}>
            <p className={styles.category_paragraph}>Categorias</p>
            <div className={styles.categories} id="categories">
              {renderCategories()}
            </div>
          </div>
        </div>
        <div className={styles.books}>
          {renderBooks()}
        </div>
      </main>
    </Layout>
  );
  function renderCategories() {
    let renderedCategories = [];
    if(selectedCategories.length > 0) {
      let filteredCategory = categories[selectedCategories[0]];
      selectedCategories.map((selectedCategory: string, index: number): any => {
        renderedCategories.push(
          <p key={`filter${selectedCategory}${index}`}>Filtro {(index+1)}: {filteredCategory.name}</p>
        );
        if(filteredCategory.subcategories === undefined) {  
          filteredCategory.map((previousCategory: any) => {
            renderedCategories.push(
              <p className={styles.category} key={`${previousCategory}paragraph`} onClick={() => addCategorie(previousCategory)}>
                {previousCategory.name}
              </p>
            );
          });
        } else {
          filteredCategory = categories[selectedCategory].subcategories;
        }
      });
    } else {
      for(let category in categories) {
        renderedCategories.push(  
          <p className={styles.category} key={`${category}paragraph`} onClick={() => addCategorie(category)}>
            {categories[category as keyof typeof categories].name}
          </p>
        );
      }
    }
    return renderedCategories;
  }
  function renderBooks() {
    let renderedBooks = [];
    for(let bookData in booksData) {
      if(selectedCategories.length > 0) {
        selectedCategories.map((selectedCategorie: any) => {
          if(booksData[bookData].categories.includes(selectedCategorie)) {
            renderBook();
          }
        });
      } else {
        renderBook();
      }
      function renderBook() {
        renderedBooks.push(
          <Book
            categories={booksData[bookData].categories}
            ariaLabel={booksData[bookData].ariaLabel}
            key={bookData}
            href={`books/${booksData[bookData].id}`}
            title={booksData[bookData].title}
            alt={booksData[bookData].alt}
            src={booksData[bookData].src}
          />
        );
      }
    }
    return renderedBooks;
  }
}