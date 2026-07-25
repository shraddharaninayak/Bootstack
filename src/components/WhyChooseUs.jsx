import { Compass, Users2, BarChart3, LifeBuoy } from "lucide-react";
import useReveal from "../hooks/useReveal";

const REASONS = [
  {
    icon: Compass,
    title: "One Strategy",
    description: "A single strategy that aligns marketing, technology and business goals.",
  },
  {
    icon: Users2,
    title: "One Team",
    description: "A dedicated team working as an extension of your business.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description: "A data-driven approach that delivers measurable growth.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    description: "From strategy to execution, we're with you at every step.",
  },
];

export default function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-brand-bg">
      <div className={`container-inner ${visible ? "reveal-visible" : "reveal"}`} ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading">Why Businesses Choose Bootstack</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center px-4">
              <div className="icon-badge mx-auto bg-white">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-display font-bold">{title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
