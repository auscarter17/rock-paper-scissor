// Array contains possible moves

possibleMoves = ["Rock", "Paper", "Scissors"]

// Variable That keeps count of which round we're in, this will increase until the game is over.

let roundCounter = 0;

// Randomly decide move for computer

function getComputerChoice() {
    let randomMove = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomMove];
}

// Prompt Player for rock, paper, or scissors

function playRound() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors!")
    
    // Take user input and capitalize first letter, to lowercase other letters
    let playerChoiceFormatted = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    console.log(playerChoiceFormatted)

    // Check input for proper selection
    if (possibleMoves.indexOf(playerChoiceFormatted) !== -1) {
        console.log("Valid.")
    } else {
        return console.log("Invalid.");
    }
    




}



// if improper selection, reprompt user
// if proper selection, compare to computer choice

playRound();

// display round result



console.log(getComputerChoice())