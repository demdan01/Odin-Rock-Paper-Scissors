
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

