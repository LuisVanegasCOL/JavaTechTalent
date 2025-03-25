// Selección de elementos
const levelIndicator = document.getElementById("levelIndicator");
const lightLevel = document.getElementById("ligthLevel");
const interruptor = document.getElementById("interruptor");
const bombilla = document.getElementById("bombilla");
const zoomIndicator = document.getElementById("zoomIndicator");
const zoomLevel = document.getElementById("zoomLevel");

let encendido = false;

// Evento para controlar la luminosidad
lightLevel.addEventListener('input', () => {
    const valor = Number(lightLevel.value);
    levelIndicator.textContent = valor;

    if (!encendido && valor > 0) {
        interruptor.src = "bon.jpg";
        bombilla.src = "on.jpg";
        encendido = true;
    }

    bombilla.style.opacity = (valor / 7).toString();

    if (valor === 0) {
        interruptor.src = "boff.jpg";
        bombilla.src = "off.jpg";
        encendido = false;
        bombilla.style.opacity = '1';
    }
});

// Evento para encender/apagar la bombilla al hacer clic en el interruptor
interruptor.addEventListener('click', () => {
    if (!encendido) {
        interruptor.src = "bon.jpg";
        bombilla.src = "on.jpg";
        lightLevel.value = "7";
        levelIndicator.textContent = "7";
        encendido = true;
    } else {
        interruptor.src = "boff.jpg";
        bombilla.src = "off.jpg";
        lightLevel.value = "0";
        levelIndicator.textContent = "0";
        encendido = false;
    }
});

// Evento para controlar el zoom
zoomLevel.addEventListener('input', () => {
    const valor = zoomLevel.value;
    zoomIndicator.textContent = valor + "%";
    bombilla.style.width = valor + "px";
});
