import { Check } from "lucide-react";
import useReveal from "../hooks/useReveal";

const TRUST_POINTS = ["Strategy First", "Technology Driven", "Growth Focused"];

function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 560 480"
      className="w-full h-auto max-w-[560px] mx-auto"
      role="img"
      aria-label="Illustration of a growth dashboard combining analytics, marketing and automation"
    >
      {/* Base panel */}
      <rect x="20" y="40" width="520" height="400" rx="20" fill="#FFFFFF" stroke="rgba(35,87,132,0.10)" strokeWidth="1.5" />
      <rect x="20" y="40" width="520" height="56" rx="20" fill="#EEF6F7" />
      <circle cx="48" cy="68" r="5" fill="#F7AA00" />
      <circle cx="66" cy="68" r="5" fill="#40A8C4" />
      <circle cx="84" cy="68" r="5" fill="#235784" />

      {/* Analytics chart card */}
      <rect x="44" y="120" width="230" height="150" rx="14" fill="#EEF6F7" />
      <text x="60" y="146" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748B">Growth Overview</text>
      <polyline
        points="60,240 100,210 140,225 180,180 220,190 254,140"
        fill="none"
        stroke="#235784"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="60,240 100,210 140,225 180,180 220,190 254,140"
        fill="url(#areaFade)"
        stroke="none"
        opacity="0.15"
      />
      <circle cx="254" cy="140" r="5" fill="#F7AA00" />
      <defs>
        <linearGradient id="areaFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#235784" />
          <stop offset="100%" stopColor="#235784" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Automation / workflow card */}
      <rect x="290" y="120" width="186" height="150" rx="14" fill="#FFFFFF" stroke="rgba(35,87,132,0.10)" />
      <text x="306" y="146" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748B">Automation</text>
      <rect x="306" y="160" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="160" width="98" height="14" rx="7" fill="#40A8C4" />
      <rect x="306" y="186" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="186" width="60" height="14" rx="7" fill="#F7AA00" />
      <rect x="306" y="212" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="212" width="130" height="14" rx="7" fill="#235784" />
      <text x="306" y="252" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748B">3 workflows active</text>

      {/* CRM / marketing card */}
      <rect x="44" y="290" width="432" height="120" rx="14" fill="#FFFFFF" stroke="rgba(35,87,132,0.10)" />
      <text x="60" y="314" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748B">Marketing + CRM Pipeline</text>

      <g transform="translate(60,330)">
        <rect width="110" height="60" rx="10" fill="#EEF6F7" />
        <circle cx="20" cy="20" r="8" fill="#235784" />
        <rect x="36" y="14" width="56" height="6" rx="3" fill="#CBD9E1" />
        <rect x="36" y="26" width="40" height="6" rx="3" fill="#DCE7EB" />
        <rect x="14" y="40" width="82" height="8" rx="4" fill="#40A8C4" />
      </g>
      <g transform="translate(188,330)">
        <rect width="110" height="60" rx="10" fill="#EEF6F7" />
        <circle cx="20" cy="20" r="8" fill="#F7AA00" />
        <rect x="36" y="14" width="56" height="6" rx="3" fill="#CBD9E1" />
        <rect x="36" y="26" width="40" height="6" rx="3" fill="#DCE7EB" />
        <rect x="14" y="40" width="60" height="8" rx="4" fill="#F7AA00" />
      </g>
      <g transform="translate(316,330)">
        <rect width="128" height="60" rx="10" fill="#EEF6F7" />
        <circle cx="20" cy="20" r="8" fill="#40A8C4" />
        <rect x="36" y="14" width="66" height="6" rx="3" fill="#CBD9E1" />
        <rect x="36" y="26" width="48" height="6" rx="3" fill="#DCE7EB" />
        <rect x="14" y="40" width="98" height="8" rx="4" fill="#235784" />
      </g>

      {/* Floating growth badge */}
      <g transform="translate(430,64)">
        <rect x="-46" y="-18" width="92" height="36" rx="18" fill="#235784" />
        <text x="0" y="5" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="13" fill="#FFFFFF">
          +128%
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden bg-brand-bg">
      <div
        ref={ref}
        className={`container-inner grid md:grid-cols-2 gap-14 md:gap-10 items-center ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        {/* Copy column */}
       <div>

 <div className="inline-flex items-center gap-3 rounded-full border border-[#235784]/15 bg-white/80 backdrop-blur-md px-6 py-3 shadow-md">
  <span className="h-2.5 w-2.5 rounded-full bg-[#F7AA00]"></span>

  <span className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.25em] text-[#235784]">
    MARKETING + TECHNOLOGY GROWTH PARTNER
  </span>
</div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.08]">
  <span className="text-[#235784]">Build.</span>{" "}
  <span className="text-[#235784]">Scale.</span>
  <br />
  <span className="text-[#40A8C4]">Automate.</span>
</h1>
          <p className="mt-6 text-base md:text-lg text-ink-500 max-w-lg leading-relaxed">
            We help ambitious businesses grow through branding, websites, software, marketing and automation,
            all working together as one growth system.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book Strategy Call
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink-900">
                <span className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <Check size={13} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration column */}
        {/* <div className="relative">
          <DashboardIllustration />
        </div> */}
      </div>
    </section>
  );
}
