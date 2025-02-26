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
    let userChoice = prompt("What do you choose? [rock-paper-scissors]")
    return userChoice;
}
// return the user choice
//
// create variable to store human score
let humanScore = 0;
// create variable to store computer score
let computerScore = 0;

// function that takes human and computer choices as arguments and plays round, increments round winner score and logs the winner
function playRound(computerChoice, userChoice){
// make user input case insensitive
    userChoice = userChoice.toLowerCase();

// uh.. make the game
    if(userChoice === computerChoice){
        console.log("It's a tie!")
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!")
        humanScore++;
    } else {
        console.log("Computer wins!")
        computerScore++;
    }

}

// full game
function playGame(){
// for loop that plays as long as i (round number) is below 5 and logs user and computer scores
    for(let i = 0; i < 5; i++){
        console.log(`Round ${i + 1}`);
        const computerSelection = getComputerChoice();
        const userSelection = getUserChoice();
        console.log(`You chose: ${userSelection}, Computer chose: ${computerSelection}`);
        playRound(computerSelection, userSelection);

        

        if (humanScore === 3 || computerScore === 3) {
            console.log("Game Over!");
            if (humanScore === 3) {
                console.log("You reached 3 points, so you win!");
            } else {
                console.log("Computer reached 3 points, so it wins!");
            } break;
        }
    }
    console.log(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (computerScore > humanScore){
        console.log("Sorry, you lost the game!");
    } else {
        console.log("Game's a tie!");
    }
}
// play game
playGame();