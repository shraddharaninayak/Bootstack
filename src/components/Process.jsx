import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

const STAGES = [
  {
    step: "01",
    title: "Consult",
    description:
      "We start by understanding your business inside-out—your goals, challenges, and opportunities.",
    points: [
      "Business & brand discovery",
      "Goal alignment & clarity",
      "Market & competitor insights",
    ],
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We design a custom growth blueprint aligned with your business objectives.",
    points: [
      "Brand positioning",
      "Marketing & funnel strategy",
      "KPI mapping 7 growth roadmap",
    ],
  },
  {
    step: "03",
    title: "Build",
    description:
      "We bring the strategy to life by building assets, systems, and execution layers.",
    points: [
      "Website, Funnel & CRM setup",
      "Content creation(reels, creative, assets)",
      "Campaign & automation setup",
    ],
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We deploy everything with precision and track performance from day one.",
    points: [
      "Campaign execution & rollout",
      "Tracking & analytics setup",
      "Testing & Performance optimization",
    ],
  },
  {
    step: "05",
    title: "Scale",
    description:
      "We double down on what works and turn it into consistent growth.",
    points: [
      "Data-driven optimization",
      "Performace scaling (ads,funnels)",
      "System improvements & automation",
    ],
  },
];

export default function Process() {
  const [ref, visible] = useReveal();
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!visible) return;

    let current = 0;
    setActiveStep(0);

    const interval = setInterval(() => {
      current = (current + 1) % STAGES.length;
      setActiveStep(current);
    }, 1500);

    return () => clearInterval(interval);
  }, [visible]);

  return (
  <section className="section bg-white">
    <div
      ref={ref}
      className={`w-full ${
        visible ? "reveal-visible" : "reveal"
      }`}
    >
  
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
  <span className="eyebrow">OUR PROCESS</span>

  <h2 className="section-heading leading-tight mt-2">
    <span className="text-brand-cyan">
      How We
    </span>{" "}
    <span className="text-brand-blue">
      Work.
    </span>
  </h2>
</div>

        {/* Timeline Box */}
        <div className="mt-20 relative">

          <div className="relative">

            {/* Connector Line + Flow Particles */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] overflow-hidden">

              {/* Static Line */}
              <div className="absolute inset-0 bg-[#D8E7EC] shadow-[0_0_12px_rgba(64,168,196,0.25)]"></div>

              {/* Moving Particles */}
              <span className="flow-dot dot1"></span>
              <span className="flow-dot dot2"></span>
              <span className="flow-dot dot3"></span>
              <span className="flow-dot dot4"></span>
              <span className="flow-dot dot5"></span>

            </div>

            

            {/* Process Steps */}
            <div className="relative z-10 flex justify-between items-start w-full">
              {STAGES.map(({ step, title, description, points }, index) => (

                <div
                key={step}
                className="group flex-1 flex flex-col items-center text-center"
                >

               <div
  className={`w-14 h-14 rounded-full
    text-white
    font-display
    font-bold
    flex
    items-center
    justify-center
    transition-all
    duration-500
    ${
      activeStep === index
    ? "bg-brand-cyan scale-110 shadow-[0_0_40px_rgba(64,168,196,0.75)] ring-4 ring-cyan-200/40"        : "bg-brand-blue shadow-lg"
    }`}
>
  {step}
</div>

<h3
  className={`mt-5 text-lg font-display font-bold transition-all duration-500 ${
    activeStep === index ? "text-brand-cyan scale-105" : "text-ink-900"
  }`}
>
  {title}
</h3>

<p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-[220px]">
  {description}
</p>

<div
  className="
    mt-4
    max-w-[220px]
    overflow-hidden
    max-h-0
    opacity-0
    transition-all
    duration-500
    group-hover:max-h-48
    group-hover:opacity-100
  "
>
  <p className="text-sm font-semibold text-brand-blue">
    What we do
  </p>

  <ul className="mt-3 space-y-2 text-sm text-left text-ink-500">
    {points.map((point) => (
      <li key={point}>• {point}</li>
    ))}
  </ul>
</div>
</div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}