import {
    parseData,
    add,
    mul,
    sub,
    div,
    storeValue,
    arr
} from "./calculator.js";

const container = document.querySelector("#contentContainer");
const content = document.createElement("div")

container.appendChild(content);

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
        //This will be a huge problem later but this is a weird bug
        //The init only gives a psychological bandaid
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