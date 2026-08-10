import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    slug: "performance-marketing",
    category: "Marketing",
    title: "Performance Marketing",
    description:
      "Reach the right audience, attract potential customers and turn advertising campaigns into meaningful business results.",  },
  {
    slug: "social-media-management",
    category: "Marketing",
    title: "Social Media Management",
    description:
      "Build your brand presence on social platforms through engaging content, consistent communication and an active community.",
  },

  {
    slug: "branding-uiux",
    category: "Branding",
    title: "Branding & UI/UX",
    description:
      "Shape a distinctive brand identity and create digital experiences that make your business easy to recognize and remember.",
  },
  {
    slug: "brand-consultation",
    category: "Branding",
    title: "Brand Consultation",
    description:
      "Define your brand direction, understand your market and build a clear strategy that helps your business stand apart.",
  },

  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Build fast, responsive and SEO-friendly websites that create great first impressions and convert visitors into customers.",
  },
  {
    slug: "software-development",
    category: "Development",
    title: "Software Development",
    description:
      "Build custom software that solves business challenges, simplifies everyday processes and supports long term growth.",
  },
  {
    slug: "app-development",
    category: "Development",
    title: "App Development",
    description:
      "Develop mobile applications that are easy to use, reliable and designed around the needs of your customers.",
  },

  {
    slug: "marketing-automation",
    category: "Automation",
    title: "Marketing Automation",
    description:
      "Connect your marketing activities with smart workflows that save time, manage leads and keep customer communication consistent.",
  },
];

export default function Services() {
  const [ref, visible] = useReveal();

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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Link
              to={`/our-services/${service.slug}`}
              state={{ scrollTo: "services" }}
              key={service.slug}
              className={`
    group
    relative
    flex
    flex-col
    min-h-[280px]
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

    ${index % 2 === 0 ? "mt-0" : "mt-10"}
  `}
            >
              <h3 className="text-2xl font-display font-bold leading-tight">
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

              <div className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-blue transition-all duration-300 group-hover:text-brand-yellow">
                <span className="border-b border-transparent transition-all duration-300 group-hover:border-brand-yellow">
                  Explore
                </span>

                <ArrowRight
                  size={18}
                  className="transition-all duration-300 group-hover:translate-x-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
