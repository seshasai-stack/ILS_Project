import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeIndianRupee,
  BedDouble,
  CircleHelp,
  Headphones,
  Mail,
  Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — ILS 2026" },
      {
        name: "description",
        content:
          "Answers about India Leadership Summit 2026 registration, travel, accommodation, cancellation, and delegate support.",
      },
    ],
  }),
  component: FaqPage,
});

type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: readonly FaqItem[];
};

const categories: readonly FaqCategory[] = [
  {
    id: "registration-access",
    title: "Registration & Access",
    description: "Registration, pricing, spouse access, and guest eligibility.",
    icon: BadgeIndianRupee,
    items: [
      {
        question: "How do I register for ILS?",
        answer: (
          <p>
            Registration can be completed through the official ILS website. Once
            registered, confirmation and further communication will be sent to the
            registered email address.
          </p>
        ),
      },
      {
        question: "What is the registration price for members?",
        answer: (
          <p>
            The Early Access registration price is ₹39,500 plus applicable GST.
            The standard registration price is ₹50,000 plus applicable GST.
          </p>
        ),
      },
      {
        question: "Can I register my spouse for ILS?",
        answer: (
          <p>
            Yes. Spouses may attend as registered guests upon payment of the
            applicable ₹10,000 registration price plus GST. Spouse access is limited
            to the Gala Night.
          </p>
        ),
      },
      {
        question: "Can a non-member attend ILS?",
        answer: (
          <p>
            Yes. Eligible non-members and guests may attend after completing their
            registration. Access to the Gala Night is restricted to members because
            it is a member-focused event.
          </p>
        ),
      },
      {
        question: "Will registrations close before the event?",
        answer: (
          <p>
            Yes. Registrations are expected to close before the event. Members are
            encouraged to register early, particularly to secure the applicable
            Early Access Price.
          </p>
        ),
      },
    ],
  },
  {
    id: "travel-schedule",
    title: "Travel & Schedule",
    description: "Planning your arrival, departure, and time at the summit.",
    icon: Plane,
    items: [
      {
        question: "Can I fly in on the morning of Day 1, 13 November?",
        answer: (
          <p>
            Yes. ILS follows a 1.5-day format, allowing members to arrive on the
            morning of 13 November. The main event begins at 11:30 AM, and the hotel
            is approximately 40–45 minutes from the airport. Members can plan their
            morning flight accordingly and proceed directly to the hotel.
          </p>
        ),
      },
      {
        question: "Can I leave on the evening of Day 2?",
        answer: (
          <p>
            Yes. The event concludes after lunch on 14 November, allowing delegates
            to check out and depart that evening. Delegates who wish to stay longer
            may extend their stay directly with the hotel.
          </p>
        ),
      },
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation",
    description: "Venue hotel, preferential rates, booking, and room sharing.",
    icon: BedDouble,
    items: [
      {
        question: "Where can I stay during ILS?",
        answer: (
          <p>
            The recommended accommodation is Novotel Hyderabad Convention Centre,
            HITEC City, which is also the event venue. A preferential room rate has
            been arranged directly with the hotel.
          </p>
        ),
      },
      {
        question: "What are the hotel room rates?",
        answer: (
          <div className="overflow-hidden border border-border/70">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-border/70 bg-surface/60 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:px-5">
              <span>Room type</span>
              <span>Per night</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-border/50 px-4 py-4 sm:px-5">
              <span className="font-medium text-foreground">Single Occupancy</span>
              <span className="text-right text-gold">₹12,000 · USD 125 approx.</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4 px-4 py-4 sm:px-5">
              <span className="font-medium text-foreground">Double Occupancy</span>
              <span className="text-right text-gold">₹13,000 · USD 140 approx.</span>
            </div>
            <p className="border-t border-border/50 px-4 py-3 text-xs text-muted-foreground sm:px-5">
              Breakfast is included in both rates.
            </p>
          </div>
        ),
      },
      {
        question: "How do I book my hotel room?",
        answer: (
          <p>
            A dedicated hotel booking link will be shared by email with registered
            ILS delegates. Hotel booking and payment will be completed directly
            online with the hotel.
          </p>
        ),
      },
      {
        question: "Can I share a room with another delegate?",
        answer: (
          <p>
            Yes. Double occupancy is available. Room-sharing arrangements must be
            coordinated directly between the delegates.
          </p>
        ),
      },
    ],
  },
  {
    id: "cancellation-support",
    title: "Cancellation & Support",
    description: "Refund timelines, international registrations, and assistance.",
    icon: Headphones,
    items: [
      {
        question: "What is the cancellation and refund policy?",
        answer: (
          <div>
            <p>
              Refund eligibility is based on the date the written cancellation
              request is received:
            </p>
            <dl className="mt-5 divide-y divide-border/50 border-y border-border/60">
              <div className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <dt className="text-foreground">On or before 30 September 2026</dt>
                <dd className="font-medium text-gold">75% refund</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <dt className="text-foreground">1–14 October 2026</dt>
                <dd className="font-medium text-gold">50% refund</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <dt className="text-foreground">On or after 15 October 2026</dt>
                <dd className="font-medium text-gold">Non-refundable</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs italic">
              Please refer to the official cancellation and refund policy for
              complete details.
            </p>
          </div>
        ),
      },
      {
        question: "Is ILS open to international members?",
        answer: (
          <p>
            Yes. International CorporateConnections members can register through
            the same official registration link.
          </p>
        ),
      },
      {
        question: "Who can I contact if I have questions about ILS?",
        answer: (
          <p>
            For questions not covered here, contact the ILS organising team at{" "}
            <a
              href="mailto:ils@corporateconnections-india.com"
              className="font-medium text-gold transition-colors hover:text-gold-soft"
            >
              ils@corporateconnections-india.com
            </a>
            .
          </p>
        ),
      },
    ],
  },
];

const questionCount = categories.reduce(
  (total, category) => total + category.items.length,
  0,
);

function FaqPage() {
  return (
    <>
      <section className="hero-bg relative isolate overflow-hidden border-b border-border/40 py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">Help centre · ILS 2026</p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
                Frequently asked{" "}
                <span className="gold-gradient-text italic">questions.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Everything you need to plan your registration, travel, stay, and
                participation at India Leadership Summit 2026.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-px border border-gold/20 bg-gold/20 sm:w-auto">
              <div className="min-w-32 bg-background/80 p-5 text-center backdrop-blur-sm sm:min-w-36">
                <p className="font-serif text-3xl text-gold">{categories.length}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Categories
                </p>
              </div>
              <div className="min-w-32 bg-background/80 p-5 text-center backdrop-blur-sm sm:min-w-36">
                <p className="font-serif text-3xl text-gold">{questionCount}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Answers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-3 text-muted-foreground">
            <CircleHelp aria-hidden="true" className="h-5 w-5 text-gold" />
            <p className="text-xs uppercase tracking-[0.2em]">
              Select a category, then open any question
            </p>
          </div>

          <Accordion
            type="multiple"
            defaultValue={["registration-access"]}
            className="space-y-4"
          >
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;

              return (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className="overflow-hidden border border-border/70 bg-background/75 data-[state=open]:border-gold/35"
                >
                  <AccordionTrigger className="group gap-5 px-5 py-6 hover:no-underline sm:px-7 sm:py-7 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gold">
                    <div className="flex min-w-0 flex-1 items-center gap-4 text-left sm:gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/[0.05] text-gold transition-colors duration-300 group-hover:border-gold/60 sm:h-14 sm:w-14">
                        <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                          Category {String(categoryIndex + 1).padStart(2, "0")} ·{" "}
                          {category.items.length} questions
                        </span>
                        <span className="mt-2 block font-serif text-xl font-normal text-foreground sm:text-2xl">
                          {category.title}
                        </span>
                        <span className="mt-1 hidden text-xs font-normal leading-5 text-muted-foreground sm:block">
                          {category.description}
                        </span>
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="border-t border-border/60 px-5 pb-5 sm:px-7 sm:pb-7">
                    <Accordion type="single" collapsible className="divide-y divide-border/50">
                      {category.items.map((item, questionIndex) => (
                        <AccordionItem
                          key={item.question}
                          value={category.id + "-question-" + questionIndex}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="gap-5 py-5 text-left hover:no-underline sm:py-6 [&>svg]:text-gold">
                            <span className="flex min-w-0 items-start gap-4">
                              <span className="mt-0.5 font-serif text-sm text-gold/70">
                                {String(questionIndex + 1).padStart(2, "0")}
                              </span>
                              <span className="font-serif text-lg font-normal leading-7 text-foreground sm:text-xl">
                                {item.question}
                              </span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 pl-9 pr-2 text-sm leading-7 text-muted-foreground sm:pl-10 sm:pr-10 sm:text-base">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border/40 bg-ink py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <p className="eyebrow">Still need help?</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Speak with the ILS organising team.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              If your question is not covered above, our team will help you with
              registration, accommodation, or event access.
            </p>
          </div>
          <a
            href="mailto:ils@corporateconnections-india.com"
            className="btn-gold w-full sm:w-auto"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Email the ILS team
          </a>
        </div>
      </section>
    </>
  );
}
