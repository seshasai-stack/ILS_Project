import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const API_BASE_URL = "https://ils-backend-1.onrender.com";

const REGISTRATION_FEE = 39_500;
const GST_RATE = 18;
const GST_AMOUNT = (REGISTRATION_FEE * GST_RATE) / 100;
const TOTAL_AMOUNT = REGISTRATION_FEE + GST_AMOUNT;

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export const Route = createFileRoute("/attend")({
  head: () => ({
    meta: [
      { title: "Register — ILS 2026" },
      {
        name: "description",
        content:
          "Register for the India Leadership Summit 2026. Separate pathways for members & founders and for partners, sponsors and speakers.",
      },
    ],
  }),
  component: AttendPage,
});

// ------- Audience A: Members / Founders (referral or press) -------
const audienceASchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  organization: z.string().trim().min(2, "Please enter your company").max(150),
  designation: z.string().trim().min(2, "Please enter your role").max(100),
  // referredBy: z.string().trim().max(150).optional().or(z.literal("")),
  intent: z
    .string()
    .trim()
    .min(10, "A sentence or two helps us route this thoughtfully")
    .max(800)
    .optional()
    .or(z.literal(""))
});
type AudienceAState = z.infer<typeof audienceASchema>;
const initialA: AudienceAState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  designation: "",
  intent: "",
};

// ------- Audience B: Partners / Sponsors / Speakers -------
const audienceBSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  organization: z.string().trim().min(2, "Please enter your organization").max(150),
  designation: z.string().trim().min(2, "Please enter your role").max(100),
  engagementType: z.enum(["partner", "sponsor", "speaker"], {
    message: "Please choose an engagement type",
  }),
  website: z.string().trim().url("Please enter a valid URL").max(255).optional().or(z.literal("")),
  proposal: z
    .string()
    .trim()
    .min(20, "Share a short proposal (a few sentences)")
    .max(1200),
});
type AudienceBState = z.infer<typeof audienceBSchema>;
const initialB: AudienceBState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  designation: "",
  engagementType: "partner",
  website: "",
  proposal: "",
};

function AttendPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="eyebrow">Register · ILS 2026</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          Two pathways. One <span className="gold-gradient-text italic">considered</span> room.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Attendance is by application. Choose the pathway that fits you best — we route each
          enquiry to a different desk and reply within five working days.
        </p>

        <div className="gold-divider my-12" />

        <Tabs defaultValue="a" className="w-full">
          <TabsList className="mb-8 grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-1">
            <TabsTrigger
              value="a"
              className="rounded-sm border border-border bg-transparent px-4 py-4 text-left data-[state=active]:border-gold data-[state=active]:bg-gold/5 data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold">Audience A</span>
                <span className="mt-1 font-serif text-lg">Members</span>
                {/* <span className="text-[11px] text-muted-foreground">By referral or press</span> */}
              </div>
            </TabsTrigger>
            {/* <TabsTrigger
              value="b"
              className="rounded-sm border border-border bg-transparent px-4 py-4 text-left data-[state=active]:border-gold data-[state=active]:bg-gold/5 data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold">Audience B</span>
                <span className="mt-1 font-serif text-lg">Guests</span> */}
                {/* <span className="text-[11px] text-muted-foreground">Assessing fit & credibility</span> */}
              {/* </div>
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="a">
            <AudienceAForm />
          </TabsContent>
          <TabsContent value="b">
            <AudienceBForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// -------------------- Audience A form --------------------
function AudienceAForm() {
  const [data, setData] = useState<AudienceAState>(initialA);
  const [errors, setErrors] = useState<Partial<Record<keyof AudienceAState, string>>>({});
  const [validatedData, setValidatedData] = useState<AudienceAState | null>(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update<K extends keyof AudienceAState>(k: K, v: string) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = audienceASchema.safeParse(data);

    if (!result.success) {
      const errs: Partial<Record<keyof AudienceAState, string>> = {};

      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof AudienceAState;
        errs[key] = issue.message;
      }

      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitError("");
    setValidatedData(result.data);
    setIsInvoiceOpen(true);
  }

  async function makePayment() {
    if (!validatedData) {
      setSubmitError("Please submit the form again.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch(
        `${API_BASE_URL}/api/routes/create-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedData),
        }
      );

      const paymentResponse = await response.json().catch(() => null);

      if (!response.ok || !paymentResponse?.success) {
        throw new Error(
          paymentResponse?.message ||
            "Unable to create the payment. Please try again."
        );
      }

      if (!paymentResponse.paymentUrl) {
        throw new Error("The payment gateway URL was not received.");
      }

      if (paymentResponse.orderId) {
        sessionStorage.setItem("ilsOrderId", paymentResponse.orderId);
      }

      window.location.assign(paymentResponse.paymentUrl);
    } catch (error) {
      console.error("Payment initialization failed:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to initiate payment."
      );

      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="glass space-y-6 rounded-sm p-8 md:p-10" noValidate>
      <p className="text-xs leading-relaxed text-muted-foreground">
        For CC members and founders arriving through referral or press. Tell us briefly what brings
        you in — we read each note.
      </p>
      <Field label="Full Name" id="a-name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" id="a-email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} />
        <Field label="Phone Number" id="a-phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Company" id="a-org" value={data.organization} onChange={(v) => update("organization", v)} error={errors.organization} />
        <Field label="Designation" id="a-role" value={data.designation} onChange={(v) => update("designation", v)} error={errors.designation} />
      </div>
      {/* <Field
        label="Referred By (optional)"
        id="a-ref"
        value={data.referredBy ?? ""}
        onChange={(v) => update("referredBy", v)}
        error={errors.referredBy}
      /> */}
      <TextareaField
        label="What brings you to ILS? (optional)"
        id="a-intent"
        value={data.intent}
        onChange={(v) => update("intent", v)}
        error={errors.intent}
        placeholder="A sentence or two. Helps us route thoughtfully."
      />

      {submitError && (
        <div
          role="alert"
          className="rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3"
        >
          <p className="text-sm text-destructive">{submitError}</p>
        </div>
      )}

      <FormFooter note="Review pricing before making payment" />
      </form>

      <PaymentInvoiceModal
        open={isInvoiceOpen}
        applicant={validatedData}
        isRedirecting={isSubmitting}
        error={submitError}
        onClose={() => {
          if (!isSubmitting) {
            setIsInvoiceOpen(false);
            setSubmitError("");
          }
        }}
        onMakePayment={makePayment}
      />
    </>
  );
}

