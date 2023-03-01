rpsApi.openGames()
    .then(data => {
        data.forEach(game => {
            const gameToList = `<li>${game.playerOne.username}: ${game.gameStatus}</li>`;
            document.querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameToList.toUpperCase())
        })
    });