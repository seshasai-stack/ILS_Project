import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — India Leadership Summit" },
      { name: "description", content: "The institutional context behind ILS. Hosted by CorporateConnections AP&TS." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="eyebrow">About ILS</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          A long-form bet on <span className="gold-gradient-text italic">consequential</span> conversation.
        </h1>
        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            The India Leadership Summit was conceived inside CorporateConnections AP&amp;TS
            as a deliberate counterweight to the conference circuit &mdash; an annual room
            built around the people in it, not the people watching it.
          </p>
          <p>
            ILS 2026 is the second edition. The first established the format. The second
            deepens it. There will be a third.
          </p>
          <p>
            Curation is human. Programming is unhurried. The selectivity is performed
            through process, not technology.
          </p>
        </div>

        <div className="gold-divider my-16" />

        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Hosted by{" "}
          <a href="#" className="text-gold hover:text-gold-soft">CorporateConnections AP&amp;TS</a>
        </p>
      </div>
    </section>
  );
}