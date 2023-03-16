rpsApi.openGames()
    .then(data => {
        data.forEach(game => {
            const gameList = `<li><button onclick="joinGame('${game.gameId}')">JOIN</button> ${game.playerOne.username}</li>`;
            document
                .querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameList)
        });
    });