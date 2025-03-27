// Obtener elementos del DOM
const pantalla = document.getElementById("pantalla") as HTMLDivElement;
const botones = document.querySelectorAll(".btn");

// Variables para los cálculos
let entradaActual: string = "";
let entradaAnterior: string = "";
let operacion: string | null = null;

// Función para actualizar la pantalla
const actualizarPantalla = () => {
    pantalla.textContent = entradaActual || "0";
};

// Función para manejar los clics en botones
const manejarClickBoton = (evento: Event) => {
    const objetivo = evento.target as HTMLButtonElement;
    const valor = objetivo.getAttribute("data-valor");

    if (!valor) return;

    switch (valor) {
        case "RESET":
            entradaActual = "";
            entradaAnterior = "";
            operacion = null;
            break;
        case "DEL":
            entradaActual = entradaActual.slice(0, -1);
            break;
        case "=":
            if (operacion && entradaAnterior) {
                entradaActual = eval(`${entradaAnterior} ${operacion} ${entradaActual}`);
                operacion = null;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (entradaActual) {
                entradaAnterior = entradaActual;
                entradaActual = "";
                operacion = valor;
            }
            break;
        default:
            entradaActual += valor;
    }

    actualizarPantalla();
};

// Agregar evento a los botones
botones.forEach(boton => {
    boton.addEventListener("click", manejarClickBoton);
});

// Inicializar pantalla
actualizarPantalla();

// Obtener el botón y el enlace del archivo CSS
const changeStyleBtn: HTMLButtonElement = document.getElementById('changeStyleBtn') as HTMLButtonElement;
const linkElement: HTMLLinkElement = document.getElementById('theme') as HTMLLinkElement;

// Variable para saber qué estilo está seleccionado
let currentStyle: number = 1;

// Función para cambiar el estilo
changeStyleBtn.addEventListener('click', () => {
    // Cambiar entre los tres estilos
    if (currentStyle === 1) {
        linkElement.href = 'style2.css';  // Cambiar a style2.css
        currentStyle = 2;  // Actualizar la variable
    } else if (currentStyle === 2) {
        linkElement.href = 'style3.css';  // Cambiar a style3.css
        currentStyle = 3;  // Actualizar la variable
    } else {
        linkElement.href = 'style1.css';  // Cambiar a style1.css
        currentStyle = 1;  // Actualizar la variable
    }
});

