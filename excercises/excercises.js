import { assignBook } from "./books.js";
import {
    parseData,
    add,
    mul,
    sub,
    div,
    storeValue,
    arr
} from "./calculator.js";
import {
    fibCalc
} from "./fibonacci.js";
import {
    testPalidrome
} from "./palindrome.js";

//Containers
const container = document.querySelector("#contentContainer");
const palindromeContainer = document.querySelector("#palindromeContainer");
const fibonacciContainer = document.querySelector("#fibonacciContainer")
const bookContainer = document.querySelector("#bookContainer");
//Content
const content = document.createElement("div");
const palindromeContent = document.createElement("div");
const fibonacciContent = document.createElement("div");
const bookContent = document.createElement("div");
//further div for books
const bookErrorDiv = document.createElement("div");
const bookMissingAuthor = document.createElement("p");
const bookMissingName = document.createElement("p");
//Append
container.appendChild(content);
palindromeContainer.appendChild(palindromeContent);
fibonacciContainer.appendChild(fibonacciContent);
bookContainer.appendChild(bookContent);
bookContainer.appendChild(bookErrorDiv);
bookErrorDiv.appendChild(bookMissingName);
bookErrorDiv.appendChild(bookMissingAuthor);

/*

calculator
palindromes
fibonacci
getTheTitles
findTheOldest

*/

//Calculator logic (requires calculator.js)
document.getElementById('submitCalcData').addEventListener('click', showInput, true);
document.getElementById('add').addEventListener('click', showInput, true);
document.getElementById('mul').addEventListener('click', showInput, true);
document.getElementById('sub').addEventListener('click', showInput, true);
document.getElementById('div').addEventListener('click', showInput, true);

export function showInput() {
    const input = document.getElementById("userData").value;

    if (parseData(input)) {
        content.textContent = " ";

        if (arr.length === 0) {
            content.textContent = "First Value stored: " + input;
            storeValue(input);
            return true;
        } else {
            if (event.srcElement.id === "add") {
                content.textContent = "Number 1: " + input + " + Number 2: " + arr[0] + " = " + add(input);
                storeValue(input);
            }
            if (event.srcElement.id === "sub") {
                content.textContent = "Number 1: " + arr[0] + " - Number 2: " + input + " = " + sub(input);
                storeValue(input);
            }
            if (event.srcElement.id === "mul") {
                content.textContent = "Number 1: " + arr[0] + " * Number 2: " + input + " = " + mul(input);
                storeValue(input);
            }
            if (event.srcElement.id === "div") {
                content.textContent = "Number 1: " + arr[0] + " Number 2: " + input + " = " + div(input);
                storeValue(input);
            }

            return false;
        }

    } else {
        content.textContent = "Not a valid number, please try again";

    }

}

//Palindromes
document.getElementById('palindromeSubmit').addEventListener('click', checkPalidrome, true);

function checkPalidrome() {
    const input = document.getElementById("palindrome").value;

    if (testPalidrome(input)) {
        palindromeContent.textContent = "This is a palindrome";
    } else {
        palindromeContent.textContent = "This is not a palindrome"
    }
}

//Fibonacci
document.getElementById('fibSubmit').addEventListener('click', showFib, true);

function showFib() {
    const generator = document.getElementById("fibGenInput").value;
    const place = document.getElementById("fibPlaceInput").value;
    if (!isNaN(generator) && !isNaN(place)) {
        if (place > 100 || place < 0) {
            fibonacciContent.textContent = "Sorry, that is not a valid value, please try to be between 0 and 100"
        } else {
            fibonacciContent.textContent = "The value of Fibonacci Sequence starting at: " + generator + " at place: " + place + " is: " + fibCalc(generator, place);
        }
    } else {
        fibonacciContent.textContent = "Sorry, that is not a number, please try again"
    }

}

//books
document.getElementById('bookSubmit').addEventListener('click', storeBook, true);

function storeBook() {
    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("bookAuthor").value;
    if (assignBook(bookName, author)) {
        bookContent.textContent = "Book added to database"
        bookMissingName.textContent = "";
        bookMissingAuthor.textContent = "";
    } else {
        if (bookName === "") {
            bookContent.textContent = "";
            bookMissingName.textContent = "Book is missing title";
        }
        if (author === "") {
            bookContent.textContent = "";
            bookMissingAuthor.textContent = "Book is missing Author"
        }
    }
}