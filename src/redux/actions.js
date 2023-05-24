export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (character) => { //retorna unobjeto con la info del personaje
    return {
        type: ADD_FAV, 
        payload: character
    }
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

//exportando: { addFav, removeFav }