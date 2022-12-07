import Nav from "../public/UI/Nav";
import styles from "../styles/Favorites.module.css"

const form = () => {
    return (
      <div>
        <Nav></Nav>
        <div className={styles.faves}>
          <h2>Photographer</h2>
          <h2>Description</h2>
          <h2>Upload Picture</h2>
        </div>
      </div>
    );
  };

export default form;