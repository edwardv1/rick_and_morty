import styles from "./Error.module.css"

export default function Error(props) {

    return (
        <div className={styles.cont}>
            <div className={styles.container}>
                <h1>Error 404</h1>
                <p>The page you are looking for does not exist</p>
                {window.alert("Error 404. ¡Page not found!")}
            </div>
        </div>
    )
}