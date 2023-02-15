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

movesLeft.innerHTML = `MOVES LEFT: ${10}`;

function checker(input) {  // input = draget spelaren gör
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    let botChoice = choices[num];

    document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("playerMove").innerHTML = `YOU PICKED <span> ${input.toUpperCase()} </span>`;
    movesLeft.innerHTML = `MOVES LEFT: ${9 - moves}`;

    compareChoices([input], [botChoice]);
    updateScore();

    if (moves === 10) {
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

    if (playerScore > botScore && playerScore <= 6) {
        result.innerHTML = "GAME OVER. PLAYER WON!"
    } else if (botScore > playerScore && botScore <= 6) {
        result.innerHTML = "GAME OVER. BOT WON!"
    } else {
        result.innerHTML = "GAME OVER. IT'S A DRAW!"
    }

    playerScore = 0;
    botScore = 0;
    moves = 0;
}
