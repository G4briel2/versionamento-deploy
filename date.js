const elementoHoras = document.querySelector('#hour');
const elementoMinutos= document.querySelector('#minutes');

iniciarRelogio();

function iniciarRelogio() {
    const atualizar = () => {
        let now = new Date();
        
        const horas = String(now.getHours()).padStart(2, '0');
        const minutos = String(now.getMinutes()).padStart(2, '0');

        elementoHoras.innerHTML = horas;
        elementoMinutos.innerHTML = minutos;
    };

    atualizar();

    setInterval(atualizar, 60000);
}

let now = new Date();
const diaSemana = now.toLocaleDateString('pt-BR', { weekday: 'long' });

const elementoDia = document.querySelector('#weekday');
elementoDia.innerHTML = diaSemana;

