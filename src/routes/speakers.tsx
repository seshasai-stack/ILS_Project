import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — ILS 2026" },
      { name: "description", content: "Confirmed speakers for the India Leadership Summit 2026." },
    ],
  }),
  component: SpeakersPage,
});

const speakers = [
  { name: "Nandan Nilekani", role: "Co-founder, Infosys &middot; Architect, Aadhaar", note: "On the next decade of India's digital public infrastructure." },
  { name: "Falguni Nayar", role: "Founder &amp; CEO, Nykaa", note: "Building category-defining consumer companies for the new India." },
  { name: "Harsh Mariwala", role: "Chairman, Marico", note: "Compounding leadership across forty years." },
  { name: "Ronnie Screwvala", role: "Co-founder, upGrad &middot; Founder, UTV", note: "On second and third innings as a founder." },
  { name: "Roshni Nadar Malhotra", role: "Chairperson, HCLTech", note: "Stewardship at institutional scale." },
  { name: "Kunal Shah", role: "Founder, CRED", note: "First-principles thinking on Indian consumer trust." },
  { name: "Radhika Gupta", role: "MD &amp; CEO, Edelweiss MF", note: "On building enduring financial institutions." },
  { name: "Sridhar Vembu", role: "Founder, Zoho", note: "On rural-rooted, globally competitive software." },
];

function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("");
}

function SpeakersPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow">Speakers &middot; ILS 2026</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
            The room, <span className="gold-gradient-text italic">named.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A partial list of confirmed voices for the second edition. Additional names
            will be announced in the weeks ahead.
          </p>

          <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s) => (
              <article
                key={s.name}
                className="card-hover group flex flex-col bg-background p-8"
              >
                <div className="relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary/50 transition-all group-hover:border-gold">
                  <span className="font-serif text-3xl text-muted-foreground transition-colors group-hover:text-gold">
                    {initials(s.name)}
                  </span>
                  <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "inset 0 0 30px oklch(0.78 0.12 80 / 35%)" }} />
                </div>
                <h3 className="font-serif text-2xl">{s.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold/80" dangerouslySetInnerHTML={{ __html: s.role }} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              More speakers announced shortly
            </p>
            <div className="mt-8">
              <Link to="/attend"><span className="btn-gold">Request Attendance</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}