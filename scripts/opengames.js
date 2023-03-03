// FUNKAR

rpsApi.openGames()
    .then(data => {
        data.map(game => {
            const gameList = `<a href="game.html"><li>
            ${game.playerOne.username}: ${game.gameStatus}</li></a>`;
            document.querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameList.toUpperCase())
        })
    });


// TODO
// skapa metod i spring boot som raderar spel när man går ut