import styles from "./PriceCard.module.scss";
import Button from "../button/Button";

export default function PriceCard({
  subtitle,
  title,
  price,
  currency = "$",
  features,
  highlight,
}) {
  return (
    <>
      <div className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
        <h3>{subtitle}</h3>
        <h2>{title}</h2>

        <p>{currency}{price}/mo</p>

        <ul>
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <Button variant={highlight ? "primary" : "outline"}>
          Select {title}
        </Button>
      </div>
    </>
  );
}
