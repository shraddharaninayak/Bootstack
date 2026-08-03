import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2Icon, Smartphone, MonitorCheckIcon, TrendingUpIcon, PaletteIcon } from "lucide-react";
import useReveal from "../hooks/useReveal";

const ITEMS = [
  {
    icon: Building2Icon,
    title: "ERP Solutions",
    description: "Streamline your operations with custom ERP systems designed to manage sales, inventory, projects, finance, HR and business workflows all in one platform.",

     features: [
      "Inventory Management",
      "Finance & Accounting",
      "HR & Payroll",
      "CRM Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build fast, secure and user-friendly Android and iOS applications that deliver seamless customer experiences and support your business growth.",

    features: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
    ],
  },
  {
    icon: MonitorCheckIcon,
    title: "High-Performing Websites",
    description: "Create fast, responsive and conversion-focused websites that showcase your brand, engage visitors and generate more business.",

     features: [
      "Responsive Design",
      "SEO Friendly",
      "Fast Performance",
      "Landing Pages",
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Lead Generation",
    description: " Attract high-quality leads through performance marketing, SEO, landing pages and data-driven campaigns that turn prospects into customers.",

     features: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Landing Pages",
    ],
  },
{
    icon: PaletteIcon,
    title: "Brand Identity & Branding",
    description: "Build a memorable brand with a strong identity, compelling messaging and consistent visuals that inspire trust and leave a lasting impression.",

    features: [
      "Logo Design",
      "Brand Identity",
      "Visual System",
      "Brand Guidelines",
    ],
}
];

export default function WhatWeBuild() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  return (
    <section className="section bg-white">
      <div className={`container-inner ${visible ? "reveal-visible" : "reveal"}`} ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-heading">
  <span className="text-[#235784]">What We</span>{" "}
  <span className="text-[#40A8C4]">Build</span>
</h2>
        </div>

<div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">  
    <>
  {/* Left Side */}
  <div className="space-y-4">
    {ITEMS.map((item, index) => {
      const Icon = item.icon;

      return (
        <button
          key={item.title}
         onMouseEnter={() => {
  if (!isMobile) setActive(index);
}}

onClick={() => {
  if (isMobile) setActive(index);
}}

//           className={`w-full rounded-xl border p-5 text-left transition-all duration-300 ${
//   active === index
//     ? "border-[#40A8C4] bg-sky-50 shadow-md"
//     : "border-gray-200 hover:border-[#40A8C4]"
// }`}
          className={`w-full rounded-xl border p-5 text-left transition-all duration-300 ${
  active === index
    ? "border-[#F7AA00] bg-[#FFF8E6] shadow-lg"
    : "border-gray-200 hover:border-[#F7AA00] hover:bg-[#FFF8E6]"
}`}
        >
          <div className="flex items-center gap-4">
            <Icon
  size={24}
  className={
    active === index
      ? "text-[#F7AA00]"
      : "text-[#235784]"
  }
/>

            {/* <h3 className="font-bold text-lg">
              {item.title}
            </h3> */}

            <h3
  className={`font-bold text-lg transition-colors ${
    active === index
      ? "text-[#F7AA00]"
      : "text-[#235784]"
  }`}
>
  {item.title}
</h3>
          </div>
        </button>
      );
    })}
  </div>

  {/* Right Side */}
  <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-lg">
    <h3 className="text-3xl font-bold">
      {ITEMS[active].title}
    </h3>

    <p className="mt-5 text-gray-600 leading-8">
      {ITEMS[active].description}
    </p>

  <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
  {ITEMS[active].features.map((feature, index) => (
    <li key={feature} className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#40A8C4] text-white text-sm font-semibold">
        {index + 1}
      </div>

      <span className="pt-1 text-gray-700">
        {feature}
      </span>
    </li>
  ))}
</ul>

<Link
  to={`/services/${ITEMS[active].title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")}`}
  className="mt-10 inline-block rounded-xl bg-[#235784] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7AA00] hover:text-[#235784] hover:shadow-xl"
>
  Explore Service →
</Link>
  </div>
</>
        </div>
      </div>
    </section>
  );
}
