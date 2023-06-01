import React from "react";
import styles from "./Nav.module.css"
import SearchBar from '../searchBar/SearchBar.jsx';
import Random from "../random/Random";
import { NavLink } from "react-router-dom";


export default function Nav(props){

    return (
        <div className={styles.box}>
            <div>
                <NavLink to="/">
                <button 
                className={styles.button3}
                onClick={props.handleLogout}
                >Log out</button>
                </NavLink>
            </div>
            {/* <div>
                <p 
                className={styles.title}
                style={{ fontFamily: 'rym' }}
                > RICK & MORTY </p>
            </div> */}

            <div className={styles.container}>
                <NavLink to="/home">
                    <button className={styles.button1}>Home</button>
                </NavLink>
                
                <NavLink to="/about">
                    <button className={styles.button2}>About</button>
                </NavLink>

                <NavLink to="/favorites">
                    <button className={styles.button2}>Favorites</button>
                </NavLink>

                <SearchBar onSearch={props.onSearch} />
                <Random onSearch={props.onSearch}/>
            </div>
        </div>
    )
}
