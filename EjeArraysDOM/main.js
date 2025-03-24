// Array donde se almacenan los iconos
const iconArray = []; // Se declara un array vacío llamado `iconArray`, que se utilizará para almacenar los iconos seleccionados por el usuario.

const display = document.getElementById("arrayDisplay"); // Referencia al div donde se muestra el array
// Se obtiene una referencia al elemento HTML con el id "arrayDisplay", que es el contenedor donde se va a mostrar el contenido de `iconArray`.

const iconOptions = ["⭐", "🔥", "💎", "🎵", "🚀"]; // Opciones de iconos disponibles
// Se define un array llamado `iconOptions` que contiene un conjunto de iconos que el usuario puede agregar al array. Son representados como caracteres especiales.


// Función para actualizar la visualización del array en la página
function updateDisplay() {
    display.textContent = iconArray.join(" "); // Muestra los iconos separados por un espacio
}


// Función para agregar un icono al final del array
function addPush() {
    const icon = iconOptions[Math.floor(Math.random() * iconOptions.length)]; // Selecciona un icono aleatorio
    // Se elige un icono aleatorio de `iconOptions` usando `Math.random()` para generar un índice aleatorio y `Math.floor()` para redondearlo hacia abajo a un número entero.
    
    iconArray.push(icon); // Agrega el icono al final del array
    // La función `push()` añade el icono seleccionado al final del array `iconArray`.
    
    updateDisplay(); // Actualiza la visualización
    // Se llama a `updateDisplay()` para mostrar el array actualizado en la página.
}


// Función para agregar un icono al inicio del array
function addUnshift() {
    const icon = iconOptions[Math.floor(Math.random() * iconOptions.length)]; // Selecciona un icono aleatorio
    // Al igual que en `addPush`, selecciona un icono aleatorio de `iconOptions`.
    
    iconArray.unshift(icon); // Agrega el icono al inicio del array
    // La función `unshift()` inserta el icono seleccionado al principio del array `iconArray`.
    
    updateDisplay(); // Actualiza la visualización
    // Se llama a `updateDisplay()` para actualizar la visualización con el nuevo array.
}


// Función para insertar un icono en un índice específico
function addInsert() {
    const index = parseInt(document.getElementById("insertIndex").value, 10); // Obtiene el índice ingresado
    // Se obtiene el valor del campo de entrada con el id "insertIndex" y se convierte a un número entero con `parseInt()`. 
    // Este valor indica en qué posición del array se insertará el icono.
    
    const icon = iconOptions[Math.floor(Math.random() * iconOptions.length)]; // Selecciona un icono aleatorio
    // Selecciona un icono aleatorio de `iconOptions`, como en las funciones anteriores.
    
    if (!isNaN(index) && index >= 0 && index <= iconArray.length) { // Verifica si el índice es válido
        // Se verifica si el valor `index` es un número válido (`!isNaN(index)`), 
        // y si está dentro del rango válido del array (mayor o igual a 0, y menor o igual al tamaño del array).
        
        iconArray.splice(index, 0, icon); // Inserta el icono en el índice indicado
        // La función `splice()` se usa para insertar el icono en la posición especificada por `index`. El segundo parámetro (0) indica que no se eliminará ningún elemento, solo se insertará el icono.
        
        updateDisplay(); // Actualiza la visualización
        // Se llama a `updateDisplay()` para reflejar el cambio en la visualización del array.
    }
}


// Función para eliminar el último icono del array
function removePop() {
    iconArray.pop(); // Elimina el último elemento
    // La función `pop()` elimina el último elemento del array `iconArray`.
    
    updateDisplay(); // Actualiza la visualización
    // Se llama a `updateDisplay()` para actualizar la visualización después de la eliminación.
}


// Función para eliminar el primer icono del array
function removeShift() {
    iconArray.shift(); // Elimina el primer elemento
    // La función `shift()` elimina el primer elemento del array `iconArray`.
    
    updateDisplay(); // Actualiza la visualización
    // Se llama a `updateDisplay()` para reflejar el cambio en el array.
}


// Función para eliminar un icono en un índice específico
function removeAt() {
    const index = parseInt(document.getElementById("removeIndex").value, 10); // Obtiene el índice ingresado
    // Se obtiene el valor del campo de entrada con el id "removeIndex" y se convierte a un número entero con `parseInt()`. 
    // Este valor indica qué posición del array se eliminará.
    
    if (!isNaN(index) && index >= 0 && index < iconArray.length) { // Verifica si el índice es válido
        // Se verifica si el valor `index` es un número válido y si está dentro del rango válido del array.
        
        iconArray.splice(index, 1); // Elimina el icono en el índice indicado
        // La función `splice()` se usa para eliminar el icono en la posición especificada por `index`. El segundo parámetro (1) indica que se eliminará 1 elemento en esa posición.
        
        updateDisplay(); // Actualiza la visualización
        // Se llama a `updateDisplay()` para actualizar la visualización después de la eliminación.
    }
}
