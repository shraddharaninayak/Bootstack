import { motion } from "framer-motion";

export default function WhyBootstackSection({ service }) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
   className="max-w-4xl"
>
  {/* Eyebrow */}

<div className="flex items-center gap-3">

  <div className="h-px w-10 bg-[#40A8C4]" />

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#40A8C4]">
    {service.whyBootstack.heading}
  </span>

</div>

  {/* Heading */}

  <h2 className="mt-5 text-5xl font-bold text-[#0F2743]">
  Why Bootstack
</h2>

  {/* Description */}

  <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
    {service.whyBootstack.description}
  </p>
</motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-10"
        >
          {service.whyBootstackPoints.map((title, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <h3 className="text-5xl font-black text-[#235784]/20 transition duration-300 group-hover:text-[#F7AA00]">
                {String(index + 1).padStart(2, "0")}
              </h3>

              <h4 className="mt-4 whitespace-pre-line text-2xl font-semibold text-[#235784]">
                {title}
              </h4>

              <div className="mt-6 h-[2px] w-20 bg-[#40A8C4] transition-all duration-300 group-hover:w-32"></div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}