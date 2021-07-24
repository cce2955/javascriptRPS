//Containers
const guiContainer = document.querySelector(".mainCalculator")
const outputContainer = document.querySelector(".outputBox")
const submitContainer = document.querySelector(".submitCalculator")
const buttonText = ["1", "2", "3", "+", "4", "5", "6",
    "-", "7", "8", "9", "*", "0", ".", "-", "/"
];
//Enumerators for calculator state
let State = {
        ADD: 0,
        SUB: 1,
        MUL: 2,
        DIV: 3

    }
    //Holds the curren
let currentState = State;
//This array will take the user input to 5 spaces;
let userArr = [];
//This array will take the previously entered numbers and store them
let operationArr = [];
//This variable lets the program know whether to accept any more decimals
let isDecimal = false;
//This boolean checks if the user has input the first number or not
let isFirst = false;

const outPut = document.createElement("textbox");
const submit = document.createElement("button");
submit.style.width = 300;
submit.style.height = 50;

createGrid = () => {

    submit.textContent = "Submit"

    outPut.textContent = "Enter a value with the buttons below"
    outputContainer.appendChild(outPut);

    for (let i = 0; i < 16; i++) {
        const div = document.createElement("button");
        div.id = i;
        div.textContent = buttonText[i];
        div.classList.add("square");
        guiContainer.appendChild(div);
    }
    submitContainer.appendChild(submit);

};

//Create Grid
createGrid();
for (let i = 0; i < document.querySelectorAll("button").length - 1; i++) {
    document.getElementById(i).addEventListener("click", click);
}

function click() {
    //console.log(event.target.innerText)
    //Check if click is a number, probablly an easier way to do this
    //but I do not care
    let numCheck = false;
    for (let i = 0; i < 9; i++) {
        if (event.target.innerText === i.toString()) {
            numCheck = true;
        }
    }
    //If user input snumber
    if (numCheck) {
        if (userArr.length <= 5) {
            //Add to array
            userArr.push(event.target.innerText)
                //Display as whole number
            outPut.textContent = userArr.join("");
        } else {
            //Limit amount of numbers user can enter
            outPut.textContent = userArr.join("") + "  Max numbers reached";
        }
        //If not a number, join the array developed above
    } else {
        if (operationArr.length === 0) {
            //If decimal has not been used, allow user to insert decimal
            if (event.target.innerText === "." && isDecimal === false) {
                userArr.push(".");
                outPut.textContent = userArr.join("");
                isDecimal = true;

            }
            //If decimal has been used, refuse additional decimal
            if (event.target.innerText === "." && isDecimal === true) {
                outPut.textContent = userArr.join("");
            }
            //If user has not entered anything, deny them to use operators (+,-,*,/)
            if (userArr.length === 0) {
                outPut.textContent = "Please enter a number before performing an operation"
            } else {
                //Otherwise go ahead
                operationArr.push(userArr.join(""));
            }
        } else {
            //Empty the user array
            userArr.length = 0;
            //Don't do anything if first time operation

            //Following the logic, user will be ready to
            //perform an operation
            switch (event.target.textContent) {
                case "+":
                    arrIterator(operationArr, " + ")
                    currentState = State.ADD;
                    break;
                case "-":
                    arrIterator(operationArr, " - ")
                    currentState = State.SUB;
                    break;
                case "*":
                    arrIterator(operationArr, " * ")
                    currentState = State.MUL;
                    break;
                case "/":
                    arrIterator(operationArr, " / ")
                    currentState = State.DIV;
                    break;
                default:
                    console.log("Default state reached");
            }
            console.log(currentState)
        }
    }

}

function arrIterator(array, operatorString) {
    for (let i = 0; i < array.length; i++) {
        if (i === array.length) {
            outPut.textContent = array[i];
        } else {
            outPut.textContent = array[i] + "" + operatorString;
        }

    }
}