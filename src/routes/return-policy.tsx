import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/return-policy")({
  component: ReturnPolicyPage,
});

const policySections = [
  {
    number: "01",
    title: "About This Policy",
    content: [
      "This Refund and Cancellation Policy applies to registrations and payments made for the India Leadership Summit 2026, organised by CorporateConnections AP&TS.",
      "Since the India Leadership Summit is an event-based service, physical product returns are not applicable. This policy explains when registration fees may be refunded, transferred or retained.",
      "By completing a payment, you confirm that you have reviewed and accepted this policy along with our Terms and Conditions.",
    ],
  },
  {
    number: "02",
    title: "Registration Payments",
    content: [
      "Your registration is confirmed only after your application has been approved, the complete registration fee has been received and an official confirmation has been issued by the organiser.",
      "Submitting an application or initiating a payment does not automatically guarantee admission to the India Leadership Summit.",
      "Registration fees, applicable taxes and payment details will be displayed during checkout or communicated through an official payment link.",
    ],
  },
  {
    number: "03",
    title: "Non-Refundable Registrations",
    content: [
      "Once a registration has been approved and payment has been successfully completed, the registration fee is generally non-refundable.",
      "Refunds will not be provided for a change of mind, scheduling conflict, business commitment, personal emergency, travel issue, visa issue, illness, late arrival or failure to attend the event.",
      "A participant who attends only part of the event will not be eligible for a full or partial refund.",
    ],
  },
  {
    number: "04",
    title: "Registration Transfer",
    content: [
      "If you are unable to attend, you may request to transfer your registration to another eligible participant.",
      "Transfer requests must be submitted at least 14 calendar days before the scheduled event date.",
      "The replacement participant must complete the required application or verification process and must satisfy the eligibility and curation requirements of the India Leadership Summit.",
      "Registration transfers are valid only after receiving written approval from the organiser. Unauthorised transfers, resale or sharing of entry credentials are prohibited.",
    ],
  },
  {
    number: "05",
    title: "Application Not Approved",
    content: [
      "If a payment has been collected before final application approval and the organiser later declines the application, the amount received will be refunded.",
      "The refund will be issued to the original payment method after verification of the transaction.",
      "The organiser may deduct only those payment-processing charges or statutory deductions that cannot reasonably be recovered, where permitted by applicable law.",
    ],
  },
  {
    number: "06",
    title: "Duplicate or Incorrect Payments",
    content: [
      "If you are charged more than once for the same registration, please contact the India Leadership Summit team with the payment references and registered contact details.",
      "After verification, any confirmed duplicate or excess payment will be refunded to the original payment method.",
      "Do not initiate another payment if an amount has been deducted but the registration page does not immediately show confirmation. Please contact the organiser for payment verification.",
    ],
  },
  {
    number: "07",
    title: "Event Postponement",
    content: [
      "If the India Leadership Summit is postponed, your existing registration will automatically remain valid for the rescheduled date.",
      "The revised date, venue and access information will be communicated to registered participants through the contact details provided during registration.",
      "A postponement does not automatically qualify for a refund. Any special transfer or refund option offered for the rescheduled event will be communicated separately by the organiser.",
    ],
  },
  {
    number: "08",
    title: "Event Cancellation",
    content: [
      "If the organiser cancels the India Leadership Summit and does not provide a replacement or rescheduled date, the registration fee received from the participant will be refunded.",
      "The organiser will not be responsible for reimbursing travel, accommodation, visa, transportation, loss of income, loss of opportunity or any other personal or business expense.",
      "Refund liability will be limited to the registration amount actually received by the organiser.",
    ],
  },
  {
    number: "09",
    title: "Programme and Speaker Changes",
    content: [
      "The organiser may make reasonable changes to the programme, speakers, session timings, venue, seating plan or event format.",
      "A change, replacement or cancellation of a speaker, panel, session or programme item will not by itself qualify the participant for a refund.",
      "The organiser will make reasonable efforts to deliver an event experience consistent with the purpose and positioning of the India Leadership Summit.",
    ],
  },
  {
    number: "10",
    title: "Removal for Misconduct",
    content: [
      "A participant may be refused entry or removed from the event for violating the Terms and Conditions, confidentiality requirements, venue rules or attendee code of conduct.",
      "Participants removed for harassment, disruption, unauthorised recording, credential sharing, unlawful activity or other misconduct will not be eligible for a refund.",
    ],
  },
  {
    number: "11",
    title: "Refund Processing",
    content: [
      "Approved refunds will be processed to the original payment method used for the transaction.",
      "Refund requests must include the participant's registered name, email address, phone number, order reference and payment transaction reference.",
      "Approved refunds will generally be initiated within 7 to 10 business days. Banks and payment providers may require additional time to reflect the amount in the participant's account.",
      "The organiser cannot process refunds to a different bank account, card, wallet or payment method unless required by law or approved after appropriate verification.",
    ],
  },
  {
    number: "12",
    title: "Force Majeure",
    content: [
      "The organiser will not be responsible for a delay, interruption, postponement or cancellation caused by circumstances beyond its reasonable control.",
      "Such circumstances may include natural disasters, severe weather, epidemic, government restriction, civil disturbance, security threats, venue closure, transportation disruption, utility failure or other force majeure events.",
      "Where possible, the organiser may reschedule the event, provide an alternative format or communicate an appropriate resolution to registered participants.",
    ],
  },
  {
    number: "13",
    title: "How to Request Assistance",
    content: [
      "All cancellation, transfer, duplicate-payment and refund requests must be submitted through the official India Leadership Summit contact details.",
      "Submitting a request does not automatically confirm that a refund or transfer has been approved.",
      "The organiser may request identity, registration and transaction information before processing the request.",
    ],
  },
  {
    number: "14",
    title: "Applicable Rights",
    content: [
      "Nothing in this policy is intended to remove or restrict any consumer right that cannot legally be excluded under applicable Indian law.",
      "If any part of this policy conflicts with a mandatory legal requirement, the applicable legal requirement will prevail to the extent of that conflict.",
      "This policy should be read together with the India Leadership Summit Terms and Conditions and Privacy Policy.",
    ],
  },
];

