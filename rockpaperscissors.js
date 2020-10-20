const choice = Array("rock", "paper", "scissors");

function computerPlay (){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    let message = ""
    if (playerSelection === computerSelection) {
        message = "Tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            message = `You lose! ${computerSelection} covers ${playerSelection}`
        } else {
            message = `You win! ${playerSelection} smashes ${computerSelection}`
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            message = `You lose! ${computerSelection} cuts ${playerSelection}`
        } else {
            message = `You win! ${playerSelection} covers ${computerSelection}`
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            message = `You lose...${computerSelection} smashes ${playerSelection}`
        } else {
            message = `You win! ${playerSelection} cuts ${computerSelection}`
        }    
    } else {
        message = "That's not a valid play."
    }
    return message
}


let playerChoice = prompt('Choose Rock, Paper, or Scissors', '');
const playerSelection = playerChoice.toLowerCase().trim();
const computerSelection = computerPlay();

playRound(playerSelection,computerSelection)