import AnimatedStat from "@/components/AnimatedStat";
import SectionReveal from "@/components/SectionReveal";
import { STATS } from "@/lib/content";

export default function StatsStrip() {
  return (
    <section id="stats" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-2xl p-px">
            <div className="live-shimmer-border absolute inset-0 rounded-2xl opacity-70" />
            <div className="relative overflow-hidden rounded-2xl border border-accent-hot/40 bg-gradient-to-r from-orange-950/50 via-black/60 to-amber-950/35 px-4 py-10 shadow-[0_0_48px_rgba(255,107,0,0.16)] md:px-8">
              <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-accent-flame/20 blur-3xl animate-accent-breathe" />
              <div className="pointer-events-none absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-accent-ember/20 blur-3xl animate-accent-breathe" />
              <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-2 md:px-6">
                    <AnimatedStat value={stat.value} label={stat.label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
