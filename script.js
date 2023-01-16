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

addBook.addEventListener('click', () => {
	formContainer.style.display = 'block';
});
/*newBook.addEventListener('click', () => {
	addBookToLibrary();
});*/

//constructor
function Book(title, author, pages, readBook) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readBook = readBook;
}

//fuction to add a new book to the array
function addBookToLibrary() {
	formContainer.style.display = 'none';
	e.preventDefault();
	bookAddition = new Book(
		title.value,
		author.value,
		pages.value,
		readBook.checked
	);
	myLibrary.push(bookAddition);
	createBook();
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
	titleDiv.classList.add('title');
	bookDiv.appendChild(titleDiv);

	authorDiv.textContent = item.author;
	authorDiv.classList.add('author');
	bookDiv.appendChild(authorDiv);

	pagesDiv.textContent = item.pages;
	pagesDiv.classList.add('pages');
	bookDiv.appendChild(pagesDiv);

	bookDiv.appendChild(readDiv);
	readDiv.classList.add('read');
	bookDiv.appendChild(removeDiv);
	removeDiv.classList.add('remove');

	bookDiv.classList.add('book');
	bookSection.appendChild(bookDiv);
}
