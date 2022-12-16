import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/Gallery.module.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { app, db } from "../public/firebase";
import { doc, setDoc } from "firebase/firestore";

const Gallery = (props) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const storage = getStorage(app);

    const imageListRef = ref(storage, "allImages/");
    const url = async () => {
      listAll(imageListRef).then((response) => {
        response.items.forEach((item) =>
          getDownloadURL(item).then((url) =>
            setImageList((prev) => [...prev, url])
          )
        );
      });
    };

    url();
  }, []);

  let galleryImages = [...new Set(imageList)];

  const handleAdd = async (url: String) => {
    props.changeuser({
      ...props.user,

      favorites: [...new Set(props.user.favorites), url],
    });

    const docRef = doc(db, "trends", props.user.username);
    setDoc(docRef, props.user);
  };

  return (
    <section className={styles.main}>
      <h2 className={styles.wel}>Welcome to the Gallery</h2>

      {props.isSignedIn && (
        <div className={styles.gallery}>
          {galleryImages.map((url) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.img} key={url}>
                <img src={url} alt="askjasa" width="400px"></img>

                <div className={styles.like}>
                  <button
                    onClick={() => handleAdd(url)}
                    className={styles.button}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Gallery;
