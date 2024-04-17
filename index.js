const axios = require('axios');

const createId = async (id) =>{
    const response = await axios.post('https://pokeapi.co/api/v2/pokemon/ditto',{
   id,
});
console.log(response.data)
}
createId('id');



/* OBTENER EL NOMBRE DEL POKEMON*/
const obtenerNombre = async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/',
)
    console.log(response.data);
}

obtenerNombre();


/* OBTENER EL Typo DEL POKEMON*/
const obtenerTipo = async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/type/',)
    console.log(response.data);
}
obtenerTipo();


/* El/los tipo/s de el/los pokémon. (10 puntos)*/
const obtenerDatos = async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/type/')
    console.log(response.data);
}
obtenerDatos();


/*● Su altura y su peso. (10 puntos) */

const obtenerAlturaPeso = async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/height/')
    console.log(response.data);
}
obtenerAlturaPeso();



