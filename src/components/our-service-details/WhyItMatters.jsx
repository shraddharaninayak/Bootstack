import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function WhyItMatters({ data }) {
  if (!data) return null;

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-brand-cyan/20 bg-white p-8 shadow-card backdrop-blur lg:p-14"
        >
          <span
            className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-blue to-brand-cyan"
          />

          <Quote className="h-8 w-8 text-brand-blue/30" />

          <h2 className="mt-6 text-3xl font-bold text-brand-blue-dark">
            {data.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}