// function redirect() {
//     setTimeout(() => {
//         window.location.href = './login/login.html';
//     }, 2000);
// }

// redirect();

const inputSenha = document.getElementById('password');
const btnShow = document.querySelector('.show');

btnShow.addEventListener('click', () => {
    const type = inputSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    inputSenha.setAttribute('type', type);
    
    btnShow.classList.toggle('visible');
});