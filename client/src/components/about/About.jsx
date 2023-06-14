import { Link } from "react-router-dom"
import styles from "./About.module.css"
import saitama from "../../imagenes/saitama.png"
import linkedIn from "../../imagenes/LinkedIn_logo_initials.png"

export default function About(props) {
    return (
       <div className={styles.cont}>
            <div>
                <hr />
                <h1 className={styles.about}>ABOUT</h1>
            </div>
            <div className={styles.container}>
                <div>
                    <h2>EDWARD VERA</h2>
                    <h3>Nationality: Venezuelan</h3>
                    <h3>Current location: Argentina - San Luis</h3>
                    <h3>Status: Henry's Student</h3>
                    <h3>Age: 26</h3>
                    <a
                    target="blank" 
                    href="https://www.linkedin.com/in/edward-vera-20a577188"
                    >
                        <div className={styles.contactContainer}>
                            <h1 className={styles.linkedin}>Find me on Linkedin</h1> 
                            <img style={{ width: '40px', height: 'auto' }} src={linkedIn} alt="linkedin logo" />  
                        </div>
                    </a>  
                </div>
                <div className={styles.imageContainer}>
                    <img src= {saitama} alt="Owner" />
                </div>
            </div>


        </div> 
    )
}

// Blank es para que me redirija a otra pagina sin que se me cierre la mia.
// Href: url donde quiero que me lleve


{/* <Link to={"linkedin.com/in/edward-vera-20a577188"}>
    <h3>Prueba Error 404</h3>
</Link> */}