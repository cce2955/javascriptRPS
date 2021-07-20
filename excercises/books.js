let bookArr = [];

function book(name, author) {
    this.name = name;
    this.author = author;
}

export function assignBook(name, author) {
    if (name === '' || author === '') {
        return false;
    } else {
        bookArr.push(new book(name, author));
        console.log(bookArr)
        return true;
    }

}