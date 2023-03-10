import { appendCategoriesDiv } from "./appendCategoriesDiv";
import { appendCategoryParagraph } from "./appendCategoryParagraph";
import { clearCategoriesPanel } from "./clearCategoriesPanel";
import { loadCategories } from "./loadCategories";
import { showAllBooks } from "./showAllBooks";

export function openFilter() {
  let filterPanel = document.getElementById("filter_panel");
  if(filterPanel.style.display === "none") {
    return filterPanel.style.display = "flex";
  }
  return filterPanel.style.display = "none";
}
export function clearFilters() {
  clearCategoriesPanel();
  appendCategoryParagraph();
  appendCategoriesDiv();
  loadCategories();
  showAllBooks();
}