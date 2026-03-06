import { Link } from "@tanstack/react-router";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-ennoble-text text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-0.5 h-6 bg-ennoble-yellow rounded-full opacity-60" />
              <span className="font-display text-lg font-semibold text-white">
                site web ennoble
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Digital dignity, built to convert.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/00907045509097"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { label: "About", sectionId: "about" },
                { label: "Why Us", sectionId: "why-us" },
                { label: "Services", sectionId: "service" },
                { label: "Portfolio", sectionId: "portfolio" },
                { label: "FAQs", sectionId: "faqs" },
                { label: "Contact Us", sectionId: "contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={`/#${item.sectionId}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Contact
            </p>
            <div className="space-y-2">
              <a
                href="tel:+00907045509097"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                0090 7045509097
              </a>
              <p className="text-sm text-white/60">
                Kolkata, West Bengal – 700031
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {year} site web ennoble. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-white/30">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <Link
              to="/admin"
              data-ocid="footer.admin.link"
              className="text-xs text-white/20 hover:text-white/40 transition-colors no-underline hover:underline"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
