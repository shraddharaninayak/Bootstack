import useReveal from "../hooks/useReveal";

export default function CTA() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="px-6 py-24 bg-[#EEF6F7]">
      <div
        ref={ref}
        className={`container-inner ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <div className="grid lg:grid-cols-[45%_58%] gap-10 items-start">
          {/* LEFT */}

          <div className="py-10 lg:py-16 lg:pr-12">
            <span className="text-sm uppercase tracking-[0.3em] text-brand-blue font-semibold">
              START YOUR PROJECT
            </span>

            <h2 className="mt-6 max-w-[560px] font-display font-bold leading-[1.02] tracking-tight">
  <span className="block text-5xl lg:text-[58px] text-brand-blue">
    Let's Build Your
  </span>

  <span className="block text-5xl lg:text-[58px] text-brand-cyan">
    Growth System.
  </span>
</h2>

            <p className="mt-8 max-w-[500px] text-lg leading-8 text-ink-500">
              Tell us about your business, goals, and challenges. Our team will recommend the right
              branding, marketing, technology, and automation strategy to help you grow.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
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
             <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
             {item}
            </span>
            ))}
          </div>
          </div>

          {/* RIGHT */}

            <div className="rounded-[28px] bg-white shadow-[0_20px_60px_rgba(35,87,132,0.12)] border border-slate-100 p-8 lg:p-10 w-full max-w-[620px] h-fit self-start">           
           <h3 className="font-display font-bold leading-tight">
  <span className="text-4xl text-brand-blue">
    Project
  </span>{" "}
  <span className="text-4xl text-brand-blue">
    Brief
  </span>
</h3>

            <p className="mt-3 text-base leading-7 text-ink-500">
  Share your project goals and business challenges.
  We'll review your requirements and get back to you within
  <span className="font-semibold text-brand-blue"> 24 hours.</span>
</p>

            <div className="mt-8 h-px w-full bg-slate-200"></div>

           <form className="mt-8 space-y-5">

  <input
    type="text"
    placeholder="Full Name"
    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#40A8C4]"
  />

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="email"
      placeholder="Company Name"
      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#40A8C4]"
    />

    <input
      type="text"
      placeholder="Company Email"
      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#40A8C4]"
    />

  </div>

  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#40A8C4]"
  />

  <textarea
    rows="5"
    placeholder="Briefly describe your business, goals, challenges, and how Bootstack can help."
    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none resize-none focus:border-[#40A8C4]"
  ></textarea>

  <button
    type="submit"
    className="w-full rounded-xl bg-brand-yellow py-4 font-display font-bold text-brand-blue transition hover:brightness-95"
  >
    Start Your Project →
  </button>

</form>
          </div>
        </div>
      </div>
    </section>
  );
}