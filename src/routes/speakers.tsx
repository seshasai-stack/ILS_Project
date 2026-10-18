import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mic2 } from "lucide-react";
import gurleenPannuImage from "@/assets/gurleen_pannu.jpg";
import harshaBhogleSpeaker from "@/assets/harsha-bhogle-day-1-speaker.png";
import ltGenKjsSpeaker from "@/assets/lt_gen_kjs.jpeg";
import navneethKrishnaImage from "@/assets/NAVNEETH_KRISHNA.jpg";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — ILS 2026" },
      {
        name: "description",
        content: "Confirmed speakers for the India Leadership Summit 2026.",
      },
    ],
  }),
  component: SpeakersPage,
});

type SpeakerSectionProps = {
  day: string;
  name: string;
  designation: string;
  image: string;
  imageAlt: string;
  description?: string;
  links?: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

function SpeakerSection({
  day,
  name,
  designation,
  image,
  imageAlt,
  description,
  links,
}: SpeakerSectionProps) {
  return (
    <section className="border-t border-border/40 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/60" />
            <Mic2 className="h-4 w-4" aria-hidden="true" />
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <p className="mt-5 font-sans text-lg font-medium uppercase tracking-[0.32em] text-gold sm:text-xl md:text-2xl">
            {day}
          </p>
          <h2 className="mt-4 font-serif text-4xl uppercase tracking-[0.04em] text-foreground sm:text-5xl md:text-6xl">
            {name}
          </h2>
          <p className="mt-4 font-serif text-base uppercase tracking-[0.06em] sm:text-xl md:text-2xl">
            <span className="gold-gradient-text italic">{designation}</span>
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="absolute -inset-px bg-gradient-to-br from-gold/65 via-gold/10 to-gold/45" />
          <div className="relative m-px overflow-hidden bg-black">
            <img
              src={image}
              alt={imageAlt}
              className="block h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>

        {(description || links?.length) && (
          <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
            {description && (
              <p className="border-l border-gold/55 pl-5 font-serif text-xl leading-relaxed text-foreground sm:pl-8 sm:text-2xl">
                {description}
              </p>
            )}

            {links && links.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex min-h-16 items-center justify-between border px-5 py-4 text-xs uppercase tracking-[0.16em] transition-all duration-300 sm:text-sm ${
                      index === 0
                        ? "border-gold/35 bg-gold/[0.04] text-gold hover:border-gold hover:bg-gold/[0.09]"
                        : "border-border bg-surface/35 text-foreground hover:border-gold/70 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function SpeakersPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(202,157,69,0.09),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <p className="eyebrow">Speakers &middot; ILS 2026</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
            The room, <span className="gold-gradient-text italic">named.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
            Meet the voices joining the India Leadership Summit 2026—leaders
            bringing perspective, experience, and conversations built to stay
            with the room.
          </p>
        </div>
      </section>

      <SpeakerSection
        day="DAY-1 KEYNOTE SPEAKER"
        name="HARSHA BHOGLE"
        designation="Indian Cricket Commentator & Journalist"
        image={harshaBhogleSpeaker}
        imageAlt="Harsha Bhogle, Day 1 keynote speaker for India Leadership Summit 2026"
        description="For four decades, he has watched teams from the closest seat in the house—how they come together, how they fracture, and how the great ones find a way when it matters most."
        links={[
          {
            label: "A snippet into Harsha's world of speaking",
            href: "https://www.instagram.com/reel/DdjIN_0T_9G/?stkn=anlna3YwOGw4bG85",
          },
          {
            label: "Profile of Harsha",
            href: "https://en.wikipedia.org/wiki/Harsha_Bhogle",
          },
        ]}
      />

      <SpeakerSection
        day="DAY-2 SPEAKER"
        name="LT GEN KJS DHILLON"
        designation="PVSM, UYSM, YSM, VSM (Retd)"
        image={ltGenKjsSpeaker}
        imageAlt="Lieutenant General KJS Dhillon, Day 2 speaker for India Leadership Summit 2026"
      />

      <section className="border-t border-border/40 bg-ink/20 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.32em] text-gold sm:text-base md:text-lg">
              More voices at ILS 2026
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              The stage extends beyond the keynote.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-8">
            <article className="group overflow-hidden border border-gold/25 bg-background transition-colors duration-300 hover:border-gold/60">
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={gurleenPannuImage}
                  alt="Gurleen Pannu, celebrated stand-up comedian performing at the ILS 2026 Gala Night"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 border border-gold/50 bg-black/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm sm:bottom-6 sm:left-6">
                  Gala Night
                </span>
              </div>
              <div className="border-t border-gold/20 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Celebrated Stand-up Comedian
                </p>
                <h3 className="mt-3 font-serif text-3xl uppercase text-foreground sm:text-4xl">
                  Gurleen Pannu
                </h3>
                <div className="mt-6 h-px w-12 bg-gold/65 transition-all duration-500 group-hover:w-24" />
              </div>
            </article>

            <article className="group overflow-hidden border border-gold/25 bg-background transition-colors duration-300 hover:border-gold/60">
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={navneethKrishnaImage}
                  alt="Navneeth Krishna, sports presenter and host at India Leadership Summit 2026"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 border border-gold/50 bg-black/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm sm:bottom-6 sm:left-6">
                  Host
                </span>
              </div>
              <div className="border-t border-gold/20 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Sports Presenter
                </p>
                <h3 className="mt-3 font-serif text-3xl uppercase text-foreground sm:text-4xl">
                  Navneeth Krishna
                </h3>
                <div className="mt-6 h-px w-12 bg-gold/65 transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-ink/40 py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-6 lg:px-10">
          <p className="eyebrow">Join the room</p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
            Experience the conversations in person.
          </h2>
          <Link to="/attend" className="btn-gold mt-8">
            Register for ILS 2026
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
