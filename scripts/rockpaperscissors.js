const choice = Array("rock", "paper", "scissors");
let player = 0, computer = 0, times = 5;
let playerChoice = "", plaayerSelection = "", computerSelection = "";

function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection === computerSelection) {
        message = "Tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            message = `You lose! ${computerSelection} covers ${playerSelection}`;
            computer += 1;
        } else {
            message = `You win! ${playerSelection} smashes ${computerSelection}`;
            player += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            message = `You lose! ${computerSelection} cuts ${playerSelection}`;
            computer += 1;
        } else {
            message = `You win! ${playerSelection} covers ${computerSelection}`;
            player += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            message = `You lose...${computerSelection} smashes ${playerSelection}`;
            computer += 1;
        } else {
            message = `You win! ${playerSelection} cuts ${computerSelection}`;
            player += 1;
        }
    } else {
        message = "That's not a valid play.";
    }
    return message;
}


for (let i = 1; i <= times; i++) {
    playerChoice = prompt("Choose Rock, Paper, or Scissors", "");
    playerSelection = playerChoice.toLowerCase().trim();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

console.log(`Player wins ${player} rounds, computer wins ${computer} rounds`)