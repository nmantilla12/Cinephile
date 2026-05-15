import style from "./Hero.module.scss";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <>
      <section className={style.heroSection}>
        <h4 className={style.badge}>ULTRA HD TREAMING</h4>
        <h1 className={style.mainTitle}>
          Discover <span>Pure</span> Cinema.
        </h1>
        <p className={style.description}>
          Precision-engineered streaming for the world's most dedicated
          cinephiles.
        </p>
        <div className={style.buttonsContainer}>
          <Button variant="primary">Get Access</Button>
          <Button variant="outline">View Catalog</Button>
        </div>
      </section>
    </>
  );
}
