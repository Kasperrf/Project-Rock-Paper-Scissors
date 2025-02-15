// Declaring variables for storing score to each contestant
let humanScore = 0
let computerScore = 0

// Variable for storing random computer outcome
let computerOutcome

// Function for computer to select rock, paper or scissors
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

// Creating text area
const txtArea = document.querySelector(".txtArea")
const txtHeader = document.querySelector(".txtHeader")
const txtOutcome = document.createElement("p")
txtOutcome.classList.add("txtOutcome")

// Creating playarea
const playArea = document.querySelector(".playArea")

// Rock
const rockBtn = document.createElement("button")
rockBtn.textContent = "Rock 🪨"
rockBtn.classList.add("rockBtn")
rockBtn.addEventListener("click", 
    function(){
        pressChoice('Rock')
    }
)
// Paper
const paperBtn = document.createElement("button")
paperBtn.textContent = "Paper 📄"
paperBtn.classList.add("paperBtn")
paperBtn.addEventListener("click", 
    function(){
        pressChoice('Paper')
    }
)
// Scissors
const scissorsBtn = document.createElement("button")
scissorsBtn.textContent = "Scissors ✂️"
scissorsBtn.classList.add("scissorsBtn")


// Playbutton
const playBtn = document.querySelector(".playBtn")
playBtn.addEventListener("click", pressPlay)
scissorsBtn.addEventListener("click",
    function(){
        pressChoice('Scissors')
    }
)

// Nextbutton
const nextBtn = document.createElement("button")
nextBtn.textContent = "Next round"
nextBtn.classList.add("nextBtn")
nextBtn.addEventListener("click", pressNext)

// againBtn
const againBtn = document.createElement("button")
againBtn.textContent = "Play again"
againBtn.classList.add("againBtn")
againBtn.addEventListener("click", pressAgain)


// Scoreboard
const scorePlayer = document.querySelector(".scorePlayer")
const scoreComputer = document.querySelector(".scoreComputer")
const scorePlayerTxt = document.createElement("p")
const scoreComputerTxt = document.createElement("p")
let scorePlayerNr = document.createElement("p")
let scoreComputerNr = document.createElement("p")
scorePlayerTxt.textContent = "Player score: "
scoreComputerTxt.textContent = "Computer score: "
scorePlayerNr.textContent = humanScore
scoreComputerNr.textContent = computerScore


// Playbutton function
function pressPlay(){
    txtHeader.textContent = "Make your choice"
    txtArea.appendChild(txtOutcome)
    txtOutcome.textContent = "First to 5 wins"
    playArea.removeChild(playBtn)

    // Adding buttons to playArea div
    playArea.appendChild(rockBtn)
    playArea.appendChild(paperBtn)
    playArea.appendChild(scissorsBtn)

    // Adding score player
    scorePlayer.appendChild(scorePlayerTxt)
    scorePlayer.appendChild(scorePlayerNr)

    // Addding score computer
    scoreComputer.appendChild(scoreComputerTxt)
    scoreComputer.appendChild(scoreComputerNr)
}

// Function to trigger when player presses rock, paper or scissors
function pressChoice(input){
    playRound(input, computerChoice())
    if(humanScore == 5 | computerScore == 5){
        playArea.removeChild(rockBtn)
        playArea.removeChild(paperBtn)
        playArea.removeChild(scissorsBtn)
        playArea.appendChild(againBtn)

        if (humanScore == 5){
            txtOutcome.textContent = "Player score: 5, you win!"
        }
        else {
            txtOutcome.textContent = "Computer score: 5, you lose!"
        }

    }
    else{
        playArea.removeChild(rockBtn)
        playArea.removeChild(paperBtn)
        playArea.removeChild(scissorsBtn)
        playArea.appendChild(nextBtn)
    }

}

// Function when player presses next button
function pressNext(){
    txtHeader.textContent = "Make your choice"
    txtOutcome.textContent = "First to 5 wins"
    playArea.appendChild(rockBtn)
    playArea.appendChild(paperBtn)
    playArea.appendChild(scissorsBtn)
    playArea.removeChild(nextBtn)
}

// Function when player presses again button
function pressAgain(){
    humanScore = 0
    computerScore = 0
    scoreComputerNr.textContent = computerScore
    scorePlayerNr.textContent = humanScore
    txtHeader.textContent = "Make your choice"
    txtOutcome.textContent = "First to 5 wins"
    playArea.appendChild(rockBtn)
    playArea.appendChild(paperBtn)
    playArea.appendChild(scissorsBtn)
    playArea.removeChild(againBtn)
}


// Function to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        txtHeader.textContent = (`${humanChoice} = ${computerChoice}`)
        txtOutcome.textContent = `No points!`
    }
    else if(humanChoice == "Rock" && computerChoice == "Scissors") {
        txtHeader.textContent = (`${humanChoice} > ${computerChoice}`)
        txtOutcome.textContent = `+ point player!`
        humanScore ++
        scorePlayerNr.textContent = humanScore
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock") {
        txtHeader.textContent = (`${humanChoice} > ${computerChoice}`)
        txtOutcome.textContent = `+ point player!`
        humanScore ++
        scorePlayerNr.textContent = humanScore
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper") {
        txtHeader.textContent = (`${humanChoice} > ${computerChoice}`)
        txtOutcome.textContent = `+ point player!`
        humanScore ++
        scorePlayerNr.textContent = humanScore
    }
    else{
        txtHeader.textContent = (`${humanChoice} < ${computerChoice}`)
        txtOutcome.textContent = `+ point computer!`
        computerScore ++
        scoreComputerNr.textContent = computerScore
    }
}




