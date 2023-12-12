// Array contains possible moves

possibleMoves = ["Rock", "Paper", "Scissors"]

// Variable That keeps count of which round we're in, this will increase until the game is over.

let roundCounter = 0;

// keep track of scores

let playerScore = 0;
let computerScore = 0;

// Randomly decide move for computer

let computerChoice

function getComputerChoice() {
    let randomMove = Math.floor(Math.random() * possibleMoves.length);
    computerChoice =  possibleMoves[randomMove];
    return computerChoice;
}

// Prompt Player for rock, paper, or scissors

function playRound() {
    getComputerChoice()
    console.log(computerChoice)

    let playerChoice = prompt("Please enter Rock, Paper, or Scissors!")
    
    // Take user input and capitalize first letter, to lowercase other letters
    let playerChoiceFormatted = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    console.log(playerChoiceFormatted)

    // Check input for proper selection
    if (possibleMoves.indexOf(playerChoiceFormatted) !== -1) {
        if (
            (computerChoice === "Rock" && playerChoiceFormatted === "Rock") ||
            (computerChoice === "Paper" && playerChoiceFormatted === "Paper") ||
            (computerChoice === "Scissors" && playerChoiceFormatted === "Scissors")
        ) {
            console.log("Draw!")
        } else if (
            (computerChoice === "Rock" && playerChoiceFormatted === "Scissors") ||
            (computerChoice === "Scissors" && playerChoiceFormatted === "Paper") ||
            (computerChoice === "Paper" && playerChoiceFormatted === "Rock")
        ) {
            console.log("Computer Wins!")
        } else {
            console.log("Player wins!")
        }
    } else {
        playRound()
    }
    




}



// if improper selection, reprompt user
// if proper selection, compare to computer choice

playRound();

// display round result



