const myLibrary = [];
let bookTitle, bookAuthor, pages, readStatus, trash;

//EXAMPLE BOOKS
const book1 = new Book('Ulysses', 'James Joyce', 732, false);
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 1072, false);
const book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', 1276, true);

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
  clrForm();
  addBookDialog.close();
})

//DIALOG SUBMIT BUTTON
$submitBook.addEventListener('click', () => {
  addBookToLibrary($title.value, $author.value, $pages.value, $status.checked);
  clrForm();
  addBookDialog.close();
})

//BOOK CONSTRUCTOR
function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status  = status;

  this.toggleStatus = function() {
    this.status = !this.status;
  };
};

//CLEARS FORM FIELDS
function clrForm() {
  $title.value = '';
  $author.value = '';
  $pages.value = '';
  $status.checked = false;
}

//ADD BOOK TO LIBRARY ARRAY
function addBookToLibrary(title, author, pages, status) {

  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  resetPage();
}

function renderCards() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.textContent = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card', index);

    //CREATE CARD CONTENT DOM ELEMENTS
    bookTitle = document.createElement('div');
    bookAuthor = document.createElement('div');
    bookPages = document.createElement('div');

    bookStatus = document.createElement('button');
    bookStatus.className = book.status ? 'read' : 'not-read';

    bookTrash = document.createElement('button');
    bookTrash.classList.add('btn','sm-btn','delBtn');
    bookTrash.setAttribute('id', index)

    //FILL CARD CONTENT
    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = book.pages;
    bookStatus.innerText = book.status ? 'Read' : 'Not Read';

    //APPEND CARD CONTENT TO BOOK CARD
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatus);
    bookCard.appendChild(bookTrash);

    //APPEND CARD TO CONTAINER
    cardContainer.appendChild(bookCard);

    bookStatus.addEventListener('click', () => {
      book.toggleStatus();
      resetPage();
    });

    bookTrash.addEventListener('click', () => {
      removeBook(index);
    })
  })
}

function removeBook(bookIndex) {
  myLibrary.splice(bookIndex,1);
  resetPage();
}

//RESETS PAGE AND FUNCTIONS
function resetPage() {
  renderCards();
}

//STARTUP FUNCTIONS
window.addEventListener('DOMContentLoaded', () => {
  resetPage();
})