import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/summit", label: "The Summit" },
  { to: "/speakers", label: "Speakers" },
  { to: "/partners", label: "Partners" },
  { to: "/about", label: "About" },
] as const;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl tracking-wide text-foreground">ILS</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            India Leadership Summit
          </span>
        </Link>

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
          <span className="h-4 w-px bg-gold/25" aria-hidden="true" />
          <Link
            to="/attend"
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            Register
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            className="text-gold"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-gold" />
              <span className="block h-px w-6 bg-gold" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass mx-6 mt-3 rounded-sm p-6">
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
            <span className="h-px w-full bg-gold/25" aria-hidden="true" />
            <Link
              to="/attend"
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}