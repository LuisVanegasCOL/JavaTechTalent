// alert("Hola");


let nombre="luis";
var apellido="vanegas";
const pi=3.141516;

function apodo()
    {
        console.log("tu apodo es luisito");
    }

console.log("el valor de la variable let es " + " "+ nombre);
console.log("el valor de la variable var es" + " "+ apellido);
console.log("el valor de la variable const es" + " "+ pi);

console.log("----- Tipos de datos -----")
console.log("la variable nombre tiene el siguiente tipo de dato "+"  " +typeof(nombre));
console.log("la variable apellido tiene el siguiente tipo de dato "+"  " +typeof(apellido));
console.log("la variable const tiene el siguiente tipo de dato "+"  " +typeof(pi));

console.log("----- Tipos de Scope-----")
console.log("La variable nombre tiene un scope global " );


apodo();



console.log("----------------------------------------------------------------")
console.log("funcion con parametros");

let nombre1 = prompt("Ingresa tu primer nombre");
let nombre2 = prompt("Ingresa tu segundo nombre");
let apellido1 = prompt("Ingresa tu primer apellido");
let apellido2 = prompt("Ingresa tu segundo apellido");

function nombrecompleto(nombre1,nombre2,apellido1,apellido2) {

    console.log("tu nombre completo es "+ nombre1+" "+ nombre2+ " "+ apellido1+" "+ apellido2);
}

nombrecompleto(nombre1,nombre2,apellido1,apellido2);




console.log("funcion anonima ------------")

const funcionanonima = function(){
    console.log("hola soy una funcion anonima");

}
funcionanonima();   

console.log("funcion anonima con parametros --------")
let num1=5;
let num2 =10;
const funcionanonimaparamettos = function(num1,num2){
    console.log("el primer numero es "+num1 + "el segundo numero es " + num2);
}
funcionanonimaparamettos(num1,num2);

console.log("funcion pero usando la flecha --------") 

const saludar =() =>{
    console.log("soy una funcion usando la flecha. 'Hola'");

}
saludar();


console.log("Funcion con return")

const despedir = (nombre) => {
    return nombre;

}
// llamando la funcion

console.log(despedir("luis"));

/// funcion anidada 


const perro = (nombre) =>{
    return nombre;
}

function sabernombre(nombre){
    console.log("el nombre del perro es milan");

}
