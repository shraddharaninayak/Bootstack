import { motion } from "framer-motion";

export default function ServicesSection({ service }) {
  if (!service?.services?.length) return null;

  return (
    <section className="relative z-[2] bg-transparent py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#40A8C4]" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#40A8C4]">
              What's Included
            </span>
          </div>
          <h2 className="mt-5 text-5xl font-bold section-gradient-heading">
            What we Build
          </h2>
        </motion.div>

        {/* Deliverables */}

        <div className="mt-14 grid gap-x-14 md:grid-cols-2">
          {service.services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group border-t border-slate-200"
            >
              <div className="flex gap-6 py-8 transition-all duration-300 group-hover:bg-cyan-50/60">
                {/* Number */}

                <span className="mt-1 w-8 text-xs font-mono tracking-wider  text-[#E8A100] transition-colors duration-300 group-hover:text-[#40A8C4]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text */}

                <div>
                  <h3 className="text-2xl font-semibold text-[#0F2743]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
