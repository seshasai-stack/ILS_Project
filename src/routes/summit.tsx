import { createFileRoute, Link } from "@tanstack/react-router";
import venue from "@/assets/venue.jpg";

export const Route = createFileRoute("/summit")({
  head: () => ({
    meta: [
      { title: "The Summit — ILS 2026" },
      {
        name: "description",
        content:
          "What ILS 2026 is, who is in the room, and how the summit unfolds. November 13th–14th, 2026, Hyderabad.",
      },
    ],
  }),
  component: SummitPage,
});

const highlights = [
  {
    t: "Keynotes",
    d: "Unrecorded talks from founders who rarely speak in public.",
  },
  {
    t: "Roundtables",
    d: "Twelve seats. One question. Three hours. No observers.",
  },
  {
    t: "Fireside Panels",
    d: "Cross-sector exchanges built around tension, not consensus.",
  },
  {
    t: "Closed Networking",
    d: "Curated introductions, not name-badge serendipity.",
  },
  {
    t: "The Long Dinner",
    d: "A single seated dinner that closes the day.",
  },
  {
    t: "Off-Record",
    d: "Chatham House rules throughout. No press. No livestream.",
  },
];

const agenda = [
  {
    day: "Day 01",
    date: "13th November 2026",
    sessions: [
      {
        time: "10:30 – 11:45 AM",
        title: "Registrations & Open Networking",
        who: "Arrival & Networking",
      },
      {
        time: "12:00 – 1:30 PM",
        title: "Main Keynote Speaker",
        who: "Keynote",
      },
      {
        time: "1:30 – 2:30 PM",
        title: "Lunch",
        who: "Lunch",
      },
      {
        time: "2:45 – 4:00 PM",
        title: "Know Your Table",
        who: "Roundtable Discussions",
      },
      {
        time: "4:00 – 5:00 PM",
        title: "121s",
        who: "Curated One-to-One Conversations",
      },
      {
        time: "5:00 – 7:00 PM",
        title: "Break & Leisure",
        who: "Pause & Recharge",
      },
      {
        time: "7:00 PM onwards",
        title: "Gala Night",
        who: "Evening Experience",
      },
    ],
  },
  {
    day: "Day 02",
    date: "14th November 2026",
    sessions: [
      {
        time: "10:00 – 11:00 AM",
        title: "121s",
        who: "Curated One-to-One Conversations",
      },
      {
        time: "11:00 – 12:00 PM",
        title: "Keynote / Fireside Chat",
        who: "With Industry Expert",
      },
      {
        time: "12:00 – 1:30 PM",
        title: "Startup Pitches",
        who: "Founder Showcase",
      },
      {
        time: "1:30 – 2:30 PM",
        title: "Lunch & Closing",
        who: "Closing Session",
      },
    ],
  },
];

function SummitPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow">
            The Summit &middot; ILS 2026
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
            36 hours.{" "}
            <span className="gold-gradient-text italic">
              One room.
            </span>{" "}
            The conversations that move the year.
          </h1>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
              <p>
                The India Leadership Summit was founded inside
                CorporateConnections as a deliberate counterweight to the
                conference circuit. The brief was simple: build the convening
                we wished existed.
              </p>

              <p>
                What makes ILS distinct is not the speaker roster &mdash;
                though that work is considered. It is the composition of the
                room and the format that holds it. Roundtables outnumber
                stages. Conversations begin where panels usually end.
              </p>

              <p>
                A day at ILS moves from quiet morning sessions to a single
                seated dinner. The pace is unhurried; the density is high.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="glass rounded-sm p-8">
                <div className="eyebrow">
                  In the Room
                </div>

                <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                  <li>
                    Founders &amp; CEOs of category-defining companies
                  </li>

                  <li>
                    Institutional capital &mdash; PE, family offices,
                    sovereigns
                  </li>

                  <li>
                    Operating leaders from across financial services,
                    deep-tech, consumer, healthcare
                  </li>

                  <li>
                    A measured presence of policy and academic voices
                  </li>
                </ul>

                <div className="gold-divider my-8" />

                <div className="eyebrow">
                  Edition
                </div>

                <p className="mt-3 font-serif text-2xl">
                  ILS 2026
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  November &middot; Hyderabad
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-t border-border/40 bg-ink/50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow">
            What the Day Holds
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            Six formats. One continuous thread.
          </h2>

          <div className="mt-14 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={h.t}
                className="card-hover group relative border border-transparent bg-background p-8"
              >
                <div className="font-serif text-5xl text-gold/30 transition-colors group-hover:text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 font-serif text-2xl">
                  {h.t}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {h.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="eyebrow">
            The Arc of the Summit
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Schedule
          </h2>

          {/* BOTH DAYS */}
          <div className="mt-16 space-y-24">
            {agenda.map((agendaDay) => (
              <div key={agendaDay.date}>
                
                {/* DAY HEADING */}
                <div className="mb-12">
                  <p className="eyebrow">
                    {agendaDay.day}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                    {agendaDay.date}
                  </h3>
                </div>

                {/* TIMELINE */}
                <div className="relative">
                  
                  {/* VERTICAL GOLD LINE */}
                  <div className="absolute bottom-2 left-[180px] top-2 hidden w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:block" />

                  <ul className="space-y-10">
                    {agendaDay.sessions.map((session) => (
                      <li
                        key={`${agendaDay.date}-${session.time}-${session.title}`}
                        className="
                          grid
                          grid-cols-1
                          gap-3
                          md:grid-cols-[180px_24px_1fr]
                          md:gap-x-8
                          md:gap-y-0
                        "
                      >
                        
                        {/* TIME */}
                        <span
                          className="
                            whitespace-nowrap
                            font-serif
                            text-xl
                            text-gold
                            md:pr-6
                            md:text-2xl
                          "
                        >
                          {session.time}
                        </span>

                        {/* TIMELINE DOT */}
                        <span className="relative hidden items-start justify-center pt-2 md:flex">
                          <span className="relative z-10 block h-2.5 w-2.5 rounded-full border border-gold bg-background" />
                        </span>

                        {/* SESSION CONTENT */}
                        <div>
                          <h4 className="font-serif text-xl md:text-2xl">
                            {session.title}
                          </h4>

                          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                            {session.who}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="relative isolate overflow-hidden">
        <img
          src={venue}
          alt="Venue interior"
          width={1600}
          height={1000}
          loading="lazy"
          className="h-[60vh] w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
            <p className="eyebrow">
              The Venue
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              A room that carries its own weight.
            </h2>

            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Disclosed to confirmed attendees.
            </p>

            <div className="mt-8">
              <Link to="/attend">
                <span className="btn-gold">
                  Request Attendance
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}