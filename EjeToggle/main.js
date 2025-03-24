document.getElementById("btnAzul").onclick = () => {  // obtiene el id del boton del html
    var parrafo = document.getElementById("parrafo2");  // guarda el contenido de parrafo2 en la var parrafo
    if (parrafo.style.color === "blue" ) {   // si el color es color es igual a azul. se cambia a negro
        parrafo.style.color = "black";
    } else {    // si no el color debe estar en negro sepasa a azul
        parrafo.style.color = "blue";

    }                     
}