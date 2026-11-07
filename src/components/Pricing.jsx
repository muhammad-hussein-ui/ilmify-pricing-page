import PricingCard from "./PricingCard";

// Sample data for the assignment. Each object becomes one card.
const plans = [
  {
    name: "Basic",
    price: "₦15,000",
    features: [
      "2 lessons per week",
      "Homework support",
      "Monthly progress note",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₦30,000",
    features: [
      "3 lessons per week",
      "Homework support",
      "Weekly progress note",
      "Mock tests each term",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦50,000",
    features: [
      "5 lessons per week",
      "One-to-one sessions",
      "Weekly progress call",
      "Mock tests each term",
      "Exam preparation",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="plans" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Choose your plan
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-300">
          Every plan is billed monthly.
        </p>

        {/* 1 column on phones, 3 columns from lg (1024px) up */}
        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
