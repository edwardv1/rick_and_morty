import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: []   //Array de objetos(personaje)
};


const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter( (character) => character.id !== Number(action.payload) )
            }
        default:
            return {...state};
    }
}
//al haber un cambio de referencia (cuando pisamos el estado) redux se da cuenta que hubo un cambio, y puede avisar del mismo

export default reducer;