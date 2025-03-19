/*
1. Realiza un switch case que muestre el mes del año cuando lo
introduzcamos en formato numérico (1 al 12)
2. Realiza un switch case en el que puedas introducir un número
del uno al cinco en un string y lo transforme a un númer
o


*/

1.// 
    let mes = parseInt(prompt("Ingresa un numero del 1 a 12 para decir que mes es"));
     

switch (mes){
    

    case 1: console.log("Enero");  break;
    case 2: console.log("Febrero");  break;
    case 3: console.log("Marzo");  break;
    case 4: console.log("Abril");  break;
    case 5: console.log("Mayo");  break;
    case 6: console.log("Junio");  break;
    case 7: console.log("Julio");  break;
    case 8: console.log("Agosto");  break;
    case 9: console.log("Septiembre");  break;
    case 10: console.log("Octubre");  break;
    case 11: console.log("Noviembre");  break;
    case 12: console.log("Diciembre");  break;
    
     
    default:
        console.error("Dato Invalido");


        break;
}


2//
/*
. Realiza un switch case en el que puedas introducir un número
del uno al cinco en un string y lo transforme a un númer
o
*/

let numero = prompt("Ingrese un numero de uno a cinco en palabras y lo convierto a numero");
     

switch (numero){
    

    case "uno": console.log(1);  break;
    case "dos": console.log(2);  break;
    case "tres": console.log(3);  break;
    case "cuatro": console.log(4);  break;
    case "cinco": console.log(5);  break;
    default:
        console.error("Dato Invalido");


        break;

}
