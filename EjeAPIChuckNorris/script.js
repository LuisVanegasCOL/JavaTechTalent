// Seleccionamos el botón y el contenedor donde se mostrará el chiste
const button = document.getElementById('fetch-joke');
const jokeContainer = document.getElementById('joke');

// Función para obtener un chiste aleatorio
async function fetchJoke() {
    try {
        // Realizamos una solicitud GET a la API
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        
        // Verificamos si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('No se pudo obtener el chiste');
        }
        
        // Convertimos la respuesta en formato JSON
        const data = await response.json();
        
        // Actualizamos el contenido del contenedor con el chiste
        jokeContainer.textContent = data.value;
    } catch (error) {
        // Si hay un error, mostramos un mensaje en el contenedor
        jokeContainer.textContent = 'Hubo un error al obtener el chiste';
    }
}

// Agregamos un evento al botón para obtener un chiste cuando se hace clic
button.addEventListener('click', fetchJoke);
