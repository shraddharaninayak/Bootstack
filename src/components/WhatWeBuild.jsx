import { Compass, MonitorSmartphone, TrendingUp, Zap } from "lucide-react";
import useReveal from "../hooks/useReveal";

const ITEMS = [
  {
    icon: Compass,
    title: "ERP Model",
    description: "Build a strong brand identity with clear positioning, messaging, and strategy that helps your business stand out.",
  },
  {
    icon: MonitorSmartphone,
    title: "High-Performing Websites",
    description: "Design and develop fast, responsive websites that turn visitors into customers and support your business goals.",
  },
  {
    icon: TrendingUp,
    title: "Creative Websites and Performance Marketing",
    description: "Combine creative design with strategic marketing to build digital experiences that attract, engage, and convert.",
  },
  {
    icon: Zap,
    title: "Branding",
    description: " Create a memorable brand identity with clear messaging, visual consistency, and a strong market presence.",
  },
];

export default function WhatWeBuild() {
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-white">
      <div className={`container-inner ${visible ? "reveal-visible" : "reveal"}`} ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-heading">
  <span className="text-[#235784]">What We</span>{" "}
  <span className="text-[#40A8C4]">Build</span>
</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card card-hover">
              <div className="icon-badge">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-display font-bold">{title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
