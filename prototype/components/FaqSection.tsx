"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import { FAQS } from "@/lib/content";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Everything you need"
            accent="before you join"
          />
        </SectionReveal>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-base font-normal tracking-normal text-white/90 sm:text-lg">
                    <span className="mr-3 font-display text-accent/80">0{i + 1}</span>
                    {item.q}
                  </span>
                  <Plus
                    className={`mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 pl-10 text-sm font-normal leading-relaxed text-white/55 sm:pl-12">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
