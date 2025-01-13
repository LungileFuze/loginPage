document.querySelector('form').addEventListener('submit', function (event) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if(username === '' || password === '') {
        alert('Please fill in all fields');
        event.preventDefault();
    } else {
        alert('Login successful!!!')
    }
})