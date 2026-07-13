import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  referredBy: "",
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
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof AudienceAState>(k: K, v: string) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
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
    setSubmitted(true);
    // TODO: wire to backend — sends confirmation to applicant + notification
    //       to seshasai@corporateconnections-india.com with "Audience A — Member/Founder" copy.
  }

  if (submitted) {
    return <SuccessCard label="Audience A · Member / Founder" />;
  }

  return (
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

      <FormFooter note="Reviewed by a human · Confirmation arrives shortly" />
    </form>
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

function FormFooter({ note }: { note: string }) {
  return (
    <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{note}</p>
      <button type="submit" className="btn-gold">
        Submit Application
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