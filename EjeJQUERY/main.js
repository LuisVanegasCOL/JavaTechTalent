/* DESDE JQUERY 

$().ready( ()=>{
 $("article").each((_position, element) => {
    console.log(element);
 });
    });
*/
// const articles =[];  // vamos a crear la variable articulos para poder ver los articulos del html
const articles = document.getElementsByTagName("article");
console.log(articles);

/*
for (inicialización; condición; actualización) {
    // Código que se ejecuta en cada iteración
} */

    for (let index = 0; index < articles.length; index++) {
       
        console.log(articles[index]);
    }

/* agregar texto con innerHTML
for (let index = 0; index < articles.length; index++) {
   articles[index].innerHTML="Cambiando Texto HTML";
    
}
*/
// seleccionar elemenot por id


const titulo1 = document.getElementById("title1"); 
console.log(titulo1);


// seleccionamos por clase

const parrafos =document.getElementsByClassName ("parrafos");




