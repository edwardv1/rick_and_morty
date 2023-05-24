import { useSelector } from "react-redux";
import Card from "../card/Card";

function Favorites(props) {
    
    const mapStateToProps = useSelector(state => state.myFavorites) //del estado traeme el arreglo myFavorites

    const cardsContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
     }

    return (
        <div style={cardsContainer}> 
            {
            mapStateToProps.map( (character) => {
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