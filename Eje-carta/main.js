// Seleccionamos todas las cartas que tienen la clase "carta"
var cartas = document.querySelectorAll(".carta");

// Recorremos cada carta encontrada
cartas.forEach(function (carta) {
    // Verificamos que el elemento sea una imagen (HTMLImageElement)
    if (carta instanceof HTMLImageElement) {
        
        // Evento que ocurre cuando el mouse pasa sobre la carta
        carta.addEventListener("mouseover", function () {
            // Cambia la imagen a la parte frontal de la carta
            carta.src = "./card-front.png";
        });

        // Evento que ocurre cuando el mouse deja de estar sobre la carta
        carta.addEventListener("mouseleave", function () {
            // Cambia la imagen a la parte trasera de la carta
            carta.src = "./card-back.png";
        });
    }
});
