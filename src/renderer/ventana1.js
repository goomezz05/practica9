const axios = require('axios');

async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    console.log("Buscando Pokémon:", pokemonName); // Para verificar el nombre del Pokémon
    console.log("URL solicitada:", url); // Ver si la URL es correcta

    try {
        const response = await axios.get(url);
        console.log("Datos recibidos:", response.data);

        const pokemon = response.data;
        document.getElementById('pokemonName').innerText = pokemon.name.toUpperCase();
        document.getElementById('pokemonImage').src = pokemon.sprites.front_default;
        const tipoTraducciones = {
            normal: "Normal",
            fire: "Fuego",
            water: "Agua",
            grass: "Planta",
            electric: "Eléctrico",
            ice: "Hielo",
            fighting: "Lucha",
            poison: "Veneno",
            ground: "Tierra",
            flying: "Volador",
            psychic: "Psíquico",
            bug: "Bicho",
            rock: "Roca",
            ghost: "Fantasma",
            dragon: "Dragón",
            dark: "Siniestro",
            steel: "Acero",
            fairy: "Hada"
        };
        

        document.getElementById('pokemonInfo').innerText = 
            `Tipo: ${pokemon.types.map(t => tipoTraducciones[t.type.name] || t.type.name).join(', ')}\n` +
            `Altura: ${pokemon.height}\n` +
            `Peso: ${pokemon.weight}\n`;    

    } catch (error) {
        console.error("Error al obtener el Pokémon:", error.message); // Mensaje de error detallado
        document.getElementById('pokemonName').innerText = "Pokémon no encontrado.";
        document.getElementById('pokemonImage').src = "";
        document.getElementById('pokemonInfo').innerText = "";
    }
}
