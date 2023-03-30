// för inloggning
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const passowrd = document.getElementById('password').value;

    rpsApi.authenticate(username, passowrd)
        .then(() => location.assign('navigation.html'));
});