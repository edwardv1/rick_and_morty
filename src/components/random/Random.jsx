import { useState } from "react";
import styles from "./Random.module.css";



export default function Random(props) {
const [idRandom, setIdRandom] = useState(Math.floor(Math.random()*825)); 
//Le agrego un valor inicial a idRandom ya que si no lo hago el primer
//valor que retorna es 0, asi evito que 
const handleIdRandom = (min=1, max=825) => {
  const id = Math.floor((Math.random() * (max - min + 1)) + min);
  console.log("indexRandom: " + id);
  setIdRandom(id); //le agrego el id aleatorio a idRandom
  console.log("idRandom: " + idRandom);
  props.onSearch(idRandom); //Lo envio de regreso al componente padre
}

return (
    <div className={styles.container}>
        <button onClick={() => handleIdRandom()}>Random Character</button>
    </div>
    )
}
//Evaluo si existe un personaje random