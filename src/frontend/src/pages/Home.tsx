import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useSubmitEnquiry } from "../hooks/useQueries";

/* ─── Hero ─── */
function HeroSection() {
  const router = useRouter();

  const handleBookCall = () => {
    const currentPath = router.state.location.pathname;
    if (currentPath === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      });
    }
  };

  return (
    <section id="hero" className="bg-background">
      {/* ── P0: Headline given full vertical space & scale ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
        {/* Eyebrow */}
        <p className="section-label mb-8">
          Authority Websites for Local Businesses
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light text-ennoble-text leading-[1.05] tracking-tight max-w-4xl">
          Elevate Your Business with the Digital Dignity it&nbsp;Deserves.
        </h1>
      </div>

      {/* Full-width hero visual — animated web/digital concept */}
      <div className="w-full aspect-[16/7] overflow-hidden relative bg-[#0d0d0b]">
        {/* Static high-res image */}
        <img
          src="/assets/generated/hero-web-minimal.dim_1600x800.jpg"
          alt="Minimal web network — digital presence concept"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Subtle animated overlay — floating nodes */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="oklch(0.82 0.12 80)"
                stopOpacity="0.9"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.82 0.12 80)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          {/* Animated pulsing ring at center */}
          <circle
            cx="50%"
            cy="50%"
            r="3"
            fill="oklch(0.82 0.12 80)"
            opacity="0.7"
          >
            <animate
              attributeName="opacity"
              values="0.7;0.2;0.7"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50%"
            cy="50%"
            r="3"
            fill="none"
            stroke="oklch(0.82 0.12 80)"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="3;28;3"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Secondary node top-right */}
          <circle
            cx="72%"
            cy="28%"
            r="2"
            fill="oklch(0.82 0.12 80)"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0.15;0.5"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Secondary node bottom-left */}
          <circle
            cx="28%"
            cy="72%"
            r="2"
            fill="oklch(0.82 0.12 80)"
            opacity="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.1;0.4"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Connecting line pulse */}
          <line
            x1="50%"
            y1="50%"
            x2="72%"
            y2="28%"
            stroke="oklch(0.82 0.12 80)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.4;0.15"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="50%"
            y1="50%"
            x2="28%"
            y2="72%"
            stroke="oklch(0.82 0.12 80)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur="5.5s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>

      {/* ── P2: CTA with arrow detail, scoped transitions ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          data-ocid="hero.primary_button"
          onClick={handleBookCall}
          className="btn-primary inline-flex items-center gap-3 px-10 py-4 bg-ennoble-text text-white font-medium text-sm tracking-wide rounded-md hover:bg-ennoble-yellow hover:text-ennoble-text shadow-card"
        >
          Book a 20-Minute Strategy Call
          <ArrowRight size={15} className="opacity-70" />
        </button>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-sm text-ennoble-subtext hover:text-ennoble-text underline underline-offset-4 decoration-ennoble-border hover:decoration-ennoble-subtext transition-colors duration-200"
        >
          Learn about us
        </button>
      </div>
    </section>
  );
}

/* ─── About ─── */
function AboutSection() {
  return (
    <section id="about" className="bg-grey-section">
      {/* ── P1: Expanded vertical rhythm, pull-quote isolation ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-2xl">
          <p className="section-label">About</p>
          {/* ── P1: Headline larger on this key anchor section ── */}
          <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text mb-12 leading-[1.1] tracking-tight">
            About site web ennoble
          </h2>
          <div className="space-y-7 text-base lg:text-[1.0625rem] text-ennoble-subtext leading-[1.75]">
            <p>
              Most high-revenue local businesses exist online as fragments — a
              map pin, a phone number, a social profile buried in a feed.
            </p>
            <p>
              At Site Web Ennoble, we restore dignity to your digital presence.
              We design refined, strategic 1–2 page visibility websites
              engineered to establish authority, capture demand, and convert
              high-intent search traffic into direct enquiries.
            </p>
            <p>
              You do not need complexity. You need clarity, positioning, and
              structure.
            </p>
          </div>
          {/* ── P1: Conviction statement isolated as pull-quote ── */}
          <blockquote className="mt-12 pl-6 border-l border-ennoble-text/20">
            <p className="font-display text-xl lg:text-2xl font-light text-ennoble-text leading-snug tracking-tight">
              "Digital dignity, built to convert."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUsSection() {
  const steps = [
    {
      number: "01",
      title: "Structure",
      desc: "Clear positioning that signals authority.",
    },
    {
      number: "02",
      title: "Capture",
      desc: "Strategic lead pathways that convert demand.",
    },
    {
      number: "03",
      title: "Optimize",
      desc: "Built for local search dominance.",
    },
  ];

  const bullets = [
    "Social media visibility is temporary",
    "Google search intent is permanent",
    "Without structure, high-value enquiries slip away",
  ];

  return (
    <section id="why-us" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        {/* ── P1: Two-column header layout for visual variety ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="section-label">Why Us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight">
              The Invisible High-Revenue Brand
            </h2>
          </div>
          <div className="flex items-end">
            <ul className="space-y-4 w-full">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="w-0.5 h-5 bg-ennoble-text/20 rounded-full mt-1 flex-shrink-0" />
                  <span className="text-sm lg:text-base text-ennoble-subtext leading-snug">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── P2: Cards with lift transition ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              data-ocid={`why-us.card.${i + 1}`}
              className="card-lift bg-background border border-ennoble-border rounded-xl p-8 shadow-card"
            >
              <span className="block font-display text-[3.5rem] font-light text-ennoble-border leading-none mb-7 tracking-tight">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-ennoble-text mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-ennoble-subtext leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function ServiceSection() {
  const services = [
    {
      name: "Bespoke",
      label: "Entry Level",
      desc: "Basic layout. Entry-level authority website.",
      highlight: false,
      features: [
        "Clean, professional layout",
        "Mobile responsive design",
        "Contact information display",
        "Google Maps integration",
      ],
    },
    {
      name: "Standard",
      label: "Most Popular",
      desc: "Better design, SEO optimization, WhatsApp button.",
      highlight: true,
      features: [
        "Enhanced professional design",
        "On-page SEO optimization",
        "WhatsApp enquiry button",
        "Google Analytics setup",
      ],
    },
    {
      name: "Premium",
      label: "Full Authority",
      desc: "Custom design, booking form, AI Chatbot Integration, Google Map Pack Optimization Guidance.",
      highlight: false,
      features: [
        "Fully custom bespoke design",
        "Booking form integration",
        "AI Chatbot integration",
        "Google Map Pack guidance",
      ],
    },
  ];

  return (
    <section id="service" className="bg-grey-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="mb-14">
          <p className="section-label">Services</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight">
            Our Services
          </h2>
        </div>

        {/* ── P2: Card lift on service cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.name}
              data-ocid={`service.card.${i + 1}`}
              className={`card-lift relative rounded-xl border p-8 shadow-card flex flex-col ${
                svc.highlight
                  ? "bg-pale-yellow border-ennoble-border"
                  : "bg-background border-ennoble-border"
              }`}
            >
              {/* Badge */}
              <span
                className={`inline-block text-[0.6875rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full mb-6 w-fit ${
                  svc.highlight
                    ? "bg-ennoble-text text-white"
                    : "bg-ennoble-border/60 text-ennoble-subtext"
                }`}
              >
                {svc.label}
              </span>

              <h3 className="font-display text-2xl font-light text-ennoble-text mb-3 tracking-tight">
                {svc.name}
              </h3>
              <p className="text-sm text-ennoble-subtext leading-relaxed mb-7">
                {svc.desc}
              </p>

              <ul className="space-y-2.5 mb-9 flex-1">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-ennoble-subtext"
                  >
                    <span className="w-1 h-1 rounded-full bg-ennoble-text/25 mt-[7px] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* ── P2: Service CTA with scoped transitions ── */}
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`btn-primary mt-auto w-full py-3 text-sm font-medium rounded-md ${
                  svc.highlight
                    ? "bg-ennoble-text text-white hover:bg-ennoble-text/85"
                    : "border border-ennoble-border text-ennoble-text hover:bg-ennoble-yellow hover:border-ennoble-yellow"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ─── */
function PortfolioSection() {
  type PortfolioTab = "project1" | "project2" | "casestudy";
  const [activeTab, setActiveTab] = useState<PortfolioTab>("project1");

  const improvements = [
    "Replaced cluttered layout with generous whitespace and clear visual hierarchy",
    "Modern typography and a warm, premium color palette replacing clashing fonts",
    "High-quality food photography over pixelated clip art",
    "Fully mobile-responsive layout with a clear single CTA",
  ];

  const tabs: { id: PortfolioTab; label: string; ocid: string }[] = [
    { id: "project1", label: "Project 1", ocid: "portfolio.project1.tab" },
    { id: "project2", label: "Project 2", ocid: "portfolio.project2.tab" },
    { id: "casestudy", label: "Case Study", ocid: "portfolio.casestudy.tab" },
  ];

  const activeTabClass =
    "bg-ennoble-text text-white border-ennoble-text shadow-card";
  const inactiveTabClass =
    "bg-transparent text-ennoble-text border-ennoble-border hover:bg-ennoble-yellow hover:border-ennoble-yellow";

  return (
    <section id="portfolio" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="mb-10">
          <p className="section-label">Portfolio</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-base text-ennoble-subtext max-w-xl leading-relaxed">
            These are concept websites created to demonstrate our web design
            capabilities.
          </p>
        </div>

        {/* ── Tab buttons ── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              data-ocid={tab.ocid}
              onClick={() => setActiveTab(tab.id)}
              className={`btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border rounded-md transition-[background-color,border-color,color,box-shadow] duration-200 ${
                activeTab === tab.id ? activeTabClass : inactiveTabClass
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab content panels ── */}
        <div className="relative">
          {/* Project 1 */}
          {activeTab === "project1" && (
            <div
              data-ocid="portfolio.project1.panel"
              className="animate-fade-in"
            >
              <div className="card-lift group rounded-xl border border-ennoble-border overflow-hidden shadow-card max-w-2xl">
                <div className="aspect-[8/5] overflow-hidden">
                  <img
                    src="/assets/generated/portfolio-cafe.dim_800x500.jpg"
                    alt="Sunset Cafe – Restaurant Website"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block text-[0.6875rem] font-medium text-ennoble-subtext bg-ennoble-grey px-2.5 py-1 rounded-full mb-3 tracking-wide">
                    Demo Project (Concept Design)
                  </span>
                  <h3 className="font-display text-lg font-light text-ennoble-text mb-2 tracking-tight">
                    Sunset Cafe – Restaurant Website
                  </h3>
                  <p className="text-sm text-ennoble-subtext leading-relaxed">
                    Responsive design, online reservation form, menu showcase,
                    Google Maps location
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Project 2 */}
          {activeTab === "project2" && (
            <div
              data-ocid="portfolio.project2.panel"
              className="animate-fade-in"
            >
              <div className="card-lift group rounded-xl border border-ennoble-border overflow-hidden shadow-card max-w-2xl">
                <div className="aspect-[8/5] overflow-hidden">
                  <img
                    src="/assets/generated/portfolio-dental.dim_800x500.jpg"
                    alt="Prime Dental – Clinic Website"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block text-[0.6875rem] font-medium text-ennoble-subtext bg-ennoble-grey px-2.5 py-1 rounded-full mb-3 tracking-wide">
                    Demo Project (Concept Design)
                  </span>
                  <h3 className="font-display text-lg font-light text-ennoble-text mb-2 tracking-tight">
                    Prime Dental – Clinic Website
                  </h3>
                  <p className="text-sm text-ennoble-subtext leading-relaxed">
                    Clean clinical layout, appointment booking, service listing,
                    trust signals
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Case Study */}
          {activeTab === "casestudy" && (
            <div
              data-ocid="portfolio.casestudy.panel"
              className="animate-fade-in border border-ennoble-border rounded-2xl overflow-hidden shadow-card"
            >
              {/* Header */}
              <div className="bg-grey-section px-8 py-7 border-b border-ennoble-border">
                <span className="inline-block text-[0.6875rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-ennoble-text text-white mb-4">
                  Case Study
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-light text-ennoble-text tracking-tight leading-snug">
                  La Maison Bakery — Website Redesign
                </h3>
                <p className="mt-2 text-sm text-ennoble-subtext leading-relaxed max-w-2xl">
                  A local artisan bakery with years of loyal customers but no
                  real online authority. We transformed their outdated site into
                  a clean, conversion-focused digital landmark.
                </p>
              </div>

              {/* Before / After images */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="border-b md:border-b-0 md:border-r border-ennoble-border">
                  <div className="px-6 pt-6 pb-3 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase text-ennoble-subtext">
                      Before
                    </span>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="rounded-lg overflow-hidden border border-ennoble-border aspect-[8/5]">
                      <img
                        src="/assets/generated/bakery-before.dim_800x500.jpg"
                        alt="La Maison Bakery — before redesign: cluttered, outdated website"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3 text-xs text-ennoble-subtext leading-relaxed">
                      Cluttered layout, clashing fonts, no clear CTA, poor
                      mobile experience, low-quality visuals.
                    </p>
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="px-6 pt-6 pb-3 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase text-ennoble-subtext">
                      After
                    </span>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="rounded-lg overflow-hidden border border-ennoble-border aspect-[8/5]">
                      <img
                        src="/assets/generated/bakery-after.dim_800x500.jpg"
                        alt="La Maison Bakery — after redesign: modern, clean, mobile-friendly website"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3 text-xs text-ennoble-subtext leading-relaxed">
                      Clean hierarchy, premium photography, clear "Order Now"
                      CTA, fully mobile-responsive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Improvements list */}
              <div className="border-t border-ennoble-border bg-grey-section px-8 py-7">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-ennoble-subtext mb-5">
                  Key Improvements
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                  {improvements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-ennoble-text/30 mt-2 flex-shrink-0" />
                      <span className="text-sm text-ennoble-subtext leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─── */
function FAQsSection() {
  const faqs = [
    {
      q: "Why only 1–2 pages?",
      a: "Authority is not built through volume. It is built through precision and clarity. A focused 1–2 page website delivers your message with impact, eliminates decision fatigue, and guides visitors toward conversion without distraction.",
    },
    {
      q: "What do you deliver?",
      a: "Immediate credibility, search visibility on Google, clear authority positioning, structured conversion paths and increase direct enquiries through WhatsApp and direct calls.",
    },
    {
      q: "I already use Instagram. Why a website?",
      a: "Instagram attracts attention. Google captures intent. When clients are ready to buy, they search. Your website is your permanent digital landmark that works 24/7 to convert high-intent search traffic into direct enquiries.",
    },
    {
      q: "Do you provide content?",
      a: "We refine and structure your messaging strategically, supported by AI-assisted optimization. You know your business best — we translate that expertise into compelling, conversion-focused copy.",
    },
    {
      q: "Can I expand later?",
      a: "Yes. The framework is intentionally built to scale. Start with a focused authority presence and expand as your business grows, without losing the strategic foundation we've established.",
    },
    {
      q: "Do you work with all businesses?",
      a: "We partner with revenue-driven local brands that value clarity and positioning. Our ideal clients are established businesses ready to invest in their digital authority.",
    },
    {
      q: "What is the Timeline?",
      a: "The Discovery takes 15 minutes, build takes 5–7 working days, 1–2 rounds of structured refinement, and launch after approval.",
    },
    {
      q: "Do you have any payment contract?",
      a: "50% advance and remaining 50% after the successful completion of the website.",
    },
  ];

  return (
    <section id="faqs" className="bg-grey-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        {/* ── P1: Two-column header for rhythm variety ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <div>
            <p className="section-label">FAQs</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="hidden lg:flex items-end">
            <p className="text-sm text-ennoble-subtext leading-relaxed max-w-xs">
              Can't find what you're looking for? Reach us directly and we'll be
              in touch within one business day.
            </p>
          </div>
        </div>

        {/* ── P1: FAQ accordion at full width, P1: trigger text size upgraded ── */}
        <Accordion type="single" collapsible className="space-y-2.5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              data-ocid={`faqs.item.${i + 1}`}
              className="bg-background border border-ennoble-border rounded-xl px-7 data-[state=open]:shadow-card transition-shadow duration-200"
            >
              {/* ── P1: Trigger upgraded to text-base for legibility ── */}
              <AccordionTrigger className="text-base font-medium text-ennoble-text hover:no-underline py-5 text-left leading-snug [&>svg]:text-ennoble-subtext">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.9375rem] text-ennoble-subtext leading-[1.7] pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    city: "",
    currentWebsite: "",
    improvement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const submitEnquiry = useSubmitEnquiry();

  const isSubmitting = submitEnquiry.isPending;
  const submitError = submitEnquiry.isError
    ? "Something went wrong. Please try again."
    : null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    submitEnquiry.mutate(
      {
        fullName: form.fullName,
        email: form.email,
        city: form.city,
        currentWebsite: form.currentWebsite ? form.currentWebsite : null,
        improvement: form.improvement,
      },
      {
        onSuccess: () => setSubmitted(true),
      },
    );
  };

  /* Shared input class */
  const inputCls =
    "w-full px-4 py-3 text-sm border border-ennoble-border rounded-md bg-background text-ennoble-text placeholder:text-ennoble-subtext/40 focus:outline-none focus:border-ennoble-text/40 focus:ring-2 focus:ring-ennoble-text/10 transition-[border-color,box-shadow] duration-150";

  return (
    <section id="contact" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="mb-14">
          <p className="section-label">Contact</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact info */}
          <div className="space-y-10">
            <div>
              <p className="section-label mb-4">Reach Us</p>
              <div className="space-y-2">
                <a
                  href="tel:+00907045509097"
                  className="block text-lg font-light text-ennoble-text hover:text-ennoble-subtext transition-colors duration-150 tracking-tight"
                >
                  0090 7045509097
                </a>
                <p className="text-base text-ennoble-subtext">
                  Kolkata, West Bengal – 700031
                </p>
              </div>
            </div>

            <div>
              <p className="section-label mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {/* ── P2: Social icon transitions scoped ── */}
                <a
                  href="https://wa.me/00907045509097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-ennoble-border text-ennoble-subtext hover:bg-ennoble-yellow hover:border-ennoble-yellow hover:text-ennoble-text transition-[background-color,border-color,color] duration-200"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-ennoble-border text-ennoble-subtext hover:bg-ennoble-yellow hover:border-ennoble-yellow hover:text-ennoble-text transition-[background-color,border-color,color] duration-200"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-ennoble-border text-ennoble-subtext hover:bg-ennoble-yellow hover:border-ennoble-yellow hover:text-ennoble-text transition-[background-color,border-color,color] duration-200"
                  aria-label="Instagram"
                >
                  <SiInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Pull-quote in contact sidebar */}
            <div className="pt-2">
              <blockquote className="pl-5 border-l border-ennoble-text/15">
                <p className="text-sm text-ennoble-subtext leading-relaxed italic">
                  "You do not need complexity. You need clarity, positioning,
                  and structure."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="font-display text-2xl font-light text-ennoble-text mb-8 tracking-tight">
              Submit Your Enquiry
            </h3>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="bg-ennoble-yellow border border-ennoble-border rounded-xl p-10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-ennoble-text flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-label="Success checkmark"
                    role="img"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-ennoble-text mb-2">
                  Enquiry submitted successfully
                </p>
                <p className="text-sm text-ennoble-subtext">
                  Thank you. We'll be in touch within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-ennoble-subtext underline underline-offset-4 hover:text-ennoble-text transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      data-ocid="contact.fullname_input"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      data-ocid="contact.email_input"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
                    >
                      City <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      data-ocid="contact.city_input"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="currentWebsite"
                      className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
                    >
                      Current Website
                    </label>
                    <input
                      id="currentWebsite"
                      name="currentWebsite"
                      type="text"
                      data-ocid="contact.website_input"
                      value={form.currentWebsite}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="improvement"
                    className="block text-xs font-medium text-ennoble-subtext mb-2 tracking-wide uppercase"
                  >
                    What needs improvement?{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="improvement"
                    name="improvement"
                    required
                    rows={4}
                    data-ocid="contact.improvement_textarea"
                    value={form.improvement}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you're looking to improve..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Error message */}
                {submitError && (
                  <div
                    data-ocid="contact.error_state"
                    className="px-4 py-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                {/* ── P2: Submit button with scoped transitions & arrow ── */}
                {isSubmitting ? (
                  <button
                    type="button"
                    disabled
                    data-ocid="contact.loading_state"
                    className="w-full py-3.5 bg-ennoble-text/60 text-white font-medium text-sm tracking-wide rounded-md flex items-center justify-center gap-2.5 cursor-not-allowed"
                  >
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="btn-primary w-full py-3.5 bg-ennoble-text text-white font-medium text-sm tracking-wide rounded-md hover:bg-ennoble-yellow hover:text-ennoble-text flex items-center justify-center gap-2.5"
                  >
                    Submit Enquiry
                    <ArrowRight size={14} className="opacity-60" />
                  </button>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ServiceSection />
      <PortfolioSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}
