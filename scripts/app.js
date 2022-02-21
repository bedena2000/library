const addBook = document.querySelector(".add-book");
const modal = document.querySelector(".modal-inner");
const modalBackground = document.querySelector(".modal");
const bodyElement = document.querySelector("body");
const submit = document.querySelector(".submit");



let booksArray = [];

function Book(title, author, pages, checked) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.render = function() {
    let cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.innerHTML = `
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="pages">${pages}</p>
        <button class="remove-books">Remove</button>
    `;
    const cardItemButton = cardItem.querySelector("button");
    cardItemButton.addEventListener("click", () => {
      filterArray(title, author, pages);
    });
    const display = document.querySelector(".library-wrapper");
    display.append(cardItem);
    console.log(title, author, pages, checked);
  }
}

function sayHello(title, author, pages) {
  console.log(title, author, pages);
}

function removeAllElement() {
  const libraryWrapper = document.querySelector(".library-wrapper");
  libraryWrapper.innerHTML = '';
}

function filterArray(title, author, pages) {
  booksArray = booksArray.filter(book => {
    return (book.title !== title && book.author !== author && book.pages !== pages);
  });
  console.log(booksArray);
  removeAllElement();
  displayAllBooks();
}

function displayAllBooks() {
  booksArray.forEach(item => {
    item.render();
  });
}


addBook.addEventListener("click", (event) => {
  modalBackground.classList.toggle("show");
  modal.classList.toggle("show-flex");
});

bodyElement.addEventListener("click", (event) => {
  let currentElementClassList = event.target.classList;
  let makeClassListArray = Array.from(currentElementClassList);
  if(makeClassListArray.includes("modal") || makeClassListArray.includes("modal-inner")) {
    modalBackground.classList.toggle("show");
    modal.classList.toggle("show-flex");
  }
});

submit.addEventListener("click", (event) => {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  
  let createBook = new Book(title.value, author.value, pages.value);
  booksArray.push(createBook);
  createBook.render();
  console.log(booksArray);
  // const removeBooks = document.querySelectorAll(".remove-books");
  // const removeBooksArray = Array.from(removeBooks);
  // removeBooks.forEach(item => {
  //   item.addEventListener("click", (event) => {
  //     const currentCard = event.target.parentElement;
  //     const cardTitle = currentCard.querySelector(".title");
  //     const cardAuthor = currentCard.querySelector(".author");
  //     const cardPages = currentCard.querySelector(".pages");
      
  //     filterArray(cardTitle.textContent, cardAuthor.textContent, cardPages.textContent);
      
  //   });
  // });
});



