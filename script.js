const myLibrary = [];

//EXAMPLE BOOKS
const book1 = new Book('Ulysses', 'James Joyce', 732, 'Not read');
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 1072, 'Not read');
const book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'Read');

myLibrary.push(book1, book2, book3);

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status  = status;
}

function addBookToLibrary(title, author, pages, status) {
  // do stuff here
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  
  renderCards()
}

function renderCards() {
  myLibrary.forEach()
}