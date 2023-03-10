import { appendCategoryParagraph } from "./appendCategoryParagraph";
import { appendCategoriesDiv } from "./appendCategoriesDiv";
import { categories } from "../../constants/categories";
import styles from "../../../styles/books.module.css";

export function loadCategories() {
  let books = document.getElementsByClassName("book") as HTMLCollectionOf<HTMLDivElement>;
  let filterPanel = document.getElementById("filter_panel");
  let filterCategories = filterPanel.getElementsByClassName("categories")[0];

  let selectedCategories = [];

  let actualCategoryNumber = 2;
  appendCategories();

  function appendCategories() {
    filterPanel = document.getElementById("filter_panel");
    filterCategories = filterPanel.getElementsByClassName("categories")[0];

    for(let i = 0;i < books.length;i++) {
      let category = books[i].classList[actualCategoryNumber];
      let previousCategory = books[i].classList[actualCategoryNumber - 1];

      if(!category) continue;
      if(selectedCategories.length > 0 && !selectedCategories.includes(previousCategory)) continue;
      if(previousCategory !== "book") {
        if(actualCategoryNumber > 1 && !categoryHasSubcategory()) continue;
      }
      if(categoryAlreadyRendered()) continue;
      
      appendCategory(category);

      function categoryHasSubcategory() {
        return categories[previousCategory].subcategories !== undefined && 
        categories[previousCategory].subcategories.includes(category);
      }
      function categoryAlreadyRendered() {
        for(let j = 0;j < filterCategories.children.length;j++) {
          if(filterCategories.children[j].textContent === categories[category].name) return true;
          return false;
        }
      }
    }
    actualCategoryNumber++;
  }

  function appendCategory(category) {
    let p = document.createElement("p");
    p.innerText = categories[category].name;
    p.className = styles.category;
    p.onclick = () => selectCategory(category);

    filterCategories.appendChild(p);
  }

  function selectCategory(category) {
    selectedCategories.push(category);
    hideBooks();
    clearCategoriesPanel();
    updateCategoriesPanel();

    function clearCategoriesPanel() {
      return filterPanel.innerHTML = "";
    }
    function updateCategoriesPanel() {
      appendCategoryParagraph();
      appendFiltersDiv();
      appendCategoriesDiv();
      appendCategories();

      function appendFiltersDiv() {
        let filtersDiv = document.createElement("div");
        filtersDiv.className = "all_filters";
        filterPanel.append(filtersDiv);
        for(let i = 0;i < selectedCategories.length;i++) {
          let filterParagraph = document.createElement("p");
          filterParagraph.innerHTML = `Filtro ${i+1}: ${categories[selectedCategories[i]].name}`;
          filterParagraph.className = `filter${i}`;
          filtersDiv.append(filterParagraph);
        }
      }
    }
    function hideBooks() {
      for(let i = 0;i < books.length;i++) {
        for(let j = 0;j < selectedCategories.length;j++) {
          if(!books[i].classList.contains(selectedCategories[j])) {
            books[i].style.display = "none";
          }
        }
      }
    }
  }
}