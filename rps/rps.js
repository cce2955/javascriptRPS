//Query Selector
const player = document.querySelector("#playerSelection");
const computer = document.querySelector("#computerSelection");
const results = document.querySelector("#result");
const resultsContainer = document.querySelector("#results");

function playerSelection(selection) {
    console.log("player selection: " + selection);
    
    arr = ["rock", "scissors", "paper"];
    //This doesn't make any sense but it works
    arr.forEach(element => {
        if(element === selection){
            player.textContent = "Player has chosen: " + element.toString();
            playerComputerSelection(computerSelection(), selection);
            resultsContainer.appendChild(player);  
            resultsContainer.appendChild(computer); 
            resultsContainer.appendChild(results);           
        }
    });
}

function playerComputerSelection(computerSelection, playerSelection) {

    console.log("Computer Selection: " + computerSelection);
    let option1 = computerSelection;
    let option2 = playerSelection;
    let options = ["rock", "scissors", "paper"];
    let gameOver = ["you win", "you lose", "tie"];
    //Could've done this better but too late I'm gonna slap the results contanier in here
    //in the future I'll future proof my code
    //Tie
    if (option1 === option2) {
        console.log(gameOver[2]);
        results.textContent = gameOver[2];
    }
    //If player chooses paper
    if (option2 === options[2]) {
        //if computer chooses rock
        if (option1 === options[0]) {
            console.log(gameOver[0]);
            results.textContent = gameOver[0];
        }
        //if computer chooses scissors
        if (option1 === options[1]) {
            console.log(gameOver[1]);
            results.textContent = gameOver[1];
        }
    }
    //If player chooses rock
    if (option2 === options[0]) {
        //if computer chooses scissors
        if (option1 === options[1]) {
            console.log(gameOver[0]);
            results.textContent = gameOver[0];
        }
        //if computer chooses paper
        if (option1 === options[2]) {
            console.log(gameOver[1]);
            results.textContent = gameOver[1];
        }
    }
    //If player chooses scissors
    if (option2 === options[1]) {
        //if computer chooses paper
        if (option1 === options[2]) {
            console.log(gameOver[0]);
            results.textContent = gameOver[0];
        }
        //if computer chooses rock
        if (option1 === options[0]) {
            console.log(gameOver[1]);
            results.textContent = gameOver[1];
        }
    }

}

function computerSelection() {
    
    let attack = ['rock', 'scissors', 'paper'];
    let ranNum = (Math.random() * 100) % 3;
    //Could've done a loop oh well too late
    let confirm = "";

    if (ranNum >= 1) {

        confirm = attack[0];
    }
    if (ranNum >= 2) {
        confirm = attack[1];
    }
    if (ranNum <= 1) {
        confirm = attack[2];
    }

    computer.textContent = "Computer has chosen: " + confirm.toString(); 
    return confirm;
}



