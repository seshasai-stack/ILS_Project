import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Check,
  Coffee,
  Mail,
  MapPin,
  UsersRound,
} from "lucide-react";
import venueImage from "@/assets/novotel.jpg";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Accommodation — ILS 2026" },
      {
        name: "description",
        content:
          "Accommodation information and preferential room rates for India Leadership Summit 2026 at Novotel Hyderabad Convention Centre.",
      },
    ],
  }),
  component: AccommodationPage,
});

const roomOptions = [
  {
    name: "Single Occupancy",
    price: "₹12,000",
    internationalPrice: "USD 125 approx.",
    description: "A private room for one registered delegate.",
    icon: BedDouble,
  },
  {
    name: "Double Occupancy",
    price: "₹13,000",
    internationalPrice: "USD 140 approx.",
    description: "A shared room for two guests. Sharing must be coordinated directly.",
    icon: UsersRound,
  },
] as const;

function AccommodationPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(202,157,69,0.1),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <p className="eyebrow">Stay at ILS 2026</p>
            <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
              Stay close to the{" "}
              <span className="gold-gradient-text italic">conversation.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
              Preferential accommodation has been arranged at the summit venue
              for registered ILS delegates, keeping every part of the
              experience within easy reach.
            </p>

            <div className="mt-8 flex items-start gap-4 border-l border-gold/55 pl-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-serif text-xl text-foreground">
                  Novotel Hyderabad Convention Centre
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Hitech City, Hyderabad
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border border-gold/30 bg-ink p-2">
            <img
              src={venueImage}
              alt="Novotel Hyderabad Convention Centre, venue for India Leadership Summit 2026"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-2 ring-1 ring-inset ring-white/10" />
            <span className="absolute bottom-6 left-6 border border-gold/45 bg-black/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
              Official Event Venue
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28" aria-label="Venue location">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden border border-gold/30 bg-ink p-2">
            <iframe
              title="Map showing Novotel Hyderabad Convention Centre"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6731.742119253394!2d78.3668039567509!3d17.474178452745573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92320a27f5a9%3A0xf7ffe9c0885c159b!2sNovotel%20Hyderabad%20Convention%20Centre!5e1!3m2!1sen!2sin!4v1792309748889!5m2!1sen!2sin"
              className="h-[360px] w-full border-0 sm:h-[440px] lg:h-[520px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="pointer-events-none absolute inset-2 ring-1 ring-inset ring-white/10" />
            <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3 border border-gold/45 bg-black/75 px-4 py-3 text-gold backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Find the venue
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-ink/30 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Preferential Rates</p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Choose the stay that suits you.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Rates are offered per room, per night for registered ILS
              delegates and are subject to hotel availability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {roomOptions.map((room) => {
              const Icon = room.icon;

              return (
                <article
                  key={room.name}
                  className="group border border-gold/25 bg-background p-6 transition-colors duration-300 hover:border-gold/60 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-gold/35 bg-gold/[0.05] text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Per night
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-3xl">{room.name}</h3>
                  <p className="mt-5 font-serif text-4xl text-gold">
                    {room.price}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {room.internationalPrice}
                  </p>
                  <p className="mt-6 border-t border-border/60 pt-6 text-sm leading-7 text-muted-foreground">
                    {room.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2">
            <div className="flex items-start gap-4 bg-background p-6 sm:p-8">
              <Coffee className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl">Breakfast Included</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Breakfast is included with both single and double occupancy
                  room rates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-background p-6 sm:p-8">
              <Check className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-xl">Direct Hotel Booking</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Room reservations and payments are completed directly with
                  the hotel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-10">
          <div>
            <p className="eyebrow">How to book</p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Your booking link arrives by email.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Registered delegates receive the dedicated Novotel booking link
              with their event communication. Use that link to select your
              room, confirm availability, and complete payment directly
              online.
            </p>
          </div>

          <div className="border border-gold/25 bg-ink/45 p-6 sm:p-8">
            <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl">Need accommodation help?</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Contact the ILS organising team for questions about the
              preferential booking process.
            </p>
            <a
              href="mailto:ils@corporateconnections-india.com?subject=ILS%202026%20Accommodation"
              className="btn-outline-gold mt-7 inline-flex"
            >
              Contact the ILS team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-ink/40 py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-6 lg:px-10">
          <p className="eyebrow">Secure your place first</p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
            Register for ILS 2026 to receive booking access.
          </h2>
          <Link to="/attend" className="btn-gold mt-8">
            Begin Your Registration
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
