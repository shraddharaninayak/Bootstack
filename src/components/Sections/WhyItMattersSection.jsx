import { motion } from "framer-motion";

export default function WhyItMattersSection({ service }) {
  if (!service?.whyItMatters) return null;

  const statements =
    service.whyItMatters.statements ||
    [service.whyItMatters.description];

  return (
    <section
      id="why-it-matters"
      className="relative overflow-hidden bg-[#EEF6F7] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#40A8C4]"
        >
          <span className="h-px w-10 bg-[#40A8C4]" />
          {service.whyItMatters.heading}
          <span className="h-px w-10 bg-[#40A8C4]" />
        </motion.div>

        <div className="mt-10 space-y-8">

          {statements.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={
                index === 0
                  ? "mx-auto max-w-3xl text-[clamp(1.8rem,2.6vw,2.2rem)] font-semibold leading-tight tracking-tight text-[#0F2743]"
                  : "mx-auto max-w-2xl text-xl <leading-9></leading-10> text-slate-600"
              }
            >
              {text}
            </motion.p>
          ))}

        </div>

      </div>
    </section>
  );
}