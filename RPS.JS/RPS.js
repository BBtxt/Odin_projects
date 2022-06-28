function game(){
    for(let round=1 ; round<5; round++ ) {
        playRound()
        console.log("Round: "+ round )
    }

    function playRound() {
        const playerSelection = humanPlay()
        const computerSelection = computerPlay()
        let roundResults;
        
        //logic to check the round 
        // I feel like there is a cleaner way to do this. 
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
        
        //Round out put need to figure out how to display on webpage
        console.log("Human selected: " + playerSelection)
        console.log("Computer selected: " + computerSelection)
        console.log(roundResults)
        }
}





//function that chooses a rock, paper, or scissors randomly 
function computerPlay(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let picker = Math.floor(Math.random()*(3))
    return arr[picker]
}
//function that interprets input and parses for uppercase and if it is a valid input
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


