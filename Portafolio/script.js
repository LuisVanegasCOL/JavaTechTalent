/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    // Botón de Curriculum - Confirmación de descarga
    const cvButton = document.querySelector(".btn.blue");
    cvButton.addEventListener("click", function() {
        alert("Descargando el CV de Daniel...");
    });

    // Botón de Proyectos - Scroll suave a la sección
    const projectsButton = document.querySelector(".btn.white");
    projectsButton.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#proyectos").scrollIntoView({
            behavior: "smooth"
        });
    });
});
