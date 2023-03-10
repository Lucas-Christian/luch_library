import styles from "../../../styles/books.module.css";
export function appendCategoriesDiv() {
  let filterPanel = document.getElementById("filter_panel");

  let categoriesDiv = document.createElement("div");
  categoriesDiv.className = `${styles.categories} categories`;
  filterPanel.append(categoriesDiv);
}