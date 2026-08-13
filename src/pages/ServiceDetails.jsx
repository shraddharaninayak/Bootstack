import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import WhyItMattersSection from "../components/Sections/WhyItMattersSection";
import WhyBootstackSection from "../components/Sections/WhyBootstackSection";
import WhatWeDoBestSection from "../components/Sections/WhatWeDoBestSection";
import ProcessSection from "../components/Sections/ProcessSection";
import CTA from "../components/Sections/CTA";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#EEF6F7]">
      {/* Backend grid background */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        -z-0
        bg-[linear-gradient(to_right,#23578408_1px,transparent_1px),linear-gradient(to_bottom,#23578408_1px,transparent_1px)]
        bg-[size:56px_56px]
      "
      />
      {/* Continuous cyan glass reflection */}
      <motion.div
        className="
    pointer-events-none
    fixed
    inset-y-[-40%]
    left-[-25%]
    z-[5]
    h-[180%]
    w-[180px]
    rotate-[35deg]
    bg-gradient-to-r
    from-transparent
    via-[#40A8C4]/10
    to-transparent
    blur-3xl
  "
        animate={{
          x: ["0vw", "140vw"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <HeroSection service={service} />

      {/* About */}
      <AboutSection service={service} />

      {/* Why It Matters */}
      <WhyItMattersSection service={service} />

      {/* Why Bootstack */}
      <WhyBootstackSection service={service} />

      {/* What We Do Best */}
      <WhatWeDoBestSection service={service} />

      {/* Our Process */}
      <ProcessSection service={service} />

      {/* CTA */}
      <CTA service={service} />
    </div>
  );
}
