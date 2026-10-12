import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  LockKeyhole,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — ILS 2026" },
      {
        name: "description",
        content:
          "Explore sponsorship opportunities for India Leadership Summit 2026 in Hyderabad.",
      },
    ],
  }),
  component: SponsorshipPage,
});

const enquiryHref =
  "mailto:ils@corporateconnections-india.com?subject=ILS%202026%20Sponsorship%20Enquiry";

const tiers = [
  {
    name: "Title Sponsor",
    price: "₹30,00,000",
    note: "Closed",
    closed: true,
  },
  {
    name: "Co-Sponsor",
    price: "₹20,00,000",
    note: "One exclusive slot",
    closed: false,
  },
  {
    name: "Associate Sponsor",
    price: "₹10,00,000",
    note: "Limited slots",
    closed: false,
  },
  {
    name: "Partner Sponsor",
    price: "₹6,00,000",
    note: "A focused entry point",
    closed: false,
  },
] as const;

const sponsorships = [
  {
    name: "Co-Sponsor",
    price: "₹20,00,000",
    eyebrow: "Exclusive tier",
    availability: "Only one co-sponsor slot available for ILS 2026",
    groups: [
      {
        title: "Direct Engagement",
        items: [
          "5-minute speaking slot at the opening session",
          "2-minute company video played twice during the event",
          "Award co-presentation alongside chief guests",
        ],
      },
      {
        title: "Recognition",
        items: [
          "Joint feature on the CorporateConnections website and social media",
          "Media exposure across event coverage",
          "LED signboard ad rotation throughout the venue",
        ],
      },
      {
        title: "Additional Benefits",
        items: [
          "Standard stall space and VIP seating",
          "Promo insert in Convergence goodie bags",
          "Lunch coupons for two staff members on both days",
        ],
      },
    ],
  },
  {
    name: "Associate Sponsor",
    price: "₹10,00,000",
    eyebrow: "High-visibility presence",
    availability: "Limited slots, confirmed on a first-come basis",
    groups: [
      {
        title: "On-Stage Presence",
        items: [
          "1-minute company video played once on the main stage",
          "Verbal recognition during the opening session",
        ],
      },
      {
        title: "Visibility",
        items: [
          "LED signboard ad rotation throughout the venue",
          "Media exposure across CorporateConnections social channels",
        ],
      },
      {
        title: "Additional Benefits",
        items: [
          "Dedicated stall space",
          "Lunch coupon for one staff member on both days",
        ],
      },
    ],
  },
  {
    name: "Partner Sponsor",
    price: "₹6,00,000",
    eyebrow: "Focused brand entry",
    availability:
      "A cost-effective entry point into the CorporateConnections India Leadership Summit",
    groups: [
      {
        title: "Visibility",
        items: [
          "LED signboard ad rotation throughout the venue",
          "Media exposure across CorporateConnections social channels",
        ],
      },
      {
        title: "Presence",
        items: [
          "Shared stall zone",
          "Logo listing in event collaterals",
        ],
      },
      {
        title: "Best For",
        items: [
          "Brands seeking a lighter-touch entry into the CC community",
          "First-time sponsors testing the platform",
        ],
      },
    ],
  },
] as const;

const agenda = [
  {
    label: "Day 01",
    date: "13 November 2026",
    sessions: [
      ["10:00 AM – 11:15 AM", "Registrations & Open Networking", "Arrival & Networking"],
      ["11:30 AM – 01:15 PM", "Keynote by Harsha Bhogle", "Speaker Session"],
      ["01:30 PM – 02:30 PM", "Lunch", "Lunch"],
      ["02:45 PM – 04:00 PM", "Know Your Table", "Roundtable Discussions"],
      ["04:00 PM – 05:00 PM", "121s", "Curated One-to-One Conversations"],
      ["05:00 PM – 07:00 PM", "Break & Leisure", "Pause & Recharge"],
      ["07:00 PM onwards", "Gala Night", "Evening Experience"],
    ],
  },
  {
    label: "Day 02",
    date: "14 November 2026",
    sessions: [
      ["10:00 AM – 11:00 AM", "121s", "Curated One-to-One Conversations"],
      ["11:00 AM – 12:00 PM", "Keynote / Fireside Chat", "With Industry Expert"],
      ["12:00 PM – 01:30 PM", "Startup Pitches", "Founder Showcase"],
      ["01:30 PM – 02:30 PM", "Lunch & Closing", "Closing Session"],
    ],
  },
] as const;

