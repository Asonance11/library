const addBook = document.getElementById('add-book');
const formContainer = document.getElementById('form-Container');
const form = document.getElementById('book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readBook = document.getElementById('read');
const newBook = document.getElementById('new-book');
const library = document.getElementById('library');

let myLibrary = []; //array for storing books
let bookAddition;

addBook.addEventListener('click', () => {
	if (formContainer.style.display == 'block') {
		formContainer.style.display = 'none';
	} else if ((formContainer.style.display = 'none')) {
		formContainer.style.display = 'block';
	}
});
/*newBook.addEventListener('click', () => {
	addBookToLibrary();
});*/

//constructor
function book(title, author, pages, readBook) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readBook = readBook;
}

//fuction to add a new book to the array
function addBookToLibrary() {
	formContainer.style.display = 'none';
	// e.preventDefault();
	// bookAddition = new Book(
	// 	title.value,
	// 	author.value,
	// 	pages.value,
	// 	readBook.checked
	// );
	// myLibrary.push(bookAddition);
	// createBook();
	myLibrary[myLibrary.length] = new book(
		title.value,
		author.value,
		pages.value,
		readBook.checked
	);
}
//function to create the book div with dom elements
function createBook() {
	library.innerHTML = '';

	for (let i = 0; i < myLibrary.length; i++) {
		const bookDiv = document.createElement('div');
		const titleDiv = document.createElement('div');
		const authorDiv = document.createElement('div');
		const pagesDiv = document.createElement('div');
		const readBtn = document.createElement('button');
		const removeBtn = document.createElement('button');

		titleDiv.textContent = myLibrary[i].title;
		authorDiv.textContent = myLibrary[i].author;
		pagesDiv.textContent = `${myLibrary[i].pages} pages`;
		// readBtn.textContent = myLibrary[i].read;
		removeBtn.textContent = 'Remove';
		titleDiv.classList.add('title');
		authorDiv.classList.add('author');

		pagesDiv.classList.add('pages');
		readBtn.classList.add('read');
		removeBtn.classList.add('remove');
		bookDiv.classList.add('book');

		if (myLibrary[i].readBook) {
			readBtn.textContent = 'Read';
			readBtn.style.backgroundColor = '#63da63';
		} else {
			readBtn.textContent = 'Not Read';
			readBtn.style.backgroundColor = '#e04f63';
		}

		readBtn.addEventListener('click', function () {
			myLibrary[i].readBook = !myLibrary[i].readBook;
			createBook();
		});

		removeBtn.addEventListener('click', () => {
			myLibrary.splice(i, 1);
			createBook();
		});

		bookDiv.appendChild(titleDiv);
		bookDiv.appendChild(authorDiv);
		bookDiv.appendChild(pagesDiv);
		bookDiv.appendChild(readBtn);
		bookDiv.appendChild(removeBtn);

		library.appendChild(bookDiv);
	}
}

form.addEventListener('submit', function (e) {
	addBookToLibrary();
	createBook();
	e.preventDefault();
	form.reset();
});
