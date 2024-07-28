document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.display = 'none';
        document.querySelector('.login-container').style.display = 'flex';
    }, 2000); // Preloader delay

    // Login form
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        const validUsername = 'user';
        const validPassword = 'pass';

        if (username === validUsername && password === validPassword) {
            errorElement.style.display = 'none';
            window.location.href = 'welcome.html';
        } else {
            errorElement.textContent = 'Invalid username or password';
            errorElement.style.display = 'block';
        }
    });
});
