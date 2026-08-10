import heroVideo from "../assets/hero-background.mp4";
import { useState } from "react";
import { Check } from "lucide-react";
import useReveal from "../hooks/useReveal";
import ConsultationModal from "./ConsultationModal";

const TRUST_POINTS = ["Innovation First", "Results Focused", "Buisness Growth"];

function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 560 480"
      className="w-full h-auto max-w-[560px] mx-auto"
      role="img"
      aria-label="Illustration of a growth dashboard combining analytics, marketing and automation"
    >
      {/* Base panel */}
      <rect
        x="20"
        y="40"
        width="520"
        height="400"
        rx="20"
        fill="#FFFFFF"
        stroke="rgba(35,87,132,0.10)"
        strokeWidth="1.5"
      />
      <rect x="20" y="40" width="520" height="56" rx="20" fill="#EEF6F7" />
      <circle cx="48" cy="68" r="5" fill="#F7AA00" />
      <circle cx="66" cy="68" r="5" fill="#40A8C4" />
      <circle cx="84" cy="68" r="5" fill="#235784" />

      {/* Analytics chart card */}
      <rect x="44" y="120" width="230" height="150" rx="14" fill="#EEF6F7" />
      <text
        x="60"
        y="146"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill="#64748B"
      >
        Growth Overview
      </text>
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
      <rect
        x="290"
        y="120"
        width="186"
        height="150"
        rx="14"
        fill="#FFFFFF"
        stroke="rgba(35,87,132,0.10)"
      />
      <text
        x="306"
        y="146"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill="#64748B"
      >
        Automation
      </text>
      <rect x="306" y="160" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="160" width="98" height="14" rx="7" fill="#40A8C4" />
      <rect x="306" y="186" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="186" width="60" height="14" rx="7" fill="#F7AA00" />
      <rect x="306" y="212" width="154" height="14" rx="7" fill="#EEF6F7" />
      <rect x="306" y="212" width="130" height="14" rx="7" fill="#235784" />
      <text
        x="306"
        y="252"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fill="#64748B"
      >
        3 workflows active
      </text>

      {/* CRM / marketing card */}
      <rect
        x="44"
        y="290"
        width="432"
        height="120"
        rx="14"
        fill="#FFFFFF"
        stroke="rgba(35,87,132,0.10)"
      />
      <text
        x="60"
        y="314"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fill="#64748B"
      >
        Marketing + CRM Pipeline
      </text>

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
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="700"
          fontSize="13"
          fill="#FFFFFF"
        >
          +128%
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  const [ref, visible] = useReveal();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-16"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/80 via-[#071A2B]/50 to-[#071A2B]/35" />

      {/* Hero Content */}
      <div
        ref={ref}
        className={`container-inner relative z-10 ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        {/* Copy column */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-white">
            Technology That Builds
            <br />
            <span className="hero-gradient-text">Tomorrow's Brands.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
            We build brands, websites, software, AI automation and marketing
            systems that help ambitious businesses grow, scale and lead with
            confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setOpen(true)} className="btn-primary">
              Book Consultation Call
            </button>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/90">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F7AA00]" strokeWidth={3} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ConsultationModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
