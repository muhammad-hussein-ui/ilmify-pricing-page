import Button from "./Button";

function Hero() {
  return (
    <section
      id="top"
      className="bg-brand px-6 py-20 text-center text-white md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Simple monthly plans for every learner
        </h1>
        <p className="mt-6 text-lg text-white/85">
          Ilmify Tutorial Centre keeps its pricing clear. Compare the plans,
          pick the one that suits your child, and get started.
        </p>
        <div className="mt-10">
          <Button href="#plans" variant="accent">
            See the plans
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
