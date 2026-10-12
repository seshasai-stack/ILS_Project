import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
        title: "Breakout Sessions",
        who: "Curated Topics for smaller rooms",
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

type AgendaDay = (typeof agenda)[number];

function AgendaTabs() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay: AgendaDay = agenda[activeDayIndex];
  const panelId = "summit-agenda-panel";

  function selectDayFromKeyboard(index: number) {
    setActiveDayIndex(index);
    window.requestAnimationFrame(() => {
      document.getElementById(`agenda-tab-${index + 1}`)?.focus();
    });
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Summit agenda days"
        className="grid grid-cols-2 gap-3 rounded-sm bg-secondary/20 p-2 sm:gap-4 sm:p-3"
      >
        {agenda.map((agendaDay, index) => {
          const isActive = activeDayIndex === index;
          const tabId = `agenda-tab-${index + 1}`;

          return (
            <button
              key={agendaDay.date}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveDayIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  selectDayFromKeyboard((index + 1) % agenda.length);
                } else if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  selectDayFromKeyboard((index - 1 + agenda.length) % agenda.length);
                } else if (event.key === "Home") {
                  event.preventDefault();
                  selectDayFromKeyboard(0);
                } else if (event.key === "End") {
                  event.preventDefault();
                  selectDayFromKeyboard(agenda.length - 1);
                }
              }}
              className={`relative min-h-32 overflow-hidden rounded-sm border px-4 py-5 text-center outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-36 sm:px-7 sm:py-6 ${
                isActive
                  ? "scale-[1.01] border-gold bg-gold text-background shadow-[0_18px_55px_rgba(196,161,90,0.18)]"
                  : "border-border/80 bg-background/80 text-foreground hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/[0.045]"
              }`}
            >
              <span className={`block text-xs font-semibold uppercase tracking-[0.24em] ${isActive ? "text-background/75" : "text-gold"}`}>
                {agendaDay.day}
              </span>
              <span className="mt-3 block font-serif text-lg leading-snug sm:text-2xl">
                {agendaDay.date}
              </span>
              <span className={`mt-2 block text-[10px] uppercase tracking-[0.16em] sm:text-xs ${isActive ? "text-background/70" : "text-muted-foreground"}`}>
                {agendaDay.sessions.length} sessions
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-foreground transition-transform duration-500 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <section
        key={activeDay.day}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`agenda-tab-${activeDayIndex + 1}`}
        tabIndex={0}
        className="mt-5 animate-in rounded-sm border border-gold/30 bg-background/75 fade-in-0 slide-in-from-bottom-4 duration-700 focus:outline-none sm:mt-6"
      >
        <div className="flex flex-col gap-2 border-b border-border/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
          <div>
            <p className="eyebrow">{activeDay.day} Schedule</p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{activeDay.date}</h3>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {activeDay.sessions.length} curated sessions
          </p>
        </div>

        <div className="px-5 pb-9 pt-8 sm:px-8 sm:pb-11 sm:pt-10">
          <div className="relative">
            <div className="absolute bottom-2 left-[224px] top-2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/70 via-gold/30 to-transparent md:block" />

            <ul className="space-y-9 sm:space-y-10">
              {activeDay.sessions.map((session, index) => (
                <li
                  key={`${activeDay.date}-${session.time}-${session.title}`}
                  className="grid animate-in grid-cols-1 gap-3 fade-in-0 slide-in-from-bottom-2 duration-500 [animation-fill-mode:both] md:grid-cols-[180px_24px_1fr] md:gap-x-8 md:gap-y-0"
                  style={{ animationDelay: `${100 + index * 70}ms` }}
                >
                  <span className="whitespace-nowrap font-serif text-xl text-gold md:pr-6 md:text-2xl">
                    {session.time}
                  </span>

                  <span className="relative hidden items-start justify-center pt-2 md:flex">
                    <span className="relative z-10 block h-2.5 w-2.5 rounded-full border border-gold bg-background" />
                  </span>

                  <div>
                    <h4 className="font-serif text-xl md:text-2xl">{session.title}</h4>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
                      {session.who}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function SummitPage() {
  return (
    <>
      {/* HERO */}
      {/* <section className="relative py-24 md:py-32">
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
      </section> */}

      {/* HIGHLIGHTS */}
      {/* <section className="border-t border-border/40 bg-ink/50 py-24">
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
      </section> */}

      {/* SCHEDULE */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="eyebrow">
            The Arc of the Summit
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Agenda
          </h2>

          {/* DAY TABS AND SCHEDULE */}
          <div className="mt-12 sm:mt-16">
            <AgendaTabs />
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
