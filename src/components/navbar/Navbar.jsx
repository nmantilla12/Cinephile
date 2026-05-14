import { Link } from "react-router";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        Movies
      </Link>
      <Link to="/prices" className={styles.link}>
        Pricing
      </Link>
      <Link to="/contact" className={styles.link}>
        Contact
      </Link>
    </nav>
  );
}
