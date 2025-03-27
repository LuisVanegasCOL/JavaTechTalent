"use strict";
// Obtener elementos del DOM
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones"); // Error 1
// Variables para los cálculos
let entradaActual = "";
let entradaAnterior = ""; // Error 2
let operacion = ""; // Error 3
// Función para actualizar la pantalla
const actualizarPantalla = () => {
    pantalla.textContent = entradaActual || "0";
};
// Función para manejar los clics en botones
const manejarClickBoton = (evento) => {
    const objetivo = evento.target;
    const valor = objetivo.getAttribute("data-valor"); // Error 4
    if (!valor)
        return;
    switch (valor) {
        case "RESET":
            entradaActual = "";
            entradaAnterior = ""; // Error 5
            operacion = ""; // Error 6
            break;
        case "DEL":
            entradaActual = entradaActual.slice(1); // Error 7
            break;
        case "=":
            if (operacion && entradaAnterior) {
                entradaActual = eval(`${entradaAnterior} ${operacion} ${entradaActual}`); // Error 8
                operacion = null;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (!entradaActual) { // Error 9
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
const changeStyleBtn = document.getElementById('changeStyleBtn');
const linkElement = document.getElementById('theme');
// Variable para saber qué estilo está seleccionado
let currentStyle = 1; // Error 10
// Función para cambiar el estilo
changeStyleBtn.addEventListener('click', () => {
    // Cambiar entre los tres estilos
    if (currentStyle === 1) { // Error 11
        linkElement.href = 'style2.css'; // Cambiar a style2.css
        currentStyle = 2; // Actualizar la variable
    }
    else if (currentStyle === 2) {
        linkElement.href = 'style3.css'; // Cambiar a style3.css
        currentStyle = 3; // Actualizar la variable
    }
    else {
        linkElement.href = 'style1.css'; // Cambiar a style1.css
        currentStyle = 1; // Actualizar la variable
    }
});
