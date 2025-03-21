// 1. A partir de la pizza, sustituir todos los elementos del array por cervezas
let comida = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
let cervezas = comida.map(() => "🍻");
console.log("Solución 1: ", cervezas);

// 2. Encontrar si existe un elemento en el array que sea una piña
let arra = ["🍕", "🍕", "🍍", "🍕", "🍕"];
if (arra.includes("🍍")) {
    console.log("Solución 2: Sí existe una piña");
} else {
    console.log("Solución 2: No existe una piña");
}

// 3. Quitar la piña del siguiente array
let nuevoarra = arra.filter(i => i !== "🍍");
console.log("Solución 3: ", nuevoarra);

// 4. A partir del siguiente array 🍓🍋🍓🍋🍓 convierte todas las fresas en 🍄
let frutas = ["🍓", "🍋", "🍓", "🍋", "🍓"];
let setas = frutas.map(i => i === "🍓" ? "🍄" : i);
console.log("Solución 4: ", setas);

// 5. Añadir el siguiente icono 🥵 inmediatamente después de cada 🌶️
let chiles = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let resultado = [];
chiles.forEach(i => {
    resultado.push(i);
    if (i === "🌶️") {
        resultado.push("🥵");
    }
});
console.log("Solución 5: ", resultado);

// 6. Añadir una 🃏 carta comodín entre medio de dos cartas
let cartas = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];
let nuevas_cartas = [];
for (let index = 0; index < cartas.length; index++) {
    nuevas_cartas.push(cartas[index]);
    if (index < cartas.length - 1) {
        nuevas_cartas.push("🃏");
    }
}
console.log("Solución 6: ", nuevas_cartas);
