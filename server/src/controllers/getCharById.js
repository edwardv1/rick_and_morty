const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

//Async await
async function getCharById(req, res) {
    const {id} = req.params;
    try {
      const response = await axios.get(URL + id);
      const { status, name, gender, species, origin, image } = response.data;
      const character = {
        id, name, gender, species, origin, image, status
      }
      return character.name 
            ? res.status(200).json(character)
            : null
    } catch (error) {
        return res.status(500).send(error.message);
    }
}; 

module.exports = getCharById;