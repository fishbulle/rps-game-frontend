// Objekt med alla fetch-anrop till mitt API

const rpsApi = {
    setJWT: (token) => sessionStorage.setItem('JWT', token),
    getJWT: () => sessionStorage.getItem('JWT'),
    register: async (name, username, password) => {
        try {
            const res = await fetch(`http://localhost:8080/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'name': name, 'username': username, 'password': password })
            });
            const JWT = await res.json();
            return rpsApi.setJWT(JWT.token), rpsApi.setPlayerId(JWT.playerId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    authenticate: async (username, password) => {
        try {
            const res = await fetch(`http://localhost:8080/auth/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'username': username, 'password': password })
            });
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    setPlayerId: (playerId) => sessionStorage.setItem('playerId', playerId),
    getPlayerId: () => sessionStorage.getItem('playerId'),
    // fetchToken: async () => {
    //     try {
    //         const res = await fetch('http://localhost:8080/auth/token');
    //         const text = await res.json();
    //         return rpsApi.setPlayerId(text);
    //     } catch (error) {
    //         return console.log(`Something went wrong ${error}`);
    //     }
    // },

    // setUsername: (username) => sessionStorage.setItem('username', username),
    // getUsername: () => sessionStorage.getItem('username'),
    // fetchUsername: async (username) => {
    //     try {
    //         const res = await fetch('http://localhost:8080/user/name', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 token: rpsApi.getToken()
    //             },
    //             body: JSON.stringify({ 'username': username })
    //         });
    //         return await res.json();
    //     } catch (error) {
    //         return console.log(`Something went wrong ${error}`);
    //     }
    // },

    setGameId: (gameId) => sessionStorage.setItem('gameId', gameId),
    getGameId: () => sessionStorage.getItem('gameId'),
    removeGameId: () => sessionStorage.removeItem('gameId'),

    startGame: async () => {
        try {
            const response = await fetch('http://localhost:8080/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JWT}`,
                    playerId: rpsApi.getPlayerId(),
                },
            });
            const text = await response.json();
            return rpsApi.setGameId(text.gameId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    openGames: async () => {
        try {
            const res = await fetch('http://localhost:8080/games');
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    joinGame: async (gameId) => {
        try {
            const res = await fetch(`http://localhost:8080/games/join/${gameId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JWT}`,
                    playerId: rpsApi.getPlayerId(),
                }
            });
            const response = await res.json();
            return rpsApi.setGameId(response.gameId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    gameInfo: async () => {
        try {
            const res = await fetch(`http://localhost:8080/games/result`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${rpsApi.getJWT()}`,
                    gameId: rpsApi.getGameId(),
                    playerId: rpsApi.getPlayerId()
                }
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    makeMove: async (move) => {
        try {
            const res = await fetch(`http://localhost:8080/games/move/${move}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JWT}`,
                    playerId: rpsApi.getPlayerId()
                },
                body: JSON.stringify({ 'gameId': rpsApi.getGameId() })
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    deleteGame: async () => {
        try {
            const res = await fetch(`http://localhost:8080/games/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    gameId: rpsApi.getGameId()
                }
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    }
};

// om inte token finns sätts den direkt
// if (rpsApi.getToken() === null) {
//     rpsApi.fetchToken();
// }

// function keyHandler(event) {
//     // 13 är ENTER-tangenten
//     if (event.keyCode === 13) {
//         let username = document.getElementById('username').value;
//         if (username === null || username === "") {
//             username = "Anynomus player";
//             rpsApi.fetchUsername(username)
//                 .then(window.location.href = "navigation.html");
//         } else {
//             rpsApi.fetchUsername(username)
//                 .then(window.location.href = "navigation.html");
//         }
//     }
// }

function createGame() {
    if (rpsApi.getPlayerId() === null) {
        alert('You need to log in to play online!')
    } else {
        rpsApi.startGame()
            .then(() => location.assign('game.html'));
    }
}

function joinGame(gameId) {
    if (rpsApi.getPlayerId() === null) {
        alert('You need to log in to play online!')
    } else {
        rpsApi.joinGame(gameId)
            .then(() => location.assign('game.html'));
    }
}

function deleteGame() {
    rpsApi.deleteGame()
        .then(() => location.assign('navigation.html'))
}
