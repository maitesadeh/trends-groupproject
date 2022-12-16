import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/Gallery.module.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { app, db } from "../public/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";

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
      // favorites: [...array, url],
    });

    // const taskQuery = query(collection(db, "trends"));
    // getDocs(taskQuery).then((snapshot) => {
    //   const data = snapshot.docs.filter(
    //     (doc) => doc.data().username == "Desmond Ababio"
    //   );
    //   console.log(data);
    // });
    const docRef = doc(db, "trends", props.user.username);
    setDoc(docRef, props.user);

    // addDoc(docRef, props.user)
    // const docSnap = getDoc(docRef);

    // console.log((await docSnap).data());
    // setDoc(doc(taskRef), props.user).then(() => null);
  };

  //   useEffect(() => {
  //     const fetchImages = async () => {
  //       let result = await storageRef.child("images").listAll();
  //       let urlPromises = result.items.map((imageRef) =>
  //         imageRef.getDownloadURL()
  //       );

  //       return Promise.all(urlPromises);
  //     };

  //     const loadImages = async () => {
  //       const urls = await fetchImages();
  //       setFiles(urls);
  //     };
  //     loadImages();
  //   }, []);

  return (
    <section className={styles.main}>
      <h2 className={styles.wel}>Welcome to the Gallery</h2>
      {/* <div className={styles.catalog}>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
        <a href={"/detail"}>
          <div className={styles.card}>
            <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG" />
            <div className={styles.content}>
              <div className={styles.like}>
                <h2 className={styles.name}>Cascadilla Gorge</h2>
                <button>Love</button>
              </div>
              <p className={styles.author}>
                by <strong>Urchin</strong>
              </p>
              <p className={styles.date}>Nov 13th</p>
            </div>
          </div>
        </a>
      </div> */}
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
