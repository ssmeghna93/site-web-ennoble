import { Link, useRouter } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", sectionId: "about", idx: 1 },
  { label: "Why Us", sectionId: "why-us", idx: 2 },
  { label: "Service", sectionId: "service", idx: 3 },
  { label: "Portfolio", sectionId: "portfolio", idx: 4 },
  { label: "FAQs", sectionId: "faqs", idx: 5 },
  { label: "Contact Us", sectionId: "contact", idx: 6 },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    const currentPath = router.state.location.pathname;

    if (currentPath === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      });
    }
  };

  return (
    <>
      <header
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "shadow-[0_1px_0_0_oklch(0.91_0.005_80)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-40">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group"
              aria-label="Site Web Ennoble — Home"
            >
              <img
                src="/assets/uploads/sw-e-1.png"
                alt="Site Web Ennoble"
                className="h-40 w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
                style={{ background: "transparent" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback =
                    target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="items-center gap-3 hidden"
                style={{ display: "none" }}
              >
                <span className="w-0.5 h-7 bg-ennoble-yellow rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="font-display text-xl font-semibold tracking-tight text-ennoble-text group-hover:text-foreground transition-colors">
                  Site Web Ennoble
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-sm font-medium text-ennoble-subtext hover:text-ennoble-text transition-colors py-2"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Menu
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-ennoble-border rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-1 z-50">
                    {navItems.map((item) => (
                      <button
                        type="button"
                        key={item.sectionId}
                        data-ocid={`nav.menu_link.${item.idx}`}
                        onClick={() => scrollToSection(item.sectionId)}
                        className="w-full text-left px-4 py-2.5 text-sm text-ennoble-subtext hover:text-ennoble-text hover:bg-ennoble-grey transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-sm font-medium px-5 py-2 bg-ennoble-text text-white rounded-md hover:bg-ennoble-yellow hover:text-ennoble-text"
              >
                Book a Call
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              data-ocid="nav.hamburger_button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-ennoble-subtext hover:text-ennoble-text transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-ennoble-border bg-background">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.sectionId}
                  data-ocid={`nav.menu_link.${item.idx}`}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left px-3 py-3 text-sm text-ennoble-subtext hover:text-ennoble-text hover:bg-ennoble-grey rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-1 border-t border-ennoble-border">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary w-full text-center text-sm font-medium px-5 py-2.5 bg-ennoble-text text-white rounded-md hover:bg-ennoble-yellow hover:text-ennoble-text"
                >
                  Book a Call
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-40" aria-hidden="true" />
    </>
  );
}
