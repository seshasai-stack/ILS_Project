import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import hesaLogo from "@/assets/hesa-logo.jpeg";
import { GoldParticles } from "@/components/GoldParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "India Leadership Summit 2026 — Hyderabad" },
      {
        name: "description",
        content:
          "India's most consequential gathering of ambitious entrepreneurs. ILS 2026 — November, Hyderabad.",
      },
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
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            India&rsquo;s most{" "}
            <span className="gold-gradient-text italic">consequential</span>
            <br />
            gathering of ambitious
            <br />
            entrepreneurs.
          </h1>

          <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              13th & 14th November 2026
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
            <Link to="/attend">
              <span className="btn-gold">Register Now</span>
            </Link>
          </div>
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

      {/* TITLE SPONSOR */}
      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Title Sponsor</p>

            {/* HESA LOGO */}
            <div className="mt-6 flex">
              <div className="relative h-[145px] w-[340px] overflow-hidden rounded-sm bg-white md:h-[160px] md:w-[380px]">
                <img
                  src={hesaLogo}
                  alt="Hesa — Connecting Bharat Phygitally"
                  className="absolute inset-0 h-full w-full scale-[1.45] object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Hesa is transforming the way businesses connect with rural India.
              Through its unique Phygital model, Hesa combines technology with a
              strong on-ground network of Hesaathis to bring products, services,
              financial solutions and opportunities closer to rural communities.
              By connecting India to Bharat, Hesa is creating a more accessible
              and inclusive rural commerce ecosystem.
            </p>

            <Link
              to="https://hesa.co/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-gold-soft"
            >
              KNOW MORE
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="eyebrow">The Arc of the Summit</p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Schedule
          </h2>

          {/* BOTH DAYS */}
          <div className="mt-16 space-y-24">
            {agenda.map((agendaDay) => (
              <div key={agendaDay.date}>
                {/* DAY HEADING */}
                <div className="mb-12">
                  <p className="eyebrow">{agendaDay.day}</p>

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

      {/* CTA STRIP */}
      <section className="relative overflow-hidden border-t border-border/40 bg-ink py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            If this is your room, we&rsquo;d like to know.
          </h2>

          <div className="mt-10">
            <Link to="/attend">
              <span className="btn-gold">Begin Your Registration</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}