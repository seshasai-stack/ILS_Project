import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

const privacySections = [
  {
    number: "01",
    title: "About This Privacy Policy",
    content: [
      "This Privacy Policy explains how personal information is collected, used, stored, shared and protected when you visit the India Leadership Summit website, submit an application, complete a registration, make a payment or attend the India Leadership Summit 2026.",
      "The India Leadership Summit is hosted by CorporateConnections AP&TS. References to “ILS”, “we”, “us”, “our” or the “Organiser” refer to the legal entity identified on your registration invoice, payment receipt or official confirmation.",
      "By using this website or submitting your information, you acknowledge the practices described in this Privacy Policy.",
    ],
  },
  {
    number: "02",
    title: "Information We Collect",
    content: [
      "We may collect personal information that you provide directly while applying, registering, making a payment, contacting the organiser or attending the event.",
      "This information may include your name, email address, phone number, company name, designation, professional profile, city, billing information, tax details, registration preferences and application responses.",
      "We may also collect your order reference, transaction reference, payment status, invoice details, communication history and attendance information.",
      "Please provide only information that is accurate, current and relevant to your application or registration.",
    ],
  },
  {
    number: "03",
    title: "Information Collected Automatically",
    content: [
      "When you visit the website, certain technical information may be collected automatically through cookies, server logs, analytics services and similar technologies.",
      "This information may include your IP address, browser type, device type, operating system, referring page, pages visited, approximate location, date and time of access and website interaction information.",
      "We use this information to maintain website security, diagnose technical issues, understand website usage and improve the registration experience.",
    ],
  },
  {
    number: "04",
    title: "How We Use Your Information",
    content: [
      "We use personal information to review applications, determine eligibility, process registrations, verify identity and manage admission to the India Leadership Summit.",
      "We may use your information to send application updates, payment confirmations, invoices, venue information, access instructions, schedule changes, safety notices and other operational communications.",
      "Information may also be used to provide support, respond to enquiries, prevent fraud, maintain event security, improve the website and comply with legal, accounting or regulatory requirements.",
      "We will not use personal information for purposes that are materially unrelated to those described in this policy without providing appropriate notice or obtaining consent where required.",
    ],
  },
  {
    number: "05",
    title: "Application and Curation Information",
    content: [
      "The India Leadership Summit is an application-led and curated event. Information submitted in your application may be reviewed to understand your professional background, leadership role, organisation and suitability for the event.",
      "Submitting an application does not guarantee approval or admission.",
      "Application information will be accessible only to authorised personnel and service providers who require it to administer the application and registration process.",
      "We do not intend to use application responses to make decisions that produce legal consequences unrelated to event participation.",
    ],
  },
  {
    number: "06",
    title: "Payments and Billing",
    content: [
      "Payments may be processed through an authorised third-party payment gateway.",
      "Payment-card, banking, UPI or wallet details entered on the payment provider’s hosted page are processed by the payment provider according to its own terms and privacy practices.",
      "We may receive limited payment information such as the payer’s name, billing details, transaction reference, order reference, amount, payment status and payment method type.",
      "We use this information to confirm registrations, issue invoices, reconcile payments, process eligible refunds and respond to payment-related enquiries.",
    ],
  },
  {
    number: "07",
    title: "Cookies and Similar Technologies",
    content: [
      "Cookies are small files or identifiers stored on your device when you access a website.",
      "We may use essential cookies required for website functionality, security, form submission, session management and payment redirection.",
      "We may also use analytics cookies to understand website performance and how visitors interact with the website.",
      "You can manage cookies using your browser settings. Disabling essential cookies may affect the functionality of certain website features.",
    ],
  },
  {
    number: "08",
    title: "Communication Preferences",
    content: [
      "Operational communications relating to your application, payment, registration, venue access, event schedule, safety or policy changes are necessary to administer your participation.",
      "We may send these communications by email, telephone, SMS, WhatsApp or another contact method provided during registration.",
      "Promotional or marketing communications will be sent only where permitted by applicable law or where you have provided appropriate consent.",
      "You may opt out of promotional communications by using the unsubscribe option provided or by contacting us. Opting out of marketing will not stop essential registration or event communications.",
    ],
  },
  {
    number: "09",
    title: "How We Share Information",
    content: [
      "We do not sell or rent personal information to advertisers or unrelated third parties.",
      "We may share information with authorised service providers that support website hosting, payment processing, email delivery, registration management, analytics, event operations, security, accounting and customer support.",
      "Information may be shared with venue teams, security personnel or event partners only where reasonably required to manage access, safety and event delivery.",
      "Service providers are expected to process information only for authorised purposes and maintain appropriate confidentiality and security measures.",
    ],
  },
  {
    number: "10",
    title: "Legal and Safety Disclosures",
    content: [
      "We may disclose information where reasonably necessary to comply with applicable law, regulation, court order, government request or legal process.",
      "Information may also be disclosed to investigate fraud, enforce our Terms and Conditions, protect event attendees, maintain security or defend the rights and property of the organiser.",
      "Where legally permitted, we will seek to limit disclosures to information reasonably required for the relevant purpose.",
    ],
  },
  {
    number: "11",
    title: "Attendee Information and Networking",
    content: [
      "The India Leadership Summit may provide opportunities for professional networking between approved attendees.",
      "Your name, designation, organisation or professional profile may appear on your event badge, seating information or a limited attendee directory where required for event participation.",
      "We will seek appropriate permission before making attendee contact details broadly available to other participants.",
      "Attendees must not scrape, copy, sell, publish or commercially use another attendee’s information without permission.",
    ],
  },
  {
    number: "12",
    title: "Photography and Event Media",
    content: [
      "Official photography or video recording may take place in clearly identified reception, networking and common areas.",
      "Event photographs or videos may be used for reasonable archival, editorial, reporting and promotional purposes.",
      "Confidential discussions and off-record sessions will not be intentionally recorded unless participants are informed before the session.",
      "If you do not wish to be directly photographed, please inform the registration team before the event or speak with the on-site team.",
    ],
  },
  {
    number: "13",
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this policy.",
      "Registration, payment, invoice and tax information may be retained for the period required by applicable accounting, taxation and legal obligations.",
      "Application and communication information may be retained for event administration, dispute resolution, fraud prevention, record keeping and future event planning where permitted.",
      "Information that is no longer required will be deleted, anonymised or securely archived, subject to applicable legal and operational requirements.",
    ],
  },
  {
    number: "14",
    title: "Information Security",
    content: [
      "We use reasonable administrative, technical and organisational safeguards designed to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      "These measures may include access controls, secure hosting, encrypted connections, authentication controls, monitoring and restricted access to registration information.",
      "No website, electronic transmission or storage system can be guaranteed to be completely secure.",
      "If we become aware of a personal-data breach, we will take reasonable steps to investigate, contain and address the incident and provide notifications where required by applicable law.",
    ],
  },
  {
    number: "15",
    title: "International Data Processing",
    content: [
      "Some technology, hosting, communication or payment service providers may process information using systems located outside your state or outside India.",
      "Where information is processed through an international service provider, we will take reasonable steps to ensure that the processing is connected to a legitimate business purpose and subject to appropriate safeguards.",
      "International processing will remain subject to applicable Indian data-protection requirements and any restrictions issued by competent authorities.",
    ],
  },
  {
    number: "16",
    title: "Your Privacy Rights",
    content: [
      "Subject to applicable law, you may request information about the personal data we process about you.",
      "You may request correction, completion or updating of inaccurate or incomplete personal information.",
      "You may request deletion of personal information that is no longer required for its stated purpose, subject to legal, accounting, security and contractual retention requirements.",
      "Where processing is based on consent, you may withdraw that consent. Withdrawal will not affect processing that occurred before the withdrawal and may affect our ability to provide certain optional services.",
      "You may also submit a grievance concerning the handling of your personal information.",
    ],
  },
  {
    number: "17",
    title: "How to Exercise Your Rights",
    content: [
      "To submit a privacy request, contact the India Leadership Summit team using the email address provided below.",
      "Your request should include your name, registered email address, phone number and a clear description of the information or action requested.",
      "We may request additional information to verify your identity and protect your information from unauthorised access.",
      "We will review and respond to valid requests within the period required by applicable law or within a reasonable time where no specific period applies.",
    ],
  },
  {
    number: "18",
    title: "Children’s Privacy",
    content: [
      "The India Leadership Summit is intended for adults who are at least 18 years old.",
      "We do not knowingly invite or accept applications from children.",
      "If you believe that a child has provided personal information through the website, please contact us so that we can review and remove the information where appropriate.",
    ],
  },
  {
    number: "19",
    title: "Third-Party Links",
    content: [
      "The website may contain links to payment gateways, partner websites, social media services, maps or other third-party platforms.",
      "We do not control the privacy, security or content practices of external websites.",
      "You should review the privacy policy of a third-party service before providing information through that service.",
      "The inclusion of an external link does not mean that we accept responsibility for all activities conducted by the linked website.",
    ],
  },
  {
    number: "20",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy to reflect changes to the website, event operations, service providers, legal requirements or data-processing practices.",
      "The latest revision date will be displayed at the top of this page.",
      "Material changes may also be communicated through the website or using the contact information provided during registration.",
      "Your continued use of the website after an update will be subject to the revised policy, where permitted by applicable law.",
    ],
  },
  {
    number: "21",
    title: "Contact and Grievances",
    content: [
      "Questions, privacy requests and grievances may be submitted to the India Leadership Summit privacy contact.",
      "Please include sufficient information to identify your registration and understand your request. Do not send passwords, full payment-card details or unnecessary sensitive information by email.",
      "If your concern is not resolved, you may pursue any remedy available under applicable Indian law.",
    ],
  },
];

