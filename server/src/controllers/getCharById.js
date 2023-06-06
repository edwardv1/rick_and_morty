const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

module.exports = (req, res) => {
    const {id} = req.params;
    axios.get(URL + id)
    .then(response => {
        const { status, name, gender, species, origin, image } = response.data;
        const character = {
                id, name, gender, species, origin, image, status
            }
            return character.name 
            ? res.status(200).json(character)
            : res.status(404).send("Not found")
            })
    .catch (error => {
        return res.status(500).send(error.message);
    })
};                               //json

// if(data.id !== Number(id)) {
//     ;
// }


//(error) => res.status(500).send(error.message));  //.json({error:error.message})