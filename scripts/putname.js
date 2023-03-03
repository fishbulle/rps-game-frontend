// FUNKAR 

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
            rpsApi.fetchUsername(username)
                .then(window.location.href = "front.html");
        }
    }
}