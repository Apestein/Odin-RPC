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

    divResult.textContent = result;

    if (playerScore === 5) divEnd.textContent = `You won the match! ${playerScore}:${computerScore}`;
    else if (computerScore === 5) divEnd.textContent = `You lost the match! ${playerScore}:${computerScore}`;
    else if (computerScore === 5 && playerScore === 5) divEnd.textContent = `That match was a tie! ${playerScore}:${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((button) => button.disabled = true);
        const endGame = document.createElement('button');
        endGame.textContent = "Play Again";
        endGame.onclick = resetGame;
        body.appendChild(endGame);
    }
}

function resetGame() {
    buttons.forEach((button) => button.disabled = false);
    playerScore = 0;
    computerScore = 0;
    divResult.textContent = "";
    divEnd.textContent = "";
    this.remove();
}


let playerScore = 0;
let computerScore = 0;
const body = document.querySelector('body');
const divResult = document.querySelector('#result');
const divEnd = document.querySelector('#end');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));
