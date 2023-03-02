// FUNKAR men konsol skriver: SyntaxError: Unexpected end of JSON input

if (rpsApi.getToken() === null) {
    rpsApi.fetchToken();
}

function keyHandler(event) {

    if (event.keyCode === 13) {
        console.log('enter pressed');

        let username = document.getElementById('username').value;

        if (username === null || username === '') {
            username = "Anynomus player"
        } else {
        rpsApi.fetchUsername(username);
        }
    }

    // skickas till front.html
}