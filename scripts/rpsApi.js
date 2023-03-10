// Objekt med alla fetch-anrop till mitt API

const rpsApi = {
    setToken: (token) => sessionStorage.setItem('token', token),
    getToken: () => sessionStorage.getItem('token'),
    fetchToken: async () => {
        try {
            const res = await fetch('http://localhost:8080/auth/token');
            const text = await res.json();
            return rpsApi.setToken(text);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    setUsername: (username) => sessionStorage.setItem('username', username),
    getUsername: () => sessionStorage.getItem('username'),

    fetchUsername: async (username) => {
        try {
            const res = await fetch('http://localhost:8080/user/name', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify({ 'username': username })
            });
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    setGameId: (gameId) => sessionStorage.setItem('gameId', gameId),
    getGameId: () => sessionStorage.getItem('gameId'),
    removeGameId: () => sessionStorage.removeItem('gameId'),

    startGame: async () => {
        try {
            const res = await fetch('http://localhost:8080/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: rpsApi.getToken()
                }
            });
            const text = await res.json();
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

    // joinGame: async (gameId) => {
    //     try {
    //         const response = await fetch(`http://localhost:8080/join/${gameId}`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 token: rpsApi.getToken()
    //             },
    //         });
    //         const gameId = await response.json();
    //         return rpsApi.setGameId(gameId);
    //     } catch (error) {
    //         return console.log(`Something went wrong ${error}`);
    //     }
    // },

    joinGame: async (gameId) => {
        try {
            const res = await fetch(`http://localhost:8080/join/${gameId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: rpsApi.getToken()
                }
            });
            const response = await res.json();
            return rpsApi.setGameId(gameId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    gameInfo: async (gameId) => {
        try {
            const res = await fetch(`http://localhost:8080/games/result/${gameId}`, {
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                }
            });
            let response = await res.json();
            return rpsApi.getGameId(gameId);
            // return console.log(response);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },

    makeMove: async (sign) => {
        try {
            const res = await fetch(`http://localhost:8080/games/move/${sign}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: rpsApi.getToken()
                }
            });
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    }

};

// TODO
// g??ra open games klickbara med joinGame()
// s?? man skickas och kopplas till spelet som player 2 (username i html)

// makeMove p?? game-delen
