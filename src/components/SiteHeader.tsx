import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ilsLogo from "@/assets/ils-logo.png";

const nav = [
  // { to: "/", label: "Home" },
  // { to: "/summit", label: "The Summit" },
  // { to: "/speakers", label: "Speakers" },
  // { to: "/partners", label: "Partners" },
  // { to: "/about", label: "About" },
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
          aria-label="India Leadership Summit Home"
        >
          <img
            src={ilsLogo}
            alt="India Leadership Summit"
            className="h-11 w-auto object-contain sm:h-12 md:h-14"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
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

          {/* GOLD REGISTER BUTTON */}
          <Link
            to="/attend"
            className="
              inline-flex
              items-center
              justify-center
              rounded-sm
              bg-gold
              px-7
              py-3.5
              text-xs
              font-medium
              uppercase
              tracking-[0.22em]
              text-ink
              transition-all
              duration-300
              hover:bg-gold-soft
              hover:shadow-[0_0_25px_rgba(212,175,55,0.18)]
            "
          >
            Register
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-gold"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-gold" />
              <span className="block h-px w-6 bg-gold" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="glass mx-6 mt-3 rounded-sm p-6 md:hidden">
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

            {/* MOBILE GOLD REGISTER BUTTON */}
            <Link
              to="/attend"
              onClick={() => setOpen(false)}
              className="
                mt-2
                inline-flex
                w-full
                items-center
                justify-center
                rounded-sm
                bg-gold
                px-6
                py-4
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-ink
                transition-all
                duration-300
                hover:bg-gold-soft
              "
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}