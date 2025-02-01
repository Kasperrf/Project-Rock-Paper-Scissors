let computerOutcome

function computerChoice(){
    computerOutcome = Math.random()
    if (computerOutcome <= 0.3333){
        computerOutcome = "Rock"
    }
    else if(computerOutcome >= 0.6666) {
        computerOutcome = "Paper"
    }
    else{
        computerOutcome = "Scissors"
    }
    return computerOutcome
}

let humanOutcome

function humanChoice(){
    humanOutcome = prompt("Choose between Rock Paper Scissor")
    humanOutcome = humanOutcome.toLowerCase()
    if (["rock", "paper", "scissor"].includes(humanOutcome)){
        return humanOutcome
    }
    else{
        alert("Invalid input")
        humanChoice()
    } 
}


let humanScore = 0
let computerScore = 0


function playRound(computerChoice, humanChoice){
    let comp = computerChoice()
    let hum = humanChoice()
    return comp, hum
}
