import {
  Image,
  Lightbulb,
  LightbulbIcon,
  Rocket,
  Settings2,
  Target,
  TrendingUp,
} from "lucide-react";
import useReveal from "../hooks/useReveal";
import aboutImage from "../assets/about.jpeg";

const CHIPS = [
  { label: "Consult", icon: Target },
  { label: "Solution", icon: LightbulbIcon },
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
        {/* About Image */}
        <div className="order-1 md:order-1">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutImage}
              alt="Bootstack team"
              className="w-full aspect-[4/4] object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 md:order-2">
          <span className="eyebrow">About Bootstack</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
            I Didn't Start Bootstack to Build Projects. I Started It to Build
            Businesses.
          </h2>
          <p className="mt-5 text-ink-500 leading-relaxed">
            Too many companies invest in websites, marketing and software
            separately without a clear strategy.
          </p>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Bootstack was created to bring everything together from branding and
            technology to automation and growth so every solution works toward
            one goal: helping businesses scale.
          </p>

          <div className="mt-7">
            <p className="text-lg italic text-ink-700 leading-relaxed">
              Thank you for trusting Bootstack. We're excited to be part of your
              growth journey.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-px bg-brand-cyan"></div>

              <div>
                <p className="font-display font-semibold text-brand-blue">
                  Aayush Vora
                </p>

                <p className="text-xs uppercase tracking-widest text-ink-500">
                  Founder • Bootstack , Nashik
                </p>
              </div>
            </div>
          </div>

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
