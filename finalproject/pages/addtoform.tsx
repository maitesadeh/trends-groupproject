import Button from "../public/UI/Button";
import styles from "../styles/Favorites.module.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../public/firebase";
import { useState } from "react";

import { v4 } from "uuid";

const AddToForm = (props) => {
  const [image, setImage] = useState(null);
  const getImage = (e) => {
    setImage(e.target.files[0]);
  };

  const x = getStorage(app);
  console.log(props.users);

  const uploadImage = (e) => {
    e.preventDefault();
    if (image == null) return;
    let imageName = image.name + v4();
    const imageRef = ref(x, `allImages/ ${imageName}`);
    const userImageRef = ref(x, `${props.user.username}/ ${imageName}`);

    uploadBytes(imageRef, image).then(() => {});
    uploadBytes(userImageRef, image).then(() => {});
  };

  return (
    <form onSubmit={(e) => uploadImage(e)}>
      <div className={styles.faves}>
        <h1>Add your photo here!</h1>
      </div>

      <div className={styles.entireForm}>
        <div className={styles.form}>
          <h2>Image</h2>
          <input type="file" required onChange={(e) => getImage(e)}></input>
        </div>
        <div className={styles.form}>
          <h2>Description</h2>
          <textarea></textarea>
        </div>

        <button className={styles.form} id={styles.btn}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddToForm;
