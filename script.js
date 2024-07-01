document.addEventListener('DOMContentLoaded', () => {
    const fileSharingLink = document.getElementById('file-sharing-link');
    const popup = document.getElementById('file-sharing-popup');
    const closeBtn = document.querySelector('.popup-content .close');
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const fileList = document.getElementById('file-list');
    const downloadBtn = document.getElementById('download-btn');

    fileSharingLink.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'correctUsername' && password === 'correctPassword') {
            loginMessage.textContent = 'Login successful!';
            setTimeout(() => {
                popup.style.display = 'none';
                fileList.style.display = 'block';
            }, 1000);
        } else {
            loginMessage.textContent = 'Wrong username or password!';
        }
    });

    downloadBtn.addEventListener('click', () => {
        window.location.href = 'path/to/rebelgirl.pdf';
    });
});
