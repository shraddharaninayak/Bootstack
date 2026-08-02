import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceOrb from "./ServiceOrb";

export default function HeroSection({ service }) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-[#EEF6F7] py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#23578410_1px,transparent_1px),linear-gradient(to_bottom,#23578410_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-[#235784] shadow-sm">
            Bootstack Services
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-[#0F2743] lg:text-7xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {service.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
          </div>
        </div>
{/* Right */}
<div className="flex items-center justify-center">
  <ServiceOrb Icon={Icon} />
</div>
      </div>
      </section>
  );
}