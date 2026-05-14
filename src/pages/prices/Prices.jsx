import PriceCard from "../../components/priceCard/PriceCard";

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
    },
    {
      subtitle: "Most Popular",
      title: "Superior",
      price: "7.99",
      features: [
        "4K Ultra HD + HDR",
        "2 Concurrent Screens",
        "No Commercial Breaks",
        "Spatiall Audio Support",
      ],
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
    },
  ];

  return (
    <>
      <section>
        <h4>Pricing</h4>
        <h1>Choose your lens</h1>
        <p>
          Precision-enginereed streaming for the ultimate cinematic experience.
        </p>

        <div className="pricingGrid">
          {plans.map((plan, i) => (
            <PriceCard
              key={i}
              subtitle={plan.subtitle}
              title={plan.price}
              price={plan.price}
              features={plan.features}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </section>
    </>
  );
}
