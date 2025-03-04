// create function that returns 3 choices at random
function getComputerChoice(){
// use math.random to return the 3 said choices
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// get user input to make their own choice out of those 3 choices
function getUserChoice(){
    let userChoice;
    while (true){
        userChoice = prompt("Enter your choice (rock, paper, or scissors):");

        if (userChoice === null || userChoice === undefined){
            alert("You cancelled the prompt, try again. You lose a point :)");
            break;
        }

        userChoice = userChoice.toLowerCase();
        if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            break;
        } else {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }
    return userChoice;
}
// return the user choice
//
// create variable to store human score
let humanScore = 0;
// create variable to store computer score
let computerScore = 0;

const rps_ui = document.querySelector("#rps-ui");
const btnRock = document.querySelector("#btn_rock");
const btnPaper = document.querySelector("#btn_paper");
const btnScissors = document.querySelector("#btn_scissors");

const resultDiv = document.createElement("div")
rps_ui.appendChild(resultDiv);

// function that takes human and computer choices as arguments and plays round, increments round winner score and logs the winner
function playRound(computerChoice, userChoice){

// uh.. make the game

    resultDiv.innerHTML = "";  
    const result = document.createElement("p")

    if(userChoice === computerChoice){
        resultDiv.innerHTML = "";  
        result.textContent = `You: ${userChoice} PC: ${computerChoice} | It's a tie! Scores: ${humanScore} - ${computerScore}`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.innerHTML = "";  
        humanScore++;
        result.textContent = `You: ${userChoice} PC: ${computerChoice} | You won! Scores: ${humanScore} - ${computerScore}`;
    } else {
        resultDiv.innerHTML = "";  
        computerScore++;
        result.textContent = `You: ${userChoice} PC: ${computerChoice} | You lost! Scores: ${humanScore} - ${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            resultDiv.innerHTML = "";
            result.textContent = `You reached 5 points, so you win!`;
            humanScore = 0;
            computerScore = 0;
        } else {
            resultDiv.innerHTML = "";
            result.textContent = `Computer reached 5 points, so it wins!`;
            humanScore = 0;
            computerScore = 0;
        } 
    }

    resultDiv.appendChild(result);
}

// full game
// function playGame(){
    
//     while (true) {
//         humanScore = 0;
//         computerScore = 0;

// // for loop that plays as long as i (round number) is below 5 and logs user and computer scores
//     // for(let i = 0; i < 5; i++){
//     //     console.log(`Round ${i + 1}`);
//     //     console.log(`You chose: ${userSelection}, Computer chose: ${computerSelection}`);
//     //     playRound(computerSelection, userSelection);

//     //     if (humanScore === 5 || computerScore === 5) {
//     //         console.log("Game Over!");
//     //         if (humanScore === 5) {
//     //             console.log("You reached 5 points, so you win!");
//     //         } else {
//     //             console.log("Computer reached 5 points, so it wins!");
//     //         } 
//     //     }
//     // }

//     console.log(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);
//         if (humanScore > computerScore) {
//             console.log("Congratulations, you won the game!");
//         } else if (computerScore > humanScore){
//             console.log("Sorry, you lost the game!");
//         } else {
//             console.log("Game's a tie!");
//     }
//         const playAgain = prompt("Wanna play again? [Y-N]")
//         if(playAgain.toLowerCase()!== "y") {
//             console.log("Thanks for playing!");
//             break;
//         }
//     }
// }
// play game

        btnRock.addEventListener("click", () => {
            let userChoice = "rock"
            let computerChoice = getComputerChoice();
            playRound(computerChoice, "rock");
        });
        btnPaper.addEventListener("click", () => {
            let userChoice = "paper"
            let computerChoice = getComputerChoice();
            playRound(computerChoice, "paper")
        });
        btnScissors.addEventListener("click", () => {
            let userChoice = "scissors"
            let computerChoice = getComputerChoice();
            playRound(computerChoice, "scissors")
        });

       