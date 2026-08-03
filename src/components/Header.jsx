import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bootstack_logo.png"; // Adjust the path to your logo image
import ConsultationModal from "./ConsultationModal";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const SERVICES = [
  "Performance Marketing",
  "Social Media Management",
  "Branding & UI/UX",
  "Brand Consultation",
  "Website Development",
  "Software Development",
  "App Development",
  "Marketing Automation",
];

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
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border border-white/30"
            : "bg-white/90 backdrop-blur-xl shadow-xl border border-white/20"
        }`}
      >
        <div className="flex items-center justify-between px-10 py-5">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Bootstack Logo" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="text-[15px] font-semibold text-slate-700 hover:text-[#235784] transition-all duration-300">
                      Services
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-10 left-0 w-[520px] rounded-2xl bg-white shadow-2xl border border-slate-100 p-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {SERVICES.map((service) => (
                            <a
                              key={service}
                              href="#services"
                              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-[#EEF6F7] hover:text-[#235784]"
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-semibold text-slate-700 hover:text-[#235784] transition-all duration-300"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                const phone = "919975499956"; // Country code + number (no +, no spaces)

                const message = encodeURIComponent(
                  "Hi Bootstack Team,\n\nI visited your website and would like to discuss my project. Please get in touch with me.",
                );

                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
              className="rounded-full bg-[#235784] px-7 py-4 text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#1b4568] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#235784]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-6 mt-4 rounded-3xl bg-white shadow-xl p-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-semibold text-slate-700"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                const phone = "919975499956";

                const message = encodeURIComponent(
                  "Hi Bootstack Team,\n\nI visited your website and would like to discuss my project. Please get in touch with me.",
                );

                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                setMobileOpen(false);
              }}
              className="rounded-full bg-[#235784] py-4 text-center font-semibold text-white hover:bg-[#1b4568] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
