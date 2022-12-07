import Nav from "../public/UI/Nav";
import styles from "../styles/Favorites.module.css"
import AddToForm from "./addtoform";


const form = () => {
    return (
      <div>
        {/* <div className={styles.faves}></div> */}
          <Nav></Nav>
        {/* <div className={styles.faves}>
          <h2>Photographer</h2>
          <h2>Description</h2>
          <h2>Upload Picture</h2> */}
          <AddToForm/>
        {/* </div> */}
      </div>
    );
  };

export default form;