import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],   //Array de objetos(personaje)
    allCharacters: []
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]   //para no ir pisando mientras filtremos
            }
        case REMOVE_FAV:
            const filteredFavs = state.allCharacters.filter((favorite) => favorite.id !== Number(action.payload));
            return{
                ...state,
                //myFavorites: state.myFavorites.filter( (character) => character.id !== Number(action.payload) )
                myFavorites: filteredFavs,
                allCharacters: filteredFavs  //Elimina tanto en favoritos como en todos los cards
            }
        case FILTER:
            if(action.payload === "All"){
                const allCharactersCopy = [...state.allCharacters];
                return {
                    ...state, 
                    myFavorites: allCharactersCopy
                } 
            } else{
                const allCharactersCopyFilter = [...state.allCharacters]; //hago copia de arreglo de todos los chars, para que no se pise
                const filteredCharacters = allCharactersCopyFilter.filter( (character) => character.gender === action.payload)
                return {
                    ...state, 
                    myFavorites: filteredCharacters
                }
            }
        case ORDER: //recibe un orden por payload, A (Ascendente) o D (Descendente)
            return {
                ...state,
                myFavorites:
                    action.payload === "A" 
                    ? state.allCharacters.sort((a,b) => a.id - b.id) 
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }
        default:
            return {...state};
    }
}
//al haber un cambio de referencia (cuando pisamos el estado) redux se da cuenta que hubo un cambio, y puede avisar del mismo

export default reducer;