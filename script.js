let library = [];



let book1 = new Book();
let book2 = new Book();



addToLibrary(book1);
addToLibrary(book2);

console.log(library);



function addToLibrary(object) {
    library.push(object);
}

// Constructor
function Book() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


