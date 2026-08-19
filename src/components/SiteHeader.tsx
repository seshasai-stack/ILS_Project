import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ilsLogo from "@/assets/ils-logo.png";

type NavItem = {
  to: "/" | "/summit" | "/partners" | "/about";
  label: string;
};

const nav: readonly NavItem[] = [
  // { to: "/", label: "Home" },
  // { to: "/summit", label: "The Summit" },
  // { to: "/partners", label: "Partners" },
  // { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        {/* LOGO — destination for the large hero-logo animation */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
          aria-label="India Leadership Summit Home"
        >
          <img
            data-ils-nav-logo
            src={ilsLogo}
            alt="India Leadership Summit"
            className="h-9 w-auto object-contain sm:h-12 md:h-14"
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}

          <Link to="/attend">
            <span className="btn-gold">Register</span>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-gold sm:h-11 sm:w-11"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-gold sm:w-6" />
              <span className="block h-px w-5 bg-gold sm:w-6" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="glass mx-4 mt-3 rounded-sm p-5 sm:mx-6 sm:p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}

            <Link to="/attend" onClick={() => setOpen(false)}>
              <span className="btn-gold inline-flex">Register</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}