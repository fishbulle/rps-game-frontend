let result = document.querySelector('.result');

refreshGame();

// kollar om det bara är en spelare ansluten
// och om det är det så går det inte att trycka på ikonerna
function onlyOnePlayer() {
    rpsApi.gameInfo()
        .then(data => {
            if (data.playerTwo === null) {
                disableIcons();
            } else {
                enableIcons();
            }
        })
}

function showPlayerNames() {
    rpsApi.gameInfo()
        .then(data => {
            document.querySelector('#player1').innerHTML = data.playerOne.username;
            if (data.playerTwo === null) {
                document.querySelector('#player2').innerHTML = 'Waiting for player to connect...'
            } else if (data.playerTwo !== null) {
                document.querySelector('#player2').innerHTML = data.playerTwo.username;
            }
        })
}

// checker är en onclick som tar in det som 
// spelaren trycker på dvs rock, paper eller scissors
// och skickar det till POST metoden makeMove i mitt fetch-objekt
function checker(move) {
    rpsApi.makeMove(move);
}

function playerMove() {
    rpsApi.gameInfo()
        .then(data => {
            if (data.playerOneMove !== null && data.playerTwoMove !== null) {
                document.getElementById("player1Move").innerHTML =
                    `${data.playerOne.username} PICKED <span> ${data.playerOneMove} </span>`;
                document.getElementById("player2Move").innerHTML =
                    `${data.playerTwo.username} PICKED <span> ${data.playerTwoMove} </span>`;
            }
        })
}

function updateScore() {
    rpsApi.gameInfo()
        .then(data => {
            if (data.playerTwo !== null) {
                if (rpsApi.getToken() === data.playerOne.playerId) {
                    if (data.result === 'WIN') {
                        result.innerHTML = `${data.playerOne.username} WINS!`
                        disableIcons();
                    }

                    if (data.result === 'LOSE') {
                        result.innerHTML = `${data.playerTwo.username} WINS!`
                        disableIcons();
                    }

                } if (rpsApi.getToken() === data.playerTwo.playerId) {
                    if (data.result === 'WIN') {
                        result.innerHTML = `${data.playerTwo.username} WINS!`
                        disableIcons();
                    }

                    if (data.result === 'LOSE') {
                        result.innerHTML = `${data.playerOne.username} WINS!`
                        disableIcons();
                    }

                } if (data.result === 'DRAW') {
                    result.innerHTML = `IT'S A DRAW!`
                    disableIcons();
                }
            }
        })
}

function refreshGameInfo() {
    rpsApi.gameInfo()
        .then(data => console.log(data));
    onlyOnePlayer();
    showPlayerNames();
    playerMove();
    updateScore();
}

function refreshGame() {
    setInterval(refreshGameInfo, 1000);
}

function enableIcons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function disableIcons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}