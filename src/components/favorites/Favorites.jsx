import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

function Favorites(props) {
    
    const [aux, setAux] = useState(false);
    
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.myFavorites) //del estado traeme el arreglo myFavorites

    const cardsContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
     }
    
    const handleOrder = event => {
        dispatch(orderCards(event.target.value));
        aux ? setAux(false) : setAux(true);
    }
    const handleFilter = event => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div style={cardsContainer}> 
            <div>
                <select name="order" onChange={handleOrder}>
                    {/* <option value="order" disabled="disabled">Order By</option> */}
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select name="filter" onChange={handleFilter}>
                    {/* <option value="filter" disabled="disabled">Filter By</option> */}
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {
            favorites.map( (character) => {
                return (
                    <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin?.name}
                    image={character.image}
                    />
                )
            })
            }
        </div>
    )
}
export default Favorites;