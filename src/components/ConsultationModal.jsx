const OPTIONS = [
  { title: "🎨 Branding & UI/UX", service: "Branding & UI/UX" },
  { title: "📱 Social Media Management", service: "Social Media Management" },
  { title: "💻 Website Development", service: "Website Development" },
  { title: "⚙️ Software Development", service: "Software Development" },
  { title: "🚀 Performance Marketing", service: "Performance Marketing" },
  { title: "🤖 Marketing Automation", service: "Marketing Automation" },
  { title: "📢 Brand Consultation", service: "Brand Consultation" },
  { title: "📲 App Development", service: "App Development" },
];

const phone = "+919975499956";

export default function ConsultationModal({ open, onClose }) {
  if (!open) return null;

  const openWhatsapp = (service) => {
 const message = `Hello Bootstack Team,

I found your website and I'm interested in your ${service} services.
I'd like to discuss my business requirements and explore how Bootstack can help achieve my goals.

Please let me know the next steps for scheduling a consultation.

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  onClose();
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#235784]">
          Book a Consultation
        </h2>

        <p className="mt-2 text-gray-600">
          What are you looking for?
        </p>

        {/* Options */}
        <div className="mt-8 grid grid-cols-2 gap-4">
  {OPTIONS.map((option) => (
    <button
      key={option.title}
      onClick={() => openWhatsapp(option.service)}
      className="rounded-xl border border-gray-200 p-5 text-left transition-all duration-300 hover:border-[#F7AA00] hover:bg-[#F7AA00] hover:text-white group"
    >
      <span className="block text-lg font-semibold">
        {option.title}
      </span>
    </button>
  ))}
</div>

      </div>

    </div>
  );
}