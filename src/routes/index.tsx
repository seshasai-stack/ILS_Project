import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { GoldParticles } from "@/components/GoldParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "India Leadership Summit 2026 — Hyderabad" },
      { name: "description", content: "India's most consequential gathering of ambitious entrepreneurs. ILS 2026 — November, Hyderabad." },
    ],
  }),
  component: Home,
});

const confirmedSpeakers = [
  "Nandan Nilekani",
  "Falguni Nayar",
  "Harsh Mariwala",
  "Ronnie Screwvala",
  "Roshni Nadar Malhotra",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/40 to-background" />
        <GoldParticles count={22} />

        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow reveal">ILS 2026 &middot; The Second Edition &middot; Coming Soon</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            India&rsquo;s most <span className="gold-gradient-text italic">consequential</span>
            <br />
            gathering of ambitious
            <br />
            entrepreneurs.
          </h1>
          <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              November 2026
            </span>
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Novotel
            </span>
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Hyderabad
            </span>
          </div>

          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-6">
            <Link to="/attend"><span className="btn-gold">Register Now</span></Link>
            {/* <Link to="/speakers"><span className="btn-outline-gold">View Speakers</span></Link> */}
          </div>

          {/* <div className="reveal reveal-delay-4 mt-24 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Confirmed for 2026
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-serif text-lg text-foreground/90 md:text-xl">
              {confirmedSpeakers.map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {s}
                  {i < confirmedSpeakers.length - 1 && (
                    <span className="text-gold/40">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* TENOR / INSIDER LINE */}
      <section className="relative border-y border-border/40 bg-ink/60 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="font-serif text-2xl italic leading-relaxed text-foreground/90 md:text-3xl">
            &ldquo;The room is the product. Everything else is staging.&rdquo;
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gold/50" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">The Summit</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              A convening, not a conference.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              ILS gathers founders, operators, and institutional leaders for one day of
              roundtable exchanges, candid keynotes, and the kind of conversations that
              rarely happen in public.
            </p>
            <p>
              No livestream. No press. The format is unhurried by design &mdash; built around
              the people in the room rather than the people watching it.
            </p>
            <Link
              to="/summit"
              className="inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.22em] text-gold hover:text-gold-soft"
            >
              Read about ILS 2026
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden border-t border-border/40 bg-ink py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="eyebrow">Attendance is limited and considered</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            If this is your room, we&rsquo;d like to know.
          </h2>
          <div className="mt-10">
            <Link to="/attend"><span className="btn-gold">Begin Your Registration</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}