// Get html elements
let shelf = document.querySelector('.wrapper');
let bookPopup = document.querySelector('.book-popup');
let topShelf = document.querySelector('.top-shelf');
let addButton = document.querySelector('#add');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup-close');
let authorInput = document.querySelector('#author');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');
let form = document.querySelector('.form');
let radioYes = document.querySelector('#yes');
let radioNo = document.querySelector('#no');



let library = [];
let author = '';
let title = '';
let pages = '';
let read = '';
let book;



shelf.addEventListener('click', e => {
    if(e.target.classList.contains('card') || e.target.classList.contains('cardText')){
        console.log(e.target);
        bookPopup.classList.add('book-active');
    }
    else if(e.target.classList.contains('book-popup')){
        bookPopup.classList.remove('book-active')
    }
})

// Add custom book to shelf
form.addEventListener('submit', e => {
    e.preventDefault();
    if(authorInput.value !== '' || titleInput.value !== '' || pagesInput.value !== '' || radioYes.checked !== false || radioNo.checked !== false){
        author = authorInput.value;
        title = titleInput.value;
        pages = pagesInput.value;
        popUp.classList.remove('popup-active');
        book = new Book(author,title,pages,read);
        addToLibrary(book);
    }
    console.log(library);
});


// Activate popup
addButton.addEventListener('click', () => {
    popUp.classList.add('popup-active');
});

// Remove popup
popUp.addEventListener('click', e => {
    if(e.target.tagName === 'DIV' || e.target.tagName === 'SPAN'){
        popUp.classList.remove('popup-active')
    }
})

// Add book object to library array
function addToLibrary(object) {
    library.push(object);
    createBook(book);
}
// Book object constructor
function Book(a,b,c,d) {
    this.author = a;
    this.title = b;
    this.pages = c;
    this.read = d;
}

// Add book to shelf
// function addToShelf(arr){
//     arr.forEach((book) => {
//         createBook(book);
//     })
// }




// Create book visually
function createBook(book){
    const card = document.createElement('div');
    const cardText = document.createElement('p');
    const cardRemove = document.createElement('span');
    cardRemove.textContent = 'X';
    cardRemove.classList.add('book-remove');
    card.append(cardRemove);
    cardText.innerHTML = `${book.author}<br>
    ${book.title}<br>
    ${book.pages}<br>
    ${book.read}`;
    card.classList.add('card');
    cardText.classList.add('cardText');
    topShelf.append(card);
    card.append(cardText);
    book = new Book(`${book.author},${book.title},${book.pages}, ${book.read}`);
}