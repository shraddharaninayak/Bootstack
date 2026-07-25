const row1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "openAI",
  "Tailwind CSS",
];

const row2 = [
  "Python",
  "OpenAI",
  "Meta Ads",
  "Google Ads",
  "HubSpot",
  "WhatsApp API",
  "Cloudflare",
  "Vercel",
];

const row3 = [
  "Laravel",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "GSAP",
  "Framer Motion",
  "GitHub",
];

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-[#EEF6F7]">
  <div className="max-w-7xl mx-auto px-6">

    <span className="uppercase tracking-[0.28em] text-sm font-semibold text-[#40A8C4]">
  Engineering Core
</span>

<h2 className="mt-6 text-[48px] md:text-[48px] font-black leading-[0.92] tracking-[-0.04em]">
  <span className="text-[#235784]">
    Our Technology Stack.
    <br />
    Modern Frameworks.
  </span>{" "}
  <span className="text-[#40A8C4]">
    Infinite
    <br />
    Scale.
  </span>
</h2>

<p className="mt-10 max-w-3xl text-[22px] leading-[1.7] text-[#235784]/70">
  We code using languages designed for absolute security,
  rapid speed, and dynamic animations. No visual website
  builder constraints.
</p>

<div className="mt-20 space-y-6">

  {/* Row 1 */}
  <div className="marquee">
    <div className="marquee-content">
      {[...row1, ...row1].map((tech, index) => (
        <div key={index} className="tech-pill">
          {tech}
        </div>
      ))}
    </div>
  </div>

  {/* Row 2 */}
  <div className="marquee reverse">
    <div className="marquee-content">
      {[...row2, ...row2].map((tech, index) => (
        <div key={index} className="tech-pill">
          {tech}
        </div>
      ))}
    </div>
  </div>


</div>

  </div>
</section>
  );
}



