import React, { useEffect, useState } from "react";

import styles from "../styles/Gallery.module.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { app } from "../public/firebase";

const MyPhotos = (props: { user: { username: String } }) => {
  const [imageList, setImageList] = useState([]);

  const storage = getStorage(app);

  const imageListRef = ref(storage, `${props.user.username}/`);

  useEffect(() => {
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
  }, [imageListRef]);

  let galleryImages = [...new Set(imageList)];

  return (
    <div className={styles.gallery}>
      {galleryImages.map((url) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={styles.img} key={url}>
            <img src={url} alt="askjasa" width="400px"></img>
          </div>
        );
      })}
    </div>
  );
};

export default MyPhotos;
