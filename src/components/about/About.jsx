import { Link } from "react-router-dom"
import styles from "./About.module.css"
import saitama from "../../imagenes/saitama.png"

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
                    <h3>Status: Henry's Student</h3>
                    <h3>Age: 26</h3>
                    {/* <Link to={"linkedin.com/in/edward-vera-20a577188"}> */}
                    <h3>Linkedin: linkedin.com/in/edward-vera-20a577188</h3>
                    {/* </Link> */}
                </div>
                <div className={styles.imageContainer}>
                    <img src= {saitama} alt="Owner" />
                </div>
            </div>


        </div> 
    )
}