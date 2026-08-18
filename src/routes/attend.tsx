import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const API_BASE_URL = "https://ils-backend-1.onrender.com";

type RazorpaySuccessResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    description?: string;
    reason?: string;
  };
};

type RazorpayCheckoutOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  handler: (response: RazorpaySuccessResponse) => void | Promise<void>;
  modal: {
    ondismiss: () => void | Promise<void>;
  };
  retry: {
    enabled: boolean;
  };
  theme: {
    color: string;
  };
};

type RazorpayCheckout = {
  open: () => void;
  on: (
    event: "payment.failed",
    handler: (response: RazorpayFailureResponse) => void
  ) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayCheckout;
  }
}

let razorpayScriptPromise: Promise<void> | null = null;

function loadRazorpayCheckout(): Promise<void> {
  if (window.Razorpay) return Promise.resolve();
  if (razorpayScriptPromise) return razorpayScriptPromise;

  razorpayScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    const script = existingScript ?? document.createElement("script");

    const handleLoad = () => {
      if (window.Razorpay) resolve();
      else reject(new Error("Razorpay Checkout could not be initialized."));
    };

    const handleError = () => {
      razorpayScriptPromise = null;
      reject(new Error("Unable to load the secure payment window."));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return razorpayScriptPromise;
}

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
const registrationTypeOptions = [
  "Member",
  "Chapter Director",
  "National Director",
  "Executive Director",
  "Admin",
  "Guest/Visitor"
];

const industryOptions = [
  "Automotive",
  "Business Services",
  "Construction & Architecture",
  "Energy / Renewable Energy",
  "Financial Services",
  "Food & Beverage",
  "Hardware & Telecom",
  "Higher Education",
  "Hospitality",
  "IT & Software",
  "Legal Services",
  "Lifestyle Business",
  "Manufacturing",
  "Marketing",
  "Medical / Health / Wellness",
  "Real Estate & Infrastructure",
  "Retail",
  "Textile & Apparels",
  "Training & Development",
  "Transportation & Logistics",
  "Other",
];

const sponsorshipOptions = [
  "Yes",
  "No",
  "Need more information",
];

const dietaryOptions = [
  "No Restrictions",
  "Dairy Free",
  "Gluten Free",
  "Vegetarian",
  "Vegan",
  "Jain Meals",
  "Other",
];

const countryOptions = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica",
  "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Türkiye", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe",
];

const audienceASchema = z
  .object({
    registrationType: z
      .string()
      .trim()
      .min(1, "Please select your registration type"),

    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name")
      .max(100),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email")
      .max(255),

    phone: z
      .string()
      .trim()
      .min(6, "Please enter a valid phone")
      .max(30),

    chapterName: z
      .string()
      .trim()
      .min(2, "Please enter your chapter name, market or region")
      .max(150),

    organization: z
      .string()
      .trim()
      .min(2, "Please enter your company")
      .max(150),

    designation: z
      .string()
      .trim()
      .min(2, "Please enter your role")
      .max(100),

    industry: z
      .string()
      .trim()
      .min(1, "Please select your industry"),

    industryOther: z
      .string()
      .trim()
      .max(150)
      .optional()
      .or(z.literal("")),

    sponsorshipInterest: z
      .string()
      .trim()
      .max(100)
      .optional()
      .or(z.literal("")),

    sponsorshipDetails: z
      .string()
      .trim()
      .max(500)
      .optional()
      .or(z.literal("")),

    dietaryRestrictions: z
      .array(z.string())
      .min(1, "Please select at least one dietary option"),

    dietaryOther: z
      .string()
      .trim()
      .max(150)
      .optional()
      .or(z.literal("")),

    address1: z
      .string()
      .trim()
      .min(2, "Please enter Address 1")
      .max(250),

    address2: z
      .string()
      .trim()
      .max(250)
      .optional()
      .or(z.literal("")),

    country: z
      .string()
      .trim()
      .min(1, "Please select your country/region"),

    city: z
      .string()
      .trim()
      .min(2, "Please enter your city")
      .max(100),

    stateProvince: z
      .string()
      .trim()
      .max(100)
      .optional()
      .or(z.literal("")),

    postalCode: z
      .string()
      .trim()
      .min(2, "Please enter your ZIP/Postal code")
      .max(30),

    vatGstNumber: z
      .string()
      .trim()
      .max(100)
      .optional()
      .or(z.literal("")),

    // referredBy: z.string().trim().max(150).optional().or(z.literal("")),

    intent: z
      .string()
      .trim()
      .min(1, "A sentence or two helps us route this thoughtfully")
      .max(800)
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.industry === "Other" && !data.industryOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["industryOther"],
        message: "Please specify your industry",
      });
    }

    if (
      data.dietaryRestrictions.includes("Other") &&
      !data.dietaryOther?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dietaryOther"],
        message: "Please specify your dietary restriction",
      });
    }
  });

