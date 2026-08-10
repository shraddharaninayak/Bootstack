import useReveal from "../hooks/useReveal";

export default function CTA() {
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-[#EEF6F7]">
      <div
        ref={ref}
        className={`container-inner ${visible ? "reveal-visible" : "reveal"}`}
      >
        <div className="flex flex-col items-center justify-center text-center py-10 lg:py-16">
          {/* Eyebrow */}
          <span className="text-sm uppercase tracking-[0.3em] text-brand-blue font-semibold">
            START YOUR PROJECT
          </span>

          {/* Heading */}
          <h2 className="text-5xl lg:text-[56px] font-bold section-gradient-heading">
            Let's Build Your
            <span className="block">Growth System.</span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-[650px] text-lg leading-8 text-ink-500">
            Tell us about your business, goals, and challenges. Our team will
            recommend the right branding, marketing, technology and automation
            strategy to help you grow.
          </p>

          {/* Service Tags */}
          <div className="mt-8 flex max-w-[800px] flex-wrap justify-center gap-3">
            {[
              "Brand Strategy",
              "Website",
              "Marketing",
              "Automation",
              "Software Development",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-brand-cyan hover:scale-105"
              >
                <span className="h-2 w-2 rounded-full bg-brand-yellow"></span>
                {item}
              </span>
            ))}
          </div>

          {/* Google Form Button */}
          <a
            href="https://forms.gle/ZqQs5eqbnFMh1Ht79"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-yellow px-9 py-4 font-bold text-brand-blue transition-all duration-300 hover:brightness-95 hover:-translate-y-1"
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
