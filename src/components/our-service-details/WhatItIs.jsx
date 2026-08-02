import { motion } from "framer-motion";

export default function WhatItIs({ data }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-bold text-brand-blue-dark">
            {data.title}
          </h2>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}