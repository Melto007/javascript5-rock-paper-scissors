const choice = document.querySelectorAll(".choice")
const userSelect = document.querySelector("#result-user-stat")
const computerSelect = document.querySelector("#result-comp-stat")
const userScoreVal = document.querySelector('#userScoreVal')
const compScoreVal = document.querySelector("#compScoreVal")
const finalResult = document.querySelector("#result-final-stat")

let userOption
let computerRandomChoice

function generateUserChoice(e) {
    userOption = e.target.alt
    if(userOption !== undefined) {
        userSelect.textContent =  `User: ${userOption}`
        computerChoices()
        getResult()
    }
}

choice.forEach(choice => choice.addEventListener('click', generateUserChoice))

function computerChoices() {
    const computerChoice = ["rock","paper","scissors"]
    computerRandomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    computerSelect.textContent = `Computer: ${computerRandomChoice}`
}

let userWin = 0
let computerWin = 0

function getResult() {
    let totalWin = userWin + computerWin

    if(totalWin === 10) {
        getWinner()
    }

    if(computerRandomChoice === 'rock' && userOption === 'paper') {
        userWin += 1
    }else if(computerRandomChoice === 'rock' && userOption === 'scissors') {
        computerWin += 1
    }else if(computerRandomChoice === 'paper' && userOption === 'scissors') {
        userWin += 1
    }else if(computerRandomChoice === 'paper' && userOption === 'rock') {
        computerWin += 1
    }else if(computerRandomChoice === 'scissors' && userOption === 'rock') {
        userWin += 1
    }else if(computerRandomChoice === 'scissors' && userOption === 'paper') {
        computerWin += 1
    }else {
        userWin += 1
        computerWin += 1
    }

    userScoreVal.textContent = userWin
    compScoreVal.textContent = computerWin
}

function getWinner() {
    if(userWin < computerWin) {
        finalResult.textContent = `Winner: Computer`
        choice.forEach(choice => choice.removeEventListener('click', generateChoice))
    }else if(userWin > computerWin) {
        finalResult.textContent = `Winner: User`
        choice.forEach(choice => choice.removeEventListener('click', generateChoice))
    }else {
        finalResult.textContent = `Winner: Draw`
        choice.forEach(choice => choice.removeEventListener('click', generateChoice))
    }
}

