// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de proyectos cargada correctamente");

    // Puedes agregar interactividad aquí
    const projectCards = document.querySelectorAll(".project");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
