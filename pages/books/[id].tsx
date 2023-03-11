import { categories } from "../../lib/constants/categories";
import { openDialog } from "../../lib/functions/dialog";
import { booksData } from "../../lib/constants/booksData";
import { Dialog } from "../../components/dialog";
import styles from "../../styles/book.module.css";
import Layout from "../../components/layout";

import Head from "next/head";
export async function getStaticPaths() {
  let bookIds = Object.keys(booksData);
  let paths = [];
  bookIds.forEach((bookId: string) => {
    paths.push({params: { id: bookId }});
  });
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { id: params.id },
  }
}

export default function Book({ id }: { id: keyof typeof booksData; }) {
  let bookData = booksData[id];
  let authors = "";
  bookData.authors.forEach((author: string) => {
    authors += author+" ";
  });
  let categoriesArray = bookData.categories.split(" ");
  let categoriesList = "";
  categoriesArray.forEach((categorie: string, index: number) => {
    if(index === (categoriesArray.length - 1)) {
      return categoriesList += categories[categorie as keyof typeof categories].name;
    }
    categoriesList += categories[categorie as keyof typeof categories].name+", ";
  })
  
  return (
    <Layout>
      <Head>
        <title>Luch Library · Livros</title>
        <meta name="description" content="Aqui você pode ler o livro Interação Humano Computador." />      
      </Head>
      <main className={styles.book_main}>
        <div className={styles.book_data}>
          <img
            srcSet={`${bookData.src} ${bookData.width}px`}
            sizes="
              (min-width: 640px) 210px,
              (min-width: 768px) 220px,
              (min-width: 1024px) 230px,
              (min-width: 1280px) 240px,
              (min-width: 1536px) 250px,
              200px
              "
            width={bookData.width}
            height={bookData.height}
            src={bookData.src}
            alt={bookData.alt}
            className="img_with_dialog"
            onClick={openDialog}
          />
          <table>
            <tbody>
              <tr>
                <th scope="col">Título</th>
                <td>
                  {bookData.title}
                </td>
              </tr>
              <tr>
                <th scope="col">Autor</th>
                <td>
                  {bookData.authors}
                </td>
              </tr>
              <tr>
                <th scope="col">Categorias</th>
                <td>
                  {categoriesList}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.actions}>
          <a className="button_redirection" target="_blank" rel="nofollow" href="https://drive.google.com/file/d/1pcgx8KzVR1xactop2UUqs6baC0r-ZxnI/view?usp">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>            
              <p>Ler</p>
            </button>
          </a>
          <a className="button_redirection" target="_blank" rel="nofollow" href="https://drive.google.com/uc?id=1pcgx8KzVR1xactop2UUqs6baC0r-ZxnI&export=download" download>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>            
              <p>Baixar</p>
            </button>
          </a>
        </div>
      </main>
      <Dialog
        srcSet={`${bookData.src} ${bookData.width}px`}
        sizes="
          (min-width: 640px) 260px,
          (min-width: 768px) 270px,
          (min-width: 1024px) 280px,
          (min-width: 1280px) 300px,
          (min-width: 1536px) 310px,
          250px
        "
        width={bookData.width}
        height={bookData.height}
        src={bookData.src}
        alt={bookData.alt}
      />
    </Layout>
  )
}