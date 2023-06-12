import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ERROR } from "./actions";

const initialState = {
    myFavorites: [],   //Array de objetos(personaje)
    allCharacters: [],
    errors : false
};

const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        
        case ADD_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: false   //muestra el error en consola-browser, en caso de ingresar a una url distinta de /fav
            };

        case REMOVE_FAV:
        return { 
            ...state, 
            myFavorites: payload,
            allCharacters: payload,
            errors: false
        };

        case ERROR:
            return {
                ...state,
                errors: payload  //error.message
            }
        
        case FILTER:
            if(payload === "All"){
                const allCharactersCopy = [...state.allCharacters];
                return {
                    ...state, 
                    myFavorites: allCharactersCopy
                } 
            } else{
                const allCharactersCopyFilter = [...state.allCharacters]; //hago copia de arreglo de todos los chars, para que no se pise
                const filteredCharacters = allCharactersCopyFilter.filter( (character) => character.gender === payload)
                return {
                    ...state, 
                    myFavorites: filteredCharacters
                }
            }

        case ORDER: //recibe un orden por payload, A (Ascendente) o D (Descendente)
            return {
                ...state,
                myFavorites:
                    payload === "A" 
                    ? state.allCharacters.sort((a,b) => a.id - b.id) 
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }

        default:
            return {...state};
    }
}
//al haber un cambio de referencia (cuando pisamos el estado) redux se da cuenta que hubo un cambio, y puede avisar del mismo

export default reducer;