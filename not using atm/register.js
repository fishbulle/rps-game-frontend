// för registrering
const regForm = document.getElementById('registerForm');
regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    rpsApi.register(name, username, password)
        .then(() => location.assign('login.html'));
});