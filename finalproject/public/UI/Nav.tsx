import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link href="/">JUD</Link>
      </h1>
      <ul>
        <li>
          <Link href="gallery"> Gallery</Link>
        </li>
        <li>
          <Link href="favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
