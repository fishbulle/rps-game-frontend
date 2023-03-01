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
            return console.log(`Något gick fel ${error}`);
        }
    },

    register: async (name, username, password) => {
        try {
            const res = await fetch('http://localhost:8080/user/regsiter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify(name, username, password)
            });
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    login: async (username, password) => {
        try {
            const res = await fetch('http://localhost:8080/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify(username, password)
            });
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    openGames: async () => {
        try {
            const res = await fetch('http://localhost:8080/games');
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    startGame: async (playerId) => {
        try {
            const res = await fetch('http://localhost:8080/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify(playerId)
            });
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    joinGame: async (gameId) => {
        try {
            const res = await fetch('http://localhost:8080/join/{gameId}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify(gameId)
            });
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    gameInfo: async () => {
        try {
            const res = await fetch('http://localhost:8080/games/result/{gameId}');
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    },

    makeMove: async (gameId, playerId, sign) => {
        try {
            const res = await fetch('http://localhost:8080/games/move/{sign}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application-json',
                    token: rpsApi.getToken()
                },
                body: JSON.stringify(gameId, playerId, sign)
            });
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    }
};

if (rpsApi.getToken() === null) {
    rpsApi.fetchToken();
}
