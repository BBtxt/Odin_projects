function playRound() {
const playerSelection = humanPlay()
const computerSelection = computerPlay()
let roundResults;

if (playerSelection === computerSelection) {
    roundResults = "It's a Draw"
} else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    roundResults = "Computer Wins"
}  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    roundResults = "Computer Wins"
}  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    roundResults = "Computer Wins"
}  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    roundResults = "Human Wins"
}  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    roundResults = "Human Wins"
}  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    roundResults = "Human Wins"
} 


console.log("Human selected: " + playerSelection)
console.log("Computer selected: " + computerSelection)
console.log(roundResults)
}
function computerPlay(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let picker = Math.floor(Math.random()*(3))
    return arr[picker]
}

function humanPlay(){
    let playerInput = prompt("Rock Paper or Scissors")
    let input = playerInput.toUpperCase()
    let result;
    if (input === "ROCK"){
        // console.log("ROCK is players pick")
        result = "ROCK"
    } else if (input === "PAPER") {
        // console.log("PAPER is players pick")
        result = "PAPER"
    } else if (input === "SCISSORS") {
        // console.log("SCISSORS is players pick")
        result = "SCISSORS"
    } else {
        result= 'Please choose: Rock, Paper, or Scissors!'
    }
    return result
}


