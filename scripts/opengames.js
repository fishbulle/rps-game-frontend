rpsApi.openGames()      // FUNKAR
    .then(games => {
        games.map(game => {
            const gameList = `<a href="game.html"><li>
            ${game.playerOne.username}: ${game.gameStatus}</li></a>`;
            document.querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameList.toUpperCase())
        })
    });

    // onClick joinGame(gameId)
    // take playerId and add player to game with username & name
