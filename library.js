let myLibrary = [];
var number = 0;

const button = document.querySelector("button");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const pageNumber = document.getElementById("book-pages");

button.addEventListener("click", () => {
  if (
    bookTitle.value == "" ||
    bookAuthor.value == "" ||
    pageNumber.value == "" ||
    pageNumber.value == 0
  ) {
    if (bookTitle.value == "") {
      bookTitle.style.transition = "border ";
      bookTitle.style.border = "red solid 1px";
    }

    if (bookAuthor.value == "") {
      bookAuthor.style.border = "red solid 1px";
    }

    if (pageNumber.value == "" || pageNumber.value == 0) {
      pageNumber.style.border = "red solid 1px";
    }
  } else {
    addBookToLibrary();
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const page = pageNumber.value;
  const book = new Book(title, author, page);

  book.number = number;
  number += 1;

  myLibrary.push(book);

  addBooktoTable(book.number);
}

addBookToLibrary.prototype;

function addBooktoTable(num) {
  const table = document.querySelector("table");

  const titleDoc = document.createElement("td");
  const authorDoc = document.createElement("td");
  const pageDoc = document.createElement("td");

  const readButtonTd = document.createElement("td");
  const readButton = document.createElement("button");

  const removeButtonTd = document.createElement("td");
  const removeButton = document.createElement("button");

  titleDoc.innerHTML = myLibrary[myLibrary.length - 1].title;
  authorDoc.innerHTML = myLibrary[myLibrary.length - 1].author;
  pageDoc.innerHTML = myLibrary[myLibrary.length - 1].pages;

  readButton.innerHTML = "Read";
  removeButton.innerHTML = "Remove";

  readButtonTd.appendChild(readButton);
  removeButtonTd.appendChild(removeButton);

  var row = table.insertRow();
  row.append(titleDoc, authorDoc, pageDoc, readButtonTd, removeButtonTd);

  removeButton.addEventListener("click", () => {
    removeBookFromTable(num);
    row.remove();
  });
}

function removeBookFromTable(numb) {
  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].number == numb) {
      myLibrary.splice(i, 1);
    }
  }
}
