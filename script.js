function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let catString = playerSelection.toLowerCase() + computerSelection.toLowerCase();
    console.log(catString);
    if (catString.includes("rock") && catString.includes("paper")) {
        if (catString.indexOf("rock") === 0) {
            return "You lose, paper beats rock!";
        } else return "You win, paper beats rock!";
    } else if (catString.includes("rock") && catString.includes("scissors")) {
        if (catString.indexOf("rock") === 0) {
            return "You win, rock beats scissors!";
        } else return "You lose, rock beats scissors!";
    } else if (catString.includes("paper") && catString.includes("scissors")) {
        if (catString.indexOf("paper") === 0) {
            return "You lose, scissors beat paper!";   
        } else return "You win, scissors beat paper!";   
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "Tie!";
    } else return "Error!";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper, or scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) playerScore++;
        else if (result.includes("Tie")) {
            playerScore++; computerScore++;
        } else computerScore++;
    }
    if (playerScore > computerScore) console.log(`You won the match! ${playerScore}:${computerScore}`);
    else if (playerScore < computerScore) console.log(`You lost the match! ${playerScore}:${computerScore}`);
    else console.log(`That match was a tie! ${playerScore}:${computerScore}`);
}