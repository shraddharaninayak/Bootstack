import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import ServiceOrb from "./ServiceOrb";

export default function HeroSection({
  service,
  eyebrow = "Bootstack Services",
}) {
  const Icon = service.icon;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#EEF6F7] py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#23578410_1px,transparent_1px),linear-gradient(to_bottom,#23578410_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl translate-y-0 items-center gap-10 px-6 md:-translate-y-16 lg:grid-cols-2 lg:gap-14">
        {" "}
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#40A8C4] backdrop-blur-md">
            <Sparkles
              className="h-3.5 w-3.5 text-[#F7AA00]"
              aria-hidden="true"
            />
            {eyebrow}
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] section-gradient-heading sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            {" "}
            {service.subtitle}
          </p>

          {service.highlights && (
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <div
                  key={item}
                  className="
          group
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/70
          bg-white/45
          px-4
          py-3
          text-sm
          font-medium
          text-[#235784]
          shadow-[0_8px_25px_rgba(35,87,132,0.06)]
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[#F7AA00]/40
          hover:bg-white/60
          hover:shadow-[0_12px_30px_rgba(35,87,132,0.10)]
        "
                >
                  {/* Yellow dot */}
                  <span
                    className="
            relative
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#F7AA00]/10
          "
                  >
                    <motion.span
                      animate={{
                        opacity: [0.45, 1, 0.45],
                        scale: [0.85, 1.15, 0.85],
                        boxShadow: [
                          "0 0 4px rgba(247,170,0,0.25)",
                          "0 0 14px rgba(247,170,0,0.65)",
                          "0 0 4px rgba(247,170,0,0.25)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
    h-2.5
    w-2.5
    rounded-full
    bg-[#F7AA00]
  "
                    />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4"></div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center">
          <ServiceOrb Icon={Icon} />
        </div>
      </div>
    </section>
  );
}
