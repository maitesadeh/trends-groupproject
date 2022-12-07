import Button from "../public/UI/Button";
import { FormEventHandler, useState } from "react"
import styles from "../styles/Favorites.module.css"

const AddToForm = () => {

// return <<input type="file" ></input>
return <form>
    <div className={styles.faves}>
        <h1>Add your photo here!</h1>
    </div>
    {/* <div className={styles.form}>
        <h2>Photographer</h2>
        <textarea></textarea>
    </div> */}
    <div className={styles.form}>
        <label htmlFor="Photographer"><h2>Photographer:</h2> </label>
        <input required></input>
    </div>
    
    <div className={styles.form}>
        <h2>Description</h2>
        <textarea></textarea>
    </div>

    <div className={styles.form}>
        <h2>Image</h2>
        <input type="file" required></input>
    </div>
    
    <button className={styles.form} id={styles.submit}>Submit</button>
</form>
}

export default AddToForm