function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-gold/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-32 h-[280px] w-[280px] rounded-full border border-gold/10"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/70" />

              <p className="eyebrow">
                Registration Policy · ILS 2026
              </p>
            </div>

            <h1 className="mt-8 text-5xl leading-none text-foreground sm:text-6xl lg:text-8xl">
              Refund &amp;
              <span className="gold-gradient-text block">
                Cancellation Policy
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Clear information about cancellations, registration
              transfers, duplicate payments, event postponement and
              eligible refunds.
            </p>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-border/60 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Last updated
                </p>

                <p className="mt-2 font-serif text-lg text-foreground">
                  23 July 2026
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Organiser
                </p>

                <p className="mt-2 font-serif text-lg text-foreground">
                  CorporateConnections AP&amp;TS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <p className="eyebrow">Important notice</p>

            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              India Leadership Summit registrations are for an
              application-led event service. Physical product returns are
              not applicable. Confirmed registrations are generally
              non-refundable, except in the circumstances described below.
            </p>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="divide-y divide-border/60">
          {policySections.map((section) => (
            <section
              key={section.number}
              className="grid gap-5 py-12 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-8 sm:py-16"
            >
              <p className="text-xs font-medium tracking-[0.24em] text-gold">
                {section.number}
              </p>

              <div>
                <h2 className="text-2xl leading-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-6 space-y-5">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Refund summary */}
        <section className="mt-16 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">Policy summary</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              When is a refund available?
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Eligible
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Event cancellation without a replacement date.
                </p>
              </div>

              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Eligible
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Verified duplicate or excess payment.
                </p>
              </div>

              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Eligible
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Payment collected before an application is declined.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact card */}
        <section className="mt-8 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">Need assistance?</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Contact the ILS registration team.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Include your registered name, email address, order reference
              and payment transaction reference so the team can verify your
              request.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:ils@corporateconnections-india.com?subject=ILS%202026%20Refund%20or%20Cancellation%20Request"
                className="btn-gold"
              >
                Submit a request
              </a>

              <a
                href="/terms-and-conditions"
                className="btn-outline-gold"
              >
                View terms
              </a>

              <a href="/" className="btn-outline-gold">
                Return to home
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}