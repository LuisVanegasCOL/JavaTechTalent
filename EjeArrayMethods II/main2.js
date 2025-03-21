const foods = [
    { name: "Hamburger", icon: "🍔", category: "Fast Food", price: 8.99 },
    { name: "Pizza Margherita", icon: "🍕", category: "Italian", price: 10.75 },
    { name: "Tacos al Pastor", icon: "🌮", category: "Mexican", price: 9.5 },
    { name: "Caesar Salad", icon: "🥗", category: "Healthy", price: 7.99 },
    { name: "Assorted Sushi", icon: "🍣", category: "Japanese", price: 15.99 },
    { name: "Hot Dog", icon: "🌭", category: "Fast Food", price: 5.99 },
    { name: "Spaghetti Bolognese", icon: "🍝", category: "Italian", price: 12.99 },
    { name: "Quesadillas", icon: "🧀", category: "Mexican", price: 8.25 },
    { name: "Quinoa Salad", icon: "🥗", category: "Healthy", price: 9.75 },
    { name: "Salmon Sashimi", icon: "🍣", category: "Japanese", price: 18.5 },
    { name: "Cheeseburger", icon: "🍔", category: "Fast Food", price: 10.5 },
    { name: "Lasagna", icon: "🍝", category: "Italian", price: 14.25 },
    { name: "Nachos with Guacamole", icon: "🌮", category: "Mexican", price: 8.99 },
    { name: "Chicken Teriyaki Bowl", icon: "🍚", category: "Japanese", price: 11.99 },
    { name: "Fruit Smoothie", icon: "🍹", category: "Healthy", price: 6.5 },
  ];
  
  // TAREA 2: Obtener todas las categorías sin repetir
  const getAllCategories = [...new Set(foods.map(food => food.category))];
  console.log('Categorías disponibles:', getAllCategories);
  
  // TAREA 3: Comprobar si una categoría existe
  const checkIfCategoryExists = (category) => getAllCategories.includes(category);
  console.log('¿Existe la categoría "Italian"?', checkIfCategoryExists("Italian"));
  console.log('¿Existe la categoría "Spanish"?', checkIfCategoryExists("Spanish"));
  
  // TAREA 4: Ver los platos de una categoría
  const findCategoryFoods = (category) => foods.filter(food => food.category === category);
  console.log('Platos de "Fast Food":', findCategoryFoods("Fast Food"));
  
  // TAREA 5: Calcular el total de un ticket
  const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
  const calculateTotalTicket = (ticket, foods) => {
    return ticket
      .map(item => foods.find(food => food.icon === item))  // Buscar el plato por su icono
      .filter(Boolean)  // Filtrar los resultados inválidos (si no se encuentra el plato)
      .reduce((total, food) => total + food.price, 0);  // Sumar los precios
  };
  
  const totalTicket = calculateTotalTicket(ticket, foods);
  console.log(`Total de la cuenta: ${JSON.stringify(ticket)} es $${totalTicket.toFixed(2)}`);
  