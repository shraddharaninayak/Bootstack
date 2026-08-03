import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import logo from "../assets/Footer-img.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Performance Marketing",
  "Social Media Marketing",
  "UI/UX Design",
  "Brand Consultation",
  "Web Development",
  "Software Development",
  "App Development",
  "Marketing Automation",
  "AI & Automation",
];

const RESOURCES = [
  { label: "Career Blog", href: "#" },
  { label: "Success Stories", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SOCIALS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/bootstack.io/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/", // Replace with Bootstack Facebook URL
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://x.com/", // Replace with Bootstack X/Twitter URL
    label: "X",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/bootstack-io/posts/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white/70">
<div className="container-inner px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">        <div className="lg:col-span-1 sm:col-span-2 max-w-xs">
          <div className="h-10 flex items-center mb-4">
            <img
              src={logo}
              alt="Bootstack"
              className="h-25 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Marketing + technology agency helping businesses build, grow and
            scale with smart systems.
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

      <div className="col-span-full grid grid-cols-2 gap-8 lg:contents">

  {/* Quick Links */}
  <div>
    <h4 className="text-white font-display font-semibold text-sm mb-4">
      Quick Links
    </h4>

    <ul className="space-y-2.5 text-sm">
      {QUICK_LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Services */}
  <div>
    <h4 className="text-white font-display font-semibold text-sm mb-4">
      Services
    </h4>

    <ul className="space-y-2.5 text-sm">
      {SERVICES.map((service) => (
        <li key={service}>
          <a
            href="#services"
            className="hover:text-white transition-colors"
          >
            {service}
          </a>
        </li>
      ))}
    </ul>
  </div>

</div>

    
<div className="col-span-full grid grid-cols-2 gap-8 lg:contents">
   {/* Resources */}
  <div>
    <h4 className="text-white font-display font-semibold text-sm mb-4">
      Resources
    </h4>

    <ul className="space-y-2.5 text-sm">
      {RESOURCES.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
 
 {/* Contact */}
  <div>
    <h4 className="text-white font-display font-semibold text-sm mb-4">
      Contact Us
    </h4>

    <ul className="space-y-3 text-sm">
      <li className="flex items-center gap-2">
        <Mail size={15} />
        <a
          href="mailto:aayush@thebootstack.io"
          className="hover:text-white transition-colors"
        >
          aayush@thebootstack.io
        </a>
      </li>

      <li className="flex items-center gap-2">
        <Phone size={15} />
        <a
          href="tel:+919975499956"
          className="hover:text-white transition-colors"
        >
          +91 9975499956
        </a>
      </li>
         <li>
        <a
          href="#contact"
          className="inline-block mt-1 text-brand-yellow font-semibold hover:brightness-90"
        >
          Book a Call →
        </a>
      </li>
    </ul>
  </div>
      </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Bootstack.io — All rights reserved.
      </div>
    </footer>
  );
}
