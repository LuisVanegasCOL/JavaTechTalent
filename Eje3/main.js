// 1. Arrow function que retorna nombre y apellidos
const getNombreCompleto = () => "Luis Ricardo Vanegas Granados";
console.log(getNombreCompleto());

// 2. Función con nombre y sin return, que recibe un booleano e imprime su valor
function imprimirBooleano(valor) {
    console.log(valor);
}
imprimirBooleano(true);

// 3. Función que recibe parámetros infinitos y los muestra con forEach
function mostrarValores(...valores) {
    valores.forEach(valor => console.log(valor));
}
mostrarValores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
