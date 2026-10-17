import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  HeartHandshake,
  Mic2,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import harshaBhogleSpeaker from "@/assets/harsha-bhogle-day-1-speaker.png";
import hesaLogo from "@/assets/hesa-logo.jpeg";
import ilsMainLogo from "@/assets/ils-main-logo-v2.png";
import ilsVideo from "@/assets/ILS-NEW-V2.mp4";
import { GoldParticles } from "@/components/GoldParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "India Leadership Summit 2026 — Hyderabad" },
      {
        name: "description",
        content:
          "India's most consequential gathering of ambitious entrepreneurs. ILS 2026 — November, Hyderabad.",
      },
    ],
  }),
  component: Home,
});

const agenda = [
  {
    day: "Day 01",
    date: "13th November 2026",
    sessions: [
      {
        time: "10:00 – 11:15 AM",
        title: "Registrations & Open Networking",
        who: "Arrival & Networking",
      },
      {
        time: "11:30 – 1:15 PM",
        title: "Harsha Bhogle",
        who: "Main Keynote Speaker",
      },
      {
        time: "1:30 – 2:30 PM",
        title: "Food & Fellowship",
        who: "Lunch",
      },
      {
        time: "2:45 – 4:00 PM",
        title: "Know Your Table",
        who: "Roundtable Discussions",
      },
      {
        time: "4:00 – 5:00 PM",
        title: "Breakout Sessions",
        who: "Curated Topics for smaller rooms",
      },
      {
        time: "5:00 – 7:00 PM",
        title: "Break & Leisure",
        who: "Pause & Recharge",
      },
      {
        time: "7:00 PM onwards",
        title: "Gala Night",
        who: "Spotlight Act - Gurleen Pannu Live",
      },
    ],
  },
  {
    day: "Day 02",
    date: "14th November 2026",
    sessions: [
      {
        time: "10:00 – 11:00 AM",
        title: "121s",
        who: "Open Conversations",
      },
      {
        time: "11:00 – 12:00 PM",
        title: "Lt Gen KJS Dhillon",
        who: "Fireside Chat",
      },
      {
        time: "12:00 – 1:30 PM",
        title: "Taste of Forums",
        who: "Experience the world of forums",
      },
      {
        time: "1:30 – 2:30 PM",
        title: "Lunch & Closing",
        who: "Closing Session",
      },
    ],
  },
];

const registrationTiers = [
  {
    category: "Member / Chapter Director / Executive Director",
    early: "₹39,500 + GST",
    earlyUsd: 416,
    general: "₹50,000 + GST",
    generalUsd: 527,
    access: "Day 1, Day 2 & Gala Night",
  },
  {
    category: "Member + Spouse",
    early: "₹49,500 + GST",
    earlyUsd: 522,
    general: "₹60,000 + GST",
    generalUsd: 632,
    access: "Member: Day 1, Day 2 & Gala Night\nSpouse / Partner: Gala Night",
  },
  {
    category: "Guest / Non-member",
    early: "N/A",
    earlyUsd: null,
    general: "₹40,000 + GST",
    generalUsd: 422,
    access: "Day 1 & Day 2 · Gala Night not included",
  },
  {
    category: "Spouse / Partner",
    early: "N/A",
    earlyUsd: null,
    general: "₹10,000 + GST",
    generalUsd: 106,
    access: "Gala Night",
  },
] as const;

const speakerBurstParticles = Array.from({ length: 56 }, (_, index) => {
  const angle = (((index * 137.508) % 360) * Math.PI) / 180;
  const distance = 90 + ((index * 47) % 440);

  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: 2 + ((index * 5) % 6),
    delay: (index % 9) * 0.035,
    rotation: (index * 71) % 360,
  };
});

