import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Circle,
  ImageIcon,
  LayoutDashboard,
  LineChart,
  Sparkles,
} from "lucide-react";

const coreSteps = [
  {
    title: "Upload & Align",
    description: "Drag in your visual, let InSight frame it with precise golden ratio overlays.",
    icon: ImageIcon,
  },
  {
    title: "AI Composition Scan",
    description: "Our engine blends classical proportions with AI heuristics for balanced scoring.",
    icon: Sparkles,
  },
  {
    title: "Actionable Guidance",
    description: "Receive tailored crop, layout, and storytelling prompts matched to your medium.",
    icon: Camera,
  },
];

const highlights = [
  {
    title: "Golden Ratio Score",
    copy: "Quantify perfection with a detailed ratio compliance score and clarity heat map.",
  },
  {
    title: "Narrative Prompts",
    copy: "Translate geometry into story beats, headlines, and color cues for any platform.",
  },
  {
    title: "Instant Overlays",
    copy: "Toggle Fibonacci spirals, rule of thirds, and symmetry guides with a single tap.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-24">
        {/* Hero */}
        <section className="relative isolate overflow-hidden px-4 pb-20 pt-24 sm:px-8 md:px-12 lg:px-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(246,200,95,0.08),transparent_55%)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-9">
              <span className="inline-flex items-center rounded-full border border-yellow-300/30 bg-yellow-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.38em] text-yellow-100/80 pulse-glow">
                AI Golden Ratio Lab
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  Design with <span className="gold-gradient-text">InSight</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-300">
                  The compositional co-pilot that marries timeless ratio principles with modern AI, guiding every image,
                  storyboard, and campaign toward magnetic balance.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/image-analysis"
                  className="gradient-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em]"
                >
                  Launch Analyzer
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-200/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-100 transition-colors hover:border-yellow-100 hover:text-yellow-50"
                >
                  Explore Pricing
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:max-w-md">
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70">Creative Teams</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">12k+</p>
                  <p className="mt-1 text-sm text-slate-400">Designers trust InSight for daily layout decisions.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70">Time Saved</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">4x faster</p>
                  <p className="mt-1 text-sm text-slate-400">Ship polished visuals without multiple revision loops.</p>
                </div>
              </div>
            </div>
            <div className="glass-panel relative overflow-hidden p-10">
              <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl"></div>
              <div className="section-content space-y-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-yellow-200/70">
                  <Circle className="h-3 w-3 fill-yellow-200/60 text-yellow-200/60" />
                  <span>Core Flow</span>
                </div>
                <div className="space-y-6">
                  {coreSteps.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-yellow-200/40">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-5 rounded-2xl border border-yellow-200/25 bg-yellow-200/10 p-5 text-sm text-yellow-100">
                  <LineChart className="h-10 w-10" />
                  <p>
                    Dynamic dashboards track your visual evolution — compare ratios, spacing, and tone shifts across campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">Feature Suite</span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Why creators choose <span className="gold-gradient-text">InSight</span>
              </h2>
              <p className="text-lg text-slate-300">
                Each module is tuned for visual storytellers — from product designers to art directors seeking measurable harmony.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: LayoutDashboard,
                  title: "Unified Creative Hub",
                  copy: "Keep overlays, reports, and revision history in one illuminated workspace.",
                },
                {
                  icon: Camera,
                  title: "Live Preview Canvas",
                  copy: "Interact with your image as guides animate into place, highlighting golden intersections.",
                },
                {
                  icon: Sparkles,
                  title: "Insight Recipes",
                  copy: "Auto-generate lighting, typography, and framing suggestions matched to your brand tone.",
                },
                {
                  icon: Check,
                  title: "Quality Gates",
                  copy: "Set minimum ratio scores and let InSight flag assets before they leave the studio.",
                },
                {
                  icon: ImageIcon,
                  title: "Format Optimizer",
                  copy: "Export ready-to-post crops for social, ads, and decks in one sweep.",
                },
                {
                  icon: LineChart,
                  title: "Team Analytics",
                  copy: "Visualize how every iteration moves you closer to the golden threshold.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="glass-panel float flex h-full flex-col gap-4 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                  <p className="text-sm text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-4 pb-20 sm:px-8 md:px-12 lg:px-20">
          <div className="section-shell mx-auto max-w-6xl px-8 py-14 sm:px-12">
            <div className="section-content grid gap-14 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-200/70">InSight signature</span>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Sophisticated feedback crafted <span className="gold-gradient-text">for storytellers</span>
                </h2>
                <p className="text-lg text-slate-300">
                  Not just scores — every overlay, prompt, and ratio highlight is infused with your creative direction, so teams can act fast.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-yellow-200/25 bg-yellow-200/5 px-4 py-2">Art Directors</span>
                  <span className="rounded-full border border-yellow-200/25 bg-yellow-200/5 px-4 py-2">Brand Studios</span>
                  <span className="rounded-full border border-yellow-200/25 bg-yellow-200/5 px-4 py-2">Product Teams</span>
                  <span className="rounded-full border border-yellow-200/25 bg-yellow-200/5 px-4 py-2">Content Creators</span>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {highlights.map(({ title, copy }) => (
                  <div key={title} className="glass-panel p-6">
                    <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{copy}</p>
                    <hr className="divider-glow my-5" />
                    <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/60">Tailored guidance</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-yellow-200/25 bg-gradient-to-br from-yellow-200/20 via-yellow-200/10 to-transparent px-8 py-16 text-center shadow-[0_45px_120px_rgba(246,200,95,0.25)]">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Bring <span className="gold-gradient-text">balance</span> to your next visual in minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900/80 sm:text-slate-800">
              Drop an image into InSight and watch proportion, narrative, and clarity line up. Your audience feels the difference instantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/image-analysis"
                className="gradient-button inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em]"
              >
                Try InSight Free
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 transition-colors hover:border-black/40"
              >
                Meet the Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
