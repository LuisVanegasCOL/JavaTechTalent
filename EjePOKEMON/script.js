const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // Obtiene los primeros 151 Pokémon

// Cargar Pokémon al iniciar
document.addEventListener("DOMContentLoaded", async () => {
    await fetchPokemon();
    await fetchTypes();
});

// Función para obtener Pokémon desde la API
async function fetchPokemon() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("No se pudieron obtener los Pokémon");
        
        const data = await response.json();
        displayPokemon(data.results);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar Pokémon en la pantalla
async function displayPokemon(pokemonList) {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";

    for (const pokemon of pokemonList) {
        const pokemonData = await fetchPokemonData(pokemon.url);
        const card = createPokemonCard(pokemonData);
        container.appendChild(card);
    }
}

// Función para obtener datos individuales de cada Pokémon
async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener datos del Pokémon");

        return await response.json();
    } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error);
        return null;
    }
}

// Función para crear la tarjeta de cada Pokémon
function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name.toUpperCase()}</h3>
        <p>Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}</p>
    `;

    return card;
}

// Función para obtener los tipos de Pokémon
async function fetchTypes() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        if (!response.ok) throw new Error("No se pudieron obtener los tipos");

        const data = await response.json();
        updateTypeFilter(data.results);
    } catch (error) {
        console.error("Error al obtener los tipos:", error);
    }
}

// Función para actualizar el filtro de tipos en el select
function updateTypeFilter(types) {
    const typeFilter = document.getElementById("type-filter");
    typeFilter.innerHTML = '<option value="">Todos</option>'; // Opción para mostrar todos los Pokémon

    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type.name;
        option.textContent = type.name.toUpperCase();
        typeFilter.appendChild(option);
    });

    typeFilter.addEventListener("change", filterByType);
}

// Función para filtrar Pokémon por tipo
async function filterByType() {
    const selectedType = document.getElementById("type-filter").value;
    
    if (!selectedType) {
        await fetchPokemon(); // Si no se selecciona un tipo, muestra todos los Pokémon
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        if (!response.ok) throw new Error("No se pudieron obtener Pokémon por tipo");

        const data = await response.json();
        const filteredPokemon = data.pokemon.map(p => p.pokemon);
        displayPokemon(filteredPokemon);
    } catch (error) {
        console.error("Error al filtrar Pokémon:", error);
    }
}