const pastSpeakers = [
  ["KTR", "KT Rama Rao", "Former IT Minister & MLA"],
  ["AB", "Abhinav Bindra", "India's first individual Olympic gold medallist"],
  ["RS", "Rishikesh SR", "Co-founder of Rapido"],
  ["SB", "Srikanth Bolla", "CEO & Founder of Bollant Industries"],
  ["DP", "Devdutt Pattanaik", "Indian writer and illustrator"],
  ["JR", "Jhonty Rhodes", "South African cricket coach"],
  ["KD", "Kapil Dev", "World Cup-winning captain & cricketing icon"],
  ["KT", "Kanika Tekriwal", "CEO & Founder of JetSetGo"],
  ["VN", "Venkaiah Naidu", "Former Vice President of India"],
] as const;

function AgendaSection() {
  const [activeDay, setActiveDay] = useState(0);
  const selectedDay = agenda[activeDay];

  return (
    <section className="border-y border-border/40 bg-ink/45 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">The two-day experience</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            The agenda behind the opportunity.
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Summit agenda"
          className="mt-10 grid max-w-2xl grid-cols-2 gap-2 border border-border/70 bg-background/50 p-2"
        >
          {agenda.map((day, index) => {
            const selected = activeDay === index;

            return (
              <button
                key={day.date}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveDay(index)}
                className={
                  "px-4 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold " +
                  (selected
                    ? "bg-gold text-background shadow-[0_12px_35px_rgba(196,161,90,0.16)]"
                    : "text-muted-foreground hover:bg-gold/5 hover:text-foreground")
                }
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em]">
                  {day.label}
                </span>
                <span className="mt-1 block font-serif text-base sm:text-lg">{day.date}</span>
              </button>
            );
          })}
        </div>

        <div
          key={selectedDay.date}
          role="tabpanel"
          className="mt-8 animate-in overflow-hidden border border-gold/20 bg-background/65 fade-in-0 slide-in-from-bottom-3 duration-500"
        >
          <div className="hidden grid-cols-[190px_1fr_1fr] border-b border-border/70 bg-surface/75 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:grid">
            <span>Time</span>
            <span>Session</span>
            <span>Format / Description</span>
          </div>

          <ol>
            {selectedDay.sessions.map(([time, session, description], index) => (
              <li
                key={selectedDay.date + "-" + time}
                className="grid gap-3 border-b border-border/50 px-5 py-6 last:border-b-0 md:grid-cols-[190px_1fr_1fr] md:items-center md:px-7"
              >
                <span className="font-serif text-lg text-gold">{time}</span>
                <span className="text-sm font-medium text-foreground sm:text-base">{session}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{description}</span>
                <span className="sr-only">Session {index + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SponsorshipPage() {
  return (
    <>
      <section className="hero-bg relative isolate overflow-hidden border-b border-border/40 py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="eyebrow">Partner with ILS 2026</p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Put your brand in the room where{" "}
                <span className="gold-gradient-text italic">leaders connect.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                A focused sponsorship platform built around direct engagement,
                meaningful visibility, and two days of high-value conversations at
                India Leadership Summit 2026.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#packages" className="btn-gold">
                  Explore packages <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a href={enquiryHref} className="btn-outline-gold">
                  Start a conversation
                </a>
              </div>
            </div>

            <aside className="glass p-7 sm:p-8">
              <div className="flex items-center gap-3 text-gold">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">ILS 2026</span>
              </div>
              <div className="gold-divider my-6" />
              <dl className="space-y-5">
                <div className="flex gap-4">
                  <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Dates</dt>
                    <dd className="mt-1 font-serif text-xl">13–14 November 2026</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Host city</dt>
                    <dd className="mt-1 font-serif text-xl">Hyderabad</dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">The opportunity</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                The momentum behind ILS 2026.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              Designed for brands that value credible access over passive placement,
              each package combines on-stage recognition, venue visibility, and
              considered engagement with the CorporateConnections community.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <article key={tier.name} className="group relative bg-background p-7 sm:p-8">
                <div className="flex min-h-8 items-start justify-between gap-3">
                  <span className="h-px w-12 bg-gold transition-all duration-300 group-hover:w-20" />
                  {tier.closed && (
                    <span className="inline-flex items-center gap-1.5 border border-destructive/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-destructive">
                      <LockKeyhole aria-hidden="true" className="h-3 w-3" /> Closed
                    </span>
                  )}
                </div>
                <h3 className="mt-7 text-lg uppercase tracking-[0.06em]">{tier.name}</h3>
                <p
                  className={
                    "mt-3 font-serif text-3xl " +
                    (tier.closed ? "text-muted-foreground line-through" : "text-gold")
                  }
                >
                  {tier.price}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  + applicable GST
                </p>
                <p className="mt-7 text-sm text-muted-foreground">{tier.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="border-t border-border/40 bg-ink/35 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Benefits breakdown</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Choose the level of presence that fits your brand.
            </h2>
          </div>

          <div className="mt-14 space-y-8">
            {sponsorships.map((sponsorship, sponsorshipIndex) => (
              <article
                key={sponsorship.name}
                className="overflow-hidden border border-border/70 bg-background/75"
              >
                <header className="grid gap-6 border-b border-border/70 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                      {String(sponsorshipIndex + 1).padStart(2, "0")} · {sponsorship.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl">{sponsorship.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {sponsorship.availability}
                    </p>
                  </div>
                  <div className="w-fit border border-gold/60 px-6 py-4 lg:text-right">
                    <p className="font-serif text-3xl text-gold">{sponsorship.price}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      + applicable GST
                    </p>
                  </div>
                </header>

                <div className="grid gap-px bg-border/50 md:grid-cols-3">
                  {sponsorship.groups.map((group) => (
                    <div key={group.title} className="bg-background p-6 sm:p-8">
                      <span className="block h-px w-16 bg-gold" />
                      <h4 className="mt-5 font-serif text-2xl">{group.title}</h4>
                      <ul className="mt-6 space-y-4">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border border-gold/25 bg-gold/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Stall timings</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Day 1 · 09:00 AM–06:00 PM <span className="mx-2 text-gold/60">|</span>
                Day 2 · 09:00 AM–03:00 PM
              </p>
            </div>
            <a href={enquiryHref} className="btn-outline-gold shrink-0">
              Enquire now <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gold/[0.08] to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden border border-gold/30 bg-ink">
            <div className="absolute inset-6 border border-gold/10" />
            <div className="absolute h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
            <span className="relative font-serif text-8xl text-gold/80 sm:text-9xl">HB</span>
            <span className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Keynote · 13 November
            </span>
          </div>

          <div>
            <p className="eyebrow">Keynote speaker</p>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">Harsha Bhogle</h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Indian cricket commentator & journalist
            </p>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
              One of India&rsquo;s most recognisable voices in sport joins ILS 2026 for the
              opening-day keynote—a session created for perspective, storytelling, and
              the leadership lessons that travel beyond the boundary.
            </p>
          </div>
        </div>
      </section>

      <AgendaSection />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">A glimpse of what&rsquo;s been</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Leaders who have shaped the conversation.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              A look back at the voices and perspectives that have taken the stage across
              the CorporateConnections leadership community.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {pastSpeakers.map(([initials, name, role]) => (
              <article key={name} className="group bg-background p-6 transition-colors duration-300 hover:bg-gold/[0.045] sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center border border-gold/35 bg-ink font-serif text-2xl text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-background">
                  {initials}
                </div>
                <h3 className="mt-6 font-serif text-2xl">{name}</h3>
                <p className="mt-2 text-xs uppercase leading-5 tracking-[0.12em] text-muted-foreground">
                  {role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/40 bg-ink py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-2/3 -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <p className="eyebrow">Build your ILS 2026 presence</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Let&rsquo;s find the partnership that fits.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Sponsorship inventory is limited. Start a conversation with the ILS team to
            confirm availability and plan your brand&rsquo;s participation.
          </p>
          <div className="mt-9">
            <a href={enquiryHref} className="btn-gold">
              Contact the ILS team <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
