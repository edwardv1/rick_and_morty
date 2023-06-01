import { useState } from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   const [id, setId] = useState("");

   const [inputValue, setInputValue] = useState(""); //Este estado lo creo para poder borrar el input sin tener que pisar lo que ya esta en el Estado id

   const handleChange = event => {
      const {value} = event.target; //Me traigo el id del personaje
      //console.log("Value: ", value);
      setId(value); //modifica el estado, pisa lo que tiene el estado id ("")
      setInputValue(value); //Hago lo mismo en el otro Estado
   }
   
   const handleButtonClick = (id) => {
      props.onSearch(id)
      //setId(''); Enves de pisar el Estado id, borro el input en el Estado inpuValue
      //El inputValue esta ligado al value del input
      setInputValue("");
   };
    
   return (
      <div className={styles.container}>
         <input 
         type="text"
         placeholder="Enter an Id..."
         name="search"
         id="search"
         value={inputValue}
         onChange={handleChange}
         />
         {/* <button onClick={() => props.onSearch(id)}>Agregar</button> */}
         <button onClick={() => handleButtonClick(id)}>Add</button>
      </div>
   );
}
//Cada vez que haga click ejecuta la funcion pasandole por parametro el id del character