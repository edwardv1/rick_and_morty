import React, { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import Error from "../error/Error";
import imgRick from "../../imagenes/rick.png"

export default function Form(props) {
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});  // errors = { email: tiene...., password: tiene...} 

    const handleChange = event => {
        const {name, value} = event.target; // { name:-, value:- }
        setUserData({
            ...userData,
            [name]: value //[email o password]: lo que escribe
        })
        // console.log(userData);
        setErrors(validation({
            ...userData,
            [name]: value
        }))   
    }

    const handleSubmit = event => {
        event.preventDefault(); //para que no se recargue la pagina cuando hagan click en Submit
        props.onSubmit(userData); 
    }
    
    return(
        <div className={styles.box}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.imageContainer}>
                        <img src={imgRick} alt="Rick&Morty"/>
                    </div>

                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <p className={styles.error}>{errors.email ? errors.email : null}</p>

                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <p className={styles.error}>{errors.password ? errors.password : null}</p>
                    <hr />

                    <button 
                    type="submit"
                    disabled={errors.email || errors.name || errors.password}
                    >Submit</button>
                </form>
            </div>
        </div>
    )

}
/*
1- Cargar lo que el usuario ingresa en "userData" {email, password}
2- Valido lo que hay en userData + lo que está ingresando {}
    Cargo al objeto en "errors"
3- Tomo "errors" y muestro mensajes al usuario
*/