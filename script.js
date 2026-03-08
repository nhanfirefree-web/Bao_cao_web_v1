const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Khi bấm Đăng Kí (bên phần overlay)
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Khi bấm Đăng Nhập (bên phần overlay)
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});