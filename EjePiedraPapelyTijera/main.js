const opciones = ["🪨", "📜", "✂️"];
const eleccionpc = opciones[Math.floor(Math.random() * opciones.length)];

function determinarGanador(jugador, eleccionpc) {
    if (jugador === eleccionpc) {
        return "¡Es un empate!";
    } else if ((jugador === "🪨" && eleccionpc === "✂️") ||
               (jugador === "✂️" && eleccionpc === "📜") ||
               (jugador === "📜" && eleccionpc === "🪨")) {
        return "¡El jugador gana!";
    } else {
        return "¡La computadora gana!";
    }
}

function mostrarResultados(jugador, eleccionpc) {
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "El jugador eligió: " + jugador + "<br>" +
                        "La computadora eligió: " + eleccionpc + "<br>" +
                        determinarGanador(jugador, eleccionpc);
}

// Agregar eventos a los botones
document.getElementById("🪨").addEventListener("click", function () {
    const jugador = "🪨";
    mostrarResultados(jugador, eleccionpc);
});

document.getElementById("✂️").addEventListener("click", function () {
    const jugador = "✂️";
    mostrarResultados(jugador, eleccionpc);
});

document.getElementById("📜").addEventListener("click", function () {
    const jugador = "📜";
    mostrarResultados(jugador, eleccionpc);
});
