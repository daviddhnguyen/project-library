const myLibrary = [];

//EXAMPLE BOOKS
const book1 = new Book('Ulysses', 'James Joyce', 732, 'Not read');
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 1072, 'Not read');
const book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'Read');

myLibrary.push(book1, book2, book3);

//EVENT LISTENERS
const addBook = document.querySelector('#addBook-btn');
const addBookDialog = document.querySelector('#addBook');
const newTitle = addBookDialog.querySelector('#title');
const newAuthor = addBookDialog.querySelector('#author');
const newPages = addBookDialog.querySelector('#pages');
const newStatus = addBookDialog.querySelector('#status');
const cancelBook = addBookDialog.querySelector('.cancel-addBook')
const submitBook = addBookDialog.querySelector('.submit-addBook') 

//DIALOG CODE
addBook.addEventListener('click', () => {
  addBookDialog.showModal();
});

//CANCEL BUTTON
cancelBook.addEventListener('click', (e) => {
  addBookDialog.close();
})


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
  myLibrary.forEach((book, index) => {
  })
}

// function addBookEventListener() {
//   const addBook = document.querySelector('.addBook-button');
//   addBook.addEventListener('click', ()=> {
//     const form = document.
//   })
// }