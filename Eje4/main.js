/*
function azar(){
    let numero = Math.round(Math.random()); // Genera 0 o 1
    if (numero === 1) {
        return "Cara";
    } else {
        return "Cruz";
    }
}

// Invocar la función y mostrar el resultado en consola
console.log(azar());

*/

function suma (num1,num2,num3){
   
   
    return (num1+num2+num3);
    
}

let resultado = suma(2,5,7);
console.log("La suma de los numeros es "+ resultado);

/*
Crea una función y escribe tu nombre completo en 3 parámetros:
nombre, apellido1, apellido2 y concaténalos y finalmente
muéstralos por pantalla


*/


function nombrecompleto (nombre, apellido1 , apellido2){
    return nombre + " " + apellido1 + " " + apellido2
}
let yo = nombrecompleto("luis", "vanegas", "granados");
console.log("mi nombre completo es "+ yo);

/*

Crea una función que acepte dos números y devuelva el número
mayor
*/

function numero (num1 , num2){
    if(num1>num2){
        return num1;
    } else {
        return num2;
    }
}

let mayor =numero(300,50);
console.log ("El numero mayor es "+ mayor);