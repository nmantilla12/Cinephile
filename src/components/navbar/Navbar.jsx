import { Link } from "react-router";
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.headerNav}>
      <Link to={"/"} className={styles.navLink}>
        Movies
      </Link>
      <Link to={"/prices"} className={styles.navLink}>
        Pricing
      </Link>
      <Link to={"/contact"} className={styles.navLink}>
        Contact
      </Link>
    </nav>
  );
}
