// FUNKAR IBLAND ???
// Uncaught (in promise) TypeError: data.map is not a function
// GET http://localhost:8080/games 500

rpsApi.openGames()
    .then(data => {
        data.map(game => {
            const gameList = `<a href="game.html"><li>
            ${game.playerOne.username}: ${game.gameStatus}</li></a>`;
            document.querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameList.toUpperCase())
        })
    });
