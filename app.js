// create an empty string for the player and computer choice to live in
let playerChoice
let computerChoice

// store counters for scores and round number, set them to 0
let roundCounter = 0
let playerScore = 0
let computerScore = 0

let visualPlayerScore = document.querySelector('.playerScore')
let visualComputerScore = document.querySelector('.computerScore');

// find the buttons on the page and assign them a variable
const choices = document.querySelectorAll(".choice");

// when a button is clicked, store the class of the individual button inside playerChoice
choices.forEach (choice => {
    choice.addEventListener('click', () => {
        playerChoice = (choice.className)
        playRound()
    }) 
});

// Array contains possible moves for computer
possibleMoves = ["choice Rock", "choice Paper", "choice Scissors"]

// Function that randomly decides move for computer
function getComputerChoice() {
    let randomMove = Math.floor(Math.random() * possibleMoves.length);
    computerChoice =  possibleMoves[randomMove];
    return computerChoice;
}

let resultEl = document.querySelector('.results')

function showResults(result) {
    let p = document.createElement('p');
    p.textContent = result
    resultEl.appendChild(p);
}

function displayResults() {
    if (playerScore > computerScore) {
        showResults("Player wins!")
    } else if (playerScore < computerScore) {
        showResults("Computer wins!")
    }
}

// Checks whether the game is over
function endGameCheck() {
    if (playerScore == 5 || computerScore == 5) {
        displayResults();
    }
}


function playRound() {
        console.log(playerChoice);
        getComputerChoice()
        console.log(computerChoice)

            //logic that decides the game's winner
            if (
                (computerChoice === "choice Rock" && playerChoice === "choice Rock") ||
                (computerChoice === "choice Paper" && playerChoice === "choice Paper") ||
                (computerChoice === "choice Scissors" && playerChoice === "choice Scissors")
            ) {
                console.log("Draw!");

            } else if (
                (computerChoice === "choice Rock" && playerChoice === "choice Scissors") ||
                (computerChoice === "choice Scissors" && playerChoice === "choice Paper") ||
                (computerChoice === "choice Paper" && playerChoice === "choice Rock")
            ) {
                console.log("Computer wins round!")
                computerScore++
                visualComputerScore.innerHTML = ("Computer: " + computerScore)
            } else {
                console.log("Player wins round!")
                playerScore++
                visualPlayerScore.innerHTML = ("Player: ") + playerScore
            }
            console.log("Player: " + playerScore)
            console.log("Computer: " + computerScore)

            endGameCheck()
        
    
}
