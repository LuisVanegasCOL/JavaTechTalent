document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        alert("Mensaje enviado con éxito. ¡Gracias por contactarme!");

        document.getElementById("contactForm").reset();
    });
});
