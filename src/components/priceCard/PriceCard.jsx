import styles from "./PriceCard.module.scss";
import Button from "../button/Button";

export default function PriceCard({
  subtitle,
  title,
  price,
  currency = "$",
  features,
  highlight,
  icon,
  badge,
  buttonVariant
}) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
      {badge && <span className={styles.badgeRibbon}>{badge}</span>}

      <h3>{subtitle}</h3>
      <h2>{title}</h2>

      <p>
        {currency}
        {price} <span className={styles.monthly}>/mo</span>
      </p>

      <ul>
        {features.map((item, i) => (
          <li key={i}>
            <img src={icon} alt="" className={styles.icon} />
            {item}
          </li>
        ))}
      </ul>

      <Button variant={buttonVariant}>Select {title}</Button>
    </div>
  );
}
