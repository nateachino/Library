let myLibrary = [];
let num = -1;

const button = document.querySelector("button");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const pageNumber = document.getElementById("book-pages");



button.addEventListener("click", () => {
  if (
    bookTitle.value == " " ||
    bookAuthor.value == " " ||
    pageNumber.value == "" || pageNumber.value == 0
  ) {
    
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

  myLibrary.push(book);

  num+=1;

  addBooktoTable(num)
}


addBookToLibrary.prototype


function addBooktoTable(number){
  const table = document.querySelector("table");

      const titleDoc = document.createElement("td")
      const authorDoc = document.createElement("td")
      const pageDoc = document.createElement("td")

      titleDoc.innerHTML = myLibrary[number].title
      authorDoc.innerHTML = myLibrary[number].author
      pageDoc.innerHTML = myLibrary[number].pages


      var row = table.insertRow();
      row.append(titleDoc,authorDoc,pageDoc)

}
