import Link from "next/link";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    price: "₹0",
    cadence: "forever",
    credits: "5 daily credits",
    description: "Perfect for creators who want to test InSight’s golden ratio overlays and baseline scoring.",
    perks: ["Golden ratio analyzer", "Live overlay preview", "Light recommendations", "Email support"],
    badge: "Start here",
    cta: "Get Started",
    href: "/get-started",
    note: "No credit card required",
  },
  {
    name: "Activator",
    price: "₹299",
    cadence: "one-time",
    credits: "25 credits",
    description: "Unlock batch uploads, in-depth scorecards, and presentation-ready exports for agile teams.",
    perks: ["All Explorer features", "Advanced prompts library", "Batch uploads (5 images)", "Downloadable reports"],
    badge: "Most Popular",
    highlighted: true,
    cta: "Buy Activator",
    href: "/get-started",
    note: "Save 20% with seasonal offer",
  },
  {
    name: "Pro Studio",
    price: "₹799",
    cadence: "one-time",
    credits: "50 credits",
    description: "Ideal for studios and agencies that ship campaigns weekly and need deeper analytics.",
    perks: [
      "Everything in Activator",
      "Color & typography guidance",
      "Campaign comparison dashboards",
      "Priority creative support",
    ],
    badge: "Studio favourite",
    cta: "Upgrade to Pro",
    href: "/get-started",
  },
  {
    name: "Expert Collective",
    price: "₹1,999",
    cadence: "one-time",
    credits: "150 credits",
    description: "Comprehensive toolkit for expert teams, brand systems, and high-volume production.",
    perks: [
      "All Pro Studio features",
      "Unlimited batch workflows",
      "Team workspaces & shared libraries",
      "Dedicated success partner",
    ],
    badge: "For teams",
    cta: "Talk to us",
    href: "/contact",
  },
  {
    name: "Agency Infinite",
    price: "₹4,799",
    cadence: "one-time",
    credits: "400 credits",
    description: "A full-service partnership for agencies managing multiple brands and layered campaigns.",
    perks: [
      "Unlimited teammates",
      "Custom model tuning",
      "API access & integrations",
      "Motion and layout consulting",
    ],
    badge: "Scale-ready",
    cta: "Book a demo",
    href: "/contact",
  },
];

const comparison = [
  { label: "Daily Harmony Score", plans: [true, true, true, true, true] },
  { label: "Golden Ratio Overlays", plans: [true, true, true, true, true] },
  { label: "Story & Copy Prompts", plans: [false, true, true, true, true] },
  { label: "Batch Uploads", plans: [false, true, true, true, true] },
  { label: "Campaign Dashboards", plans: [false, false, true, true, true] },
  { label: "Team Workspaces", plans: [false, false, false, true, true] },
  { label: "API + Integrations", plans: [false, false, false, false, true] },
];

const faqs = [
  {
    question: "Do credits expire?",
    answer:
      "Purchased credits never expire. Your daily Explorer credits reset every 24 hours, so you can build momentum without losing value.",
  },
  {
    question: "Can we move between plans?",
    answer:
      "Yes. Upgrade at any time and your remaining credits roll over. Reach out if you want to tailor a plan for your workflow.",
  },
  {
    question: "What file types are supported?",
    answer:
      "We support JPG, PNG, WEBP, and HEIF formats, with more formats available for Expert and Agency tiers via custom processing.",
  },
  {
    question: "How does team access work?",
    answer:
      "Pro Studio and above unlock shared libraries, notes, and dashboards. Agency Infinite includes unlimited seats and bespoke onboarding.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 space-y-20 px-4 pb-24 pt-20 sm:px-8 lg:px-20">
        {/* Hero */}
        <section className="section-shell mx-auto max-w-5xl px-6 py-16 sm:px-10 text-center">
          <div className="section-content space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-yellow-200/35 bg-yellow-200/10 px-5 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-yellow-100/80">
              Pricing
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Choose your <span className="gold-gradient-text">InSight flow</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
              Whether you are experimenting with your first golden ratio overlay or running a full creative department, there’s
              an InSight plan shaped for your momentum.
            </p>
            <div className="flex items-center justify-center gap-4 pt-3">
              <Link
                href="/get-started"
                className="gradient-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em]"
              >
                Start free
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-yellow-200/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-100 transition-colors hover:border-yellow-100"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-panel relative h-full overflow-hidden p-8 transition ${
                plan.highlighted ? "border-yellow-200/55 shadow-[0_40px_120px_rgba(246,200,95,0.35)]" : ""
              }`}
            >
              {plan.badge && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-yellow-200/40 bg-yellow-200/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-100">
                  {plan.highlighted && <Star className="h-4 w-4" />}
                  {plan.badge}
                </span>
              )}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-50">{plan.name}</h2>
                <div className="flex items-baseline gap-2 text-slate-100">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-xs uppercase tracking-[0.32em] text-yellow-200/70">{plan.cadence}</span>
                </div>
                <p className="text-sm text-yellow-100/80">{plan.credits}</p>
                <p className="text-sm text-slate-300">{plan.description}</p>
                <ul className="space-y-3 pt-4">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-200/30 bg-yellow-200/10 text-yellow-100">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70">{plan.note}</p>}
              </div>
              <div className="mt-8">
                <Link
                  href={plan.href}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] ${
                    plan.highlighted
                      ? "gradient-button"
                      : "border border-yellow-200/35 text-yellow-100 transition-colors hover:border-yellow-100"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">Feature Matrix</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              Compare the <span className="gold-gradient-text">creative runway</span>
            </h2>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/30">
            <div className="grid grid-cols-[1.3fr_repeat(5,1fr)] gap-2 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.32em] text-yellow-200/70">
              <span>Capability</span>
              <span className="text-center">Explorer</span>
              <span className="text-center">Activator</span>
              <span className="text-center">Pro</span>
              <span className="text-center">Expert</span>
              <span className="text-center">Agency</span>
            </div>
            <div className="divide-y divide-white/10">
              {comparison.map(({ label, plans: coverage }) => (
                <div key={label} className="grid grid-cols-[1.3fr_repeat(5,1fr)] items-center gap-2 px-6 py-4 text-sm">
                  <span className="text-slate-200">{label}</span>
                  {coverage.map((available, index) => (
                    <span key={`${label}-${index}`} className="flex items-center justify-center">
                      {available ? (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-200/20 text-yellow-100">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-6 py-3 text-center text-xs text-slate-500">
              All plans include JPG, PNG, WEBP, and HEIF support. Advanced formats and API integrations unlock with Expert tiers.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">FAQ</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">Golden ratio pricing clarity</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="glass-panel p-7 text-left">
                <h3 className="text-lg font-semibold text-slate-50">{question}</h3>
                <p className="mt-3 text-sm text-slate-300">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl rounded-[32px] border border-yellow-200/30 bg-gradient-to-br from-yellow-200/20 via-yellow-200/10 to-transparent px-8 py-14 text-center shadow-[0_35px_90px_rgba(246,200,95,0.22)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let <span className="gold-gradient-text">InSight</span> guide your next release.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Teams worldwide are balancing their visuals with precision. Join them and feel the difference a golden ratio lens
            brings to your story.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/image-analysis"
              className="gradient-button  inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em]"
            >
              Launch Analyzer
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-yellow-200/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-100 transition-colors hover:border-yellow-100 hover:text-yellow-50"
            >
              Explore Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
