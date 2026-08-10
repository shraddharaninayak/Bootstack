import { useEffect, useState } from "react";
import { Search, GitBranch, Code2, Rocket, TrendingUp } from "lucide-react";
import useReveal from "../hooks/useReveal";

const STAGES = [
  {
    step: "01",
    title: "Consult",
    icon: Search,
    description:
      "We start by understanding your business inside-out—your goals, challenges, and opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    icon: GitBranch,
    description:
      "We design a custom growth blueprint aligned with your business objectives.",
  },
  {
    step: "03",
    title: "Build",
    icon: Code2,
    description:
      "We bring the strategy to life by building assets, systems, and execution layers.",
  },
  {
    step: "04",
    title: "Launch",
    icon: Rocket,
    description:
      "We deploy everything with precision and track performance from day one.",
  },
  {
    step: "05",
    title: "Scale",
    icon: TrendingUp,
    description:
      "We double down on what works and turn it into consistent growth.",
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
    <section className="section bg-brand-bg">
      <div
        ref={ref}
        className={`container-inner ${visible ? "reveal-visible" : "reveal"}`}
      >
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto pt-6">
          <div className="eyebrow">OUR PROCESS</div>

          <h2 className="text-4xl md:text-5xl font-bold section-gradient-heading">
            How We Work.
          </h2>
        </div>

        {/* Timeline Box */}
        <div className="mt-10 relative">
          {/* Main process container */}
          <div className="process-flow">
            {/* Connection line */}
            <div className="process-connector">
              <div className="process-connector-base"></div>
              <div className="process-connector-glow"></div>

              {/* Moving particles */}
              <span className="process-particle particle-1"></span>
              <span className="process-particle particle-2"></span>
              <span className="process-particle particle-3"></span>
              <span className="process-particle particle-4"></span>
              <span className="process-particle particle-5"></span>
              <span className="process-particle particle-6"></span>
              <span className="process-particle particle-7"></span>
              <span className="process-particle particle-8"></span>
              <span className="process-particle particle-9"></span>
              <span className="process-particle particle-10"></span>
            </div>

            {/* Process Cards */}
            <div className="process-cards">
              {STAGES.map(({ step, title, icon: Icon }, index) => (
                <div
                  key={step}
                  className={`process-card ${
                    activeStep === index ? "process-card-active" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="process-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {/* Step number */}
                  <span className="process-step">{step}</span>

                  {/* Title */}
                  <h3>{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
