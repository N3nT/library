const displayBooks = document.querySelector('.displayBooks');
const submit = document.querySelector('.addBookFormSubmit');
//inputs
const inputTitle = document.querySelector('.inputTitle');
const inputAuthor = document.querySelector('.inputAuthor');
const inputYear = document.querySelector('.inputYear');
const inputStatus = document.querySelector('.inputStatus');


let books = [{title: "Pan Tadeusz", author: "Adam Mickiewicz", publishYear: 1820, status: false}];

const loadBooks = () => {
    books.map((book, index) => {
        const bookDIV = document.createElement('div');
        bookDIV.classList.add('book');

        const idSPAN = document.createElement('span');
        idSPAN.textContent = index + 1;
        const titleSPAN = document.createElement('span');
        titleSPAN.textContent = book.title;
        const authorSPAN = document.createElement('span');
        authorSPAN.textContent = book.author;
        const yearSPAN = document.createElement('span');
        yearSPAN.textContent = book.publishYear;
        const statusSPAN = document.createElement('span');
        statusSPAN.textContent = book.status;

        const removeButton = document.createElement('button');
        removeButton.innerText = "Remove";
        removeButton.addEventListener('click', () => {removeBook(index)})

        bookDIV.appendChild(idSPAN);
        bookDIV.appendChild(titleSPAN);
        bookDIV.appendChild(authorSPAN);
        bookDIV.appendChild(yearSPAN);
        bookDIV.appendChild(statusSPAN);
        bookDIV.appendChild(removeButton);

        displayBooks.appendChild(bookDIV);
    })
}

const removeBook = (removeIndex) => {
    books = books.filter((_, index) => index != removeIndex)
    console.log(books);
    clearDisplay();
    loadBooks();
}

const clearDisplay = () => {
    displayBooks.innerHTML = '';
}

const clearInputs = () => {
    inputTitle.value = ''; 
    inputAuthor.value = ''; 
    inputYear.value = ''; 
    inputStatus.value = 'Unread';
}

function Book(title, author, publishYear, status){
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
    this.status = status;
}

const addBook = (e) => {
    const newBook = new Book(inputTitle.value, inputAuthor.value, inputYear.value, inputStatus.value);
    books.push(newBook);
    console.log(newBook)
    clearDisplay();
    clearInputs();
    loadBooks();
}

window.addEventListener('load', loadBooks);
submit.addEventListener('click', addBook);