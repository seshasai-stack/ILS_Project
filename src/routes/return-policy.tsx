import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/return-policy")({
  component: ReturnPolicyPage,
});

const policySections = [
  {
    number: "01",
    title: "About This Policy",
    content: [
      "This Return, Refund and Cancellation Policy applies to registrations and payments made for the India Leadership Summit 2026.",
      "The India Leadership Summit is organised and managed by ASCENT SPHERE LLP, referred to in this policy as the “Company”, “Organiser”, “we”, “us” or “our”.",
      "Since registration relates to an event-based service and not the sale of a physical product, physical product returns are not applicable.",
      "This policy explains the conditions under which registration fees may be refunded, transferred, adjusted or retained.",
      "By submitting an application, completing payment or confirming registration, the participant acknowledges and agrees to this policy along with the Terms and Conditions and Privacy Policy.",
    ],
  },
  {
    number: "02",
    title: "Registration Payments",
    content: [
      "A participant’s registration is considered confirmed only after the application has been approved, the complete registration fee has been received and an official confirmation has been issued by the Company.",
      "Submitting an application or initiating a payment does not automatically guarantee approval or admission to the India Leadership Summit.",
      "The registration fee, applicable taxes and payment details will be displayed during checkout or communicated through an official payment link issued by the Company.",
      "Participants must ensure that all billing, tax, contact and registration information provided during payment is complete and accurate.",
    ],
  },
  {
    number: "03",
    title: "Return Payments",
    content: [
      "Participants who are unable to attend the event must submit their cancellation request in writing by emailing ils@corporateconnections-india.com from their registered email address.",
      "The cancellation request must include the participant’s full name, registered email address, phone number, company name, registration or order reference and payment transaction reference.",
      "The effective date of cancellation shall be the date on which ASCENT SPHERE LLP receives the written cancellation request.",
      "Cancellation requests submitted through telephone calls, verbal communication, social media, WhatsApp or an email address other than the participant’s registered email address may not be considered valid until the request has been verified in writing.",
    ],
  },
  {
    number: "04",
    title: "Cancellations on or Before 30 September 2026",
    content: [
      "Participants who cancel their registration on or before 30 September 2026 shall be eligible for a refund equal to 75% of the total registration fee.",
      "The refund will be applicable only where the registration has been fully paid and officially confirmed by the Company.",
      "The remaining 25% of the total registration fee shall be retained by ASCENT SPHERE LLP towards administrative expenses, payment gateway charges, venue commitments and operational costs already incurred in connection with the event.",
      "The effective cancellation date will be determined based on the date on which the written cancellation request is received at ils@corporateconnections-india.com.",
    ],
  },
  {
    number: "05",
    title:
      "Cancellations Between 1 October 2026 and 14 October 2026",
    content: [
      "Participants whose written cancellation requests are received between 1 October 2026 and 14 October 2026, both dates inclusive, shall be eligible for a refund equal to 50% of the total registration fee.",
      "The remaining 50% shall be retained by ASCENT SPHERE LLP to cover venue reservations, catering commitments, event production expenses, delegate materials, hospitality arrangements and other operational costs already committed by the Company.",
      "The refund will be calculated on the total registration fee received for the confirmed participant registration.",
      "No request submitted after 14 October 2026 will qualify for the 50% refund provided under this section.",
    ],
  },
  {
    number: "06",
    title: "Cancellations on or After 15 October 2026",
    content: [
      "No refunds shall be issued for cancellation requests received on or after 15 October 2026.",
      "From this date, all registrations shall be treated as final and non-refundable.",
      "By this stage, ASCENT SPHERE LLP may have entered into binding contractual commitments with venues, hotels, vendors, hospitality partners, production agencies, catering providers and other service providers.",
      "The registration fee will therefore be retained to cover event-related costs, contractual commitments and operational expenses already incurred or committed by the Company.",
      "This condition will apply regardless of the reason for cancellation, including personal emergencies, travel disruptions, business commitments, health concerns, scheduling conflicts, visa-related issues or failure to attend.",
    ],
  },
  {
    number: "07",
    title: "Refund Calculation",
    content: [
      "Eligible refunds will be calculated as a percentage of the total registration fee received by ASCENT SPHERE LLP for the relevant confirmed registration.",
      "Where required by law, applicable taxes will be adjusted according to the tax treatment of the original transaction and the refund.",
      "Payment gateway charges, bank charges, foreign-exchange charges or other non-recoverable transaction costs may be deducted where such costs cannot reasonably be recovered by the Company.",
      "The final refund amount will be communicated to the participant after verification of the cancellation request and original payment.",
    ],
  },
  {
    number: "08",
    title: "Refund Processing",
    content: [
      "Approved refunds will be initiated to the original payment method used for the registration transaction.",
      "Eligible refunds will generally be initiated within 7 to 10 business days after the cancellation request has been reviewed and approved.",
      "The participant’s bank, card issuer, payment gateway, UPI provider or wallet provider may require additional time to reflect the refunded amount.",
      "ASCENT SPHERE LLP will not be responsible for delays caused by the participant’s bank, card issuer or third-party payment provider after the refund has been successfully initiated.",
      "Refunds will not ordinarily be processed to a different bank account, card, UPI ID, wallet or payment method unless required by law or approved after appropriate verification.",
    ],
  },
  {
    number: "09",
    title: "Duplicate or Excess Payments",
    content: [
      "If a participant is charged more than once for the same registration, the participant must contact the Company at ils@corporateconnections-india.com using the registered email address.",
      "The request must include the participant’s registered details and all available payment transaction references.",
      "After verification, any confirmed duplicate or excess payment will be refunded to the original payment method.",
      "Participants should not initiate another payment if an amount has been deducted but the registration page does not immediately display confirmation. The participant should first contact the Company for transaction verification.",
    ],
  },
  {
    number: "10",
    title: "Application Not Approved",
    content: [
      "If payment has been collected before the Company completes its final review and the participant’s application is subsequently declined, the amount received will be eligible for refund.",
      "The refund will be processed to the original payment method after verification of the application and transaction.",
      "The Company may deduct only those statutory deductions, payment gateway charges or processing costs that cannot reasonably be recovered, where permitted by applicable law.",
      "A participant whose application has not been approved will not be entitled to attend the event merely because payment was initiated or completed.",
    ],
  },
  {
    number: "11",
    title: "Registration Transfer",
    content: [
      "A participant who is unable to attend may request permission to transfer the registration to another eligible participant.",
      "Transfer requests must be submitted in writing from the registered email address to ils@corporateconnections-india.com.",
      "The replacement participant must complete any application, identity verification or eligibility process required by the Company.",
      "Every transfer is subject to written approval by ASCENT SPHERE LLP and is not automatically guaranteed.",
      "The registration will continue to remain in the original participant’s name until the Company issues written confirmation that the transfer has been approved.",
      "Unauthorised transfers, resale, sharing of QR codes, badges or registration credentials are strictly prohibited.",
    ],
  },
  {
    number: "12",
    title: "Failure to Attend",
    content: [
      "A participant who does not attend the event and has not submitted a valid written cancellation request within the applicable refund period will not be eligible for any refund.",
      "Late arrival, early departure or partial attendance will not qualify the participant for a full or partial refund.",
      "Failure to receive or read event emails, venue instructions, access information or schedule updates will not create an entitlement to a refund where such communications were sent to the contact details provided during registration.",
    ],
  },
  {
    number: "13",
    title: "Event Postponement",
    content: [
      "If the India Leadership Summit is postponed, the participant’s existing registration will ordinarily remain valid for the rescheduled date.",
      "The revised date, venue and access information will be communicated using the contact details submitted during registration.",
      "A postponement will not automatically qualify the participant for a refund.",
      "Any special cancellation, transfer, credit or refund option offered for the postponed event will be communicated separately by ASCENT SPHERE LLP.",
    ],
  },
  {
    number: "14",
    title: "Event Cancellation",
    content: [
      "If ASCENT SPHERE LLP cancels the India Leadership Summit and does not announce a replacement or rescheduled date, the registration fee received from the participant will be eligible for refund.",
      "The Company’s refund liability will be limited to the registration fee actually received for the relevant participant.",
      "ASCENT SPHERE LLP will not be responsible for reimbursing travel, accommodation, visa, transportation, loss of income, loss of opportunity, business expenses or any other personal or indirect expense.",
      "Any refund process applicable to an event cancellation will be communicated to registered participants through official communication channels.",
    ],
  },
  {
    number: "15",
    title: "Programme, Venue and Speaker Changes",
    content: [
      "ASCENT SPHERE LLP may make reasonable changes to the event programme, venue, speakers, panels, session timings, seating arrangements, hospitality services or event format.",
      "A change, replacement or cancellation of a speaker, panel, session, venue area or programme item will not by itself qualify a participant for a refund.",
      "The Company will make reasonable efforts to provide an event experience consistent with the purpose and positioning of the India Leadership Summit.",
    ],
  },
  {
    number: "16",
    title: "Removal for Misconduct",
    content: [
      "A participant may be refused entry or removed from the event for violating the Terms and Conditions, confidentiality obligations, venue rules, security instructions or attendee code of conduct.",
      "Participants removed for harassment, disruption, credential sharing, unauthorised recording, unlawful activity, threats, misconduct or any action that affects the safety or experience of other attendees will not be eligible for a refund.",
      "The decision to refuse entry or remove a participant may be taken by the Company, venue management or authorised security personnel.",
    ],
  },
  {
    number: "17",
    title: "Force Majeure",
    content: [
      "ASCENT SPHERE LLP will not be responsible for delay, interruption, postponement or cancellation caused by circumstances beyond its reasonable control.",
      "Such circumstances may include natural disasters, severe weather, epidemic, pandemic, government restrictions, civil disturbance, security threats, venue closure, transportation disruption, utility failure, labour action or other force majeure events.",
      "Where reasonably possible, the Company may reschedule the event, provide an alternative format, transfer registrations or communicate another appropriate resolution.",
      "Refund eligibility in a force majeure situation will depend on the circumstances, unrecoverable commitments and the resolution communicated by the Company.",
    ],
  },
  {
    number: "18",
    title: "How to Submit a Cancellation Request",
    content: [
      "All cancellation and refund requests must be emailed to ils@corporateconnections-india.com from the participant’s registered email address.",
      "The email subject may be written as “ILS 2026 Cancellation Request”.",
      "The request should include the participant’s full name, registered phone number, company name, registration or order reference, payment transaction reference and reason for cancellation.",
      "The Company may request additional information or identity verification before approving and processing the request.",
      "Submitting a cancellation request does not automatically confirm that a refund has been approved.",
    ],
  },
  {
    number: "19",
    title: "Applicable Rights",
    content: [
      "Nothing in this policy is intended to remove, waive or restrict any consumer right that cannot legally be excluded under applicable Indian law.",
      "If any provision of this policy conflicts with a mandatory legal requirement, the applicable legal requirement shall prevail to the extent of that conflict.",
      "This Return, Refund and Cancellation Policy must be read together with the India Leadership Summit Terms and Conditions and Privacy Policy.",
    ],
  },
  {
    number: "20",
    title: "Policy Updates",
    content: [
      "ASCENT SPHERE LLP may update this policy where reasonably necessary to reflect changes to the event, registration process, payment process, service providers or applicable law.",
      "The latest revision date will be displayed at the top of this page.",
      "Changes will not ordinarily reduce refund rights that have already become applicable under a confirmed registration without appropriate notice or legal basis.",
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
              Return Payments
              <span className="gold-gradient-text block">
                &amp; Cancellation Policy
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Clear information regarding cancellation deadlines,
              eligible refund percentages, registration transfers,
              duplicate payments and event cancellation.
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
                  ASCENT SPHERE LLP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <p className="eyebrow">Important notice</p>

            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              Cancellation requests must be emailed from the participant’s
              registered email address to{" "}
              <a
                href="mailto:ils@corporateconnections-india.com"
                className="text-gold underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold-soft"
              >
                ils@corporateconnections-india.com
              </a>
              . Refund eligibility will be determined by the date on which
              ASCENT SPHERE LLP receives the written request.
            </p>
          </div>
        </div>
      </section>

      {/* Refund timeline */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Refund timeline</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Refund eligibility by cancellation date.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="card-hover border border-gold/30 bg-card/60 p-6 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                On or before
              </p>

              <h3 className="mt-4 text-2xl text-foreground">
                30 September 2026
              </h3>

              <p className="mt-6 font-serif text-5xl text-gold">
                75%
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Refund of the total registration fee. The remaining 25%
                will be retained towards administrative and committed
                operational expenses.
              </p>
            </article>

            <article className="card-hover border border-gold/30 bg-card/60 p-6 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                Between
              </p>

              <h3 className="mt-4 text-2xl text-foreground">
                1–14 October 2026
              </h3>

              <p className="mt-6 font-serif text-5xl text-gold">
                50%
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Refund of the total registration fee. The balance will
                cover venue, catering, production, delegate materials and
                committed event expenses.
              </p>
            </article>

            <article className="card-hover border border-gold/30 bg-card/60 p-6 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                On or after
              </p>

              <h3 className="mt-4 text-2xl text-foreground">
                15 October 2026
              </h3>

              <p className="mt-6 font-serif text-5xl text-gold">
                0%
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Registrations will be treated as final and
                non-refundable due to binding venue, vendor, hospitality
                and production commitments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Policy content */}
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

        {/* Request card */}
        <section className="mt-16 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">
              Cancellation or refund request
            </p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Submit your request in writing.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Send the request from your registered email address and
              include your name, phone number, company name, registration
              reference and payment transaction reference.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:ils@corporateconnections-india.com?subject=ILS%202026%20Cancellation%20Request"
                className="btn-gold"
              >
                Submit cancellation request
              </a>

              <a
                href="/terms-and-conditions"
                className="btn-outline-gold"
              >
                View terms
              </a>

              <a
                href="/privacy-policy"
                className="btn-outline-gold"
              >
                Privacy policy
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