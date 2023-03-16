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
            const response = await fetch('http://localhost:8080/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: rpsApi.getToken(),
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
                    token: rpsApi.getToken(),
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
                    gameId: rpsApi.getGameId(),
                    token: rpsApi.getToken()
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
                    token: rpsApi.getToken()
                },
                body: JSON.stringify({ 'gameId': rpsApi.getGameId() })
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    }

};

if (rpsApi.getToken() === null) {
    rpsApi.fetchToken();
}

function keyHandler(event) {

    if (event.keyCode === 13) {
        let username = document.getElementById('username').value;

        if (username === null || username === '') {
            username = "Anynomus player"
        } else {
            rpsApi.fetchUsername(username)
                .then(window.location.href = "front.html");
        }
    }
}

function createGame() {
    rpsApi.startGame()
        .then(() => location.assign("game.html"));
}

function joinGame(gameId) {
    rpsApi.joinGame(gameId)
        .then(() => location.assign('game.html'));
}
