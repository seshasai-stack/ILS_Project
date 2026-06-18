import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function FloatingRegister() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
       setVisible(window.scrollY > window.innerHeight * 0.25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        to="/attend"
        className="inline-flex items-center text-[11px] uppercase tracking-[0.28em] text-foreground bg-background/70 backdrop-blur-md border border-gold/50 hover:border-gold hover:text-gold px-5 py-3 rounded-sm shadow-[0_0_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_32px_rgba(212,175,55,0.25)] transition-all duration-300"
      >
        Register
      </Link>
    </div>
  );
}