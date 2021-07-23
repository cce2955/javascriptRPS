//Containers
const guiContainer = document.querySelector(".mainCalculator")
const outputContainer = document.querySelector(".outputBox")
const submitContainer = document.querySelector(".submitCalculator")
const buttonText = ["1", "2", "3", "+", "4", "5", "6",

    "-", "7", "8", "9", "*", "0", ".", "-", "/"
];
//Enumerators for calculator state
let State = {
        ADD: 1,
        SUB: 2,
        MUL: 3,
        DIV: 4

    }
    //This array will take the user input to 5 spaces;
let userArr = [];
//This array will take the previously entered numbers and store them
let operationArr = [];
//This variable lets the program know whether to accept any more decimals
let decimal = false;
const outPut = document.createElement("textbox");
const submit = document.createElement("button");
createGrid = () => {

    submit.textContent = "Submit"

    outPut.textContent = "Enter a value with the buttons below"
    outputContainer.appendChild(outPut);
    submitContainer.appendChild(submit);
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("button");
        div.id = i;
        div.textContent = buttonText[i];
        div.classList.add("square");
        guiContainer.appendChild(div);
    }

};
//Create Grid
createGrid();
for (let i = 0; i < document.querySelectorAll("button").length - 1; i++) {
    document.getElementById(i).addEventListener("click", click);
    console.log(document.getElementById(i))
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
            if (event.target.innerText === "." && decimal === false) {
                userArr.push(".");
                outPut.textContent = userArr.join("");
                decimal = true;

            }
            if (event.target.innerText === "." && decimal === true) {
                outPut.textContent = userArr.join("");
            }
            if (userArr.length === 0) {
                outPut.textContent = "Please enter a number before performing an operation"
            } else {
                operationArr.push(userArr.join(""));
            }
            console.log(operationArr.length)

        } else {
            //Empty the user array
            userArr.length = 0;
            //Don't do anything if first time operation
            if (operationArr.length > 0) {
                //Following the logic, user will be ready to
                //perform an operation
                console.log(event.target.innerText)
                switch (event.target.innerText) {
                    case "+":
                        State.ADD;
                    case "-":
                        State.SUB;
                    case "*":
                        State.MUL;
                    case "/":
                        State.DIV;
                    default:
                        console.log("Default state reached");
                }

            } else {

            }
        }
    }

}