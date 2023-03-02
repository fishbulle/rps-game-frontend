function newOnlineGame() {
    rpsApi.startGame()
        .then(data => {
            console.log(data);
            document.getElementById('player1').innerHTML = data.playerOne;
        });
}