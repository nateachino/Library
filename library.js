let myLibrary = [];

const button = document.querySelector("button");
const table = document.querySelector("table");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const pageNumber = document.getElementById("book-pages");

button.addEventListener("click", () => {
  if (
    bookTitle.value == " " ||
    bookAuthor.value == " " ||
    pageNumber.value == ""
  ) {
    console.log("invalid input");
    console.log(bookTitle);
  } else {
    addBookToLibrary();
    console.log(bookTitle);
    console.log("valid input");
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(bookTitle.value, bookAuthor.value, pageNumber.value);
  myLibrary.push(book);
  console.log(myLibrary);
}
