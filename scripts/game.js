// WIP

let player1Score = 0;
let player2Score = 0;
let moves = 0;
let movesLeft = document.getElementById("movesLeft");
let result = document.querySelector(".result");

movesLeft.innerHTML = `MOVES LEFT: ${5}`;

function checker(sign) {
    rpsApi.makeMove(sign)
    .then(sign => console.log(sign)); // 400 bad request
}


function refreshGame() {
    setInterval(refreshGameInfo, 3000);
}

function refreshGameInfo() {
    rpsApi.gameInfo(rpsApi.getGameId())
        .then(data => console.log(data)); // säger att gameId är null .. men spelet har id i databsen
}

function exitGame() {
    rpsApi.removeGameId();
}

refreshGame();