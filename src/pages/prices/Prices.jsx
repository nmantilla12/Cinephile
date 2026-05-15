import PriceCard from "../../components/priceCard/PriceCard";
import styles from "./Prices.module.scss";
import checkIcon from "../../assets/images/icons/check.png";
import starIcon from "../../assets/images/icons/star.png";

export default function Prices() {
  const plans = [
    {
      subtitle: "Essentials",
      title: "Basic",
      price: "3.99",
      features: [
        "1080p HD Streaming",
        "1 Concurrent Screen",
        "Ad-Supported Library",
      ],
      icon: checkIcon,
      buttonVariant: "outline"
    },
    {
      subtitle: "Most Popular",
      title: "Superior",
      price: "7.99",
      features: [
        "4K Ultra HD + HDR",
        "2 Concurrent Screens",
        "No Commercial Breaks",
        "Spatial Audio Support",
      ],
      icon: checkIcon,
      buttonVariant: "outline"
    },
    {
      subtitle: "Elite Choice",
      title: "Premium",
      price: "10.99",
      features: [
        "8K Streaming Ready",
        "Unlimited Screens",
        "Early Access Premieres",
        "Dolby Atmos Mastering",
      ],
      icon: starIcon,
      badge: "BEST VALUE",
      buttonVariant: "primary"
    },
  ];

  return (
    <>
      <section>
        <div className={styles.introduction}>
          <h4 className={styles.badge}>Pricing</h4>
          <h1 className={styles.title}>Choose your lens</h1>
          <p className={styles.description}>
            Precision-enginereed streaming for the ultimate cinematic
            experience.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {plans.map((plan, i) => (
            <PriceCard key={i} {...plan} />
          ))}
        </div>
      </section>
    </>
  );
}
