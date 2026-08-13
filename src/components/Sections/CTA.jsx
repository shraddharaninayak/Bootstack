import { useState } from "react";
import {
  ArrowRight,
  X,
  MessageCircle,
  CalendarDays,
  Network,
  Smartphone,
  Monitor,
  TrendingUp,
  Palette,
} from "lucide-react";

function getCtaIcon(serviceName) {
  const name = serviceName.toLowerCase();

  if (name.includes("erp")) return Network;
  if (name.includes("app")) return Smartphone;
  if (name.includes("website")) return Monitor;
  if (name.includes("lead")) return TrendingUp;
  if (name.includes("brand")) return Palette;

  return Network;
}

export default function CTA({ service }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!service) return null;

  // Automatically gets the current service
  const serviceName = service.title;
  const CtaIcon = getCtaIcon(serviceName);

  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hi Bootstack, I'd like to discuss my ${serviceName} project. I'd like to schedule a call.`,
  );

  const whatsappUrl = `https://wa.me/919975499956?text=${whatsappMessage}`;

  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const preferredTime = formData.get("preferredTime");

    // Keep these values ready for future email integration
    console.log({
      name,
      company,
      email,
      phone,
      service: serviceName,
      message,
      preferredTime,
    });

    // Show submitted state
    setIsSubmitted(true);
  };

  return (
    <>
      {/* ================= CTA SECTION ================= */}

      <section className="relative z-[2] bg-[#DCEFF2] py-12 md:py-16">
        {" "}
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-gradient-to-br
from-[#235784]
via-[#40A8C4]
to-[#40A8C4]
              px-8
              py-14
              text-center
              shadow-[0_25px_70px_rgba(26,66,95,0.25)]
              md:px-16
              md:py-16
            "
          >
            {/* Cyan glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#40A8C4]/30
                blur-3xl
              "
            />

            {/* Yellow glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-20
                h-72
                w-72
                rounded-full
                bg-[#F7AA00]/20
                blur-3xl
              "
            />

            {/* Service-specific decorative graphic */}
            <div
              aria-hidden="true"
              className="
    pointer-events-none
    absolute
    -right-10
    -bottom-16
    z-0
    rotate-[-12deg]
    text-white/[0.10]
  "
            >
              <CtaIcon size={280} strokeWidth={1.2} />
            </div>

            {/* CTA content */}
            <div className="relative mx-auto max-w-2xl">
              {/* Small label */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                  backdrop-blur-md
                "
              >
                <CalendarDays className="h-3.5 w-3.5 text-[#F7AA00]" />
                Let's Build Something Better
              </span>

              {/* Heading */}
              <h2
                className="
                  mt-6
                  text-balance
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  md:text-4xl
                "
              >
                Ready to discuss your {serviceName} project?
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-balance
                  text-base
                  leading-relaxed
                  text-white/80
                  sm:text-lg
                "
              >
                Tell us what you're building and let's explore how Bootstack can
                help.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                {/* Schedule a Call */}
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsOpen(true);
                  }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#F7AA00]
                    px-7
                    py-3.5
                    text-base
                    font-semibold
                    text-[#1A425F]
                    shadow-[0_12px_30px_rgba(247,170,0,0.25)]
                    transition-all
                    duration-300
                    hover:bg-[#f0c45a]
                    hover:shadow-[0_18px_40px_rgba(247,170,0,0.35)]
                  "
                >
                  Schedule a Call
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-7
                    py-3.5
                    text-base
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white/20
                  "
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM MODAL ================= */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#0F2743]/70
            px-4
            py-6
            backdrop-blur-sm
          "
          onClick={() => setIsOpen(false)}
        >
          {/* Modal */}
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-xl
              overflow-y-auto
              rounded-3xl
              bg-white
              p-6
              shadow-2xl
              sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                absolute
                right-5
                top-5
                rounded-full
                p-2
                text-slate-500
                transition
                hover:bg-slate-100
                hover:text-[#1A425F]
              "
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* ================= FORM ================= */}

            {!isSubmitted ? (
              <>
                {/* Modal heading */}
                <div className="pr-10">
                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-widest
                      text-[#40A8C4]
                    "
                  >
                    Schedule a Call
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-[#0F2743]
                      sm:text-3xl
                    "
                  >
                    Let's discuss your project
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    You're enquiring about:
                  </p>

                  {/* Automatically selected service */}
                  <div
                    className="
                      mt-2
                      inline-flex
                      rounded-full
                      bg-[#EEF6F7]
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-[#235784]
                    "
                  >
                    {serviceName}
                  </div>
                </div>

                {/* Form */}
                <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    />
                  </div>

                  {/* Business / Company */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Business / Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Your company name"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      WhatsApp / Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Service
                    </label>

                    <input
                      type="text"
                      value={serviceName}
                      readOnly
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-[#EEF6F7]
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-[#235784]
                        outline-none
                      "
                    />
                  </div>

                  {/* Project requirement */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Brief Project Requirement
                    </label>

                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="Tell us briefly about your project..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    />
                  </div>

                  {/* Preferred call time */}
                  <div>
                    <label
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#0F2743]
                      "
                    >
                      Preferred Call Time
                    </label>

                    <select
                      name="preferredTime"
                      required
                      defaultValue=""
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-[#0F2743]
                        outline-none
                        transition
                        focus:border-[#40A8C4]
                        focus:ring-2
                        focus:ring-[#40A8C4]/20
                      "
                    >
                      <option value="" disabled>
                        Select a preferred time
                      </option>

                      <option value="Morning">Morning</option>

                      <option value="Afternoon">Afternoon</option>

                      <option value="Evening">Evening</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#235784]
                      px-6
                      py-3.5
                      text-base
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#1A425F]
                    "
                  >
                    Submit Request
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </form>
              </>
            ) : (
              /* ================= SUCCESS STATE ================= */

              <div
                className="
                  flex
                  min-h-[430px]
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-12
                  text-center
                "
              >
                {/* Success circle */}
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEF6F7]
                    text-4xl
                    font-bold
                    text-[#40A8C4]
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-[#0F2743]
                    sm:text-3xl
                  "
                >
                  Thank You!
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-slate-500
                    sm:text-base
                  "
                >
                  Your request has been submitted successfully. Our team will
                  review your enquiry and get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsOpen(false);
                  }}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#235784]
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-[#1A425F]
                  "
                >
                  Done
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
