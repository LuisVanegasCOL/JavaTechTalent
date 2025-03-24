/* DESDE JQUERY 

$().ready( ()=>{
 $("article").each((_position, element) => {
    console.log(element);
 });
    });
*/
// const articles =[];  // vamos a crear la variable articulos para poder ver los articulos del html
/*
const articles = document.getElementsByTagName("article");
console.log(articles);
*/
/*
for (inicialización; condición; actualización) {
    // Código que se ejecuta en cada iteración
} */
/*
    for (let index = 0; index < articles.length; index++) {
       
        console.log(articles[index]);
    }
*/

/* agregar texto con innerHTML
for (let index = 0; index < articles.length; index++) {
   articles[index].innerHTML="Cambiando Texto HTML";
    
}
*/
// seleccionar elemenot por id

/*
const titulo1 = document.getElementById("title1"); 
titulo1.textContent="asda";
console.log(titulo1);


// seleccionamos por clase

const parrafos =document.getElementsByClassName ("parrafos");
*/

// vamos a  usar insertAdjacentHTML de JavaScript
/*
'beforebegin': Antes que el propio elemento.
'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
 'beforeend': Justo dentro del elemento, después de su último elemento hijo.
 'afterend': Después del propio elemento.
 */


 // de esta menra connviritendo el HTMLColeccion en un array con el  ... 


 /* 
 const articles =[... document.getElementsByTagName("article")];
 articles.forEach(element => {
     element.insertAdjacentHTML('beforebegin',"<h3>hola</h3>")
 });
 console.log(articles);

*/


/*  DE ESTA MENRA USANDO EL QUERYSELECTOR USANDO UN ARRAY TIPO NODE
 const articles =document.querySelectorAll("article");
 articles.forEach(element => {
     element.insertAdjacentHTML('beforebegin',"<h3>hola</h3>")
 });
 console.log(articles);

 */
/*

  Usamos el bucle for para recorrer el objeto tipo HTMLCOLECCTION ya que no se puede hacer por forech 
  esto sigfinica que no es un array en este momento
  /* 


const articles = document.getElementsByTagName("article");
for (let index = 0; index < articles.length; index++) {
   articles[index].insertAdjacentHTML('beforebegin',"<h3>hola</h3>")
} */

/*
document.getElementById("title1").remove();
document.getElementById("title2").remove();  // asi se eliminan

*/
const articles = document.getElementsByTagName("article"); // Seleccionamos todos los elementos <article> y los almacenamos en la variable

for (let index = 0; index < articles.length; index++) {  // Recorremos la lista de artículos con un bucle for
    const elementop = document.createElement("p");  // Creamos un elemento <p> en el DOM y lo almacenamos en la variable
    const contenido = document.createTextNode("Holaaa!!");  // Creamos un nodo de texto con el contenido "Hola!!!" y lo almacenamos en la variable 
    elementop.appendChild(contenido);  // Agregamos el nodo de texto como hijo del elemento <p> s decir esta contendio dentro de elemento p 
    articles[index].appendChild(elementop); // Insertamos el elemento <p> dentro del artículo correspondiente en la posición [index] es decir elemento esta dentro de articles y contenido esta dentro de elemento p
}


