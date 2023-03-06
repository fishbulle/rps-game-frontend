// WIP

function joinOnlineGame() {
    rpsApi.joinGame(rpsApi.getGameId())
        .then(data => console.log(data));

}