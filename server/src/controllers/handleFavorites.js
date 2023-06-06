// let myFavorites = [];

// const postFav = (req, res) => {
//     myFavorites = myFavorites.push(req.body);
//     res.status(200).json(myFavorites); //envio un { [ favorites ] }
// }
// const deleteFav = (req, res) => {
//     const { id } = req.params;
//     myFavorites = myFavorites.filter( (charFav) => 
//     charFav.id !== Number(id)
//     );

//     res.status(200).json(myFavorites); //envio un { [ favorites ] }
// }

// module.exports = {
//     postFav,
//     deleteFav
// }


let myFavorites = [];  // [ {id:1}, {id:3}, ...]

const postFav = (req, res) => { 
    myFavorites.push(req.body);
    res.status(200).json(myFavorites); //envio un  [ favorites ] 
    //return para que JS no siga leyendo
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter( charFav => charFav.id !== id ); 
    //charFav.id llega como string, el igual que id
    res.status(200).json(myFavorites); 
}

module.exports = {
    postFav,
    deleteFav
}