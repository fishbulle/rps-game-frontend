rpsApi.startGame()
    .then(data => // VAD GÖRA HÄR???,
        player1 = data.playerOne.username,
        player1 = document.getElementById('player1'),
        player1.innerHTML = data.player1
        );
        // detta är fel ^


// när spelaren klickar på 'new online game'
// skickas den till spelsidan och ett nytt spel startas startGame()
// ta in playerId (token), username och koppla ihop med gameId
// player 1 username skrivs ut i html