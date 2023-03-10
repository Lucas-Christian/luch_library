export function appendCategoryParagraph() {
  let filterPanel = document.getElementById("filter_panel");

  let categoryParagraph = document.createElement("p");
  categoryParagraph.innerHTML = "Categorias";
  categoryParagraph.className = "category_paragraph";
  filterPanel.append(categoryParagraph);
}