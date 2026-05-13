import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
import { Link } from "react-router";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className={styles.headerCinephile}>
      <div className={styles.headerLogo}>
        <h1>CINEPHILE</h1>
      </div>

      <Navbar />

      <Button variant="primary">Get Access</Button>
      <Button variant="outline">View Catalog</Button>
    </header>
  );
}