function PaymentInvoiceModal({
  open,
  applicant,
  isRedirecting,
  error,
  onClose,
  onMakePayment,
}: {
  open: boolean;
  applicant: AudienceAState | null;
  isRedirecting: boolean;
  error: string;
  onClose: () => void;
  onMakePayment: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !isRedirecting) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, isRedirecting, onClose]);

  if (!open || !applicant) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-summary-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isRedirecting) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-full items-center justify-center py-4 sm:py-6">
        <div className="relative w-full rounded-2xl border border-gold/25 bg-background shadow-2xl sm:max-w-lg sm:rounded-sm">
        <div className="border-b border-border/70 bg-background px-5 py-4 md:px-7">
          <div className="pr-10">
            <p className="eyebrow">Payment summary</p>
            <h2 id="payment-summary-title" className="mt-2 font-serif text-3xl">
              Review your invoice
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close payment summary"
            onClick={onClose}
            disabled={isRedirecting}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-xl text-muted-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 px-5 py-5 md:px-7 md:py-6">
          <div className="rounded-sm border border-border/80 bg-secondary/20 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Billed to
                </p>
                <p className="mt-2 font-serif text-xl">{applicant.name}</p>
                <p className="mt-1 break-all text-sm text-muted-foreground">
                  {applicant.email}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {applicant.phone}
                </p>
              </div>

              <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                ILS 2026
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-border/70 pb-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Description
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Amount
              </span>
            </div>

            <div className="flex items-start justify-between gap-6 py-5">
              <div>
                <p className="font-medium text-foreground">
                  ILS 2026 Registration
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Member attendance application and event registration.
                </p>
              </div>
              <p className="shrink-0 font-medium">
                {formatINR(REGISTRATION_FEE)}
              </p>
            </div>

            <div className="space-y-3 border-t border-border/70 pt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatINR(REGISTRATION_FEE)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  GST ({GST_RATE}%)
                </span>
                <span>{formatINR(GST_AMOUNT)}</span>
              </div>

              <div className="gold-divider my-4" />

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Total payable
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Inclusive of all taxes
                  </p>
                </div>
                <p className="font-serif text-3xl text-gold">
                  {formatINR(TOTAL_AMOUNT)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gold/20 bg-gold/5 px-4 py-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Clicking Make Payment will securely redirect you to HDFC
              SmartGateway. The final payable amount is calculated and
              validated by the backend.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3"
            >
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isRedirecting}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-5 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:border-gold/60 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Back
            </button>

            <button
              type="button"
              onClick={onMakePayment}
              disabled={isRedirecting}
              className="btn-gold min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isRedirecting
                ? "Redirecting securely..."
                : `Make Payment · ${formatINR(TOTAL_AMOUNT)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// -------------------- Audience B form --------------------
function AudienceBForm() {
  const [data, setData] = useState<AudienceBState>(initialB);
  const [errors, setErrors] = useState<Partial<Record<keyof AudienceBState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof AudienceBState>(k: K, v: AudienceBState[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = audienceBSchema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof AudienceBState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof AudienceBState;
        errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // TODO: wire to backend — sends acknowledgement to applicant + notification
    //       to seshasai@corporateconnections-india.com with "Audience B — Partner/Sponsor/Speaker" copy.
  }

  if (submitted) {
    return <SuccessCard label="Audience B · Partner / Sponsor / Speaker" />;
  }

  const engagementOptions: Array<{ value: AudienceBState["engagementType"]; label: string }> = [
    { value: "partner", label: "Partner" },
    { value: "sponsor", label: "Sponsor" },
    { value: "speaker", label: "Speaker" },
  ];

  return (
    <form onSubmit={onSubmit} className="glass space-y-6 rounded-sm p-8 md:p-10" noValidate>
      <p className="text-xs leading-relaxed text-muted-foreground">
        For prospective partners, sponsors, and speakers assessing fit and credibility. Share a
        short proposal — we'll respond with the room's parameters.
      </p>

      <div>
        <span className="eyebrow">Engagement</span>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {engagementOptions.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => update("engagementType", opt.value)}
              className={`rounded-sm border px-3 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
                data.engagementType === opt.value
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {errors.engagementType && (
          <p className="mt-2 text-xs text-destructive">{errors.engagementType}</p>
        )}
      </div>

      <Field label="Full Name" id="b-name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" id="b-email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} />
        <Field label="Phone Number" id="b-phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Organisation" id="b-org" value={data.organization} onChange={(v) => update("organization", v)} error={errors.organization} />
        <Field label="Designation" id="b-role" value={data.designation} onChange={(v) => update("designation", v)} error={errors.designation} />
      </div>
      <Field
        label="Website (optional)"
        id="b-web"
        type="url"
        value={data.website ?? ""}
        onChange={(v) => update("website", v)}
        error={errors.website}
      />
      <TextareaField
        label="Proposal"
        id="b-proposal"
        rows={6}
        value={data.proposal}
        onChange={(v) => update("proposal", v)}
        error={errors.proposal}
        placeholder="Outline what you are proposing — partnership scope, sponsorship intent, or speaker thesis."
      />

      <FormFooter note="Reviewed by our partnerships desk · Reply within five working days" />
    </form>
  );
}

// -------------------- Shared subcomponents --------------------
function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function TextareaField({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  rows = 4,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full resize-none rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function FormFooter({
  note,
  isSubmitting = false,
}: {
  note: string;
  isSubmitting?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{note}</p>
      <button
        type="submit"
        className="btn-gold disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </div>
  );
}

function SuccessCard({ label }: { label: string }) {
  return (
    <div className="glass rounded-sm p-10 text-center">
      <p className="eyebrow">Received · {label}</p>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">
        We&rsquo;ve received your application.
      </h2>
      <p className="mt-4 text-muted-foreground">
        A confirmation has been sent to your inbox. Someone from our team will be in touch within
        five working days.
      </p>
    </div>
  );
}