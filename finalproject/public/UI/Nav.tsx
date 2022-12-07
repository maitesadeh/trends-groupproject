import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link href="/">MUD</Link>
      </h1>
      <div className="pages">
        <div className="item">
          <Link href="gallery"> Gallery</Link>
        </div>
        <div className="item">
          <Link href="favorites">Favorites</Link>
        </div>
        <div className="item">
          <Link href="form">Form</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
