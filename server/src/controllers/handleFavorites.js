let myFavorites = [];  // [ {id:1}, {id:3}, ...]

const postFav = (req, res) => { 
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites); //envio un  [ favorites ] 
    //return para que JS no siga leyendo
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter( charFav => charFav.id !== id ); 
    //charFav.id llega como string, el igual que id
    return res.status(200).json(myFavorites); 
}

module.exports = {
    postFav,
    deleteFav
}