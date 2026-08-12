import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2Icon,
  Smartphone,
  MonitorCheckIcon,
  TrendingUpIcon,
  PaletteIcon,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const ITEMS = [
  {
    icon: Building2Icon,
    title: "ERP Solutions",
    description:
      "Streamline your operations with custom ERP systems designed to manage sales, inventory, projects, finance, HR and business workflows all in one platform.",

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
    description:
      "Build fast, secure and user-friendly Android and iOS applications that deliver seamless customer experiences and support your business growth.",

    features: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    icon: MonitorCheckIcon,
    title: "High-Performing Websites",
    description:
      "Create fast, responsive and conversion-focused websites that showcase your brand, engage visitors and generate more business.",

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
    description:
      " Attract high-quality leads through performance marketing, SEO, landing pages and data-driven campaigns that turn prospects into customers.",

    features: ["Google Ads", "Meta Ads", "SEO", "Landing Pages"],
  },
  {
    icon: PaletteIcon,
    title: "Brand Identity & Branding",
    description:
      "Build a memorable brand with a strong identity, compelling messaging and consistent visuals that inspire trust and leave a lasting impression.",

    features: [
      "Logo Design",
      "Brand Identity",
      "Visual System",
      "Brand Guidelines",
    ],
  },
];

export default function WhatWeBuild() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="section bg-brand-bg">
      <div
        ref={ref}
        className={`container-inner what-build-section ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold section-gradient-heading what-build-heading">
            What We Build
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <>
            {/* Left Side */}
            <div className="space-y-4">
              {ITEMS.map((item, index) => {
                const Icon = item.icon;

                const serviceUrl = `/services/${item.title
                  .toLowerCase()
                  .replace(/&/g, "")
                  .replace(/\s+/g, "-")}`;

                return (
                  <div key={item.title}>
                    {/* DESKTOP VERSION - unchanged */}

                    <button
                      style={{ "--delay": `${index * 100}ms` }}
                      onMouseEnter={() => setActive(index)}
                      className={`what-build-card hidden lg:block w-full rounded-xl border p-5 text-left transition-all duration-300 ${
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

                    {/* MOBILE VERSION */}
                    <motion.div
                      className="lg:hidden"
                      whileTap={{
                        scale: 0.96,
                        y: -2,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                    >
                      <Link
                        to={serviceUrl}
                        onClick={(e) => {
                          e.preventDefault();

                          setMobileActive(index);

                          setTimeout(() => {
                            navigate(serviceUrl);
                          }, 900);
                        }}
                        className={`mobile-service-card flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-300 ${
                          mobileActive === index
                            ? "border-[#F7AA00] bg-[#FFF8E6] shadow-lg -translate-y-1 scale-[1.02]"
                            : "border-gray-200 bg-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Icon size={20} className="text-[#235784]" />

                          <h3 className="font-bold text-sm text-[#235784]">
                            {item.title}
                          </h3>
                        </div>

                        <span
                          className={`text-lg font-semibold transition-transform duration-300 ${
                            mobileActive === index
                              ? "translate-x-2 text-[#F7AA00]"
                              : "text-[#235784]"
                          }`}
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - DESKTOP ONLY */}
            <div className="hidden lg:block rounded-2xl border border-gray-200 bg-brand-bg p-10 shadow-lg">
              <h3 className="text-3xl font-bold">{ITEMS[active].title}</h3>

              <p className="mt-5 text-gray-600 leading-8">
                {ITEMS[active].description}
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                {ITEMS[active].features.map((feature, index) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#40A8C4] text-white text-sm font-semibold">
                      {index + 1}
                    </div>

                    <span className="pt-1 text-gray-700">{feature}</span>
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
