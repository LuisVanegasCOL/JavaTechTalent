import foods from "./foods.mjs";

// ✅ Obtener todas las categorías únicas
const getAllCategories = [...new Set(foods.map(food => food.category))];
console.log("Categorías únicas:", getAllCategories);

// ✅ Verificar si una categoría existe
const checkItExistsCategory = (category) => getAllCategories.includes(category);
console.log("¿Existe 'Italian'?:", checkItExistsCategory("Italian")); // true
console.log("¿Existe 'Spanish'?:", checkItExistsCategory("Spanish")); // false

// ✅ Filtrar platos por categoría
const findCategory = (category) => foods.filter((food) => food.category === category);
console.log("Platos de 'Fast Food':", findCategory("Fast Food"));

// ✅ Calcular el total de una cuenta
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

const calculateTotalTicket = (ticket, foods) =>
    ticket
        .map((item) => foods.find((food) => food.icon === item))
        .filter(Boolean)
        .reduce((total, food) => total + food.price, 0);

const totalTicket = calculateTotalTicket(ticket, foods);
console.log(`Total de la cuenta: ${JSON.stringify(ticket)} es $${totalTicket.toFixed(2)}`);
