import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Social Media Management",
  "Performance Marketing",
  "Website Development",
  "Branding & Strategy",
  "SEO Optimization",
  "Marketing Automation",
  "Software Development",
];

const RESOURCES = [
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#work" },
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SOCIALS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white/70">
      <div className="container-inner px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 sm:col-span-2">
          <span className="font-display font-extrabold text-xl text-white">Bootstack</span>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Marketing + technology agency helping businesses build, grow and scale with smart systems.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className="hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            {RESOURCES.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href="mailto:hello@bootstack.io" className="hover:text-white transition-colors">
                hello@bootstack.io
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} />
              <a href="tel:+911234567890" className="hover:text-white transition-colors">
                +91 12345 67890
              </a>
            </li>
            <li>
              <a href="#contact" className="inline-block mt-1 text-brand-yellow font-semibold hover:brightness-90">
                Book a Call →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Bootstack.io — All rights reserved.
      </div>
    </footer>
  );
}
