import Card from '../card/Card.jsx';

export default function Cards({ characters, onClose }) {  //haciendolo asi evito tener que escribir props.character
   //let { characters } = props;
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }
   return (
      <div style={cardsContainer}>
      {
         characters.map( character => (
            <Card 
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            onClose={() => onClose(character.id)}
         />
         ))
      }
      </div>
   )
}
//ejecuto la funcion onClose ya que en este componente tengo el id del character, se lo paso a Car ejecutado
//Ademas, no puede eliminarse una Card desde su propia Card
/*
<Cards>
   <Card />
   <Card />
   <Card />
</Cards>
*/