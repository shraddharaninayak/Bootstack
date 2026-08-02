import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useMotionValue, animate } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Rocket,
  BarChart3,
  Bot,
  Megaphone,
  Smartphone,
  Target,
} from "lucide-react";


/**
 * HomeHero — premium, tech-forward animated hero for the Bootstack home page.
 * React + Tailwind + Framer Motion + Lucide, matching the brand palette:
 * Primary Blue #235784 · Dark Blue #1A425F · Cyan #40A8C4 · Yellow #F7AA00
 *
 * Denser visual layer than a typical hero: particle network background,
 * a live-metrics "terminal" card, floating discipline badges, and
 * count-up stats — built to read as a marketing + technology studio.
 */

// Fixed node layout for the particle network (percent-based, responsive)
const NODES = [
  { x: 8, y: 20 }, { x: 22, y: 55 }, { x: 15, y: 82 },
  { x: 40, y: 12 }, { x: 48, y: 45 }, { x: 38, y: 75 },
  { x: 62, y: 25 }, { x: 70, y: 60 }, { x: 60, y: 88 },
  { x: 85, y: 18 }, { x: 92, y: 50 }, { x: 82, y: 78 },
];
const EDGES = [
  [0, 1], [1, 2], [1, 4], [3, 4], [4, 5], [4, 6],
  [6, 7], [6, 9], [7, 8], [7, 10], [9, 10], [10, 11],
];

const BADGES = [
  { icon: Code2, label: "Development", top: "14%", left: "6%", delay: 0 },
  { icon: Megaphone, label: "Marketing", top: "22%", left: "82%", delay: 0.4 },
  { icon: BarChart3, label: "Analytics", top: "68%", left: "88%", delay: 0.8 },
  { icon: Bot, label: "Automation", top: "78%", left: "10%", delay: 1.2 },
  { icon: Smartphone, label: "Product", top: "50%", left: "3%", delay: 1.6 },
];

const STATS = [
  { value: 19, suffix: "", label: "Services, one team" },
  { value: 9, suffix: "", label: "Industries served" },
  { value: 0, suffix: "", label: "Handoffs between vendors" },
  { value: 100, suffix: "%", label: "In-house execution" },
];

function CountUp({ value, suffix = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.16, 0.84, 0.44, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="font-mono">
      {display}
      {suffix}
    </span>
  );
}

const SERVICE_CHIPS = [
  { label: "Strategy", icon: Target },
  { label: "Marketing", icon: Megaphone },
  { label: "Development", icon: Code2 },
];

export default function HomeHero({
  data,
  eyebrow = "Bootstack Services",
}) {

  const title = data?.title;
  const description = data?.shortDescription;

  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 0.84, 0.44, 1] } },
  };

  return (
    <section
      aria-label="Bootstack — marketing and technology studio"
      className="relative isolate min-h-[85vh] overflow-hidden px-6 pb-20 pt-24 sm:pt-28"   
         style={{ background: "linear-gradient(180deg, #1A425F 0%, #235784 45%, #40A8C4 100%)" }}
    >
      {/* ================= Background layer ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* blueprint grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(64,168,196,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(64,168,196,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, black, transparent)",
          }}
        />

        {/* glow blobs */}
        <motion.div
          className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #40A8C4 0%, transparent 70%)", opacity: 0.4 }}
          animate={shouldReduceMotion ? undefined : { x: [0, 30, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-8rem] bottom-[-6rem] h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #F7AA00 0%, transparent 70%)", opacity: 0.25 }}
          animate={shouldReduceMotion ? undefined : { x: [0, -24, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* particle network */}
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {EDGES.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke="#40A8C4"
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0.08 }}
              animate={shouldReduceMotion ? undefined : { opacity: [0.08, 0.28, 0.08] }}
              transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}
          {NODES.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r="0.55"
              fill={i % 3 === 0 ? "#F7AA00" : "#40A8C4"}
              animate={shouldReduceMotion ? undefined : { r: [0.4, 0.9, 0.4], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.4 + (i % 5) * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* floating discipline badges */}
        {BADGES.map(({ icon: Icon, label, top, left, delay }) => (
          <motion.div
            key={label}
            className="absolute hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-[#BFE3EE] backdrop-blur-md lg:flex"
            style={{ top, left }}
            initial={{ opacity: 0 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.9 }
                : { opacity: [0.5, 0.95, 0.5], y: [0, -14, 0] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon className="h-3.5 w-3.5 text-[#40A8C4]" aria-hidden="true" />
            {label}
          </motion.div>
        ))}
      </div>

      {/* ================= Content ================= */}
      <motion.div
         className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr,0.85fr]"        initial="hidden"
        animate="show"
      >
        {/* Left column */}
        <div>
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#40A8C4] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F7AA00]" aria-hidden="true" />
            {eyebrow}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"          >
            <span className="bg-gradient-to-r from-white via-[#DCEFF4] to-[#40A8C4] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-[#AFC9D6] sm:text-xl"
          >
            {description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            
            <div className="flex flex-wrap gap-4">
  {SERVICE_CHIPS.map(({ icon: Icon, label }) => (
    <motion.div
      key={label}
      whileHover={{ y: -4, scale: 1.05 }}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#DCEFF4] backdrop-blur-md"
    >
      <Icon className="h-4 w-4 text-[#40A8C4]" />
      <span>{label}</span>
    </motion.div>
  ))}
</div>
          </motion.div>
        </div>

        {/* Right column — live "terminal" card */}
        <motion.div variants={item} className="relative">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F7AA00]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#40A8C4]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="ml-3 font-mono text-[11px] text-[#7E9AAB]">bootstack — growth-stack.log</span>
            </div>
            <div className="space-y-3 px-5 py-6 font-mono text-[13px] leading-relaxed">
              <TerminalLine delay={0.4} prefix="$" text="deploying brand strategy..." color="#8FAFC0" />
              <TerminalLine delay={1.1} prefix="✓" text="performance campaigns live" color="#40A8C4" />
              <TerminalLine delay={1.8} prefix="✓" text="site + CRM connected" color="#40A8C4" />
              <TerminalLine delay={2.5} prefix="→" text="leads +184% this quarter" color="#F7AA00" />
              <TerminalLine delay={3.2} prefix="→" text="one team, zero handoffs" color="#F7AA00" cursor />
            </div>
          </motion.div>

          {/* small floating stat chip */}
          <motion.div
            className="absolute -right-6 -top-6 hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-md sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="text-lg font-semibold text-white">3.2x</div>
            <div className="text-[11px] text-[#8FAFC0]">avg. revenue growth</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TerminalLine({ prefix, text, color, delay, cursor = false }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2"
    >
      <span style={{ color }}>{prefix}</span>
      <span className="text-[#DCEFF4]">{text}</span>
      {cursor && (
        <motion.span
          className="ml-1 inline-block h-3.5 w-1.5 bg-[#40A8C4]"
          animate={shouldReduceMotion ? undefined : { opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
        />
      )}
    </motion.div>
  );
}
