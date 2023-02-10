function game() {
    let playerScore = 0;
    let botScore = 0;
    let move = 0;

function playGame() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

    let playerOptions = [rock, paper, scissors];
    let botOptions = ["rock", "paper", "scissors"];

    let choiceNumber = Math.floor(Math.random() * 3);
    let botChoice = botOptions[choiceNumber];

    playerOptions.forEach(option => {
        option.addEventListener("click", function() {
    winner(this.inne, botChoice)
        })
})

function winner(player, bot) {
    let result = document.querySelector(".result");
    player = player.toLowercase();
    bot = bot.toLowercase();

    if (player == bot) {
        result.textContent = "Tie";
    } else if (player == "rock") {
        if (bot == "paper") {
            result.textContent = "Bot won!"
        } else {
        result.textContent("Player won!")
    }
    } else if (player == "scissors") {
        if(bot == "rock") {
        result.textContent = "Bot won!"
    } else {
        result.textContent = "Player won!";
    }
} else if(player == "paper") {
    if(bot == "scissors") {
        result.textContent = "Bot won!";
    } else {
    }
}
}

playGame();

}
result = document.querySelector(".result");
    result.innerText = result;
}
game();

