import styles from "./Footer.module.scss";
import worldIcon from "../../assets/images/icons/world.png";
import shareIcon from "../../assets/images/icons/share.png";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.title}>
          <h3 className={styles.logo}>CINEPHILE</h3>
          <p className={styles.subtitle}>Precision Engineered Streaming.</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linksTop}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className={styles.linksBottom}>
            <p>Help Center</p>
            <p>API</p>
          </div>
        </div>
        <div className={styles.copy}>
          <p>
            <span className={styles.firstPart}>&copy;2024 Cinephile. </span>
            Precision Engineered Streaming.
          </p>
        </div>

        <div className={styles.icons}>
          <img src={worldIcon} alt="world icon" />
          <img src={shareIcon} alt="share page icon" />
        </div>
      </footer>
    </>
  );
}
