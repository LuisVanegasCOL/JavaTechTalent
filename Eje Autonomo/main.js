/*

Crea un switch case en el que ingreses un día de la semana en formato numérico (1 al 7) y
 devuelva el nombre del día correspondiente.

 

let dia= parseInt(prompt("Ingresa un dia de la semana del 1 al 7"));

switch (dia) {
    case 1: console.log("El dia es : LUNES"); break;
    case 2: console.log("El dia es : MARTES"); break;
    case 3: console.log("El dia es : MIERCOLES"); break;
    case 4: console.log("El dia es : JUEVES"); break;
    case 5: console.log("El dia es : VIERNES"); break;
    case 6: console.log("El dia es : SABADO"); break;
    case 7: console.log("El dia es : DOMINGO"); break;

    default:
        console.log("no es un dia valido");
        break;
}
        */

/*
Realiza un switch case que convierta números del 1 al 3 en sus nombres en 
inglés (Ej: 1 → "One", 2 → "Two", 3 → "Three").



let num=parseInt(prompt("Ingresa un numero del 1 a 3"));

switch (num) {
    case 1: console.log("One");break;
    case 2: console.log("Two");break;
    case 3: console.log("Three");break;
        
        

    default:
    console.log("seleccion invalida");
        break;
}
        */

/*
Ejercicios con Arrays y Bucles
Define un array con los números del 10 al 50 en incrementos de 10 y recórrelo con forEach,
 mostrando el doble de cada número.


numeros=[10,20,30,40,50];

numeros.forEach(number => {
    console.log(number*2);
    
});

console.log(typeof(numeros));
*/
/*
Declara un array con 5 nombres y usa un for para imprimirlos en orden inverso.




let nombres = ["Luis", "ximena", "Paula", "Monica", "Ricardo"];

for (let i = 4 ; i >= 0; i --){
    console.log(nombres[i]);   // para acceder a el elemenot del array es con []
}

*/

/*
Crea una variable let contador = 8; y haz que disminuya hasta llegar a 0 usando un bucle while.



let contador =8;

while (contador >=0) {    // prestar atencion a los corchetes y a los mayor o menor. 
    console.log(contador);
    contador--;
    
}
*/


/*

Crea una función que reemplace todas las vocales de un string con el símbolo *.


function vocales(valor) {
    return valor.replace(/[aeiouAEIOU]/g, '*')
}

console.log(vocales("murcielago"));

*/
/*
Escribe una función que verifique si un string termina con "ing". Llama a la función con "coding" y "play".



function verificador(valor){

    return valor.endsWith("ing");
}

console.log(verificador("coding")); // true
console.log(verificador("play")); // false

*/

/*
Define una función que, pasándole un número n, devuelva la palabra "JavaScript" repetida n veces.


function repetir (n){

    return "JavaScript ".repeat(n);
}
console.log(repetir(99));

*/

/*Crea una función que transforme un string en mayúsculas y elimine los espacios en blanco.

function mayus(texto){

    return texto.replace(/\s+/g, '').toUpperCase();  // Elimina todos los espacios y convierte a mayúsculas
}
console.log(mayus("hola todos son u n a s  buenas p e r s o n a"));
*/

/*


Escribe un bucle for que imprima los números del 1 al 10 en una línea separados por comas.




let result = "";
for (let i = 1; i <= 10; i++) {
    result += i;
    console.log(result)
    if (i < 10) {
        result += ", ";
    }
}
console.log(result); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


*/

/*
Escribe un bucle while que imprima los números del 10 al 1 en orden descendente.

let num =10;
while (num>=1)
{
console.log(num);
num--;

}
*/

/*Crea un bucle for y un while que impriman 10 veces "I ❤️ JavaScript". 

for (let index = 0; index <=10; index++) {   // con for
    console.log("I ❤️ JavaScript");
    
}

let i =0;
while (i <=10) {
    console.log("I ❤️ JavaScript");   // con while 
    i++;
}
*/