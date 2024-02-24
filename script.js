const myLibrary = [];

//EXAMPLE BOOKS
const book1 = new Book('Ulysses', 'James Joyce', 732, 'Not read');
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 1072, 'Not read');
const book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'Read');

myLibrary.push(book1, book2, book3);

//EVENT LISTENERS
const addBook = document.querySelector('#addBook-btn');
const addBookDialog = document.querySelector('#addBook-dialog');

//DIALOG EVENT LISTENERS
const $title = addBookDialog.querySelector('#title');
const $author = addBookDialog.querySelector('#author');
const $pages = addBookDialog.querySelector('#pages');
const $status = addBookDialog.querySelector('#status');
const $cancelBook = addBookDialog.querySelector('.cancel-addBook');
const $submitBook = addBookDialog.querySelector('.submit-addBook');

//DIALOG CODE
addBook.addEventListener('click', () => {
  addBookDialog.showModal();
})

//DIALOG CANCEL BUTTON
$cancelBook.addEventListener('click', (e) => {
  $title.value = '';
  $author.value = '';
  $pages.value = '';
  addBookDialog.close();
})

//DIALOG SUBMIT BUTTON
$submitBook.addEventListener('click', () => {
  addBookToLibrary($title.value, $author.value, $pages.value, $status.value);
  $title.value = '';
  $author.value = '';
  $pages.value = '';
  addBookDialog.close();
})

//BOOK CONSTRUCTOR
function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status  = status;
}

//ADD BOOK TO LIBRARY ARRAY
function addBookToLibrary(title, author, pages, status) {
  // do stuff here
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  renderCards()
}

function renderCards() {
  myLibrary.forEach((book, index) => {
  })
}

function removeBook() {

}