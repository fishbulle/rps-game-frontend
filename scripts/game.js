// WIP

let player1Score = 0;
let player2Score = 0;
let moves = 0;
let movesLeft = document.getElementById("movesLeft");
let result = document.querySelector(".result");

movesLeft.innerHTML = `MOVES LEFT: ${5}`;



function refreshGame() {
    setInterval(refreshGameInfo, 3000);
}

function refreshGameInfo() {
    rpsApi.gameInfo()
    .then(data => {
        // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'playerOne')
        // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'username')
        document.getElementById('player1').innerHTML = data.playerOne.username;
        document.getElementById('player2').innerHTML = data.playerTwo.username;

        // switch gamestatus
        // beroende på info från backend (win/lose/draw)
        // skriv ut infon 
        // case win:
        // case draw:
        // case lose:

        // rpsApi.makeMove(sign) ?? 
    })
}

refreshGame();