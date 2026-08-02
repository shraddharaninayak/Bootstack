import { motion } from "framer-motion";

export default function AboutSection({ service }) {
  if (!service?.about) return null;

  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 md:gap-16">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="md:sticky md:top-28">

            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#40A8C4]">

              <span className="h-px w-10 bg-[#40A8C4]" />

              {service.about.heading}

            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#0F2743]">
              What we
              <br />
              actually do
            </h2>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <div className="space-y-8">

            {service.about.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl leading-[1.9] text-slate-600"
                >
                  {paragraph}
                </p>
              ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}