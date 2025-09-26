
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


