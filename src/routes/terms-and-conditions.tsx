import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditionsPage,
});

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: [
      "These Terms and Conditions govern your use of this website, your registration, payment and attendance at the India Leadership Summit 2026.",
      "By submitting an application, making a payment or attending the event, you confirm that you have read, understood and accepted these Terms and Conditions.",
    ],
  },
  {
    number: "02",
    title: "About the Event",
    content: [
      "The India Leadership Summit 2026 is hosted by CorporateConnections AP&TS.",
      "The event is planned to take place in Hyderabad during November 2026. Final information about the venue, schedule, speakers and access instructions will be communicated to confirmed attendees.",
      "The organiser may update the event programme, speakers, venue, timings or format whenever reasonably required.",
    ],
  },
  {
    number: "03",
    title: "Applications and Eligibility",
    content: [
      "Attendance at the India Leadership Summit is curated and subject to approval.",
      "Submitting an application does not guarantee acceptance or entry to the event.",
      "Applicants must provide accurate and complete information. The organiser may reject applications containing false, misleading or incomplete information.",
      "Applicants must be at least 18 years old on the date of the event.",
    ],
  },
  {
    number: "04",
    title: "Registration Confirmation",
    content: [
      "Your registration is confirmed only after your application has been approved, the required payment has been received and an official confirmation has been issued.",
      "Registration confirmations, invitations, badges and QR codes are personal to the approved attendee and must not be sold, shared or transferred without written approval.",
      "Attendees may be required to present a valid government-issued photo ID at the venue.",
    ],
  },
  {
    number: "05",
    title: "Registration Fees and Payments",
    content: [
      "The applicable registration fee, taxes and payment details will be displayed during registration or communicated through official correspondence.",
      "Payments must be completed using an authorised payment link or payment method provided by the organiser.",
      "A registration is not complete until the payment provider confirms that the transaction was successful.",
      "Attendees are responsible for providing correct billing, contact and tax information.",
    ],
  },
  {
    number: "06",
    title: "Cancellations and Refunds",
    content: [
      "Unless otherwise communicated in writing, completed registrations are non-refundable.",
      "Failure to attend, late arrival, travel issues, scheduling conflicts or partial attendance will not qualify for a refund.",
      "A registration transfer may be requested at least 14 days before the event. All transfers are subject to organiser approval and the replacement attendee must meet the event eligibility requirements.",
      "Nothing in this section limits any consumer right that cannot legally be excluded.",
    ],
  },
  {
    number: "07",
    title: "Event Changes or Cancellation",
    content: [
      "The organiser may change the event date, venue, programme, speakers, format, seating arrangement or access process when reasonably necessary.",
      "A change in speakers, sessions or programme timings does not automatically create a right to a refund.",
      "If the event is postponed, registrations will normally remain valid for the new date.",
      "If the event is cancelled without a replacement date, the organiser will refund the registration fee received. Travel, accommodation and other personal expenses will not be reimbursed.",
    ],
  },
  {
    number: "08",
    title: "Attendee Conduct",
    content: [
      "All attendees must behave respectfully towards speakers, guests, organisers, venue staff and other participants.",
      "Harassment, discrimination, intimidation, threats, disruptive behaviour and unauthorised solicitation are not permitted.",
      "The organiser may refuse entry or remove any attendee whose behaviour creates a safety, confidentiality, reputational or operational concern.",
      "An attendee removed for violating these Terms will not normally receive a refund.",
    ],
  },
  {
    number: "09",
    title: "Confidentiality and Recording",
    content: [
      "The India Leadership Summit is intended to provide a confidential and trusted environment.",
      "Unless specifically identified as public, discussions should be treated as off-record and conducted under the Chatham House Rule.",
      "Audio recording, video recording, livestreaming and unauthorised transcription are prohibited.",
      "Attendees must not publish private discussions, direct quotations, attendee contact details or confidential business information without permission.",
    ],
  },
  {
    number: "10",
    title: "Photography and Event Media",
    content: [
      "The organiser may arrange official photography or video coverage in reception, networking and common areas.",
      "By attending areas where official photography is taking place, you acknowledge that you may appear incidentally in event photographs or videos.",
      "Official media may be used for reasonable promotional, editorial and archival purposes.",
      "Attendees who do not wish to be directly photographed should inform the registration or event team.",
    ],
  },
  {
    number: "11",
    title: "Intellectual Property",
    content: [
      "The event name, website, branding, logos, written content, designs and organiser-created materials are owned by or licensed to the organiser.",
      "Event materials may be used for personal and internal professional reference only.",
      "Attendees may not copy, sell, commercially distribute, modify or republish event content without prior written permission.",
      "Speakers and attendees retain ownership of their own presentations, research, trademarks and business information.",
    ],
  },
  {
    number: "12",
    title: "Personal Information",
    content: [
      "The organiser may collect information including your name, contact details, company, designation, application responses, billing information and payment status.",
      "This information may be used to review applications, process registrations, verify identity, issue invoices, communicate event updates and manage event security.",
      "Personal information will be handled according to applicable Indian data protection laws and the organiser's Privacy Policy.",
      "Attendees must not collect, scrape, reproduce or commercially use other attendees' personal information without permission.",
    ],
  },
  {
    number: "13",
    title: "Third-Party Services",
    content: [
      "The website and registration process may use third-party services such as payment gateways, email providers, hosting providers and analytics services.",
      "Your use of these services may also be governed by the third party's own terms and privacy policies.",
      "Payment details entered on a hosted payment page are processed by the relevant payment provider.",
    ],
  },
  {
    number: "14",
    title: "Liability",
    content: [
      "Attendees are responsible for their own travel, accommodation, health, personal belongings and participation decisions.",
      "The organiser does not guarantee any business introduction, partnership, investment, commercial opportunity or professional outcome.",
      "To the maximum extent permitted by law, the organiser will not be liable for indirect or consequential losses, including loss of profit, revenue, opportunity or goodwill.",
      "The organiser's total liability will not exceed the registration fee actually paid by the attendee.",
    ],
  },
  {
    number: "15",
    title: "Governing Law",
    content: [
      "These Terms and Conditions are governed by the laws of India.",
      "Any dispute should first be discussed in good faith between the attendee and the organiser.",
      "If the dispute cannot be resolved, it may be referred to arbitration under the Arbitration and Conciliation Act, 1996.",
      "The seat of arbitration will be Hyderabad, Telangana and the proceedings will be conducted in English.",
    ],
  },
  {
    number: "16",
    title: "Contact and Updates",
    content: [
      "The organiser may update these Terms and Conditions when required to reflect changes to the event, payment process, website or applicable laws.",
      "The latest revision date will be displayed on this page.",
      "Questions about these Terms and Conditions may be sent to ils@corporateconnections-india.com.",
    ],
  },
];

function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/70" />
              <p className="eyebrow">Legal · ILS 2026</p>
            </div>

            <h1 className="mt-8 text-5xl leading-none text-foreground sm:text-6xl lg:text-8xl">
              Terms &amp;
              <span className="gold-gradient-text block">Conditions</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              The terms governing your application, registration, payment
              and attendance at the India Leadership Summit 2026.
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

      {/* Important message */}
      <section className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <p className="eyebrow">Please read carefully</p>

            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              Submitting an application or completing a payment does not
              automatically guarantee admission. Attendance remains subject
              to approval, payment confirmation and compliance with these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="divide-y divide-border/60">
          {sections.map((section) => (
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

        {/* Contact card */}
        <div className="mt-16 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">Questions about these terms?</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              We are here to help.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Contact the India Leadership Summit team for registration,
              payment, transfer or legal enquiries.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:ils@corporateconnections-india.com"
                className="btn-gold"
              >
                Contact the ILS team
              </a>

              <a href="/" className="btn-outline-gold">
                Return to home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}