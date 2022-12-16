import { useEffect, useState } from "react";
import Nav from "../public/UI/Nav";
import styles from "../styles/Favorites.module.css";
import AddToForm from "./addtoform";
import { db, app } from "../util/firebase";
import { v4 } from "uuid";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  getDoc,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const Favorites = (props) => {
  const [userfavorites, setFavorites] = useState([]);

  const handleRemove = async (url: string) => {
    console.log(url);
    const docRef = await doc(db, "trends", props.user.username);
    const docSnap = await getDoc(docRef);

    const array = docSnap.data().favorites.filter((doc) => "" + doc != url);
    // docSnap.data().favorites = array;
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
      // getDocs(taskQuery).then((snap) => {
      //   const data = snap.docs.filter(
      //     (doc) => doc.data().username == props.user.username
      //   );
      //   console.log(data);
      // });
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
      {/* <Nav></Nav> */}
      <div className={styles.faves}>
        <h1>Your Favorites ❣</h1>
        {userfavorites.map((url) => (
          <div key={v4()} className={styles.imagediv}>
            <div>
              <img src={url} alt="hgas"></img>
            </div>
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
