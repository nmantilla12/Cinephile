import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
import { Link } from "react-router";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">CINEPHILE</Link>
      </div>

      <Navbar />

      <div className={styles.actions}>
        <button className={styles.signin}>Sign in</button>
        <Button variant="primary">Get Access</Button>
      </div>
    </header>
  );
}
