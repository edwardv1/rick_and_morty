export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {  // A: ascendente o D: descendente
    return {
        type: ORDER,
        payload: order
    }
}

//exportando: { addFav, removeFav }