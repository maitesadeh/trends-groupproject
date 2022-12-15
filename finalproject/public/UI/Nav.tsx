import Link from "next/link";
import { useContext } from "react";
import styles from "./Nav.module.css";
import userContext from "./UserContext";

const Nav = (props) => {
  const ctx = useContext(userContext);

  return (
    <nav className={styles.navbar}>
      <h1>
        <Link href="/">MUD</Link>
      </h1>
      {ctx.isSignedIn ? (
        <div className="pages">
          <div className="item">
            <Link href="gallery"> Gallery</Link>
          </div>

          <div className="item">
            <Link href="myphotos">My Photos</Link>
          </div>
          <div className="item">
            <Link href="favorites">Favorites</Link>
          </div>
          <div className="item">
            <Link href="form">Form</Link>
          </div>
        </div>
      ) : (
        <p style={{ fontStyle: "italic", color: "white" }}>
          You have not signed in yet
        </p>
      )}
    </nav>
  );
};

export default Nav;
