// Objekt med alla fetch-anrop till mitt API

const rpsApi = {
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
                    'Content-Type': 'application-json'
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
                    'Content-Type': 'application-json'
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

    startGame: async () => {
        try {
            const res = await fetch('http://localhost:8080/start');
            return await res.json();
        } catch (error) {
            return console.log(`Något gick fel ${error}`);
        }
    }

    // joinGame: (POST)

    // gameInfo: (GET)

    // makeMove: (POST)

};
