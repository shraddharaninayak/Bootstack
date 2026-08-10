import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import useReveal from "../hooks/useReveal";

const FAQS = [
  {
    question: "What services does Bootstack offer?",
    answer:
      "Bootstack combines brand strategy, website development, marketing, software and automation into one connected growth system, rather than offering isolated services.",
  },
  {
    question: "How does Bootstack work?",
    answer:
      "We start by understanding your business and goals, build a data-driven strategy, then design, build, launch and scale everything as one connected system.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A focused website or brand project typically takes a few weeks, while full growth systems are planned in phases over a longer engagement.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on which parts of the growth system you need. We'll scope this together on a strategy call so you get a clear, transparent quote.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with startups, small businesses, D2C brands, clinics, salons, restaurants and local businesses looking for a long-term growth partner.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Absolutely. We can rebuild your website within a broader brand and marketing strategy, or as a standalone project depending on what you need.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-line rounded-card overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-ink-900">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-brand-bg text-brand-blue flex items-center justify-center">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-ink-500 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-white">
      <div
        className={`container-inner max-w-3xl ${visible ? "reveal-visible" : "reveal"}`}
        ref={ref}
      >
        <div className="text-center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="section-heading section-gradient-heading">FAQs</h2>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
