import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.container}>

         {/* <div className={styles.box}>

            <div className={styles.id}>
               <h4>{props.id}</h4>
            </div> */}
         
            <div className={styles.buttonContainer}>
            {/* <button onClick={() => props.onClose(props.id)}>X</button> */}
               <button onClick={props.onClose}>X</button>
            </div>

         {/* </div> */}

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
//<h2>{props.origin?.name}</h2> si existe el objeto props.origin muestra .name
//no lo coloco porque desde App.js me estan pasando  origin={Rick.origin.name}