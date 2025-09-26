
let humanScore      = 0;
let computerScore   = 0;

function getRandomIntBetween(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    const choice = getRandomIntBetween(1,3);
    
    switch(choice) {
  case 1:
    return "ROCK";
  case 2:
    return "PAPER";
  case 3:
    return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock,Paper or Scissors?");
    const choice_toUpperCase = choice.toUpperCase();

    switch(choice_toUpperCase) {
  case "ROCK":
    return "ROCK";
  case "PAPER":
    return "PAPER";
  case "SCISSORS":
    return "SCISSORS";
  default:
    return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw! Nobody won!");
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        console.log(`${humanChoice} beats ${computerChoice}! You won!`);
        humanScore++;
    } else {
        console.log(`${computerChoice} beats ${humanChoice}! You lost!`);
        computerScore++;
    }

    console.log(`Current Score:
    Player: ${humanScore} Computer: ${computerScore}`);
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
