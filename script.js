// Get html elements
let shelf = document.querySelector('.wrapper');
let bookPopup = document.querySelector('.book-popup');
let bookInspect = document.querySelector('.book-inspect');
let topShelf = document.querySelector('.top-shelf');
let bottomShelf = document.querySelector('.bottom-shelf');
let addButton = document.querySelector('#add');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup-close');
let authorInput = document.querySelector('#author');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');
let form = document.querySelector('.form');
let radioYes = document.querySelector('#yes');
let radioNo = document.querySelector('#no');
let removeButton = document.querySelector('.book-remove');
let debug = document.querySelector('.debug');
let authorInspect = document.querySelector('#authorInspect');
let titleInspect = document.querySelector('#titleInspect');
let pagesInspect = document.querySelector('#pagesInspect');
let readInspect = document.querySelector('#readInspect');
let readButton = document.querySelector('.read-button');


let library = [];
let author = '';
let title = '';
let pages = '';
let read = '';
let cardIndex = 0;
let index = 0;
let dataIndex = '';
let book;
let match;

// Book inspection popup
shelf.addEventListener('click', e => {
    // If card is clicked, open book inspection
    if(e.target.classList.contains('card') || e.target.classList.contains('cardText')){
        dataIndex = e.target.dataset.index;
        matchCardToObject();
        bookPopup.classList.add('book-active');
        inspectBook(match);
    }

    // If read button is clicked, toggle read
    else if(e.target.classList.contains('read-button')){
        matchCardToObject();
        toggleRead(match);
    }

    // If clicked on outside of inspection, close it
    else if(e.target.classList.contains('book-popup')){
        bookPopup.classList.remove('book-active')
    }

    // If X inside a book is clicked, remove that book
    else if (e.target.classList.contains('book-remove')){
        // Get clicked card's index
        dataIndex = e.target.parentElement.dataset.index;

        // Find the matching object
        matchCardToObject();

        // Remove the matched object from array
        let removedIndex = library.indexOf(match);
        library.splice(removedIndex,1);

        // Remove book from shelf
        e.target.parentElement.remove();
    }
})

// Add book to shelf with given details
form.addEventListener('submit', e => {
    e.preventDefault();

    // Continue if there is no empty field
    if(authorInput.value !== '' && titleInput.value !== '' && pagesInput.value !== '' && radioYes.checked !== false || radioNo.checked !== false){
        // Reset placeholders
        authorInput.placeholder = '';
        titleInput.placeholder = '';
        pagesInput.placeholder = '';
        // Store book details in variables
        author = authorInput.value;
        title = titleInput.value;
        pages = pagesInput.value;
        radioYes.checked ? read = true: read = false;

        // Close the form and add the book to the library
        popUp.classList.remove('popup-active');
        book = new Book(author,title,pages,read,index);
        createBook(book);
        addToLibrary(book);
        inspectBook(book);
        cardIndex++
        index++
    }
    else{
        authorInput.placeholder = 'Please fill all of the form';
        titleInput.placeholder = 'Please fill all of the form';
        pagesInput.placeholder = 'Please fill all of the form';
    }
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    radioYes.checked = false;
    radioNo.checked = false;
});


// Open submit form
addButton.addEventListener('click', () => {
    popUp.classList.add('popup-active');
});

// Close submit form
popUp.addEventListener('click', e => {
    if(e.target.tagName === 'DIV' || e.target.tagName === 'SPAN'){
        popUp.classList.remove('popup-active')
    }
})

function matchCardToObject() {
    match = library.find(book => book.index == dataIndex);
}

function addToLibrary(object) {
    library.push(object);
}

// Book constructor
function Book(a,b,c,d,e) {
    this.author = a;
    this.title = b;
    this.pages = c;
    this.read = d;
    this.index = e;
}

function toggleRead(object) {
    if(object.read !== true){
        object.read = true;
        readButton.classList.add('read-yes')
        readButton.textContent = 'Yes';
    }
    else{
        object.read = false;
        readButton.classList.remove('read-yes');
        readButton.textContent = 'No';
    }
}



// Create book visually
function createBook(book){
    // Create card
    const card = document.createElement('div');
    card.dataset.index = cardIndex;
    card.classList.add('card');
    // Create the title on card
    const cardText = document.createElement('p');
    cardText.classList.add('cardText');
    cardText.innerHTML = `${book.title}`;
    card.append(cardText);
    // Create the X on card
    const cardRemove = document.createElement('span');
    cardRemove.textContent = 'X';
    cardRemove.classList.add('book-remove');
    card.append(cardRemove);
    // Put cards to top shelf
    if(library.length <= 12){
        topShelf.append(card);
    }
    // Put cards to bottom shelf
    else if(library.length >= 12){
        bottomShelf.append(card);
    }
    book = new Book(`${book.author},${book.title},${book.pages}, ${book.read}`);
}

function inspectBook(book){
    authorInspect.textContent = `${book.author}`;
    titleInspect.textContent = `${book.title}`;
    pagesInspect.textContent = `${book.pages}`;
    if(book.read === true){
        readButton.classList.add('read-yes');
        readButton.textContent = 'Yes';
    }
    else{
        readButton.classList.remove('read-yes');
        readButton.textContent = 'No';
    }
}