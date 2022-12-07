import Nav from "../public/UI/Nav";
import styles from "../styles/Gallery.module.css"

const gallery = () => {
  return (
    <section className={styles.main}>
      <Nav></Nav>
      <div className={styles.catalog}>
        <div className={styles.card}>
          <img src="/images/cascadilla.jpg"/>
          <div className={styles.content}>
            <h2 className={styles.name}>Cascadilla Gorge</h2>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/cascadilla.jpg"/>
          <div className={styles.content}>
            <h2 className={styles.name}>Cascadilla Gorge</h2>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/cascadilla.jpg"/>
          <div className={styles.content}>
            <h2 className={styles.name}>Cascadilla Gorge</h2>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/cascadilla.jpg"/>
          <div className={styles.content}>
            <h2 className={styles.name}>Cascadilla Gorge</h2>
            <p className={styles.author}>by <strong>Urchin</strong></p>
            <p className={styles.date}>Nov 13th</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default gallery;
