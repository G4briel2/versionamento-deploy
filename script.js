const inputSenha = document.getElementById('password');
const btnShow = document.querySelector('.show');

btnShow.addEventListener('click', () => {
    const type = inputSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    inputSenha.setAttribute('type', type);
    
    btnShow.classList.toggle('visible');
});

window.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash');
    const loginFrame = document.querySelector('.login-frame');
    const loginContent = document.querySelector('.login');

    setTimeout(() => {
        if (splash) splash.classList.add('hidden');

        if (loginFrame) {
            loginFrame.classList.remove('noborder');
        }

        
        const elementosInvisiveis = document.querySelectorAll('.invisible');
        elementosInvisiveis.forEach((el) => {
            el.classList.remove('invisible');
            el.style.transform = "translateY(0)";
        });

        loginFrame.style.transform = "translateY(74%)";
        loginContent.style.transform = "translateY(50%)";

    }, 1500);
});

