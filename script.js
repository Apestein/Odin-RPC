function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}

function playRound() {
    let result = "";
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    let catString = playerSelection + computerSelection;
    console.log(catString);
    if (catString.includes("rock") && catString.includes("paper")) {
        if (catString.indexOf("rock") === 0) {
            result = "You lose, paper beats rock!";
        } else result = "You win, paper beats rock!";
    } else if (catString.includes("rock") && catString.includes("scissors")) {
        if (catString.indexOf("rock") === 0) {
            result = "You win, rock beats scissors!";
        } else result = "You lose, rock beats scissors!";
    } else if (catString.includes("paper") && catString.includes("scissors")) {
        if (catString.indexOf("paper") === 0) {
            result = "You lose, scissors beat paper!";   
        } else result = "You win, scissors beat paper!";   
    } else if (playerSelection.toLowerCase() === computerSelection) {
        result = "Tie!";
    } else result = "Error!";

    if (result.includes("win")) playerScore++;
    else if (result.includes("Tie")) {
        playerScore++; computerScore++;
    } else if (result.includes("lose")) computerScore++;

    const div = document.querySelector('div');
    div.textContent = result;

    const divEnd = document.querySelector('#end');
    if (playerScore === 5) divEnd.textContent = `You won the match! ${playerScore}:${computerScore}`;
    else if (computerScore === 5) divEnd.textContent = `You lost the match! ${playerScore}:${computerScore}`;
    else if (computerScore === 5 && playerScore === 5) divEnd.textContent = `That match was a tie! ${playerScore}:${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));
