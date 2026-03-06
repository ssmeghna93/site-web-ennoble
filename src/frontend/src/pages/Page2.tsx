import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const beliefs = [
  {
    title: "A website is your only 24/7 salesperson.",
    desc: "While you sleep, your website works — capturing intent, establishing credibility, and directing high-value enquiries to your door.",
  },
  {
    title: "Clarity converts. Complexity confuses.",
    desc: "A focused, precise digital presence outperforms a sprawling, unfocused one. Every element earns its place.",
  },
  {
    title: "Google intent outlasts social media reach.",
    desc: "Social algorithms change. Google search intent is permanent. Build where your clients are searching, not where they scroll.",
  },
];

export default function Page2() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center bg-background px-6 py-28 text-center relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, oklch(0.14 0.01 60) 0px, oklch(0.14 0.01 60) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, oklch(0.14 0.01 60) 0px, oklch(0.14 0.01 60) 1px, transparent 1px, transparent 48px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* ── P0: Eyebrow with rule ── */}
          <p className="section-label justify-center mb-12">Site Web Ennoble</p>

          {/* ── P0: Headline at full display scale ── */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-ennoble-text leading-[1.05] tracking-tight mb-8">
            Digital Dignity,
            <br />
            <span className="relative inline-block">
              Built to Convert
              {/* Underline accent */}
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 right-0 h-px bg-ennoble-text/20 rounded-full"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-ennoble-subtext leading-[1.75] max-w-2xl mx-auto mb-14">
            We build refined, strategic authority websites for high-revenue
            local businesses — engineered to capture Google search intent and
            convert it into direct enquiries.
          </p>

          {/* ── P2: CTAs with scoped transitions ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              data-ocid="page2.primary_button"
              className="btn-primary inline-flex items-center gap-3 px-9 py-3.5 bg-ennoble-text text-white font-medium text-sm tracking-wide rounded-md hover:bg-ennoble-yellow hover:text-ennoble-text shadow-card"
            >
              Book a 20-Minute Strategy Call
              <ArrowRight size={14} className="opacity-70" />
            </a>
            <Link
              to="/"
              data-ocid="page2.secondary_button"
              className="px-9 py-3.5 border border-ennoble-border text-ennoble-subtext font-medium text-sm rounded-md hover:bg-ennoble-grey hover:text-ennoble-text transition-[background-color,color] duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="bg-grey-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="mb-14 text-center">
            <p className="section-label justify-center mb-6">Our Principles</p>
            {/* ── P1: Heading at larger scale ── */}
            <h2 className="font-display text-4xl lg:text-5xl font-light text-ennoble-text leading-[1.1] tracking-tight">
              What We Believe
            </h2>
          </div>

          {/* ── P2: Belief cards with lift ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {beliefs.map((belief, i) => (
              <div
                key={belief.title}
                className="card-lift bg-background border border-ennoble-border rounded-xl p-8 shadow-card"
              >
                <span className="block font-display text-[3rem] font-light text-ennoble-border mb-6 leading-none tracking-tight">
                  0{i + 1}
                </span>
                <h3 className="font-semibold text-ennoble-text text-base mb-3 leading-snug tracking-tight">
                  {belief.title}
                </h3>
                <p className="text-sm text-ennoble-subtext leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand statement quote ── */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            {/* ── P1: Quote as true pull-quote with left border ── */}
            <blockquote className="border-l-0">
              <span
                aria-hidden="true"
                className="block font-display text-6xl text-ennoble-border/60 mb-3 leading-none"
              >
                "
              </span>
              <p className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-light text-ennoble-text leading-[1.35] tracking-tight">
                You do not need complexity. You need clarity, positioning, and
                structure.
              </p>
              <footer className="mt-8 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-ennoble-border rounded-full" />
                <cite className="not-italic text-sm text-ennoble-subtext tracking-wide">
                  Site Web Ennoble
                </cite>
                <span className="w-8 h-px bg-ennoble-border rounded-full" />
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── CTA section ── */}
      <section className="bg-ennoble-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 text-center">
          <p className="section-label justify-center [&::before]:bg-white/20 text-white/40 mb-8">
            Get Started
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-6 leading-[1.1] tracking-tight">
            Ready to establish your digital landmark?
          </h2>
          <p className="text-base text-white/55 mb-12 max-w-lg mx-auto leading-relaxed">
            Join the high-revenue local businesses that have reclaimed their
            digital authority with a permanent, conversion-focused online
            presence.
          </p>
          <a
            href="/#contact"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 bg-ennoble-yellow text-ennoble-text font-medium text-sm tracking-wide rounded-md hover:bg-white shadow-card"
          >
            Start with a Strategy Call
            <ArrowRight size={14} className="opacity-60" />
          </a>
        </div>
      </section>
    </main>
  );
}
