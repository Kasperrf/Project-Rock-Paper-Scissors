let computerOutcome

function computerChoice(){
    computerOutcome = Math.random()
    if (computerOutcome <= 0.3333){
        computerOutcome = "rock"
    }
    else if(computerOutcome >= 0.6666) {
        computerOutcome = "paper"
    }
    else{
        computerOutcome = "scissors"
    }
    return computerOutcome
}

let humanOutcome

function humanChoice(){
    humanOutcome = prompt("Choose between Rock Paper Scissors")
    humanOutcome = humanOutcome.toLowerCase()
    if (["rock", "paper", "scissors"].includes(humanOutcome)){
        return humanOutcome
    }
    else{
        alert("Invalid input")
        humanChoice()
    } 
}


let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. Its a draw!`)
    }
    else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win!`)
        humanScore ++
    }
    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win!`)
        humanScore ++
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win!`)
        humanScore ++
    }
    else{
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose!`)
        computerScore ++
    }
}
  
// const humanSelection = humanChoice();
// const computerSelection = computerChoice();
  
// playRound(humanSelection, computerSelection);

function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = humanChoice();
        const computerSelection = computerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Your score is: ${humanScore} computer score is ${computerScore}`)
}

playGame()