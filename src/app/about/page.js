import Link from "next/link";
import { ArrowRight, Bolt, Compass, Sparkles, Target, Telescope, Users } from "lucide-react";

const values = [
  {
    title: "Human + Machine Intuition",
    description: "We pair human creative direction with AI pattern recognition to uncover the most magnetic version of each frame.",
    icon: Sparkles,
  },
  {
    title: "Design Systems Thinking",
    description: "From a single hero image to a full campaign, we map the golden ratio into scalable, reusable guidelines.",
    icon: Compass,
  },
  {
    title: "Momentum Over Perfection",
    description: "Rapid prototyping, fast feedback loops, and transparent scoring keep teams shipping at the speed of ideas.",
    icon: Bolt,
  },
];

const team = [
  {
    name: "Vishavjit Singh",
    role: "Studio Lead · Backend Architect",
    href: "https://www.linkedin.com/in/vishavjit-singh-s0724/",
    icon: Target,
  },
  {
    name: "Sohraab Dhillon",
    role: "Lead Developer · Experience Engineer",
    href: "https://www.linkedin.com/in/sohraab-dhillon/",
    icon: Telescope,
  },
  {
    name: "Arman Singh Mahal",
    role: "Frontend Designer · Motion Systems",
    href: "https://www.linkedin.com/in/arman-1b323a265/",
    icon: Users,
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 space-y-20 px-4 pb-24 pt-20 sm:px-8 lg:px-20">
        {/* Hero */}
        <section className="section-shell mx-auto max-w-5xl px-6 py-16 sm:px-10">
          <div className="section-content space-y-6 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-yellow-200/35 bg-yellow-200/10 px-5 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-yellow-100/80">
              InSight Studio
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              We help teams craft <span className="gold-gradient-text">beautiful balance</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
              InSight began as a simple AI tool and has evolved into a creative partner that fuses the golden ratio with modern storytelling.
              From campaign art direction to product visuals, we align your imagery with how audiences instinctively perceive harmony.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                href="/pricing"
                className="gradient-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em]"
              >
                Explore Plans
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-yellow-200/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-100 transition-colors hover:border-yellow-100"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="glass-panel p-10">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">Mission</span>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                Our focus: <span className="gold-gradient-text">make every frame resonate</span>
              </h2>
              <p className="text-base text-slate-300">
                We build tools and frameworks that help creative teams understand, measure, and improve the emotional balance inside their visuals.
                Every deliverable comes with a clear narrative for why the golden ratio matters to your story.
              </p>
              <div className="rounded-2xl border border-yellow-200/25 bg-yellow-200/10 px-6 py-5 text-sm text-yellow-100">
                InSight powers brand launches, pitch decks, documentary key art, and digital products for teams across the globe.
              </div>
            </div>
          </div>
          <div className="glass-panel p-10">
            <h3 className="text-xl font-semibold text-slate-50">How we work</h3>
            <div className="mt-6 space-y-5">
              {[
                "Embed with your creative team to understand context and desired emotion.",
                "Run AI-guided golden ratio diagnostics to surface opportunities and tensions.",
                "Prototype overlays, layout variations, and motion cues that reinforce the narrative.",
                "Deliver polished visuals, clear documentation, and an evolving playbook your team can reuse.",
              ].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-200/25 bg-yellow-200/10 text-sm font-semibold text-yellow-100">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">Values</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              The principles guiding <span className="gold-gradient-text">InSight</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass-panel h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-200">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-50">{title}</h3>
                <p className="mt-3 text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">Team</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">The minds behind InSight</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              We are technologists, designers, and storytellers obsessed with connecting mathematical beauty to human feeling.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {team.map(({ name, role, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                className="glass-panel group flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-50">{name}</p>
                  <p className="text-sm text-slate-300">{role}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-200/30 bg-yellow-200/10 text-yellow-100 transition-transform group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl rounded-[32px] border border-yellow-200/30 bg-gradient-to-br from-yellow-200/20 via-yellow-200/10 to-transparent px-8 py-14 text-center shadow-[0_35px_90px_rgba(246,200,95,0.22)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to build with <span className="gold-gradient-text">InSight</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900/80 sm:text-slate-800">
            Let’s turn your next visual into a moment that feels inevitable. Share your goals and we’ll co-create a golden ratio roadmap.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="gradient-button inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em]"
            >
              Start a Project
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 transition-colors hover:border-black/40"
            >
              Try Analyzer
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
