function computerPlay(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let picker = Math.floor(Math.random()*(3))
    return arr[picker]
}

function humanPlay(){
    let playerInput = prompt("Rock Paper or Scissors")
    let input = playerInput.toUpperCase()
    if (input === "ROCK"){
        console.log("ROCK is players pick")
    } else if (input === "PAPER") {
        console.log("PAPER is players pick")
    } else if (input === "SCISSORS") {
        console.log("SCISSORS is players pick")
    } else {
        console.log('Please choose: Rock, Paper, or Scissors!')
    }
}

