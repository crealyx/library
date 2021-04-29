let topShelf = document.querySelector('.top-shelf');
let addButton = document.querySelector('#add');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup-close');


let library = [];

// let author = 'Allah cCc';
// let title = 'Kuran-ı Kerim';
// let pages = '600';
// let read = 'Hatim edildi';

// Activate popup
addButton.addEventListener('click', () => {
    popUp.classList.add('popup-active');
})

popUp.addEventListener('click', ev => {
    if(ev.target.tagName === 'DIV' || ev.target.tagName === 'SPAN'){
        console.log(ev.target.tagName);
        popUp.classList.remove('popup-active')
    }
})

let book = new Book(`${book.author},${book.title},${book.pages}, ${book.read}`);
addToLibrary(book);
addToShelf(library);

console.log(library);









function addToLibrary(object) {
    library.push(object);
}

// Constructor
function Book(author,title,pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addToShelf(arr){
    arr.forEach((book) => {
        const card = document.createElement('div');
        const cardText = document.createElement('p');
        cardText.innerHTML = `${book.author}<br>
        ${book.title}<br>
        ${book.pages}<br>
        ${book.read}`;
        card.classList.add('card');
        cardText.classList.add('cardText');
        topShelf.append(card);
        card.append(cardText);
        book = new Book(`${book.author},${book.title},${book.pages}, ${book.read}`);
    })
}


