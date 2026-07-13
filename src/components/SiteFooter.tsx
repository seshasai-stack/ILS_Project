import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-2xl text-foreground">
              India Leadership Summit
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A curated convening of India&rsquo;s most consequential
              entrepreneurs and leaders. Hosted by CorporateConnections
              AP&amp;TS.
            </p>
            <div className="mt-6 h-px w-16 bg-gold/60" />
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              ILS 2026 &middot; November &middot; Hyderabad
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Navigate</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/summit" className="hover:text-gold">
                  The Summit
                </Link>
              </li>
              {/* <li><Link to="/speakers" className="hover:text-gold">Speakers</Link></li> */}
              <li>
                <Link to="/attend" className="hover:text-gold">
                  Attend
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-gold">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:ils@corporateconnections.in"
                  className="hover:text-gold"
                >
                  ils@corporateconnections.in
                </a>
              </li>
              <li>CorporateConnections AP&amp;TS</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {["in", "x", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs uppercase tracking-wider text-muted-foreground transition-all hover:border-gold hover:text-gold"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-1">
            <span>
              &copy; 2026 CorporateConnections AP&amp;TS. All rights reserved.
            </span>

            <span className="text-[12px]">C/O Ascent Sphere LLP</span>
          </div>

          <span className="uppercase tracking-[0.28em]">
            Confidential &middot; By invitation
          </span>
        </div>
      </div>
    </footer>
  );
}
