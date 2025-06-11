const addButton = document.querySelector('[add]');
const removeButton = document.querySelectorAll("remove");
const myLibrary = [];
const idList = [];

// create a button that is calling a function that will store the data introduces in the input form
addButton.addEventListener('click', button => {
    addBookToLibrary();

});

// create a book class that contains the values that we will need for our books
class Book {
    constructor(title, author, pages, id) {
    this.title = title;
    this.autor = author;
    this.pages = pages;
    this.id = id;

    }
}

// create a function that takes the values of the input forms and stores it in variables

function addBookToLibrary() {
    let book = document.getElementById("book").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let id = crypto.randomUUID();

    book1 = new Book(book, author, pages, id);
    myLibrary.push(book1);

    renderBook();
}


let bk = 0;
let title = 0;
currentBook = [];
function renderBook() {
    // create the container of the card
    const cardContainer = document.querySelector('.card-container');
    cardContainer.style = "display: flex; flex-direction: row; margin: 15px;"

    const card = document.createElement('div');
    card.style = "background-color: azure; height: 300px; width: 150px; margin: 15px;"
    const tempBtn = document.createElement('button');

    // create a remove button every time the user clicks on "Add a book"
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function() {
        cardContainer.removeChild(card);
    })

    // button to render a book on the screen
    tempBtn.textContent = 'Remove Book';
    // get the ID, name, pages and author from the array and convert it to a string
    let bookId = (myLibrary.map(a => a.id)).toString();
    let bookTitle = document.getElementById("book").value
    let bookAuthor = document.getElementById("author").value
    let bookPages = document.getElementById("pages").value


    // loop through the Id array to assign it to each book
    currentId = (bookId.substring(bk, bk + 37));
    bk += 37;

    // loop through the name array to asign it to each book
    currentBook.push(book);

    // create the paragraphs that will hold our content
    const bookIdCard = document.createElement('p');
    bookIdCard.id = currentId;
    const bookTitleCard = document.createElement('p');
    bookTitle.id = "title";
    const bookAuthorCard = document.createElement('p');
    bookAuthorCard.id = "author";
    const bookPagesCard = document.createElement('p');
    bookPagesCard.id = "pages";

    // add the content to the paragraphs
    bookIdCard.innerText = currentId;
    bookTitleCard.innerText = `Book Title: ${bookTitle}`;
    bookAuthorCard.innerText = `Author: ${bookAuthor}`;
    bookPagesCard.innerText = `Pages: ${bookPages}`;

    // append the content to the card
    card.id = currentId;

    card.appendChild(deleteBtn);
    card.appendChild(bookTitleCard);
    card.appendChild(bookAuthorCard);
    card.appendChild(bookPagesCard);
    cardContainer.appendChild(card);

}
