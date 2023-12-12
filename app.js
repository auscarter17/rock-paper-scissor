possibleMoves = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let randomMove = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomMove];
}
// Prompt Player for rock, paper, or scissors
// Take user input and capitalize first letter, to lowercase other letters
// Check input for proper selection
// if improper selection, reprompt user
// if proper selection, compare to computer choice

// display round result



console.log(getComputerChoice())