function PrivacyPolicyPage() {
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

              <p className="eyebrow">Privacy · ILS 2026</p>
            </div>

            <h1 className="mt-8 text-5xl leading-none text-foreground sm:text-6xl lg:text-8xl">
              Privacy
              <span className="gold-gradient-text block">Policy</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              How we collect, use, share, retain and protect your
              information throughout the India Leadership Summit
              application and registration experience.
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

      {/* Privacy notice */}
      <section className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-[180px_1fr]">
            <p className="eyebrow">Your privacy matters</p>

            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              We collect only the information reasonably required to
              review applications, manage registrations, process
              payments, deliver the event and communicate with approved
              participants.
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="divide-y divide-border/60">
          {privacySections.map((section) => (
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

        {/* Information summary */}
        <section className="mt-16 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">At a glance</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              How your information is handled.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Collected
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Application, contact, registration, billing and
                  attendance information.
                </p>
              </div>

              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Used
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  To review applications, process payments and deliver
                  the event experience.
                </p>
              </div>

              <div className="border border-border/70 bg-surface/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Protected
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Through reasonable access controls, security safeguards
                  and limited sharing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact card */}
        <section className="mt-8 border border-gold/20 bg-card/60">
          <div className="gold-divider" />

          <div className="p-8 sm:p-10">
            <p className="eyebrow">Privacy request or grievance?</p>

            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
              Contact the ILS privacy team.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Include your registered name, email address and a clear
              description of your privacy request. Do not email passwords
              or complete payment-card details.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:ils@corporateconnections-india.com?subject=ILS%202026%20Privacy%20Request"
                className="btn-gold"
              >
                Submit privacy request
              </a>

              <a
                href="/terms-and-conditions"
                className="btn-outline-gold"
              >
                View terms
              </a>

              <a
                href="/return-policy"
                className="btn-outline-gold"
              >
                Refund policy
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