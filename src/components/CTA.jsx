import useReveal from "../hooks/useReveal";

export default function CTA() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="px-6 pb-24">
      <div
        ref={ref}
        className={`container-inner bg-brand-blue rounded-card px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Let&apos;s Build Your Growth System
          </h2>
          <p className="mt-3 text-white/70 max-w-md">
            Ready to grow your business with strategy, technology and execution?
          </p>
        </div>

        <a href="mailto:hello@bootstack.io" className="btn-accent shrink-0">
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
}