const registrationAccess = [
  {
    title: "Executive Director / Chapter Director / Member",
    shortTitle: "Member Access",
    icon: UsersRound,
    items: [
      {
        event: "Day 1 · India Leadership Summit",
        date: "November 13",
        included: true,
      },
      {
        event: "Day 2 · India Leadership Summit",
        date: "November 14",
        included: true,
      },
      {
        event: "Gala Night",
        date: "November 14",
        included: true,
      },
    ],
    note: "Complete access to both summit days and the Gala Night.",
  },
  {
    title: "Non-Member",
    shortTitle: "Guest Access",
    icon: UserRound,
    items: [
      {
        event: "Day 1 · India Leadership Summit",
        date: "November 13",
        included: true,
      },
      {
        event: "Day 2 · India Leadership Summit",
        date: "November 14",
        included: true,
      },
      {
        event: "Gala Night",
        date: "Not included",
        included: false,
      },
    ],
    note:
      "The Gala Night is a member-driven evening and is not included in Non-Member registration.",
  },
  {
    title: "Spouses",
    shortTitle: "Gala Access",
    icon: HeartHandshake,
    items: [
      {
        event: "Gala Night",
        date: "November 14",
        included: true,
      },
    ],
    note:
      "Spouses are invited exclusively to the Gala Night and do not have access to summit sessions.",
  },
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function AnimatedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoAnchorRef = useRef<HTMLDivElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const introInfoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKnowMore = () => {
    const section = sectionRef.current;
    if (!section) return;

    const viewportHeight = window.innerHeight;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const scrollRange = Math.max(section.offsetHeight - viewportHeight, 1);

    // Advance to the next hero stage: logo reaches the nav and
    // the existing headline/content becomes fully visible.
    const targetProgress = 0.64;

    window.scrollTo({
      top: sectionTop + scrollRange * targetProgress,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const logoAnchor = logoAnchorRef.current;
    const logoImage = logoImageRef.current;
    const introInfo = introInfoRef.current;
    const content = contentRef.current;

    if (!section || !logoAnchor || !logoImage || !introInfo || !content) return;

    let rafId = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setNavLogoOpacity = (opacity: number) => {
      const navLogo = document.querySelector<HTMLElement>(
        "[data-ils-nav-logo]",
      );

      if (!navLogo) return;

      navLogo.style.opacity = String(opacity);
      navLogo.style.willChange = "opacity";
    };

    const update = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isMobile = viewportWidth < 640;
      const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

      const sectionRect = section.getBoundingClientRect();
      const scrollRange = Math.max(
        section.offsetHeight - viewportHeight,
        1,
      );

      const progress = clamp(-sectionRect.top / scrollRange);

      const navLogo = document.querySelector<HTMLElement>(
        "[data-ils-nav-logo]",
      );
      const navRect = navLogo?.getBoundingClientRect();

      // Large centered logo dimensions at the beginning of the hero.
      const startWidth = isMobile
        ? Math.min(viewportWidth * 0.9, 430)
        : isTablet
          ? Math.min(viewportWidth * 0.62, 600)
          : Math.min(viewportWidth * 0.48, 720);

      const startX = viewportWidth / 2;
      const startY = isMobile
        ? viewportHeight * 0.37
        : viewportHeight * 0.4;

      // Position the date/location and Know More CTA directly under the
      // large logo. We calculate this from the logo's real aspect ratio
      // so it remains correct on phones, tablets and desktops.
      const logoAspectRatio =
        logoImage.naturalWidth > 0 && logoImage.naturalHeight > 0
          ? logoImage.naturalWidth / logoImage.naturalHeight
          : 1.366;

      const startLogoHeight = startWidth / logoAspectRatio;
      const introGap = isMobile ? 12 : isTablet ? 18 : 22;

      const idealIntroY = startY + startLogoHeight / 2 + introGap;
      const minIntroY = isMobile
        ? viewportHeight * 0.61
        : viewportHeight * 0.66;
      const maxIntroY = viewportHeight - (isMobile ? 165 : 150);

      const introY = clamp(idealIntroY, minIntroY, maxIntroY);

      // The actual navbar logo is the destination, so the animation stays
      // correct across desktop, tablet and mobile sizes.
      const endX = navRect
        ? navRect.left + navRect.width / 2
        : isMobile
          ? 76
          : 150;

      const endY = navRect
        ? navRect.top + navRect.height / 2
        : isMobile
          ? 44
          : 54;

      const endWidth = navRect?.width ?? (isMobile ? 112 : 148);

      if (reduceMotion.matches) {
        const showHeroContent = progress > 0.06;

        logoAnchor.style.transform = `translate3d(${startX}px, ${startY}px, 0) translate(-50%, -50%)`;
        logoImage.style.width = `${startWidth}px`;
        logoImage.style.transform = "scale(1)";
        logoAnchor.style.opacity = showHeroContent ? "0" : "1";

        introInfo.style.transform = `translate3d(${startX}px, ${introY}px, 0) translateX(-50%)`;
        introInfo.style.opacity = showHeroContent ? "0" : "1";
        introInfo.style.pointerEvents = showHeroContent ? "none" : "auto";

        content.style.opacity = showHeroContent ? "1" : "0";
        content.style.transform = "translate3d(0, 0, 0)";
        content.style.pointerEvents = showHeroContent ? "auto" : "none";
        setNavLogoOpacity(showHeroContent ? 1 : 0);
        return;
      }

      // The travel finishes before the sticky hero ends, leaving time for
      // the copy to settle naturally before the next section arrives.
      const travelProgress = easeOutCubic(clamp(progress / 0.64));

      const x = startX + (endX - startX) * travelProgress;
      const y = startY + (endY - startY) * travelProgress;

      const targetScale = clamp(endWidth / startWidth, 0.1, 1);
      const scale = 1 + (targetScale - 1) * travelProgress;

      logoAnchor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      logoImage.style.width = `${startWidth}px`;
      logoImage.style.transform = `scale(${scale})`;

      // Keep the event details visually attached below the opening logo,
      // then fade them away before the main hero copy appears.
      const introFadeProgress = easeOutCubic(clamp(progress / 0.2));
      introInfo.style.transform = `translate3d(${startX}px, ${introY - 10 * introFadeProgress}px, 0) translateX(-50%)`;
      introInfo.style.opacity = String(1 - introFadeProgress);
      introInfo.style.pointerEvents =
        introFadeProgress < 0.7 ? "auto" : "none";

      // Since the hero and navbar images are intentionally different,
      // cross-fade them only near the end of the movement. This makes the
      // transition feel like one mark transforms into the other.
      const morphProgress = clamp((progress - 0.5) / 0.14);
      logoAnchor.style.opacity = String(1 - morphProgress);
      setNavLogoOpacity(morphProgress);

      // Reveal the original hero content while the logo travels upward.
      const revealProgress = easeOutCubic(clamp((progress - 0.24) / 0.34));
      content.style.opacity = String(revealProgress);
      content.style.transform = `translate3d(0, ${44 * (1 - revealProgress)}px, 0)`;
      content.style.pointerEvents = revealProgress > 0.8 ? "auto" : "none";
    };

    const requestUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // Hide the compact navbar mark at the start so the page opens with only
    // the large ILS banner logo.
    setNavLogoOpacity(0);
    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener?.("change", requestUpdate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener?.("change", requestUpdate);

      const navLogo = document.querySelector<HTMLElement>(
        "[data-ils-nav-logo]",
      );

      // Important when navigating away from the home route.
      if (navLogo) {
        navLogo.style.opacity = "1";
        navLogo.style.willChange = "auto";
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[165svh] sm:h-[160vh] lg:h-[150vh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden sm:h-screen">
        {/* Same background as the current hero */}
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/40 to-background" />

        <GoldParticles count={22} />

        {/* LARGE ILS INTRO LOGO */}
        <div
          ref={logoAnchorRef}
          className="pointer-events-none absolute left-0 top-0 z-30"
          style={{
            transform: "translate3d(50vw, 37svh, 0) translate(-50%, -50%)",
            willChange: "transform, opacity",
          }}
          aria-hidden="true"
        >
          <img
            ref={logoImageRef}
            src={ilsMainLogo}
            alt=""
            draggable={false}
            className="block h-auto max-w-none select-none object-contain"
            style={{
              width: "min(90vw, 430px)",
              transformOrigin: "center center",
              willChange: "width, transform",
            }}
          />
        </div>

        {/* INTRO DETAILS — centered directly below the large opening logo */}
        <div
          ref={introInfoRef}
          className="absolute left-0 top-0 z-30 w-[calc(100%_-_2rem)] max-w-[980px] text-center"
          style={{
            transform: "translate3d(50vw, 66svh, 0) translateX(-50%)",
            willChange: "transform, opacity",
          }}
        >
          <div
            className="
              flex flex-wrap items-center justify-center
              gap-x-2 gap-y-1
              px-2 text-center
              font-serif font-medium text-gold
              text-[15px] leading-snug tracking-[0.06em]
              sm:gap-x-3 sm:text-lg sm:tracking-[0.08em]
              md:text-xl
              lg:text-2xl
            "
          >
            <span className="basis-full sm:basis-auto">
              13th &amp; 14th November
            </span>

            <span className="hidden sm:inline" aria-hidden="true">
              &middot;
            </span>

            <span>Novotel</span>

            <span aria-hidden="true">&middot;</span>

            <span>Hyderabad</span>
          </div>

          <button
            type="button"
            onClick={handleKnowMore}
            className="
              group mt-5 inline-flex min-h-11 items-center justify-center gap-3
              border border-gold/70 bg-black/20 px-6 py-3
              text-[11px] font-medium uppercase tracking-[0.24em] text-gold
              backdrop-blur-sm transition-all duration-300
              hover:border-gold hover:bg-gold hover:text-black
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
              focus-visible:ring-offset-2 focus-visible:ring-offset-black
              sm:mt-6 sm:min-h-12 sm:px-8 sm:text-xs
            "
            aria-label="Know more about India Leadership Summit"
          >
            Know More
            <span
              aria-hidden="true"
              className="text-base leading-none transition-transform duration-300 group-hover:translate-y-1"
            >
              &darr;
            </span>
          </button>
        </div>

        {/* ORIGINAL HERO COPY — revealed during the shrink animation */}
        <div
          ref={contentRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center pt-16 opacity-0 sm:pt-20"
          style={{
            transform: "translate3d(0, 44px, 0)",
            willChange: "opacity, transform",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">
            <h1 className="max-w-[1100px] font-serif text-[clamp(2.25rem,11vw,3.5rem)] leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              India&rsquo;s most{" "}
              <span className="gold-gradient-text italic">consequential</span>
              <br className="hidden sm:block" />
              {" "}gathering of ambitious
              <br className="hidden sm:block" />
              {" "}entrepreneurs.
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-10 sm:gap-x-10 sm:gap-y-4">
              <span className="basis-full text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:basis-auto sm:text-sm sm:tracking-[0.28em]">
                13th &amp; 14th November 2026
              </span>

              <span className="hidden h-px w-10 bg-gold/60 sm:block" />

              <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-sm sm:tracking-[0.28em]">
                Novotel
              </span>

              <span className="h-px w-6 bg-gold/60 sm:w-10" />

              <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-sm sm:tracking-[0.28em]">
                Hyderabad
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-12">
              <Link to="/attend">
                <span className="btn-gold">Register Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SummitVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    // Keep the initial state compatible with browser autoplay rules.
    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay can still be blocked by browser/user settings.
              // The native controls remain available as a fallback.
            });
          }
        } else {
          video.pause();
        }
      },
      {
        // Start once the video is meaningfully visible on both mobile and desktop.
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/40 bg-black"
      aria-label="India Leadership Summit video"
    >
      <div className="mx-auto w-full max-w-[1600px] px-0 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
        <div className="relative w-full overflow-hidden bg-black sm:rounded-sm">
          <video
            ref={videoRef}
            src={ilsVideo}
            muted
            defaultMuted
            playsInline
            controls
            preload="metadata"
            className="block h-auto max-h-[90svh] w-full object-contain sm:max-h-[88vh]"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

function DayOneSpeakerReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      },
      {
        rootMargin: "-12% 0px -12%",
        threshold: 0.16,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="speaker-reveal-section relative isolate overflow-hidden border-b border-border/40 bg-background py-20 sm:py-24 lg:py-32"
      aria-labelledby="day-one-speaker-title"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_36%,rgba(202,157,69,0.14),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />

      {isActive && (
        <>
          <GoldParticles count={28} />
          <div
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
            aria-hidden
          >
            <span className="speaker-shockwave speaker-shockwave-one" />
            <span className="speaker-shockwave speaker-shockwave-two" />

            {speakerBurstParticles.map((particle, index) => (
              <span
                key={index}
                className="speaker-burst-particle"
                style={
                  {
                    "--speaker-particle-x": `${particle.x}px`,
                    "--speaker-particle-y": `${particle.y}px`,
                    "--speaker-particle-size": `${particle.size}px`,
                    "--speaker-particle-delay": `${particle.delay}s`,
                    "--speaker-particle-rotation": `${particle.rotation}deg`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </>
      )}

      <div className="relative z-20 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
            hasRevealed
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/60" />
            <Mic2 className="h-4 w-4" aria-hidden="true" />
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <p className="mt-5 font-sans text-base font-medium uppercase tracking-[0.32em] text-gold sm:text-lg md:text-xl">
            DAY-1 KEYNOTE SPEAKER
          </p>
          <h2
            id="day-one-speaker-title"
            className="mt-4 font-serif text-4xl uppercase tracking-[0.04em] text-foreground sm:text-5xl md:text-6xl"
          >
            HARSHA BHOGLE
            {/* <span className="gold-gradient-text italic">Sparker</span> */}
          </h2>
          <h4 className="mt-4 font-serif text-base uppercase tracking-[0.04em] text-foreground sm:text-xl md:text-2xl">
            <span className="gold-gradient-text italic">Indian Cricket Commentator &amp; Journalist</span>
          </h4>
        </div>

        <div
          className={`speaker-artwork-shell relative mx-auto mt-12 max-w-5xl transition-all delay-150 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:mt-16 ${
            hasRevealed ? "scale-100 opacity-100" : "scale-[0.96] opacity-0"
          }`}
        >
          <div className="absolute -inset-px bg-gradient-to-br from-gold/65 via-gold/10 to-gold/45" />
          <div className="relative m-px overflow-hidden bg-black">
            <img
              src={harshaBhogleSpeaker}
              alt="Harsha Bhogle, Day 1 keynote speaker for India Leadership Summit 2026"
              className="block h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>

        <div
          className={`mx-auto mt-12 max-w-4xl transition-all delay-300 duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:mt-16 ${
            hasRevealed
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="border-l border-gold/55 pl-5 sm:pl-8">
            <p className="font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              For four decades, he has watched teams from the closest seat in
              the house.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              How they come together. How they fracture. How the great ones find
              a way when it matters most.
            </p>
          </div>

          {/* <div className="mt-10 bg-ink/70 px-5 py-8 ring-1 ring-inset ring-gold/20 sm:px-8 sm:py-10">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Ladies and Gentlemen
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
              Our Main Keynote Speaker for Day 1 is the man himself — Harsha
              Bhogle.
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Indian Cricket Commentator and Journalist
            </p>
          </div> */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/reel/DdjIN_0T_9G/?stkn=anlna3YwOGw4bG85"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-16 items-center justify-between border border-gold/35 bg-gold/[0.04] px-5 py-4 text-xs uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/[0.09] sm:text-sm"
            >
              A snippet into Harsha&rsquo;s world of speaking
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Harsha_Bhogle"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-16 items-center justify-between border border-border bg-surface/35 px-5 py-4 text-xs uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:border-gold/70 hover:text-gold sm:text-sm"
            >
              Profile of Harsha
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationInformationSection() {
  return (
    <section className="border-t border-border/40 bg-ink/35 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Plan your registration</p>
          <h2 className="mt-4 font-serif text-4xl uppercase leading-tight text-gold sm:text-5xl">
            Registration Information
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Select the category that matches your participation and review the
            corresponding summit access.
          </p>
        </div>

        <div className="mt-12 hidden overflow-hidden border border-gold/30 bg-background/75 lg:block">
          <div className="grid grid-cols-[1.35fr_0.8fr_0.8fr_1.25fr] bg-surface/90 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            <div className="border-r border-border px-7 py-6">Category</div>
            <div className="border-r border-border px-7 py-6">Early Access (INR / $)</div>
            <div className="border-r border-border px-7 py-6">General (INR / $)</div>
            <div className="px-7 py-6">Access to</div>
          </div>

          {registrationTiers.map((tier) => (
            <div
              key={tier.category}
              className="grid grid-cols-[1.35fr_0.8fr_0.8fr_1.25fr] border-t border-border/70 text-sm"
            >
              <div className="border-r border-border px-7 py-7 font-medium text-foreground">
                {tier.category}
              </div>
              <div className="border-r border-border px-7 py-7 text-gold">
                {tier.early}
                {tier.earlyUsd !== null && (
                  <span className="ml-1 text-sm font-medium leading-5 text-gold/80">
                    (${tier.earlyUsd} + Applicable Taxes)
                  </span>
                )}
              </div>
              <div className="border-r border-border px-7 py-7 text-gold">
                {tier.general}
                <span className="ml-1 text-sm font-medium leading-5 text-gold/80">
                  (${tier.generalUsd} + Applicable Taxes)
                </span>
              </div>
              <div className="whitespace-pre-line px-7 py-7 leading-6 text-muted-foreground">
                {tier.access}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {registrationTiers.map((tier) => (
            <article
              key={tier.category}
              className="overflow-hidden border border-border/70 bg-background/80"
            >
              <div className="border-b border-border/60 bg-surface/70 px-5 py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Registration category
                </p>
                <h3 className="mt-2 font-serif text-xl leading-7">{tier.category}</h3>
              </div>
              <dl className="grid grid-cols-2 gap-px bg-border/60">
                <div className="bg-background p-5">
                  <dt className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Early Access
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-5 text-gold">
                    {tier.early}
                    {tier.earlyUsd !== null && (
                      <span className="ml-1 text-[13px] text-gold/80 sm:text-sm">
                        (${tier.earlyUsd} + Applicable Taxes)
                      </span>
                    )}
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    General
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-5 text-gold">
                    {tier.general}
                    <span className="ml-1 text-[13px] text-gold/80 sm:text-sm">
                      (${tier.generalUsd} + Applicable Taxes)
                    </span>
                  </dd>
                </div>
              </dl>
              <div className="border-t border-border/60 px-5 py-5">
                <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  Access to
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-foreground/85">{tier.access}</p>
              </div>
            </article>
          ))}
        </div>

        {/* <p className="mt-5 text-right text-xs text-muted-foreground">
          GST is charged at 18% on all applicable registration fees.
        </p> */}
      </div>
    </section>
  );
}

function RegistrationAccessSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Know what your registration includes</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              ILS 2026 — <span className="gold-gradient-text italic">Registration Access</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end">
            Summit and Gala access varies by registration category. Review the
            inclusions below before completing your registration.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {registrationAccess.map((access, cardIndex) => {
            const Icon = access.icon;

            return (
              <article
                key={access.title}
                className="group flex h-full flex-col overflow-hidden border border-border/70 bg-background/80 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_70px_-35px_rgba(196,161,90,0.45)]"
              >
                <header className="border-b border-border/60 bg-surface/55 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-gold/35 bg-gold/[0.06] text-gold">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold/75">
                      0{cardIndex + 1}
                    </span>
                  </div>
                  <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {access.shortTitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-8">{access.title}</h3>
                </header>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <ul className="space-y-3">
                    {access.items.map((item) => (
                      <li
                        key={item.event}
                        className="flex items-start gap-4 border-b border-border/50 pb-4 last:border-b-0 last:pb-0"
                      >
                        <span
                          className={
                            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border " +
                            (item.included
                              ? "border-gold/45 bg-gold/[0.08] text-gold"
                              : "border-destructive/40 bg-destructive/5 text-destructive")
                          }
                        >
                          {item.included ? (
                            <Check aria-hidden="true" className="h-3.5 w-3.5" />
                          ) : (
                            <X aria-hidden="true" className="h-3.5 w-3.5" />
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium leading-6 text-foreground">
                            {item.event}
                          </span>
                          <span
                            className={
                              "mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] " +
                              (item.included ? "text-muted-foreground" : "text-destructive")
                            }
                          >
                            <CalendarDays aria-hidden="true" className="h-3 w-3" />
                            {item.date}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 border-l border-gold/45 pl-4 text-xs leading-6 text-muted-foreground">
                    {access.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      {/* HERO WITH RESPONSIVE LOGO-TO-NAV ANIMATION */}
      <AnimatedHero />

      {/* TENOR / INSIDER LINE */}
      <section className="relative border-y border-border/40 bg-ink/60 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <p className="font-serif text-2xl italic leading-relaxed text-foreground/90 md:text-3xl">
            &ldquo;The room is the product. Everything else is staging.&rdquo;
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-gold/50" />
        </div>
      </section>

      {/* DAY 1 KEYNOTE SPEAKER REVEAL */}
      <DayOneSpeakerReveal />

      {/* SUMMIT VIDEO — autoplay on scroll, muted initially, responsive */}
      <SummitVideo />

      {/* TITLE SPONSOR */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-12 lg:px-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Title Sponsor</p>

            {/* HESA LOGO */}
            <div className="mt-6 flex">
              <div className="relative h-[125px] w-full max-w-[380px] overflow-hidden rounded-sm bg-white sm:h-[145px] md:h-[160px]">
                <img
                  src={hesaLogo}
                  alt="Hesa — Connecting Bharat Phygitally"
                  className="absolute inset-0 h-full w-full scale-[1.45] object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Hesa is transforming the way businesses connect with rural India.
              Through its unique Phygital model, Hesa combines technology with a
              strong on-ground network of Hesaathis to bring products, services,
              financial solutions and opportunities closer to rural communities.
              By connecting India to Bharat, Hesa is creating a more accessible
              and inclusive rural commerce ecosystem.
            </p>

            <Link
              to="https://hesa.co/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pt-4 text-sm uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-gold-soft"
            >
              KNOW MORE
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-t border-border/40 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <p className="eyebrow">The Arc of the Summit</p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">SCHEDULE</h2>

          {/* BOTH DAYS */}
          <div className="mt-12 space-y-20 sm:mt-16 sm:space-y-24">
            {agenda.map((agendaDay) => (
              <div key={agendaDay.date}>
                {/* DAY HEADING */}
                <div className="mb-10 sm:mb-12">
                  <p className="eyebrow">{agendaDay.day}</p>

                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                    {agendaDay.date}
                  </h3>
                </div>

                {/* TIMELINE */}
                <div className="relative">
                  {/* VERTICAL GOLD LINE */}
                  <div className="absolute bottom-2 left-[224px] top-2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:block" />

                  <ul className="space-y-9 sm:space-y-10">
                    {agendaDay.sessions.map((session) => (
                      <li
                        key={`${agendaDay.date}-${session.time}-${session.title}`}
                        className="grid grid-cols-1 gap-3 md:grid-cols-[180px_24px_1fr] md:gap-x-8 md:gap-y-0"
                      >
                        {/* TIME */}
                        <span className="font-serif text-xl text-gold md:whitespace-nowrap md:pr-6 md:text-2xl">
                          {session.time}
                        </span>

                        {/* TIMELINE DOT */}
                        <span className="relative hidden items-start justify-center pt-2 md:flex">
                          <span className="relative z-10 block h-2.5 w-2.5 rounded-full border border-gold bg-background" />
                        </span>

                        {/* SESSION CONTENT */}
                        <div>
                          <h4 className="font-serif text-xl md:text-2xl">
                            {session.title}
                          </h4>

                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
                            {session.who}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION PRICING AND ACCESS */}
      <RegistrationInformationSection />
      {/* <RegistrationAccessSection /> */}

      {/* CTA STRIP */}
      <section className="relative overflow-hidden border-t border-border/40 bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl">
            If this is your room, we&rsquo;d like to know.
          </h2>

          <div className="mt-10">
            <Link to="/attend">
              <span className="btn-gold">Begin Your Registration</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
