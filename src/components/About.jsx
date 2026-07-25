import { Image, Rocket, Settings2, Target, TrendingUp } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CHIPS = [
  { label: "Strategy", icon: Target },
  { label: "Technology", icon: Settings2 },
  { label: "Execution", icon: Rocket },
  { label: "Growth", icon: TrendingUp },
];

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section bg-brand-bg">
      <div
        ref={ref}
        className={`container-inner grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        {/* Placeholder image */}
        <div className="aspect-[4/3] rounded-card bg-white border border-line flex items-center justify-center order-2 md:order-1">
          <div className="flex flex-col items-center gap-2 text-ink-500">
            <Image size={36} strokeWidth={1.5} />
            <span className="text-xs">Team / studio photo placeholder</span>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <span className="eyebrow">About Bootstack</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
            We don&apos;t just build brands. We build business growth systems.
          </h2>
          <p className="mt-5 text-ink-500 leading-relaxed">
            Most businesses fail to grow because of scattered services and disconnected tools — a brand
            here, a website there, ads managed by someone else entirely.
          </p>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Bootstack brings strategy, technology, execution and growth together as one connected system,
            so every part of your business works toward the same outcome.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {CHIPS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-pill bg-white border border-line px-4 py-2 text-sm font-medium text-brand-blue"
              >
                <Icon size={15} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
