import { motion } from "framer-motion";

export default function ConsultationProcess({ data }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-brand-blue-dark"
        >
          {data.title}
        </motion.h2>

        <div className="relative mt-14 pl-12 lg:pl-16">

          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent lg:left-7"
          />

          <ol className="space-y-12">

            {data.steps.map((step, index) => (

              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >

                {/* Number Circle */}
                <span className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/30 bg-white font-semibold text-brand-blue shadow-card lg:-left-16 lg:h-14 lg:w-14">
                  {step.number}
                </span>

                <h3 className="text-2xl font-semibold text-brand-blue-dark">
                  {step.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {step.description}
                </p>

              </motion.li>

            ))}

          </ol>

        </div>
      </div>
    </section>
  );
}