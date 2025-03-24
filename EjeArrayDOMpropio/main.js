const principal = []; // array principal

const iconosdisponibles = ["🍺", "🥜", "🌮", "🥗", "🍕", "🍣", "🧀"];

const iconos = iconosdisponibles[Math.floor(Math.random() * iconosdisponibles.length)]; // Selecciona un icono aleatorio
// Al igual que en `addPush`, selecciona un icono aleatorio de `iconOptions`.

const matriz = document.getElementById("mostrarmatriz");  // matriz 


function actualizarmatriz() {
    matriz.textContent = principal.join(" - ");  // esta funcion ayuda a actualizar la matriz
}



function Agregarpush() {
    const iconos = iconosdisponibles[Math.floor(Math.random() * iconosdisponibles.length)];
    principal.push(iconos);
    actualizarmatriz()

}

function Agregarunshift() {
    const iconos = iconosdisponibles[Math.floor(Math.random() * iconosdisponibles.length)];
    principal.unshift(iconos);
    actualizarmatriz()

}

function Agregardesde() {
    const iconos = iconosdisponibles[Math.floor(Math.random() * iconosdisponibles.length)];
    const index = parseInt(document.getElementById("insertIndex").value, 10);
    if (!isNaN(index) && index >= 0 && index <= principal.length) { // Verifica si el índice es válido
        // Se verifica si el valor `index` es un número válido (`!isNaN(index)`), 
        // y si está dentro del rango válido del array (mayor o igual a 0, y menor o igual al tamaño del array).
        principal.splice(index, 0, iconos);
        actualizarmatriz()
    }
}

function Removerpop() {

    principal.pop();
    actualizarmatriz()

}

function Removershift() {

    principal.shift();
    actualizarmatriz()

}

function Removerdesde() {

    const index = parseInt(document.getElementById("DeletIndex").value, 10);
    if (!isNaN(index) && index >= 0 && index <= principal.length) { // Verifica si el índice es válido
        // Se verifica si el valor `index` es un número válido (`!isNaN(index)`), 
        // y si está dentro del rango válido del array (mayor o igual a 0, y menor o igual al tamaño del array).
        principal.splice(index, 1);
        actualizarmatriz()
    }
}


