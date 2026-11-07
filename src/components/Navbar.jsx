import { useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" },
];

// One string of classes shared by every link in this file.
const linkStyles =
  "rounded transition hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand dark:hover:text-amber-300";

function Navbar() {
  // open remembers whether the phone menu is showing. setOpen changes it and redraws the page.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded text-xl font-bold text-brand transition hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand dark:text-teal-300"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
            I
          </span>
          Ilmify
        </a>

        {/* Desktop links: hidden on phones, a row from md (768px) up */}
        <ul className="hidden items-center gap-8 font-medium text-slate-600 md:flex dark:text-slate-300">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={`${linkStyles} px-1`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button: visible on phones, hidden from md up */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="rounded p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Only drawn while open is true */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-slate-200 px-6 py-2 font-medium text-slate-700 md:hidden dark:border-slate-800 dark:text-slate-200"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkStyles} block py-3`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
