import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
const venue = "/assets/venue-Dz3oNcx0.jpg";
const agenda = [{
  day: "Day 01",
  date: "13th November 2026",
  sessions: [{
    time: "10:30 – 11:45 AM",
    title: "Registrations & Open Networking",
    who: "Arrival & Networking"
  }, {
    time: "12:00 – 1:30 PM",
    title: "Main Keynote Speaker",
    who: "Keynote"
  }, {
    time: "1:30 – 2:30 PM",
    title: "Lunch",
    who: "Lunch"
  }, {
    time: "2:45 – 4:00 PM",
    title: "Know Your Table",
    who: "Roundtable Discussions"
  }, {
    time: "4:00 – 5:00 PM",
    title: "121s",
    who: "Curated One-to-One Conversations"
  }, {
    time: "5:00 – 7:00 PM",
    title: "Break & Leisure",
    who: "Pause & Recharge"
  }, {
    time: "7:00 PM onwards",
    title: "Gala Night",
    who: "Evening Experience"
  }]
}, {
  day: "Day 02",
  date: "14th November 2026",
  sessions: [{
    time: "10:00 – 11:00 AM",
    title: "121s",
    who: "Curated One-to-One Conversations"
  }, {
    time: "11:00 – 12:00 PM",
    title: "Keynote / Fireside Chat",
    who: "With Industry Expert"
  }, {
    time: "12:00 – 1:30 PM",
    title: "Startup Pitches",
    who: "Founder Showcase"
  }, {
    time: "1:30 – 2:30 PM",
    title: "Lunch & Closing",
    who: "Closing Session"
  }]
}];
function AgendaTabs() {
  const [activeDayIndex, setActiveDayIndex] = reactExports.useState(0);
  const activeDay = agenda[activeDayIndex];
  const panelId = "summit-agenda-panel";
  function selectDayFromKeyboard(index) {
    setActiveDayIndex(index);
    window.requestAnimationFrame(() => {
      document.getElementById(`agenda-tab-${index + 1}`)?.focus();
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "tablist", "aria-label": "Summit agenda days", className: "grid grid-cols-2 gap-3 rounded-sm bg-secondary/20 p-2 sm:gap-4 sm:p-3", children: agenda.map((agendaDay, index) => {
      const isActive = activeDayIndex === index;
      const tabId = `agenda-tab-${index + 1}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { id: tabId, type: "button", role: "tab", "aria-selected": isActive, "aria-controls": panelId, tabIndex: isActive ? 0 : -1, onClick: () => setActiveDayIndex(index), onKeyDown: (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          selectDayFromKeyboard((index + 1) % agenda.length);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          selectDayFromKeyboard((index - 1 + agenda.length) % agenda.length);
        } else if (event.key === "Home") {
          event.preventDefault();
          selectDayFromKeyboard(0);
        } else if (event.key === "End") {
          event.preventDefault();
          selectDayFromKeyboard(agenda.length - 1);
        }
      }, className: `relative min-h-32 overflow-hidden rounded-sm border px-4 py-5 text-center outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-36 sm:px-7 sm:py-6 ${isActive ? "scale-[1.01] border-gold bg-gold text-background shadow-[0_18px_55px_rgba(196,161,90,0.18)]" : "border-border/80 bg-background/80 text-foreground hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/[0.045]"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-xs font-semibold uppercase tracking-[0.24em] ${isActive ? "text-background/75" : "text-gold"}`, children: agendaDay.day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 block font-serif text-lg leading-snug sm:text-2xl", children: agendaDay.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `mt-2 block text-[10px] uppercase tracking-[0.16em] sm:text-xs ${isActive ? "text-background/70" : "text-muted-foreground"}`, children: [
          agendaDay.sessions.length,
          " sessions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: `absolute inset-x-0 bottom-0 h-1 origin-left bg-foreground transition-transform duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}` })
      ] }, agendaDay.date);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: panelId, role: "tabpanel", "aria-labelledby": `agenda-tab-${activeDayIndex + 1}`, tabIndex: 0, className: "mt-5 animate-in rounded-sm border border-gold/30 bg-background/75 fade-in-0 slide-in-from-bottom-4 duration-700 focus:outline-none sm:mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 border-b border-border/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
            activeDay.day,
            " Schedule"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-2xl sm:text-3xl", children: activeDay.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
          activeDay.sessions.length,
          " curated sessions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-9 pt-8 sm:px-8 sm:pb-11 sm:pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-[224px] top-2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/70 via-gold/30 to-transparent md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-9 sm:space-y-10", children: activeDay.sessions.map((session, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid animate-in grid-cols-1 gap-3 fade-in-0 slide-in-from-bottom-2 duration-500 [animation-fill-mode:both] md:grid-cols-[180px_24px_1fr] md:gap-x-8 md:gap-y-0", style: {
          animationDelay: `${100 + index * 70}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap font-serif text-xl text-gold md:pr-6 md:text-2xl", children: session.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative hidden items-start justify-center pt-2 md:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 block h-2.5 w-2.5 rounded-full border border-gold bg-background" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-xl md:text-2xl", children: session.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]", children: session.who })
          ] })
        ] }, `${activeDay.date}-${session.time}-${session.title}`)) })
      ] }) })
    ] }, activeDay.day)
  ] });
}
function SummitPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "The Arc of the Summit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-4xl md:text-5xl", children: "Agenda" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 sm:mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgendaTabs, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: venue, alt: "Venue interior", width: 1600, height: 1e3, loading: "lazy", className: "h-[60vh] w-full object-cover opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "The Venue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-3xl md:text-5xl", children: "A room that carries its own weight." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-sm text-muted-foreground", children: "Disclosed to confirmed attendees." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/attend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-gold", children: "Request Attendance" }) }) })
      ] }) })
    ] })
  ] });
}
export {
  SummitPage as component
};
