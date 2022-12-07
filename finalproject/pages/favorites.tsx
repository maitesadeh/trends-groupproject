import Nav from "../public/UI/Nav";
import styles from "../styles/Favorites.module.css"
import AddToForm from "./addtoform"

const favorites = () => {
  return (
    <div>
      <Nav></Nav>
      <div className={styles.faves}>
        <h1>Your Favorites ❣</h1>
      </div>
    </div>
  );
};

export default favorites;
