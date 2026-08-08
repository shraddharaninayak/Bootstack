import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import WhyItMattersSection from "../components/Sections/WhyItMattersSection";
import WhyBootstackSection from "../components/Sections/WhyBootstackSection";
import WhatWeDoBestSection from "../components/Sections/WhatWeDoBestSection";
import ProcessSection from "../components/Sections/ProcessSection";

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
    <div className="min-h-screen bg-white">
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
    </div>
  );
}
