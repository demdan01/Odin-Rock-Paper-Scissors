# Rock Paper Scissors (Console Version)

## Project Description
This project is a simple **console-based version of the Rock Paper Scissors game**.  
The game is played entirely in the browser console, allowing the player to compete against the computer. 
This Project is part of the Web development Course The Odin Project.

The goal of this project is to **practice JavaScript from scratch**, including functions, variables, random values, user input, and game logic.  

[View live version](https://demdan01.github.io/Odin-Rock-Paper-Scissors/)

---

## Features
- **Player vs. Computer:** The player enters their choice, and the computer picks randomly.  
- **Case-insensitive input:** The player can enter "rock", "ROCK", or "RoCk" – all are recognized correctly.  
- **Round system:** The game is played over 5 rounds.  
- **Score tracking:** Both the player's and computer's scores are updated after each round.  
- **Winner announcement:** The overall winner is displayed in the console after 5 rounds.  

---

## Project Structure
- `index.html` – blank HTML file with a script tag linking to `main.js`.  
- `main.js` – contains the game logic, including:
  - `getComputerChoice()` – randomly returns "rock", "paper", or "scissors".  
  - `getHumanChoice()` – reads the player's choice using `prompt()`.  
  - `playRound(humanChoice, computerChoice)` – determines the winner of a round, updates the scores, and logs the result.  
  - `playGame()` – plays 5 rounds by calling `playRound()` and announces the overall winner at the end.  
- `FLOWCHART.md` – contains the full flowchart of the game logic.  

> **Flowchart:** See [FLOWCHART.md](FLOWCHART.md) for a visual representation of the game flow.  

---

## Problem-Solving Approach
For each step of this project, the following approach was used:
1. **Plan or write pseudocode** – define the logic before coding.  
2. **Write the code** – implement functions, variables, and game flow.  
3. **Test the code** – ensure each function works as expected.  

---

## Installation and Usage
1. Clone the repository to your local machine.  
2. Open `index.html` in a web browser.  
3. Open the browser console (F12 in most browsers) and start the game.  
4. Follow the console instructions to enter your choice and see the results.  

---

## Notes
- It is assumed that the player enters valid inputs.
- This project provides a foundation for future projects with GUI and advanced game features.
