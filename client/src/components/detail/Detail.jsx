import axios from "axios";
import styles from "./Detail.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
    const { id } = useParams(); //Recibo el valor de id pasado por parametro del path
    const [character, setCharacter] = useState({});

    //[NOTA]: no modificaremos el archivo Detail.jsx 
    //porque suele ser más conveniente utilizar promesas en los useEffect que utilizar async/await.
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
// este código es el que buscará al personaje de la API 
//cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.

    return (
        <div className={styles.cont}>
            <div>
                <hr />
                <h1 className={styles.detail}>DETAIL</h1>
            </div>
            <div className={styles.container}>
                <div>
                    <h2>{character.name}</h2>
                    <h3>Specie: {character.species}</h3>
                    <h3>Status: {character.status}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin?.name}</h3>
                </div>
                <div className={styles.imageContainer}>
                    <img src={character.image} alt={character.name} />
                </div>
            </div>
        </div>
    )
}