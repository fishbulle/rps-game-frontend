let playerScore = 0;
let botScore = 0;
let moves = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
// const options = document.querySelectorAll(".img");
let movesLeft = document.getElementById("movesLeft");
let result = document.querySelector(".result");

options.forEach((option) => {
    option.addEventListener("click", function () { // lägger till en klickfunktion på sten, sax, påse bilderna
        const playerChoice = this.textContent;  // när spelaren klickar på sitt val hämtas det genom att textContent property läses, this hänvisar till input i HTML

        const botOptions = ["rock", "paper", "scissors"];
        const botChoice = botOptions[Math.floor(Math.random() * 3)];  // väljer slumpmässigt ut en av tre valmöjligheter

        document.getElementById("playerMove").textContent = `YOU PICKED ${playerChoice.toUpperCase()} `;
        document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${botChoice.toUpperCase()} </span>`;

        compareChoices(playerChoice, botChoice); // calling the game logic
        updateScore();
    });
});

function compareChoices(playerChoice, botChoice) {

    // draw check
    if (playerChoice === botChoice) {
        result.innerHTML = "DRAW!"
        //                 moves++;
    }

    // rock check
    if (playerChoice === "rock") {
        if (botChoice === "scissors") {
            result.innerHTML = "YOU WIN!"
            playerScore++;
            //                 moves++;
        } else {
            result.innerHTML = "BOT WINS!"
            botScore++;
            //                 moves++;
        }
    } 

    // paper check
    else if (playerChoice === "paper") {
        if (botChoice === "rock") {
            result.innerHTML = "YOU WIN!"
            playerScore++;
        } else {
            result.innerHTML = "BOT WINS!"
            botScore++;
        }
    } 
    
    // scissors check
    else {
        if (botChoice === "paper") {
            result.innerHTML = "YOU WIN!"
            playerScore++;
        } else {
            result.innerHTML = "BOT WINS!"
            botScore++;
        }
    }
}

// function to update the score
function updateScore() {
    document.getElementById("botScore").innerHTML = botScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}

// function winner() {
//     if (playerScore)
// }






// let [botScore, playerScore] = [0, 0];
// let moves = 0;
// let movesLeft = document.getElementById("movesLeft");
// let result = document.querySelector(".result");
// let choicesObj = {
//     'rock': {
//         'rock': 'draw',
//         'scissors': 'win',
//         'paper': 'lose'
//     },
//     'scissors': {
//         'rock': 'lose',
//         'scissors': 'draw',
//         'paper': 'win'
//     },
//     'paper': {
//         'rock': 'win',
//         'scissors': 'lose',
//         'paper': 'draw'
//     }
// }

// movesLeft.innerHTML = `MOVES LEFT: ${10}`;

//     function checker(input) {
//         let choices = ["rock", "paper", "scissors"];
//         let num = Math.floor(Math.random() * 3);
//         let botChoice = choices[num];

//         document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${choices[num].toUpperCase()} </span>`;
//         document.getElementById("playerMove").innerHTML = `YOU PICKED <span> ${input.toUpperCase()} </span>`;
//         movesLeft.innerHTML = `MOVES LEFT: ${9 - moves}`;


//         switch (choicesObj[input][botChoice]) {
//             case 'win':
//                 result.innerHTML = "YOU WIN!"
//                 playerScore++;
//                 moves++;
//                 break;
//             case 'lose':
//                 result.innerHTML = "YOU LOSE!"
//                 botScore++;
//                 moves++;
//                 break;
//             default:
//                 result.innerHTML = "DRAW!"
//                 moves++;
//                 break;
//         }

//         document.getElementById("botScore").innerHTML = botScore;
//         document.getElementById("playerScore").innerHTML = playerScore;

//         if (moves == 10) {
//             gameOver();
//         }
//     }

//     function gameOver() {

//         // movesLeft.style.display = 'none';

//         //TODO make so that you can't keep playing once game is over
//         //make images unclickable

//         if (playerScore > botScore && playerScore <= 6) {
//             result.innerHTML = "GAME OVER. PLAYER WON!"
//         } else if (botScore > playerScore && botScore <= 6) {
//             result.innerHTML = "GAME OVER. BOT WON!"
//         } else {
//             result.innerHTML = "GAME OVER. IT'S A DRAW!"
//         }

//     }
