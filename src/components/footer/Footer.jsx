import styles from "./Footer.module.scss";
import worldIcon from "../../assets/images/icons/world.png";
import shareIcon from "../../assets/images/icons/share.png"

export default function Footer() {
  return (
    <>
      <footer>
        <h3>CINEPHILE</h3>
        <div>
          <h4>Privacy Policy</h4>
          <h4>Terms of Service</h4>
          <h4>Help Center</h4>
          <h4>API</h4>
        </div>
        <div>
          <p>&copy;2024 Cinephile. Precision Engineered Streaming</p>
        </div>
        <div>
          <img
            src={worldIcon} alt="world icon"
          />
          <img src={shareIcon} alt="share page icon" />
        </div>
      </footer>
    </>
  );
}
