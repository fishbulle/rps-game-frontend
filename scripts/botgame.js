let botScore = 0;
let playerScore = 0;
let moves = 0;
let movesLeft = document.getElementById("movesLeft");
let result = document.querySelector(".result");
let choicesObj = {
    'rock': {
        'rock': 'draw',
        'scissors': 'win',
        'paper': 'lose'
    },
    'scissors': {
        'rock': 'lose',
        'scissors': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissors': 'lose',
        'paper': 'draw'
    }
}

movesLeft.innerHTML = `MOVES LEFT: ${5}`;

function checker(input) {  // input = draget spelaren gör
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    let botChoice = choices[num];

    movesLeft.innerHTML = `MOVES LEFT: ${4 - moves}`;
    document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("playerMove").innerHTML = `YOU PICKED <span> ${input.toUpperCase()} </span>`;

    compareChoices([input], [botChoice]);
    updateScore();
    if (moves === 5) {
        gameOver();
    }
}

function compareChoices([input], [botChoice]) {

    switch (choicesObj[input][botChoice]) {
        case 'win':
            result.innerHTML = "YOU WIN!"
            playerScore++;
            moves++;
            break;
        case 'lose':
            result.innerHTML = "YOU LOSE!"
            botScore++;
            moves++;
            break;
        default:
            result.innerHTML = "DRAW!"
            moves++;
            break;
    }
}

function updateScore() {
    document.getElementById("botScore").innerHTML = botScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}

function gameOver() {

    if (playerScore > botScore) {
        result.innerHTML = "GAME OVER. PLAYER WON!"
    } else if (botScore > playerScore) {
        result.innerHTML = "GAME OVER. BOT WON!"
    } else {
        result.innerHTML = "GAME OVER. IT'S A DRAW!"
    }

    disableIcons();
}

function disableIcons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}