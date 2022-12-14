import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "../public/UI/Nav";
import styles from "../styles/Gallery.module.css";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { app } from "../public/firebase";

const Gallery = () => {
  const [imageList, setImageList] = useState([]);

  const storage = getStorage(app);

  const imageListRef = ref(storage, "Desmond Ababio/");
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
  }, []);

  console.log(imageList);

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
      <Nav></Nav>
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

      {imageList.map((url) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={styles.img} key={url}>
            <img src={url} alt="askjasa" width="400px"></img>
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
