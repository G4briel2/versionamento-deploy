const elementoHoras = document.querySelector('#hour');
const elementoMinutos= document.querySelector('#minutes');

iniciarRelogio();

function iniciarRelogio() {
    const atualizar = () => {
        let now = new Date();
        
        const horas = now.toLocaleTimeString('pt-BR', { hour: '2-digit', hour12: false });
        const minutos = now.toLocaleTimeString('pt-BR', { minute: '2-digit', hour12: false });

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

