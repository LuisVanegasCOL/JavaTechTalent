"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // Obtiene los primeros 151 Pokémon
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetchPokemon();
    yield fetchTypes();
}));
// Función para obtener Pokémon desde la API
function fetchPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL);
            if (!response.ok)
                throw new Error("No se pudieron obtener los Pokémon");
            const data = yield response.json();
            displayPokemon(data.results);
        }
        catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}
// Función para mostrar Pokémon en la pantalla
function displayPokemon(pokemonList) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById("pokemon-container");
        container.innerHTML = "";
        for (const pokemon of pokemonList) {
            const pokemonData = yield fetchPokemonData(pokemon.url);
            if (pokemonData) {
                const card = createPokemonCard(pokemonData);
                container.appendChild(card);
            }
        }
    });
}
// Función para obtener datos individuales de cada Pokémon
function fetchPokemonData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok)
                throw new Error("Error al obtener datos del Pokémon");
            return yield response.json();
        }
        catch (error) {
            console.error("Error al obtener datos del Pokémon:", error);
            return null;
        }
    });
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
function fetchTypes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://pokeapi.co/api/v2/type/");
            if (!response.ok)
                throw new Error("No se pudieron obtener los tipos");
            const data = yield response.json();
            updateTypeFilter(data.results);
        }
        catch (error) {
            console.error("Error al obtener los tipos:", error);
        }
    });
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
function filterByType() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedType = document.getElementById("type-filter").value;
        if (!selectedType) {
            yield fetchPokemon(); // Si no se selecciona un tipo, muestra todos los Pokémon
            return;
        }
        try {
            const response = yield fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
            if (!response.ok)
                throw new Error("No se pudieron obtener Pokémon por tipo");
            const data = yield response.json();
            const filteredPokemon = data.pokemon.map((p) => p.pokemon);
            displayPokemon(filteredPokemon);
        }
        catch (error) {
            console.error("Error al filtrar Pokémon:", error);
        }
    });
}
