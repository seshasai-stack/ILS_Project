import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType, a as arrayType, Z as ZodIssueCode, e as enumType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-Dny6mp4U.css";
const ilsLogo = "/assets/nav-ils-main-logo-CQP0PbfP.png";
const nav = [
  { to: "/", label: "Home" },
  { to: "/summit", label: "Agenda" },
  { to: "/partners", label: "Partners" },
  { to: "/about", label: "About" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass py-2.5" : "bg-transparent py-3"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:min-h-[76px] sm:px-6 md:min-h-[80px] lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              onClick: () => setOpen(false),
              className: "flex shrink-0 items-center",
              "aria-label": "India Leadership Summit Home",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  "data-ils-nav-logo": true,
                  src: ilsLogo,
                  alt: "India Leadership Summit",
                  className: "h-auto w-[120px] object-contain object-left sm:w-[140px] md:w-[155px] lg:w-[170px] xl:w-[185px]"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-10 md:flex", children: [
            nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: n.to,
                className: "text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold",
                activeProps: { className: "text-gold" },
                activeOptions: { exact: n.to === "/" },
                children: n.label
              },
              n.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/attend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-gold inline-flex min-h-[52px] items-center justify-center px-8", children: "Register" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "flex h-10 w-10 items-center justify-center text-gold sm:h-11 sm:w-11",
              onClick: () => setOpen((value) => !value),
              "aria-label": "Toggle menu",
              "aria-expanded": open,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-px w-5 bg-gold sm:w-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-px w-5 bg-gold sm:w-6" })
              ] })
            }
          ) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mx-4 mt-2 rounded-sm p-5 sm:mx-6 sm:p-6 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-4", children: [
          nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold",
              activeProps: { className: "text-gold" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/attend", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-gold inline-flex w-full items-center justify-center py-4", children: "Register" }) })
        ] }) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border/40 bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl text-foreground", children: "India Leadership Summit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "A curated convening of India’s most consequential entrepreneurs and leaders. Hosted by CorporateConnections AP&TS." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-16 bg-gold/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground", children: "ILS 2026 · 13th & 14th November · Hyderabad" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:ils@corporateconnections-india.com", className: "hover:text-gold", children: "ils@corporateconnections-india.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "CorporateConnections AP&TS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: ["in", "x", "ig"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs uppercase tracking-wider text-muted-foreground transition-all hover:border-gold hover:text-gold",
            "aria-label": s,
            children: s
          },
          s
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col items-start justify-between gap-6 border-t border-border/40 pt-6 text-[11px] text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 CorporateConnections AP&TS. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px]", children: "C/O Ascent Sphere LLP" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.18em]", "aria-label": "Legal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms-and-conditions", className: "transition-colors hover:text-gold", children: "Terms & Conditions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "transition-colors hover:text-gold", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/return-policy", className: "transition-colors hover:text-gold", children: "Refund Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.28em]", children: "Confidential · By invitation" })
    ] })
  ] }) });
}
function FloatingRegister() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": !visible,
      className: `fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/attend",
          className: "inline-flex items-center text-[11px] uppercase tracking-[0.28em] text-foreground bg-background/70 backdrop-blur-md border border-gold/50 hover:border-gold hover:text-gold px-5 py-3 rounded-sm shadow-[0_0_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_32px_rgba(212,175,55,0.25)] transition-all duration-300",
          children: "Register"
        }
      )
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "India Leadership Summit 2026" },
      { name: "description", content: "India's most consequential gathering of ambitious entrepreneurs and leaders. ILS 2026, November, Hyderabad." },
      { name: "author", content: "CorporateConnections AP&TS" },
      { property: "og:title", content: "India Leadership Summit 2026" },
      { property: "og:description", content: "A curated convening of India's most consequential entrepreneurs. November 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingRegister, {})
  ] }) });
}
const $$splitComponentImporter$9 = () => import("./index-C3gH9baf.mjs");
const Route$9 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "India Leadership Summit 2026 — Hyderabad"
    }, {
      name: "description",
      content: "India's most consequential gathering of ambitious entrepreneurs. ILS 2026 — November, Hyderabad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-TpQ1aRLC.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "About — India Leadership Summit"
    }, {
      name: "description",
      content: "The institutional context behind ILS. Hosted by CorporateConnections AP&TS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./analytics-C2BSCixK.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Analytics — ILS 2026"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./attend-BdxDuE2w.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Register — ILS 2026"
    }, {
      name: "description",
      content: "Register for the India Leadership Summit 2026. Separate pathways for members & founders and for partners, sponsors and speakers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
objectType({
  registrationType: stringType().trim().min(1, "Please select your registration type"),
  name: stringType().trim().min(2, "Please enter your full name").max(100),
  email: stringType().trim().email("Please enter a valid email").max(255),
  phone: stringType().trim().min(6, "Please enter a valid phone").max(30),
  spouseName: stringType().trim().max(100).optional().or(literalType("")),
  spousePhone: stringType().trim().max(30).optional().or(literalType("")),
  spouseEmail: stringType().trim().max(255).optional().or(literalType("")),
  chapterName: stringType().trim().max(150),
  organization: stringType().trim().max(150).optional().or(literalType("")),
  designation: stringType().trim().max(100).optional().or(literalType("")),
  industry: stringType().trim().optional().or(literalType("")),
  industryOther: stringType().trim().max(150).optional().or(literalType("")),
  sponsorshipInterest: stringType().trim().max(100).optional().or(literalType("")),
  sponsorshipDetails: stringType().trim().max(500).optional().or(literalType("")),
  dietaryRestrictions: arrayType(stringType()).min(1, "Please select at least one dietary option"),
  dietaryOther: stringType().trim().max(150).optional().or(literalType("")),
  address1: stringType().trim().min(2, "Please enter Address 1").max(250),
  address2: stringType().trim().max(250).optional().or(literalType("")),
  country: stringType().trim().min(1, "Please select your country/region"),
  city: stringType().trim().min(2, "Please enter your city").max(100),
  stateProvince: stringType().trim().max(100).optional().or(literalType("")),
  postalCode: stringType().trim().min(2, "Please enter your ZIP/Postal code").max(30),
  vatGstNumber: stringType().trim().max(100).optional().or(literalType("")),
  // referredBy: z.string().trim().max(150).optional().or(z.literal("")),
  intent: stringType().trim().min(1, "A sentence or two helps us route this thoughtfully").max(800).optional().or(literalType(""))
}).superRefine((data, ctx) => {
  const isSpouse = data.registrationType === "Spouse";
  const isMemberWithSpouse = data.registrationType === "Member + Spouse";
  const isGuest = data.registrationType === "Guest / Non-member" || data.registrationType === "Guest/Non-member";
  if (isMemberWithSpouse && (data.spouseName?.trim().length ?? 0) < 2) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["spouseName"],
      message: "Please enter the spouse's name"
    });
  }
  if (isMemberWithSpouse && (data.spousePhone?.trim().length ?? 0) < 6) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["spousePhone"],
      message: "Please enter a valid spouse phone number"
    });
  } else if (isMemberWithSpouse && !/^[0-9+\-\s()]+$/.test(data.spousePhone?.trim() ?? "")) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["spousePhone"],
      message: "Spouse phone number contains invalid characters"
    });
  }
  if (isMemberWithSpouse && !stringType().email().safeParse(data.spouseEmail?.trim() ?? "").success) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["spouseEmail"],
      message: "Please enter a valid spouse email"
    });
  }
  if (!isGuest && data.chapterName.trim().length < 2) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["chapterName"],
      message: isSpouse ? "Please enter the spouse name" : "Please enter your chapter name, market or region"
    });
  }
  if (!isSpouse && (data.organization?.trim().length ?? 0) < 2) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["organization"],
      message: "Please enter your company"
    });
  }
  if (!isSpouse && (data.designation?.trim().length ?? 0) < 2) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["designation"],
      message: "Please enter your role"
    });
  }
  if (!isSpouse && !data.industry?.trim()) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["industry"],
      message: "Please select your industry"
    });
  }
  if (!isSpouse && data.industry === "Other" && !data.industryOther?.trim()) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["industryOther"],
      message: "Please specify your industry"
    });
  }
  if (data.dietaryRestrictions.includes("Other") && !data.dietaryOther?.trim()) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["dietaryOther"],
      message: "Please specify your dietary restriction"
    });
  }
});
objectType({
  name: stringType().trim().min(2, "Please enter your full name").max(100),
  email: stringType().trim().email("Please enter a valid email").max(255),
  phone: stringType().trim().min(6, "Please enter a valid phone").max(30),
  organization: stringType().trim().min(2, "Please enter your organization").max(150),
  designation: stringType().trim().min(2, "Please enter your role").max(100),
  engagementType: enumType(["partner", "sponsor", "speaker"], {
    message: "Please choose an engagement type"
  }),
  website: stringType().trim().url("Please enter a valid URL").max(255).optional().or(literalType("")),
  proposal: stringType().trim().min(20, "Share a short proposal (a few sentences)").max(1200)
});
const $$splitComponentImporter$5 = () => import("./partners-Dk2dl967.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Partners — ILS 2026"
    }, {
      name: "description",
      content: "Partnership at the India Leadership Summit. Chosen for alignment, not category fill."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./privacy-policy-Cm-BWtDL.mjs");
const Route$4 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./return-policy-B0txwWRx.mjs");
const Route$3 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./speakers-Dvs1bI-C.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Speakers — ILS 2026"
    }, {
      name: "description",
      content: "Confirmed speakers for the India Leadership Summit 2026."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./summit-8tRkXUGQ.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "The Summit — ILS 2026"
    }, {
      name: "description",
      content: "What ILS 2026 is, who is in the room, and how the summit unfolds. November 13th–14th, 2026, Hyderabad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./terms-and-conditions-ZzVX7kcV.mjs");
const Route = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const AnalyticsRoute = Route$7.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => Route$a
});
const AttendRoute = Route$6.update({
  id: "/attend",
  path: "/attend",
  getParentRoute: () => Route$a
});
const PartnersRoute = Route$5.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => Route$a
});
const PrivacyPolicyRoute = Route$4.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$a
});
const ReturnPolicyRoute = Route$3.update({
  id: "/return-policy",
  path: "/return-policy",
  getParentRoute: () => Route$a
});
const SpeakersRoute = Route$2.update({
  id: "/speakers",
  path: "/speakers",
  getParentRoute: () => Route$a
});
const SummitRoute = Route$1.update({
  id: "/summit",
  path: "/summit",
  getParentRoute: () => Route$a
});
const TermsAndConditionsRoute = Route.update({
  id: "/terms-and-conditions",
  path: "/terms-and-conditions",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AnalyticsRoute,
  AttendRoute,
  PartnersRoute,
  PrivacyPolicyRoute,
  ReturnPolicyRoute,
  SpeakersRoute,
  SummitRoute,
  TermsAndConditionsRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
