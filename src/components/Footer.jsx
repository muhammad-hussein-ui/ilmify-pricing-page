const footerLinkStyles =
  "rounded transition hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-accent";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-slate-900 px-6 py-12 text-slate-300"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-white">Ilmify Tutorial Centre</p>
          <p className="mt-1 text-sm">
            A sample pricing page built for a Zihntech Academy assignment.
          </p>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#top" className={footerLinkStyles}>
              Back to top
            </a>
          </li>
          <li>
            <a href="#plans" className={footerLinkStyles}>
              Plans
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-8 text-center text-sm text-slate-400">
        &copy; {year} Ilmify Tutorial Centre
      </p>
    </footer>
  );
}

export default Footer;
