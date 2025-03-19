/*
1. Crea una función en la que pasándole un string como parámetro
se substituyan las letras A por las O.
2. Crea una función que compruebe si un string pasado como
parámetro empieza por ‘aca’ y llama dos veces a la función una con
academia y otra con escuela.
3. Crea una función que pasándole un Hola nos salude 3 veces
utilizando métodos de Strings.
*/

function reemplazar(valor) {

    return valor.replace(/A/g, 'O'); // Reemplaza "A" con "O" y "a" con "o"
}

console.log(reemplazar("AMAR"));



function texto(valor) {

    return valor.toLowerCase().startsWith("aca");
}

console.log(texto("acabamos de empezar")); // true
console.log(texto("terminamos de empezar ")); // false


function repetir(valor){
    return valor.repeat(3);
}
console.log(repetir("Hola "));

