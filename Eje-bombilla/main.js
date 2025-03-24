// Obtiene el elemento que muestra el nivel de brillo
const levelIndicator = document.getElementById("levelIndicator");

// Obtiene el control deslizante (barra de rango) que ajusta la luminosidad
const lightLevel = document.getElementById("ligthLevel");

// Obtiene la imagen del interruptor
const interruptor = document.getElementById("interruptor");

// Variable booleana que indica si la bombilla está encendida o apagada (debe ser let para permitir cambios)
let encendido = false;

// Obtiene la imagen de la bombilla
const bombilla = document.getElementById("bombilla");

// Obtiene el elemento que muestra el nivel de zoom
const zoomIndicator = document.getElementById("zoomIndicator");

// Obtiene el control deslizante (barra de rango) que ajusta el zoom
const zoomLevel = document.getElementById("zoomLevel");

// EVENTO PARA CONTROLAR LA LUMINOSIDAD DE LA BOMBILLA
lightLevel.addEventListener('input', () => {
    // Convierte el valor del input a número y lo muestra en el indicador de brillo
    const valor = Number(lightLevel.value);
    levelIndicator.textContent = valor;
    
    // Si la bombilla está apagada y el nivel de brillo es mayor que 0, se enciende
    if (!encendido && valor > 0) {
        interruptor.src = './bon.jpg';  // Cambia la imagen del interruptor a "encendido"
        bombilla.src = './on.jpg';      // Cambia la imagen de la bombilla a "encendida"
        encendido = true;               // Cambia el estado a "encendido"
    }
    
    // Ajusta la opacidad de la bombilla en función del nivel de brillo (máximo 7)
    bombilla.style.opacity = (valor / 7).toString();
    
    // Si el brillo es 0, apaga la bombilla y cambia las imágenes
    if (valor === 0) {
        interruptor.src = './boff.jpg'; // Cambia la imagen del interruptor a "apagado"
        bombilla.src = './off.jpg';     // Cambia la imagen de la bombilla a "apagada"
        encendido = false;              // Cambia el estado a "apagado"
        bombilla.style.opacity = '1';   // Restablece la opacidad a 1 (100%)
    }
});

// EVENTO PARA ENCENDER/APAGAR LA BOMBILLA AL HACER CLIC EN EL INTERRUPTOR
interruptor.addEventListener('click',  () => {
    if (!encendido) {
        // Si la bombilla está apagada, se enciende
        interruptor.src = './bon.jpg'; // Cambia la imagen del interruptor a "encendido"
        bombilla.src = './on.jpg';     // Cambia la imagen de la bombilla a "encendida"
        lightLevel.value = "7";        // Ajusta el nivel de brillo al máximo
        levelIndicator.textContent = "7"; // Muestra el nivel de brillo actualizado
        encendido = true;              // Cambia el estado a "encendido"
    } else {
        // Si la bombilla está encendida, se apaga
        interruptor.src = './boff.jpg'; // Cambia la imagen del interruptor a "apagado"
        bombilla.src = './off.jpg';     // Cambia la imagen de la bombilla a "apagada"
        lightLevel.value = "0";         // Ajusta el nivel de brillo a 0
        levelIndicator.textContent = "0"; // Muestra el nivel de brillo actualizado
        encendido = false;              // Cambia el estado a "apagado"
    }
});
