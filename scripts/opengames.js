
rpsApi.openGames()
    .then(games => {
        games.forEach(game => {
            const gameToList = `<a href="game.html" onclick="joinGame(gameId)"><li>${game.playerOne.username}: ${game.gameStatus}</li></a>`;
            document.querySelector('#opengames')
                .insertAdjacentHTML('beforeend', gameToList.toUpperCase())
        })
    })
    .then(
        // onClick joinGame(gameId)
    )




    // async function listOpenGames() {
//     let games = await rpsApi.openGames();
//     let html = '';
//     games.forEach(game => {
//         let htmlSegment = `<a href="game.html">
//                        <li>${game.playerOne.username}: ${game.gameStatus}</li></a>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container3');
//     container.innerHTML = html;
// }

// listOpenGames();
