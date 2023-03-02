let player1Score = 0;
let player2Score = 0;
let moves = 0;
let movesLeft = document.getElementById("movesLeft");
let result = document.querySelector(".result");

movesLeft.innerHTML = `MOVES LEFT: ${5}`;

// refresh gameInfo function

function refreshGame() {
    setInterval(refreshGameInfo, 3000);
}

function refreshGameInfo() {
    rpsApi.gameInfo()
    .then(data => {
        console.log(data);
        document.getElementById('player2').innerHTML = data.playerTwo;
        // switch gamestatus
        // beroende på info från backend (win/lose/draw)
        // skriv ut infon 
        // case win:
        // case draw:
        // case lose:

        // rpsApi.makeMove(sign) ?? 
    })
}