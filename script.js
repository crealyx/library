let topShelf = document.querySelector('.top-shelf');


let library = [];

// let author = 'Allah cCc';
// let title = 'Kuran-ı Kerim';
// let pages = '600';
// let read = 'Hatim edildi';


let book1 = new Book('Tolkien','Lord of The Rings',999,'read');
let book2 = new Book('Tolkien','Lord of The Rings',999,'read');



addToLibrary(book1);
addToLibrary(book2);
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
    })
}


