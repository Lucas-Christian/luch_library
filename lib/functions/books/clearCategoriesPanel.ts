export function clearCategoriesPanel() {
  let filterPanel = document.getElementById("filter_panel");

  return filterPanel.innerHTML = "";
}