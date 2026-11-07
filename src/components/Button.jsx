// variant has a default value: if the parent does not pass one, it is "primary".
function Button({ href, children, variant = "primary" }) {
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark focus:ring-brand",
    accent: "bg-accent text-slate-900 hover:bg-amber-400 focus:ring-accent",
  };

  return (
    <a
      href={href}
      className={`inline-block rounded-full px-6 py-3 font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;
