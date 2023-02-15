let [botScore, playerScore] = [0, 0];
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
    'paper' : {
        'rock': 'win',
        'scissors': 'lose',
        'paper': 'draw'
    }
}

movesLeft.innerHTML = `MOVES LEFT: ${10}`;

function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    let botChoice = choices[num];

    document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("playerMove").innerHTML = `YOU PICKED <span> ${input.toUpperCase()} </span>`;
    movesLeft.innerHTML = `MOVES LEFT: ${9-moves}`;
        

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

    document.getElementById("botScore").innerHTML = botScore;
    document.getElementById("playerScore").innerHTML = playerScore;

    if (moves == 10) {
        gameOver();
    }
}

function gameOver() {

    // movesLeft.style.display = 'none';

    //TODO make so that you can't keep playing once game is over
    //make images unclickable

    if (playerScore > botScore && playerScore <= 6) {
        result.innerHTML = "GAME OVER. PLAYER WON!"
    } else if (botScore > playerScore && botScore <= 6) {
        result.innerHTML = "GAME OVER. BOT WON!"
    } else {
        result.innerHTML = "GAME OVER. IT'S A DRAW!"
    }

}