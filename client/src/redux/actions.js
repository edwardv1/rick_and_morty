import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ERROR = "ERROR";
export const ENDPOINT = "http://localhost:3001/rickandmorty/fav";

//poder informar error en caso de que el addFav o deleteFav falle
//veo mensaje de error en la consola del browser pero, la pagina sigue ejecutandose

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post(ENDPOINT, character);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      } catch (error) {
         //window.alert("An error has occurred while adding a favorite!");
         return dispatch({
            type: "ERROR",
            payload: error.message
         })
      }
   };
};

export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${ENDPOINT}/${id}`);
         
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      } catch (error) {
         //window.alert("An error has occurred while deleting a favorite!");
         return dispatch({
            type: "ERROR",
            payload: error.message
         })
      }
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