const myLibrary = [];

function Book(title, author, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  
}

Book.prototype = {
  read      : function () {return 'read'; },
  notRead  : function () {return 'not read yet'; }
}