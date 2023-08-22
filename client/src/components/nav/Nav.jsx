import React from "react";
import styles from "./Nav.module.css"
//import SearchBar from '../searchBar/SearchBar.jsx';
//import Random from "../random/Random";
import { NavLink } from "react-router-dom";


export default function Nav(props){

    return (
        <div className={styles.container}>
                <NavLink to="/home">
                    <button className={styles.button}>Home</button>
                </NavLink>
                
                <NavLink to="/about">
                    <button className={styles.button}>About</button>
                </NavLink>

                <NavLink to="/favorites">
                    <button className={styles.button}>Favorites</button>
                </NavLink>

                <NavLink to="/">
                <button className={styles.buttonLogOut} onClick={props.handleLogout}>Log out</button>
                </NavLink>
            {/* <hr color="black"/> */}

                {/* <SearchBar onSearch={props.onSearch} /> */}
                {/* <Random onSearch={props.onSearch}/> */}
                       
        </div>
    )
}
