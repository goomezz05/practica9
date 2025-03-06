const axios = require('axios');
const { DataFrame } = require('data-forge');

async function fetchPokemon() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const pokemonList = response.data.results;

        const dataFrame = new DataFrame(pokemonList);
        const analysis = dataFrame.toArray();

        document.getElementById('pokemonData').innerHTML = `
            <ul>
                ${analysis.map(p => `<li>${p.name}</li>`).join('')}
            </ul>
        `;

        document.getElementById('analysisData').innerHTML = `
            <p>Total de Pokémon obtenidos: ${analysis.length}</p>
        `;

    } catch (error) {
        console.error('Error al obtener los Pokémon:', error);
    }
}
 