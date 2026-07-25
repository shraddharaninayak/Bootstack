import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeBuild from "../components/WhatWeBuild";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import FeaturedWork from "../components/FeaturedWork";
import TechnologyStack from "../components/TechnologyStack";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <FeaturedWork />
        <TechnologyStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
