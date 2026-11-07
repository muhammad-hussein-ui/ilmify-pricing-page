import Button from "./Button";

// Four props: name, price, features (an array) and highlighted (true or false).
function PricingCard({ name, price, features, highlighted }) {
  // A ternary picks one string of classes or the other.
  const cardStyles = highlighted
    ? "scale-105 bg-brand text-white shadow-xl"
    : "border border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100";

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-8 transition ${cardStyles}`}
    >
      <h3 className="text-2xl font-bold">{name}</h3>

      {/* Drawn only when highlighted is true */}
      {highlighted && (
        <p className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-slate-900">
          Most popular
        </p>
      )}

      <p className="mt-4 text-4xl font-bold">
        {price}
        <span className="text-base font-medium opacity-80"> / month</span>
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span aria-hidden="true">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="#contact" variant={highlighted ? "accent" : "primary"}>
          Choose {name}
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;
