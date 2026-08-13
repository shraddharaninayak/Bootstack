import { motion } from "framer-motion";

export default function ProcessSection({ service }) {
  if (!service?.process?.length) return null;

  return (
    <section id="process" className="bg-transparent py-16 md:py-20">
      {" "}
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#40A8C4]" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#40A8C4]">
              How We Work
            </span>
          </div>

          <h2 className="mt-5 text-5xl font-bold section-gradient-heading">
            The Process
          </h2>
        </div>

        {/* Desktop */}

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-[13px] h-px bg-gradient-to-r from-[#235784]/40 via-[#40A8C4] to-[#40A8C4]/10" />

          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: `repeat(${service.process.length},minmax(0,1fr))`,
            }}
          >
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#40A8C4]/40 bg-white text-xs font-bold text-[#235784]">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0F2743]">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}

        <div className="relative mt-12 space-y-10 pl-10 lg:hidden">
          <div className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-[#235784]/40 via-[#40A8C4] to-[#40A8C4]/10" />

          {service.process.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#40A8C4]/40 bg-white text-xs font-bold text-[#235784]">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-[#0F2743]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
