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

function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);

    document.getElementById("botMove").innerHTML = `BOT PICKED <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("playerMove").innerHTML = `YOU PICKED <span> ${input.toUpperCase()} </span>`;

    let botChoice = choices[num];

    switch (choicesObj[input][botChoice]) {
        case 'win':
            result.innerHTML = "YOU WIN!"
            break;
        case 'lose':
            result.innerHTML = "YOU LOSE!"
            break;
        default:
            result.innerHTML = "DRAW!"
            break;
    }
}