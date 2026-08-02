import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  TrendingUp,
  ShieldCheck,
  Rocket,
  BarChart3,
  Zap,
  Users,
} from "lucide-react";

const icons = [
  Sparkles,
  Target,
  TrendingUp,
  ShieldCheck,
  Rocket,
  BarChart3,
  Zap,
  Users,
];

export default function Importance({ data }) {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-brand-blue-dark"
        >
          {data.title}
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {data.points.map((point, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-brand-cyan/20 bg-white p-7 shadow-card transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={20} />
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {point}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}