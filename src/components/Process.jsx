import useReveal from "../hooks/useReveal";

const STAGES = [
  {
    step: "01",
    title: "Discover",
    description: "We understand your business and goals.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a data-driven strategy that works.",
  },
  {
    step: "03",
    title: "Build",
    description: "We build, design and set everything up.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We launch, test and optimize for results.",
  },
  {
    step: "05",
    title: "Scale",
    description: "We scale what works and drive growth.",
  },
];

export default function Process() {
  const [ref, visible] = useReveal();

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
              {STAGES.map(({ step, title, description }) => (

                <div
                  key={step}
                  className="flex-1 flex flex-col items-center text-center"
                >

                  <div className="w-14 h-14 rounded-full bg-brand-blue text-white font-display font-bold flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#40A8C4]">
                    {step}
                  </div>

                  <h3 className="mt-5 text-lg font-display font-bold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-ink-500 leading-relaxed max-w-[180px]">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}