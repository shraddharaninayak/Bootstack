import { motion } from "framer-motion";

export default function BusinessImpact({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Business Impact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-brand-blue-dark">
            {data.headline}
          </h2>
        </motion.div>

        <div className="mt-12 rounded-3xl border border-brand-cyan/20 bg-brand-bg p-8 shadow-card lg:p-12 space-y-8">

          {data.stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="flex justify-between items-center">

                <span className="font-medium text-brand-blue-dark">
                  {item.label}
                </span>

                <span className="font-bold text-brand-blue">
                  {item.value}
                </span>

              </div>

              <div className="mt-3 h-3 rounded-full bg-white overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item.value }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}