import styles from "./Card.module.css"
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";



function Card(props) { //recibe ambas acciones(funciones) por props, y el estado global con myFavorites { addFav: f(character), remove(id)}
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }else{
         setIsFav(true)
         props.addFav(props) //props como argumento ya que recibe la info del personaje, pero ademas le estoy mandando addFav y removeFav
      }
   }

   useEffect(() => {
      props.allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.allCharacters]);  //===divUpdate
   //useEffect recorre todo myFacorites que viene del estado global y se fija si la card que tenemos montada esta dentro del array de Favorites
   //cada vez que cambie el array yo quiero que vuelva a comprobarlo ....

   const location = useLocation().pathname;
   return (
      <div className={styles.container}>

            <div className={styles.headCard}>  
            {props.id}
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
                        {/* <button onClick={() => props.onClose(props.id)}>X</button> */}
            {
            location === "/home"
            ? <button className={styles.delete} onClick={props.onClose}>X</button>
            : null
            }
            </div>

         <Link to={`/detail/${props.id}`}
         className={styles.text}>

         <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <h3>{props.status}</h3>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.origin}</h3> 
         </div>
         
         <div>
            <img src={props.image} alt={props.name} />
         </div>

      </Link>

      </div>
   );
}

// ! FUERA DEL COMPONENTE hago el dispatchToProps y el componente Card recibes las actions por medio del conect



const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character)=> dispatch(addFav(character)),   //necesita un personaje completo
      removeFav: (id)=> dispatch(removeFav(id))  //necesita un id
   }
}

const mapStateToProps = (state) => {  //lo que necesito del state, me traigo todos los favoritos
   return {
      allCharacters: state.allCharacters
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card); //null porque no necesito la info del estado global, solo quiero enviar la info de la card por dispatch


//<h2>{props.origin?.name}</h2> si existe el objeto props.origin muestra .name
//no lo coloco porque desde App.js me estan pasando  origin={Rick.origin.name}