import { useEffect, useState } from "react";
import Nav from "../public/UI/Nav";
import styles from "../styles/Favorites.module.css";
import AddToForm from "../public/UI/addtoform";
import { db, app } from "../util/firebase";
import { v4 } from "uuid";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Favorites = (props: {
  user: { username: string; favoriteNum: number };
  changeuser: (arg0: any) => void;
  isSignedIn: unknown;
}) => {
  const [userfavorites, setFavorites] = useState([]);

  const handleRemove = async (url: string) => {
    const docRef = await doc(db, "trends", props.user.username);
    const docSnap = await getDoc(docRef);

    const array = docSnap
      .data()
      .favorites.filter((doc: string) => "" + doc != url);

    setFavorites([...new Set(array)]);

    props.changeuser({
      ...props.user,
      favoriteNum: props.user.favoriteNum + 1,
      favorites: array,
    });

    setDoc(docRef, props.user);
  };

  useEffect(() => {
    if (props.isSignedIn) {
      const fetchData = async () => {
        const docRef = await doc(db, "trends", props.user.username);
        const docSnap = await getDoc(docRef);

        let galleryImages = [...new Set(docSnap.data().favorites)];

        setFavorites(galleryImages);
      };

      fetchData();
      // }
    }
  }, [props.isSignedIn, props.user.username]);

  return (
    <div>
      <h1>Your Favorites ❣</h1>
      <div className={styles.favorites}>
        {userfavorites.map((url) => (
          <div key={v4()} className={styles.imagediv}>
            <img src={url} alt="hgas"></img>
            <button onClick={() => handleRemove(url)}>
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
