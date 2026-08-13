import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "../assets/bootstack_logo.png"; // Adjust the path to your logo image
import ConsultationModal from "./ConsultationModal";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const SERVICES = [
  {
    label: "Performance Marketing",
    slug: "performance-marketing",
  },
  {
    label: "Social Media Management",
    slug: "social-media-management",
  },
  {
    label: "Branding & UI/UX",
    slug: "branding-uiux",
  },
  {
    label: "Brand Consultation",
    slug: "brand-consultation",
  },
  {
    label: "Website Development",
    slug: "website-development",
  },
  {
    label: "Software Development",
    slug: "software-development",
  },
  {
    label: "App Development",
    slug: "app-development",
  },
  {
    label: "Marketing Automation",
    slug: "marketing-automation",
  },
];

const WHATSAPP_MESSAGE =
  "Hi Bootstack Team,\n\nI visited your website and would like to discuss my project. Please get in touch with me.";

function openWhatsapp() {
  const phone = "919975499956"; // Country code + number (no +, no spaces)
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-6"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-[#235784]/10 shadow-glow-cyan-sm"
            : "bg-white/10 backdrop-blur-xl border border-white/25"
        }`}
      >
        <div className="flex items-center justify-between px-10 py-5">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Bootstack"
              className="h-14 w-auto object-contain scale-[3] origin-left translate-y-[6px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto mr-12">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={`flex items-center gap-1 text-[15px] font-semibold transition-all duration-300 ${
                        scrolled ? "text-[#1A425F]" : "text-[#40A8C4]"
                      } hover:text-[#F7AA00]`}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="glass-panel absolute top-10 left-0 w-[520px] rounded-2xl bg-white/90 p-6 shadow-glow-cyan"
                        >
                          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/our-services/${service.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-[#EEF6F7] hover:text-[#235784] hover:translate-x-0.5"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[15px] font-semibold transition-all duration-300 group ${
                    scrolled ? "text-[#1A425F]" : "text-[#40A8C4]"
                  } hover:text-[#F7AA00]`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F7AA00] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={openWhatsapp}
              className="group relative overflow-hidden rounded-full bg-[#235784] px-7 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b4568] hover:shadow-glow-cyan active:translate-y-0 active:scale-[0.98]"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-[#235784]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 0.84, 0.44, 1] }}
            className="glass-panel mx-6 mt-4 rounded-3xl bg-white/90 shadow-glow-cyan p-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-[#1A425F] transition-colors duration-300 hover:text-[#F7AA00]"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  openWhatsapp();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-[#235784] py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-[#1b4568] active:scale-[0.98]"
              >
                Contact Us
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
