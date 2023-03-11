export function Title(title: string[]) {
  let bookTitle = [];
  title.forEach((value: string, index: number) => {
    bookTitle.push(value);
    if(index !== (title.length - 1)) {
      bookTitle.push(<br />);
    }
  })
  return bookTitle;
}