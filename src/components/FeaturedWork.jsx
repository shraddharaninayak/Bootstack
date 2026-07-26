import { ImageOff } from "lucide-react";
import useReveal from "../hooks/useReveal";

const PLACEHOLDER_SLOTS = [1, 2, 3];

export default function FeaturedWork() {
  const [ref, visible] = useReveal();

  return (
    <section id="work" className="section bg-brand-bg">
      <div className={`container-inner ${visible ? "reveal-visible" : "reveal"}`} ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Featured Work</span>
          <h2 className="section-heading mt-2 leading-tight">
  <span className="text-brand-blue">
    Selected
  </span>{" "}
  <span className="text-brand-blue">
    Work.
  </span>
</h2>
          <p className="section-subheading mx-auto">
            Bootstack is just getting started. Every project here will be a real, measurable growth story.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <div key={slot} className="card overflow-hidden p-0">
              <div className="aspect-[4/3] bg-white border-b border-line flex flex-col items-center justify-center gap-2 text-ink-500">
                <ImageOff size={28} strokeWidth={1.5} />
                <span className="text-sm font-medium">Your project could be here</span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-display font-bold text-ink-500/70">Project Title</h3>
                <p className="text-sm text-ink-500/60 mt-1">Category / Industry</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
