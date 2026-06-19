import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — ILS 2026" },
      { name: "description", content: "Partnership at the India Leadership Summit. Chosen for alignment, not category fill." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="eyebrow">Partners</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          A partnership, <span className="gold-gradient-text italic">not a placement.</span>
        </h1>
        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            ILS is a curated convening of founders, operators, and institutional leaders.
            Partners are chosen with the same care as the room itself.
          </p>
          <p>
            Our audience profile is unusual in its density: decision-makers across deep-tech,
            financial services, consumer, and industrials &mdash; convened for a single,
            unrecorded day.
          </p>
          <p>
            We do not publish sponsorship tiers and we do not circulate a media kit. Both
            exist and are shared after an initial conversation about fit.
          </p>
        </div>

        {/* <div className="mt-16 glass rounded-sm p-10">
          <div className="eyebrow">Begin a Conversation</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Aditi Rao</h2>
          <p className="mt-1 text-sm text-muted-foreground">Partnerships, ILS</p>
          <a
            href="mailto:partners@ils2026.in"
            className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold hover:text-gold-soft"
          >
            partners@ils2026.in
            <span aria-hidden>&rarr;</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}