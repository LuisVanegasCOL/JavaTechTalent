
// Selección de elementos
const levelIndicator = document.getElementById("levelIndicator"); // Indicador del nivel de luz
const lightLevel = document.getElementById("ligthLevel"); // Slider del nivel de luz
const interruptor = document.getElementById("interruptor"); // Imagen del interruptor
const bombilla = document.getElementById("bombilla"); // Imagen de la bombilla
const zoomIndicator = document.getElementById("zoomIndicator"); // Indicador de zoom
const zoomLevel = document.getElementById("zoomLevel"); // Slider del zoom de la bombilla

let encendido = false; // Estado de la bombilla (apagada inicialmente)

// Evento para controlar la luminosidad
lightLevel.addEventListener('input', () => {
    const valor = Number(lightLevel.value); // Obtiene el valor del slider de luz
    levelIndicator.textContent = valor; // Actualiza el indicador de nivel de luz

    if (!encendido && valor > 0) { // Si la bombilla está apagada y se enciende
        interruptor.src = "bon.jpg"; // Cambia la imagen del interruptor a encendido
        bombilla.src = "on.jpg"; // Cambia la imagen de la bombilla a encendida
        encendido = true; // La bombilla está encendida
    }

    bombilla.style.opacity = (valor / 7).toString(); // Ajusta la opacidad de la bombilla según el nivel de luz

    if (valor === 0) { // Si el nivel de luz es 0 (apagado)
        interruptor.src = "boff.jpg"; // Cambia la imagen del interruptor a apagado
        bombilla.src = "off.jpg"; // Cambia la imagen de la bombilla a apagada
        encendido = false; // La bombilla está apagada
        bombilla.style.opacity = '1'; // Vuelve la opacidad a máxima
    }
});

// Evento para encender/apagar la bombilla al hacer clic en el interruptor
interruptor.addEventListener('click', () => {
    if (!encendido) { // Si la bombilla está apagada
        interruptor.src = "bon.jpg"; // Cambia el interruptor a encendido
        bombilla.src = "on.jpg"; // Cambia la bombilla a encendida
        lightLevel.value = "7"; // Ajusta el nivel de luz al máximo
        levelIndicator.textContent = "7"; // Actualiza el indicador de nivel
        encendido = true; // La bombilla está encendida
    } else { // Si la bombilla está encendida
        interruptor.src = "boff.jpg"; // Cambia el interruptor a apagado
        bombilla.src = "off.jpg"; // Cambia la bombilla a apagada
        lightLevel.value = "0"; // Ajusta el nivel de luz a mínimo
        levelIndicator.textContent = "0"; // Actualiza el indicador de nivel
        encendido = false; // La bombilla está apagada
    }
});

// Evento de zoom para la bombilla
zoomLevel.addEventListener('input', () => {
    const zoom = Number(zoomLevel.value); // Obtiene el valor del slider de zoom
    zoomIndicator.textContent = zoom; // Actualiza el indicador de zoom
    bombilla.style.transform = `scale(${1 + zoom * 0.1})`; // Ajusta el zoom de la bombilla
});
