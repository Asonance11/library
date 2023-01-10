const addBook = document.getElementById('add-book');
const formContainer = document.getElementById('form-Container');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readBook = document.getElementById('read');
const newBook = document.getElementById('new-book');
const bookSection = document.getElementById('library');
let myLibrary = []; //array for storing books
let bookAddition;
//constructor

function Book(title, author, pages, readBook) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readBook = readBook;
}

//fuction to add a new book to the array
function addBookToLibrary() {
	event.preventDefault();
	bookAddition = new Book(
		title.value,
		author.value,
		pages.value,
		readBook.checked
	);
	myLibrary.push(bookAddition);
}
//function to create the book div with dom elements
function createBook(item) {
	const bookDiv = document.createElement('div');
	const titleDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const pagesDiv = document.createElement('div');
	const readDiv = document.createElement('button');
	const removeDiv = document.createElement('button');

	titleDiv.textContent = item.title;
	bookDiv.appendChild(titleDiv);
	authorDiv.textContent = item.author;
	bookDiv.appendChild(authorDiv);
	pagesDiv.textContent = item.pages;
	bookDiv.appendChild(pagesDiv);
	bookDiv.appendChild(readDiv);
	bookDiv.appendChild(removeDiv);

	bookSection.appendChild(bookContainer);
}
