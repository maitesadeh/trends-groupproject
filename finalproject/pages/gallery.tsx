import Nav from "../public/UI/Nav";
import styles from "../styles/Gallery.module.css"

const gallery = () => {
  return (
    <section className={styles.main}>
      <Nav></Nav>
      <div className={styles.catalog}>
        <div className={styles.card}>
          <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG"/>
          <div className={styles.content}>
          <div className={styles.like}>
              <h2 className={styles.name}>Cascadilla Gorge</h2>
              <button>Love</button>
            </div>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG"/>
          <div className={styles.content}>
          <div className={styles.like}>
              <h2 className={styles.name}>Cascadilla Gorge</h2>
              <button>Love</button>
            </div>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG"/>
          <div className={styles.content}>
          <div className={styles.like}>
              <h2 className={styles.name}>Cascadilla Gorge</h2>
              <button>Love</button>
            </div>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG"/>
          <div className={styles.content}>
          <div className={styles.like}>
              <h2 className={styles.name}>Cascadilla Gorge</h2>
              <button>Love</button>
            </div>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://i0.wp.com/lh4.ggpht.com/_-rpMcGsgiFQ/SgG2Frp0d5I/AAAAAAAADMw/qSGvxSh-Z9M/s512/DSC_0036.JPG"/>
          <div className={styles.content}>
            <div className={styles.like}>
              <h2 className={styles.name}>Cascadilla Gorge</h2>
              <button>Love</button>
            </div>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gallery;
