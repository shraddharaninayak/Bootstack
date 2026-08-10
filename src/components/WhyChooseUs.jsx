import {
  BarChart3,
  SearchCheck,
  WorkflowIcon,
  Rocket,
  RocketIcon,
  BarChart3Icon,
  GitBranch,
  GitBranchIcon,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const REASONS = [
  {
    icon: SearchCheck,
    title: "Deep Dive & Diagnosis",
    description:
      "We audit your brand, funnels, and current performance to identify gaps, leaks and growth opportunities.",
  },
  {
    icon: WorkflowIcon,
    title: "Strategy Architecture",
    description:
      "We design a custom growth blueprint covering positioning, content, paid ads and systems aligned with your business goals.",
  },
  {
    icon: RocketIcon,
    title: "Build & Execute",
    description:
      "From content creation to funnel setup, CRM and campaigns, we implement everything with precision and speed.",
  },
  {
    icon: BarChart3Icon,
    title: "Optimise & Scale",
    description:
      "Continuous tracking, testing and optimisation to improve ROI and scale what works consistently.",
  },
];

export default function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-white">
      <div
        ref={ref}
        className={`container-inner why-choose-section ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold section-gradient-heading">
            Why Businesses Choose Bootstack.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="why-choose-item text-center px-4"
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="icon-badge mx-auto bg-white">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-display font-bold">{title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
