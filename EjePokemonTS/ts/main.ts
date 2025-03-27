const API_URL: string = "https://pokeapi.co/api/v2/pokemon?limit=151"; // Definir la URL base de la API para obtener los primeros 151 Pokémon.

interface Pokemon { // Interfaz para definir la estructura de un objeto Pokémon simple.
    name: string; // Nombre del Pokémon.
    url: string; // URL de detalles del Pokémon (para obtener más información).
}

interface PokemonData { // Interfaz para definir la estructura de los datos completos de un Pokémon.
    name: string; // Nombre del Pokémon.
    sprites: { front_default: string }; // Imagen del Pokémon (sprite).
    types: { type: { name: string } }[]; // Tipos del Pokémon, cada tipo tiene un nombre.
}

interface Type { // Interfaz para definir la estructura de un tipo de Pokémon.
    name: string; // Nombre del tipo (por ejemplo, 'fire', 'water').
}

document.addEventListener("DOMContentLoaded", async () => { // Escucha el evento cuando el DOM está completamente cargado.
    await fetchPokemon(); // Llamar a la función para obtener los Pokémon.
    await fetchTypes(); // Llamar a la función para obtener los tipos de Pokémon.
});

// Función para obtener los primeros 151 Pokémon desde la API
async function fetchPokemon(): Promise<void> {
    try {
        const response = await fetch(API_URL); // Realizar la solicitud a la API.
        if (!response.ok) throw new Error("No se pudieron obtener los Pokémon"); // Si la respuesta no es exitosa, lanzar un error.
        
        const data = await response.json(); // Parsear la respuesta como JSON.
        displayPokemon(data.results); // Llamar a la función para mostrar los Pokémon obtenidos.
    } catch (error) {
        console.error("Error al obtener los datos:", error); // Capturar y mostrar cualquier error.
    }
}

// Función para mostrar los Pokémon en la pantalla
async function displayPokemon(pokemonList: Pokemon[]): Promise<void> {
    const container = document.getElementById("pokemon-container") as HTMLElement; // Obtener el contenedor donde se mostrarán los Pokémon.
    container.innerHTML = ""; // Limpiar el contenido previo en el contenedor.

    for (const pokemon of pokemonList) { // Recorrer cada Pokémon de la lista.
        const pokemonData = await fetchPokemonData(pokemon.url); // Obtener los datos completos del Pokémon usando la URL.
        if (pokemonData) { // Si se obtienen datos correctamente.
            const card = createPokemonCard(pokemonData); // Crear una tarjeta HTML para el Pokémon.
            container.appendChild(card); // Añadir la tarjeta al contenedor.
        }
    }
}

// Función para obtener los datos completos de cada Pokémon
async function fetchPokemonData(url: string): Promise<PokemonData | null> {
    try {
        const response = await fetch(url); // Realizar la solicitud a la URL del Pokémon.
        if (!response.ok) throw new Error("Error al obtener datos del Pokémon"); // Si la respuesta no es exitosa, lanzar un error.

        return await response.json(); // Parsear y devolver los datos completos del Pokémon.
    } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error); // Capturar y mostrar cualquier error.
        return null; // Retornar null en caso de error.
    }
}

// Función para crear una tarjeta HTML con los datos de un Pokémon
function createPokemonCard(pokemon: PokemonData): HTMLElement {
    const card = document.createElement("div"); // Crear un contenedor div para la tarjeta.
    card.classList.add("pokemon-card"); // Añadir una clase CSS para estilos.

    card.innerHTML = ` // Establecer el contenido HTML de la tarjeta.
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> // Imagen del Pokémon.
        <h3>${pokemon.name.toUpperCase()}</h3> // Nombre del Pokémon en mayúsculas.
        <p>Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}</p> // Listar los tipos del Pokémon.
    `;

    return card; // Retornar la tarjeta creada.
}

// Función para obtener los tipos de Pokémon
async function fetchTypes(): Promise<void> {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type/"); // Solicitar los tipos de Pokémon desde la API.
        if (!response.ok) throw new Error("No se pudieron obtener los tipos"); // Si la respuesta no es exitosa, lanzar un error.

        const data = await response.json(); // Parsear la respuesta como JSON.
        updateTypeFilter(data.results); // Actualizar el filtro de tipos con los datos obtenidos.
    } catch (error) {
        console.error("Error al obtener los tipos:", error); // Capturar y mostrar cualquier error.
    }
}

// Función para actualizar el filtro de tipos en un elemento select
function updateTypeFilter(types: Type[]): void {
    const typeFilter = document.getElementById("type-filter") as HTMLSelectElement; // Obtener el elemento select de los tipos.
    typeFilter.innerHTML = '<option value="">Todos</option>'; // Añadir la opción para mostrar todos los Pokémon.

    types.forEach(type => { // Recorrer la lista de tipos obtenidos.
        const option = document.createElement("option"); // Crear una opción para cada tipo.
        option.value = type.name; // Establecer el valor del tipo.
        option.textContent = type.name.toUpperCase(); // Mostrar el nombre del tipo en mayúsculas.
        typeFilter.appendChild(option); // Añadir la opción al select.
    });

    typeFilter.addEventListener("change", filterByType); // Añadir un evento para filtrar los Pokémon cuando se seleccione un tipo.
}

// Función para filtrar los Pokémon según el tipo seleccionado
async function filterByType(): Promise<void> {
    const selectedType = (document.getElementById("type-filter") as HTMLSelectElement).value; // Obtener el tipo seleccionado del filtro.
    
    if (!selectedType) {
        await fetchPokemon(); // Si no se selecciona un tipo, mostrar todos los Pokémon.
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`); // Solicitar los Pokémon del tipo seleccionado.
        if (!response.ok) throw new Error("No se pudieron obtener Pokémon por tipo"); // Si la respuesta no es exitosa, lanzar un error.

        const data = await response.json(); // Parsear la respuesta como JSON.
        const filteredPokemon = data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon); // Obtener solo los Pokémon filtrados.
        displayPokemon(filteredPokemon); // Mostrar los Pokémon filtrados.
    } catch (error) {
        console.error("Error al filtrar Pokémon:", error); // Capturar y mostrar cualquier error.
    }
}
