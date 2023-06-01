const axios = require("axios");

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,   //id: id?
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status

        };
        //El response no hace falta transformarlo a JSON pq estoy usando axios, si usara fetch si habria que transformarlo
        //seteamos el Header
        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character));
    })
    .catch((error) => 
    res
    .writeHead(500, {"Content-type": "text/plain"})
    .end(`Error 500. Character with id ${id} not found`) //error.message
    //tambien lo puedo hacer de esta manera:
    //.end({"message": "Error"})    como(JSON)
    //Desde el front puedo chequear si me llega un objeto con propiedad message,
    //es que hubo un error en el back al buscar el char
    );
}
module.exports = getCharById;