type AudienceAState = z.infer<typeof audienceASchema>;

const initialA: AudienceAState = {
  registrationType: "",
  name: "",
  email: "",
  phone: "",
  chapterName: "",
  organization: "",
  designation: "",
  industry: "",
  industryOther: "",
  sponsorshipInterest: "",
  sponsorshipDetails: "",
  dietaryRestrictions: [],
  dietaryOther: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  vatGstNumber: "",
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

type PaymentReturnState = {
  status: "success" | "pending" | "cancelled" | null;
  orderId: string;
};

function AttendPage() {
  const [paymentReturn, setPaymentReturn] =
    useState<PaymentReturnState>({
      status: null,
      orderId: "",
    });

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const rawStatus = params
      .get("payment")
      ?.trim()
      .toLowerCase();

    const status =
      rawStatus === "success" ||
      rawStatus === "pending" ||
      rawStatus === "cancelled"
        ? rawStatus
        : null;

    setPaymentReturn({
      status,
      orderId:
        params.get("orderId")?.trim() ?? "",
    });
  }, []);

  if (
    paymentReturn.status === "success" ||
    paymentReturn.status === "pending"
  ) {
    return (
      <section className="py-16 sm:py-20 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
          <PaymentStatusCard
            status={paymentReturn.status}
            orderId={paymentReturn.orderId}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
        {/* <p className="eyebrow">Register · ILS 2026</p> */}
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          Registration Amount
          <div>
            <span className="gold-gradient-text italic">46,610/-</span>
            </div>
        </h1>
        {/* <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Attendance is by application. Choose the pathway that fits you best — we route each
          enquiry to a different desk and reply within five working days.
        </p> */}

        {paymentReturn.status === "cancelled" && (
          <div
            role="alert"
            className="mt-8 rounded-sm border border-destructive/35 bg-destructive/10 px-5 py-4"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-destructive">
              Payment not completed
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your payment was cancelled or could not be completed. No confirmed payment has been
              recorded. You may review your details and try again.
            </p>
          </div>
        )}

        <div className="gold-divider my-12" />

        <Tabs defaultValue="a" className="w-full">
          <TabsList className="mb-8 grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-1">
            <TabsTrigger
              value="a"
              className="rounded-sm border border-border bg-transparent px-4 py-4 text-left data-[state=active]:border-gold data-[state=active]:bg-gold/5 data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-start">
                {/* <span className="text-[10px] uppercase tracking-[0.28em] text-gold">REGISTRATION</span> */}
                <span className="mt-1 font-serif text-lg">REGISTRATION</span>
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

function PaymentStatusCard({
  status,
  orderId,
}: {
  status: "success" | "pending";
  orderId: string;
}) {
  const isSuccess = status === "success";

  return (
    <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-background/80 p-8 text-center shadow-2xl backdrop-blur md:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border text-2xl ${
            isSuccess
              ? "border-gold/50 bg-gold/10 text-gold"
              : "border-gold/35 bg-gold/5 text-gold"
          }`}
          aria-hidden="true"
        >
          {isSuccess ? "✓" : "…"}
        </div>

        <p className="eyebrow mt-7">
          {isSuccess
            ? "Payment successful"
            : "Payment under verification"}
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          {isSuccess
            ? "Your registration is confirmed."
            : "Your payment is currently pending."}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          {isSuccess
            ? "Thank you. Your payment has been successfully verified and your India Leadership Summit 2026 registration has been recorded."
            : "The payment provider has not yet returned a final confirmation. Please do not make another payment for the same order while verification is in progress."}
        </p>

        {orderId && (
          <div className="mx-auto mt-8 max-w-md rounded-sm border border-border/70 bg-secondary/20 px-5 py-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Order reference
            </p>
            <p className="mt-2 break-all font-medium text-foreground">
              {orderId}
            </p>
          </div>
        )}

        <div className="mx-auto mt-8 max-w-xl border-t border-border/60 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {isSuccess
              ? "A confirmation will be sent to your registered email address."
              : "Your registration will be confirmed after the bank verifies the transaction."}
          </p>
        </div>

        {isSuccess ? (
          <a
            href="/"
            className="btn-gold mt-8 inline-flex"
          >
            Return to the summit
          </a>
        ) : (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-gold mt-8"
          >
            Check status again
          </button>
        )}
      </div>
    </div>
  );
}

// -------------------- Audience A form --------------------
function AudienceAForm() {
  const [data, setData] = useState<AudienceAState>(initialA);
  const [errors, setErrors] = useState<
    Partial<Record<keyof AudienceAState, string>>
  >({});
  const [validatedData, setValidatedData] = useState<AudienceAState | null>(
    null
  );
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update<K extends keyof AudienceAState>(
    k: K,
    v: AudienceAState[K]
  ) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function toggleDietary(option: string) {
    setData((current) => {
      const selected = current.dietaryRestrictions;

      if (option === "No Restrictions") {
        return {
          ...current,
          dietaryRestrictions: selected.includes("No Restrictions")
            ? []
            : ["No Restrictions"],
        };
      }

      const withoutNoRestrictions = selected.filter(
        (item) => item !== "No Restrictions"
      );

      return {
        ...current,
        dietaryRestrictions: withoutNoRestrictions.includes(option)
          ? withoutNoRestrictions.filter((item) => item !== option)
          : [...withoutNoRestrictions, option],
      };
    });
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

      await loadRazorpayCheckout();

      const response = await fetch(
        `${API_BASE_URL}/api/payment/create-payment`,
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

      const localOrderId = String(paymentResponse.orderId ?? "").trim();
      const gatewayOrderId = String(
        paymentResponse.razorpay?.orderId ?? ""
      ).trim();
      const keyId = String(paymentResponse.razorpay?.keyId ?? "").trim();
      const amount = Number(paymentResponse.razorpay?.amount);
      const currency = String(
        paymentResponse.razorpay?.currency ?? "INR"
      ).trim();

      if (
        !localOrderId ||
        !gatewayOrderId ||
        !keyId ||
        !Number.isInteger(amount) ||
        amount < 100
      ) {
        throw new Error("The payment gateway returned an invalid order.");
      }

      sessionStorage.setItem("ilsOrderId", localOrderId);

      const Razorpay = window.Razorpay;
      if (!Razorpay) {
        throw new Error("Razorpay Checkout is unavailable.");
      }

      let checkoutFinished = false;

      const checkout = new Razorpay({
        key: keyId,
        amount,
        currency,
        name: "India Leadership Summit 2026",
        description: "ILS 2026 Registration",
        order_id: gatewayOrderId,
        prefill: {
          name: validatedData.name,
          email: validatedData.email,
          contact: validatedData.phone,
        },
        retry: {
          enabled: true,
        },
        theme: {
          color: "#c4a15a",
        },
        handler: async (razorpayResponse) => {
          checkoutFinished = true;

          try {
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payment/verify`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  orderId: localOrderId,
                  ...razorpayResponse,
                }),
              }
            );

            const verification = await verifyResponse.json().catch(() => null);

            if (verifyResponse.status === 202) {
              window.location.assign(
                `/attend?payment=pending&orderId=${encodeURIComponent(
                  localOrderId
                )}`
              );
              return;
            }

            if (
              !verifyResponse.ok ||
              verification?.paymentStatus !== "SUCCESS"
            ) {
              throw new Error(
                verification?.message ||
                  "Payment verification is pending. Please check the status again."
              );
            }

            window.location.assign(
              `/attend?payment=success&orderId=${encodeURIComponent(
                localOrderId
              )}`
            );
          } catch (error) {
            console.error("Payment verification failed:", error);
            setSubmitError(
              error instanceof Error
                ? error.message
                : "Unable to verify the payment."
            );
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: async () => {
            if (checkoutFinished) return;

            try {
              const cancelResponse = await fetch(
                `${API_BASE_URL}/api/payment/cancel`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    orderId: localOrderId,
                    reason: "Checkout dismissed",
                  }),
                }
              );

              const cancellation = await cancelResponse.json().catch(() => null);

              if (cancellation?.paymentStatus === "SUCCESS") {
                window.location.assign(
                  `/attend?payment=success&orderId=${encodeURIComponent(
                    localOrderId
                  )}`
                );
                return;
              }
            } catch (error) {
              console.error("Unable to record checkout dismissal:", error);
            }

            setSubmitError("Payment was cancelled. You can try again.");
            setIsSubmitting(false);
          },
        },
      });

      checkout.on("payment.failed", (failure) => {
        setSubmitError(
          failure.error?.description ||
            failure.error?.reason ||
            "Payment failed. Please try again."
        );
        setIsSubmitting(false);
      });

      checkout.open();
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
      <form
        onSubmit={onSubmit}
        className="glass space-y-7 rounded-sm p-5 sm:p-8 md:p-10"
        noValidate
      >
        <p className="text-xs leading-relaxed text-muted-foreground">
          For CC members and founders arriving through referral or press. Tell
          us briefly what brings you in — we read each note.
        </p>

        {/* 1. Registration Type */}
        <SelectField
          label="Registration Type"
          id="a-registration-type"
          value={data.registrationType}
          onChange={(v) => update("registrationType", v)}
          options={registrationTypeOptions}
          error={errors.registrationType}
          placeholder="Select registration type"
          required
        />

        {/* 2. Name */}
        <Field
          label="Full Name (as it should appear on your name badge)"
          id="a-name"
          value={data.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          required
        />

        {/* 3. Email */}
        <Field
          label="Email (email will be used for all India Leadership Summit communication)"
          id="a-email"
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          required
        />

        {/* 4. Mobile */}
        <Field
          label="Phone Number"
          id="a-phone"
          type="tel"
          value={data.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          required
        />

        {/* 5. Chapter Name */}
        <Field
          label="Chapter Name (National and Executive Directors, please enter your market or region)"
          id="a-chapter-name"
          value={data.chapterName}
          onChange={(v) => update("chapterName", v)}
          error={errors.chapterName}
          required
        />

        {/* 6. Company */}
        <Field
          label="Company"
          id="a-org"
          value={data.organization}
          onChange={(v) => update("organization", v)}
          error={errors.organization}
          required
        />

        {/* 7. Designation */}
        <Field
          label="Designation (CEO, COO, CFO, as it should appear on your name badge)"
          id="a-role"
          value={data.designation}
          onChange={(v) => update("designation", v)}
          error={errors.designation}
          required
        />

        {/* 8. Industry */}
        <div>
          <p className="eyebrow max-w-full break-words leading-5 sm:leading-6">
            <RequiredMark />
            Please select your industry
          </p>

          <div className="mt-4 space-y-2 sm:space-y-3">
            {industryOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-[44px] cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-foreground/85 sm:min-h-0 sm:py-1"
              >
                <input
                  type="radio"
                  name="a-industry"
                  value={option}
                  checked={data.industry === option}
                  onChange={() => update("industry", option)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-gold sm:h-4 sm:w-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <input
            type="text"
            value={data.industryOther ?? ""}
            onChange={(e) => update("industryOther", e.target.value)}
            aria-label="Other industry"
            placeholder="If Other, please specify"
            className="mt-3 min-h-12 w-full max-w-full rounded-sm border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
          />

          {errors.industry && (
            <p className="mt-2 text-xs text-destructive">{errors.industry}</p>
          )}

          {errors.industryOther && (
            <p className="mt-2 text-xs text-destructive">
              {errors.industryOther}
            </p>
          )}
        </div>

        {/* 9. Sponsorship */}
        <div>
          <p className="eyebrow max-w-full break-words leading-5 sm:leading-6">
            Are you interested in sponsorship opportunities for the 2026 Global
            Leadership Summit?
          </p>

          <div className="mt-4 space-y-2 sm:space-y-3">
            {sponsorshipOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-[44px] cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-foreground/85 sm:min-h-0 sm:py-1"
              >
                <input
                  type="radio"
                  name="a-sponsorship"
                  value={option}
                  checked={data.sponsorshipInterest === option}
                  onChange={() => update("sponsorshipInterest", option)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-gold sm:h-4 sm:w-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <input
            type="text"
            value={data.sponsorshipDetails ?? ""}
            onChange={(e) => update("sponsorshipDetails", e.target.value)}
            aria-label="Sponsorship information details"
            placeholder="Additional information (optional)"
            className="mt-3 min-h-12 w-full max-w-full rounded-sm border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
          />
        </div>

        {/* 9. Dietary Restrictions */}
        <div>
          <p className="eyebrow max-w-full break-words leading-5 sm:leading-6">
            <RequiredMark />
            Do you have any dietary restrictions?
          </p>

          <div className="mt-4 space-y-2 sm:space-y-3">
            {dietaryOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-[44px] cursor-pointer items-start gap-3 py-2 text-sm leading-6 text-foreground/85 sm:min-h-0 sm:py-1"
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={data.dietaryRestrictions.includes(option)}
                  onChange={() => toggleDietary(option)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-gold sm:h-4 sm:w-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <input
            type="text"
            value={data.dietaryOther ?? ""}
            onChange={(e) => update("dietaryOther", e.target.value)}
            aria-label="Other dietary restriction"
            placeholder="If Other, please specify"
            className="mt-3 min-h-12 w-full max-w-full rounded-sm border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
          />

          {errors.dietaryRestrictions && (
            <p className="mt-2 text-xs text-destructive">
              {errors.dietaryRestrictions}
            </p>
          )}

          {errors.dietaryOther && (
            <p className="mt-2 text-xs text-destructive">
              {errors.dietaryOther}
            </p>
          )}
        </div>

        {/* 10. Invoice Address */}
        <div className="space-y-6">
          <div>
            <p className="eyebrow">
              <RequiredMark />
              Address for invoice purposes. If you require invoice please fill
              in the below details
            </p>
          </div>

          <Field
            label="Address 1"
            id="a-address-1"
            value={data.address1}
            onChange={(v) => update("address1", v)}
            error={errors.address1}
            required
          />

          <Field
            label="Address 2"
            id="a-address-2"
            value={data.address2 ?? ""}
            onChange={(v) => update("address2", v)}
            error={errors.address2}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              label="Country/Region"
              id="a-country"
              value={data.country}
              onChange={(v) => update("country", v)}
              options={countryOptions}
              error={errors.country}
              placeholder="Select country/region"
              required
            />

            <Field
              label="City"
              id="a-city"
              value={data.city}
              onChange={(v) => update("city", v)}
              error={errors.city}
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label="State/Province"
              id="a-state"
              value={data.stateProvince ?? ""}
              onChange={(v) => update("stateProvince", v)}
              error={errors.stateProvince}
            />

            <Field
              label="ZIP/Postal code"
              id="a-postal-code"
              value={data.postalCode}
              onChange={(v) => update("postalCode", v)}
              error={errors.postalCode}
              required
            />
          </div>
        </div>

        {/* 10. VAT/GST */}
        <Field
          label="VAT/GST Number"
          id="a-vat-gst"
          value={data.vatGstNumber ?? ""}
          onChange={(v) => update("vatGstNumber", v)}
          error={errors.vatGstNumber}
        />

        {/* Existing field — unchanged */}
        <TextareaField
          label="What brings you to ILS? (optional)"
          id="a-intent"
          value={data.intent ?? ""}
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
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
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
        <div className="relative w-full max-w-[calc(100vw-1.5rem)] rounded-2xl border border-gold/25 bg-background shadow-2xl sm:max-w-lg sm:rounded-sm">
        <div className="border-b border-border/70 bg-background px-4 py-4 sm:px-5 md:px-7">
          <div className="pr-10">
            <p className="eyebrow">Payment summary</p>
            <h2 id="payment-summary-title" className="mt-2 font-serif text-2xl sm:text-3xl">
              Review your invoice
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close payment summary"
            onClick={onClose}
            disabled={isRedirecting}
            className="absolute right-3 top-3 flex h-10 w-10 sm:right-5 sm:top-5 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-border text-xl text-muted-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 px-4 py-5 sm:px-5 md:px-7 md:py-6">
          <div className="rounded-sm border border-border/80 bg-secondary/20 p-4 sm:p-5">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
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

            <div className="flex flex-col items-start gap-3 py-5 sm:flex-row sm:justify-between sm:gap-6">
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

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Total payable
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Inclusive of all taxes
                  </p>
                </div>
                <p className="font-serif text-2xl text-gold sm:text-3xl">
                  {formatINR(TOTAL_AMOUNT)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gold/20 bg-gold/5 px-4 py-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Clicking Make Payment will securely redirect you to Razorpay
              Gateway. The final payable amount is calculated and
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
    <form onSubmit={onSubmit} className="glass space-y-7 rounded-sm p-5 sm:p-8 md:p-10" noValidate>
      <p className="text-xs leading-relaxed text-muted-foreground">
        For prospective partners, sponsors, and speakers assessing fit and credibility. Share a
        short proposal — we'll respond with the room's parameters.
      </p>

      <div>
        <span className="eyebrow">Engagement</span>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
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
function RequiredMark() {
  return (
    <span className="mr-1 text-destructive" aria-hidden="true">
      *
    </span>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  error,
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block max-w-full break-words leading-5 sm:leading-6">
        {required && <RequiredMark />}
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        className="mt-3 min-h-12 w-full max-w-full rounded-sm border border-border bg-transparent px-4 py-3 text-base text-foreground focus:border-gold focus:outline-none sm:text-sm"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  error,
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block max-w-full break-words leading-5 sm:leading-6">
        {required && <RequiredMark />}
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        className="mt-3 min-h-12 w-full max-w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground focus:border-gold focus:outline-none sm:text-sm"
      >
        <option value="">{placeholder ?? "Select an option"}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

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
      <label htmlFor={id} className="eyebrow block max-w-full break-words leading-5 sm:leading-6">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full max-w-full resize-none rounded-sm border border-border bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none sm:text-sm"
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
      <p className="max-w-full break-words text-[10px] uppercase leading-5 tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">{note}</p>
      <button
        type="submit"
        className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </div>
  );
}

function SuccessCard({ label }: { label: string }) {
  return (
    <div className="glass rounded-sm p-6 text-center sm:p-10">
      <p className="eyebrow">Received · {label}</p>
      <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">
        We&rsquo;ve received your application.
      </h2>
      <p className="mt-4 text-muted-foreground">
        A confirmation has been sent to your inbox. Someone from our team will be in touch within
        five working days.
      </p>
    </div>
  );
}