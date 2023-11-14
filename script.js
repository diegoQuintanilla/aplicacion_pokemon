const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('buscarPokemon').addEventListener('click',pedirDatos);

function pedirDatos() {
    let pokemonInfo = document.getElementById('pokemon').value;

    fetch(`${urlBase}${pokemonInfo.toLowerCase()}`)
    .then(response => response.json())
    .then(response => mostrarDatos(response))
}

function mostrarDatos(response){
    const datos = document.getElementById('datos');
    datos.textContent = "";

    const URLimagen = response.sprites.other.dream_world.front_default;
    const imagenInfo = document.createElement('img');
    imagenInfo.src = URLimagen;

    datos.appendChild(imagenInfo);
}


