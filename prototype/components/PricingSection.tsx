"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { PRICING } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/theme";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(PRICING.tabs[0].id);
  const tab = PRICING.tabs.find((t) => t.id === activeTab) ?? PRICING.tabs[0];

  return (
    <section id="pricing" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow={PRICING.eyebrow}
            title={PRICING.title}
            accent={PRICING.titleAccent}
            glowAccent
            support={PRICING.support}
          />
        </SectionReveal>

        <SectionReveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist">
            {PRICING.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === activeTab}
                onClick={() => setActiveTab(t.id)}
                className={`rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all sm:text-sm ${
                  t.id === activeTab
                    ? "bg-accent text-gym-black"
                    : "border border-white/15 text-white/65 hover:border-accent-hot/50 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab.badge ? (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-hot">
              {tab.badge}
            </p>
          ) : null}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tab.rows.map((row) => {
              const key = `${tab.id}-${row.package}`;
              return (
                <SpotlightCard
                  key={key}
                  className={`group card-glow-hover relative flex h-full flex-col rounded-2xl p-5 md:p-6 ${
                    row.popular
                      ? "border-2 !border-accent-hot bg-gradient-to-b from-accent/25 via-black/55 to-black/75 shadow-[0_0_0_1px_rgba(255,138,20,0.45),0_0_36px_rgba(255,107,0,0.28)]"
                      : ""
                  }`}
                >
                  {row.popular ? (
                    <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 rounded-md bg-accent-hot px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gym-black">
                      Most popular
                    </span>
                  ) : null}

                  <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">
                    {row.package}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                    {tab.label} plan
                  </p>
                  {row.blurb ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{row.blurb}</p>
                  ) : null}

                  <div className="mt-5 flex flex-wrap items-baseline gap-2">
                    {row.compare ? (
                      <span className="text-sm text-white/30 line-through">{row.compare}</span>
                    ) : null}
                    <span className="text-xl font-semibold leading-snug text-accent-hot tabular-nums sm:text-2xl md:text-3xl">
                      {row.price}
                    </span>
                  </div>

                  {row.perks ? (
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {row.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 text-sm text-white/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-hot" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {row.extras ? (
                    <div className="mt-4 max-h-40 opacity-100 transition-all duration-300 md:mt-0 md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:mt-4 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-within:mt-4 md:group-focus-within:max-h-40 md:group-focus-within:opacity-100">
                      <ul className="space-y-2 rounded-lg border border-accent/25 bg-accent/10 p-3">
                        {row.extras.map((extra) => (
                          <li key={extra} className="text-sm text-accent-soft">
                            + {extra}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex justify-center rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                      row.popular
                        ? "btn-glow bg-accent text-gym-black hover:bg-accent-dim"
                        : "border border-white/25 text-white hover:border-accent-hot/60 hover:text-accent-hot"
                    }`}
                  >
                    Get started
                  </a>
                </SpotlightCard>
              );
            })}
          </div>

          <p className="mt-5 text-xs text-white/40">{PRICING.note}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
