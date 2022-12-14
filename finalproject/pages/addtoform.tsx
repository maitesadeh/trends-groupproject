import Button from "../public/UI/Button";
import styles from "../styles/Favorites.module.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../public/firebase";
import { useState } from "react";

import { v4 } from "uuid";

const AddToForm = () => {
  const [image, setImage] = useState(null);
  const getImage = (e) => {
    setImage(e.target.files[0]);
  };

  const x = getStorage(app);

  const uploadImage = (e) => {
    e.preventDefault();
    if (image == null) return;
    const imageRef = ref(x, `Desmond Ababio/ ${image.name + v4()}`);
    console.log(imageRef);

    uploadBytes(imageRef, image).then(() => {});
  };

  return (
    <form onSubmit={(e) => uploadImage(e)}>
      <div className={styles.faves}>
        <h1>Add your photo here!</h1>
      </div>
      {/* <div className={styles.form}>
        <h2>Photographer</h2>
        <textarea></textarea>
    </div> */}
      <div className={styles.form}>
        <label htmlFor="Photographer">
          <h2>Photographer:</h2>{" "}
        </label>
        <input required></input>
      </div>

      <div className={styles.form}>
        <h2>Description</h2>
        <textarea></textarea>
      </div>

      <div className={styles.form}>
        <h2>Image</h2>
        <input type="file" required onChange={(e) => getImage(e)}></input>
      </div>

      <button className={styles.form} id={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default AddToForm;
