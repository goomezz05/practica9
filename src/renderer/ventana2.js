const axios = require('axios');
const DataFrame = require('data-forge').DataFrame;

async function analizarPokemon() {
    const pokemonName = document.getElementById('pokemonInputAnalisis').value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await axios.get(url);
        const pokemon = response.data;

        const estadisticasTraducciones = {
            hp: "PS",
            attack: "Ataque",
            defense: "Defensa",
            "special-attack": "Ataque Especial",
            "special-defense": "Defensa Especial",
            speed: "Velocidad"
        };
        

        // Obtener las estadísticas con nombres en español
        const stats = pokemon.stats.map(stat => ({
            nombre: estadisticasTraducciones[stat.stat.name] || stat.stat.name,
            valor: stat.base_stat
        }));

        // Crear la tabla de estadísticas
        const df = new DataFrame(stats);
        let html = `<h2>${pokemon.name.toUpperCase()}</h2>`;
        html += `<img src="${pokemon.sprites.front_default || 'https://via.placeholder.com/150'}" alt="Imagen de ${pokemon.name}"><br>`;
        html += "<h3>Estadísticas del Pokémon</h3>";
        html += "<table border='1'><tr><th>Estadística</th><th>Valor</th></tr>";

        df.forEach(row => {
            html += `<tr><td>${row.nombre}</td><td>${row.valor}</td></tr>`;
        });

        html += "</table>";
        document.getElementById('analisisdata').innerHTML = html;

    } catch (error) {
        console.error("Error al analizar el Pokémon:", error.message);
        document.getElementById('analisisdata').innerText = "Error al analizar el Pokémon.";
    }
}
