import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    slug: "performance-marketing",
    category: "Marketing",
    title: "Performance Marketing",
    description:
      "Generate quality leads and grow your business with data driven advertising on Google, Meta and other digital platforms.",
  },
  {
    slug: "social-media-management",
    category: "Marketing",
    title: "Social Media Management",
    description:
      "Build a strong online presence with engaging content, consistent branding and strategic social media management.",
  },

  {
    slug: "branding-uiux",
    category: "Branding",
    title: "Branding & UI/UX",
    description:
      "Create memorable brand identities and intuitive user experiences that connect with your audience.",
  },
  {
    slug: "brand-consultation",
    category: "Branding",
    title: "Brand Consultation",
    description:
      "Get expert guidance to define your brand strategy, strengthen your positioning and unlock new growth opportunities.",
  },

  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Build fast, responsive and SEO friendly websites that create great first impressions and convert visitors into customers.",
  },
  {
    slug: "software-development",
    category: "Development",
    title: "Software Development",
    description:
      "Develop custom software solutions that simplify operations, improve efficiency and support your business goals..",
  },
  {
    slug: "app-development",
    category: "Development",
    title: "App Development",
    description:
      "Create secure, high performance mobile applications that deliver seamless experiences on Android and iOS.",
  },

  {
    slug: "marketing-automation",
    category: "Automation",
    title: "Marketing Automation",
    description:
      "Automate repetitive marketing tasks, nurture leads and improve customer engagement with smart workflows.",
  },
];

export default function Services() {
  const [ref, visible] = useReveal();

  const servicesGridRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});
  const [openingService, setOpeningService] = useState(null);

  useEffect(() => {
    const grid = servicesGridRef.current;

    if (!grid) return;

    const cards = grid.querySelectorAll(".service-scroll-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleCards((prev) => ({
              ...prev,
              [index]: true,
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section bg-white">
      <div
        ref={ref}
        className={`container-inner services-section ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold section-gradient-heading">
            Solutions Built For Growth
          </h2>
        </div>

        <div
          ref={servicesGridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {SERVICES.map((service, index) => (
            <Link
              to={`/our-services/${service.slug}`}
              state={{ scrollTo: "services" }}
              key={service.slug}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();

                  setOpeningService(index);

                  setTimeout(() => {
                    window.location.href = `/our-services/${service.slug}`;
                  }, 450);
                }
              }}
              data-index={index}
              style={{
                "--service-direction": index % 2 === 0 ? "-40px" : "40px",
              }}
              className={`
  group
  service-mobile-card
  service-scroll-card
  relative
  flex
  flex-col
  min-h-[200px]
  overflow-hidden
  rounded-[24px]
  border
  border-line
  bg-white
  px-8 py-7
  shadow-card
  transition-all
  duration-500
  hover:-translate-y-3
  hover:shadow-[0_20px_45px_rgba(64,168,196,.18)]
  hover:border-brand-cyan

  ${visibleCards[index] ? "service-card-visible" : ""}

  ${openingService === index ? "service-glass-active" : ""}
`}
            >
              <span className="service-accent-line" />
              
              <h3 className="text-2xl font-display font-bold leading-tight section-gradient-heading">
                {service.title}
              </h3>

              <div
                className="
          mt-4
          overflow-hidden
          transition-all
          duration-500
          max-h-14
          group-hover:max-h-40
        "
              >
                <p className="text-ink-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-blue transition-all duration-300 group-hover:text-brand-yellow active:text-brand-yellow active:scale-95">
                {" "}
                <span className="border-b border-transparent transition-all duration-300 group-hover:border-brand-yellow">
                  Explore
                </span>
                <ArrowRight
                  size={18}
                  className="service-explore-arrow transition-all duration-300 group-hover:translate-x-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
