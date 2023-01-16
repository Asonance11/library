const addBook = document.getElementById('add-book');
const formContainer = document.getElementById('form-Container');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readBook = document.getElementById('read');
const newBook = document.getElementById('new-book');

let myLibrary = []; //array for storing books
let bookAddition;
const form = document.getElementById('book-form');

addBook.addEventListener('click', () => {
	formContainer.style.display = 'block';
});
/*newBook.addEventListener('click', () => {
	addBookToLibrary();
});*/
form.addEventListener('submit', function (e) {
	addBookToLibrary();
	createBook();
	e.preventDefault();
	form.reset();
});

//constructor
function Book(title, author, pages, readBook) {
	this.title = form.title.value;
	this.author = form.author.value;
	this.pages = form.pages.value;
	this.readBook = form.readBook.checked;
}

//fuction to add a new book to the array
function addBookToLibrary() {
	formContainer.style.display = 'none';
	e.preventDefault();
	bookAddition = new Book(title, author, pages, readBook);
	myLibrary.push(bookAddition);
	/*displayBook();
	form.reset();*/
}

function displayBook() {
	const bookSection = document.getElementById('library');

	const books = document.querySelectorAll('.book');
	books.forEach((book) => bookSection.removeChild(book));

	for (let i = 0; i < myLibrary.length; i++) {
		createBook(myLibrary[i]);
	}
}

//function to create the book div with dom elements
function createBook(item) {
	const library = document.querySelector('#library');
	const bookDiv = document.createElement('div');
	const titleDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const pagesDiv = document.createElement('div');
	const readDiv = document.createElement('button');
	const removeDiv = document.createElement('button');

	bookDiv.classList.add('book');
	bookDiv.setAttribute('id', myLibrary.indexOf(item));

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
	if (item.read === false) {
		readDiv.textContent = 'Not Read';
		readDiv.style.backgroundColor = '#e04f63';
	} else {
		readDiv.textContent = 'Read';
		readDiv.style.backgroundColor = '#63da63';
	}

	removeDiv.textContent = 'Remove';
	removeDiv.setAttribute('id', 'removeDiv');

	removeDiv.classList.add('remove');
	bookDiv.appendChild(removeDiv);
	removeDiv.addEventListener('click', () => {
		myLibrary.splice(myLibrary.indexOf(item), 1);
		displayBook();
	});

	//add toggle ability to each book 'read' button on click
	readDiv.addEventListener('click', () => {
		item.read = !item.read;
		displayBook();
	});

	library.appendChild(bookDiv);
}
