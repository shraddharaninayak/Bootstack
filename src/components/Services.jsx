import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const SERVICES = [
  {
    category: "Marketing",
    title: "Performance Marketing",
    description: "Scale your business with Meta & Google Ads.",
  },
  {
    category: "Marketing",
    title: "Social Media Management",
    description: "Grow your brand through strategic content.",
  },

  {
    category: "Branding",
    title: "Branding & UI/UX",
    description: "Create memorable brands and user experiences.",
  },
  {
    category: "Branding",
    title: "Brand Consultation",
    description: "Position your business for long-term growth.",
  },

  {
    category: "Development",
    title: "Website Development",
    description: "Modern websites that convert visitors into customers.",
  },
  {
    category: "Development",
    title: "Software Development",
    description: "Custom software tailored to your business.",
  },
  {
    category: "Development",
    title: "App Development",
    description: "Scalable mobile and web applications.",
  },

  {
    category: "Automation",
    title: "Marketing Automation",
    description: "Automate workflows and customer communication.",
  },
];

export default function Services() {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className="section bg-white">
      <div className={`container-inner ${visible ? "reveal-visible" : "reveal"}`} ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Services</span>
         <h2 className="section-heading">
  <span className="text-[#2E5F91]">Solutions Built</span>{" "}
  <span className="text-[#56B8D9]">For Growth</span>
</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {SERVICES.map((service, index) => (

    <a
      href="#"
      key={service.title}
      className={`
        group
        relative
        rounded-[24px]
        border
        border-line
        bg-white
        p-8
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

      <p className="mt-4 text-ink-500 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-10 flex items-center text-brand-blue font-semibold">

        Explore

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
        />

      </div>

    </a>

  ))}

</div>
      </div>
    </section>
  );
}
