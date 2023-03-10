export function showAllBooks() {
  let books = document.getElementsByClassName("book") as HTMLCollectionOf<HTMLDivElement>;
  
  for(let i = 0;i < books.length;i++) {
    books[i].style.display = "block";
  }
}