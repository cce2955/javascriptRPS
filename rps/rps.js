//Query Selector
const player = document.querySelector("#playerSelection");
const computer = document.querySelector("#computerSelection");
const results = document.querySelector("#result");
const resultsContainer = document.querySelector("#results");
playerArr = []; //Array that holds player choices
computerArr = []; //Array that holds computer choices
let wins = 0;//Number of wins the player has achieved
let numGames = 0;

function reset(){
    playerArr.length = 0;
    computerArr.length = 0;
    wins = 0;
    numGames = 0;
}
function playerSelection(selection) {

    console.log("player selection: " + selection);
    //Array for choices
    arr = ["rock", "scissors", "paper"];
    //This doesn't make any sense but it works
    arr.forEach(element => {
        if (element === selection) {
            player.textContent = "Player has chosen: " + element.toString();


            if (numGames <= 4) {
                playerArr.push(element);
                playerComputerSelection(computerSelection(), selection);
                resultsContainer.appendChild(player);
                resultsContainer.appendChild(computer);
                resultsContainer.appendChild(results);
            } else {
                results.textContent = "You have reach the maximum number of games\n" +
                "you have won a total of: " + wins + " times";
                player.textContent = "Your last six plays were: " + playerArr.toString();
                computer.textContent = "The computer's last six plays were: " + computerArr.toString();
                
            }

            numGames++;

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
            wins++;
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
            wins++;
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
            wins++;
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
    //Choose a random num between 0 and 3, I forgot how to get 
    //whole numbers and didn't care enough to properly do it
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
    computerArr.push(confirm.toString())
    return confirm;
}