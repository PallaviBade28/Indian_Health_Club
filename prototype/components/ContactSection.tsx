"use client";

import { useMemo, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { CONTACT } from "@/lib/content";
import { PHONE_DISPLAY, TEL_URL, whatsappUrl } from "@/lib/theme";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

const GOALS = [
  { id: "loss", label: "Weight loss" },
  { id: "muscle", label: "Muscle gain" },
  { id: "strength", label: "Strength" },
  { id: "pt", label: "Personal training" },
  { id: "ladies", label: "Ladies plan" },
  { id: "visit", label: "Gym visit" },
] as const;

const EXPERIENCE = [
  { id: "new", label: "Brand new" },
  { id: "returning", label: "Coming back" },
  { id: "regular", label: "Already train" },
] as const;

const TIMING = [
  { id: "morning", label: "Morning" },
  { id: "evening", label: "Evening" },
  { id: "flexible", label: "Flexible" },
] as const;

const INTEREST = [
  { id: "general", label: "General membership" },
  { id: "ladies", label: "Ladies special" },
  { id: "gold", label: "Gold P.T." },
  { id: "diamond", label: "Diamond P.T." },
] as const;

function planHint(
  goal: string | null,
  experience: string | null,
  interest: string | null
) {
  if (interest === "diamond") return "Diamond P.T. — highest coaching intensity.";
  if (interest === "gold") return "Gold P.T. — structured 1:1 without overwhelm.";
  if (interest === "ladies" || goal === "ladies")
    return "Ladies Special rates + optional coaching add-on.";
  if (goal === "pt") return "Compare Gold vs Diamond in Pricing, then message us.";
  if (experience === "new") return "Beginner Path + 1 or 3 month membership is a strong start.";
  if (goal === "loss") return "3-month membership + conditioning focus works well.";
  if (goal === "muscle" || goal === "strength")
    return "Strength-floor focus; consider Gold P.T. for faster form gains.";
  return "Tell us your goal on WhatsApp — we will map the right plan.";
}

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<(typeof GOALS)[number]["id"] | null>(null);
  const [experience, setExperience] =
    useState<(typeof EXPERIENCE)[number]["id"] | null>(null);
  const [timing, setTiming] = useState<(typeof TIMING)[number]["id"] | null>(null);
  const [interest, setInterest] =
    useState<(typeof INTEREST)[number]["id"] | null>(null);

  const hint = useMemo(
    () => planHint(goal, experience, interest),
    [goal, experience, interest]
  );

  const waHref = whatsappUrl(
    [
      "Hi Indian Health Club!",
      goal ? `Goal: ${GOALS.find((g) => g.id === goal)?.label}` : null,
      experience
        ? `Experience: ${EXPERIENCE.find((e) => e.id === experience)?.label}`
        : null,
      timing ? `Preferred time: ${TIMING.find((t) => t.id === timing)?.label}` : null,
      interest
        ? `Interested in: ${INTEREST.find((i) => i.id === interest)?.label}`
        : null,
      `Suggestion shown: ${hint}`,
    ]
      .filter(Boolean)
      .join(" · ")
  );

  const canNext =
    (step === 1 && goal) ||
    (step === 2 && experience) ||
    (step === 3 && timing) ||
    (step === 4 && interest);

  return (
    <section id="contact" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Build your"
            accent="join path"
            glowAccent
            support="Four quick picks — we prefill WhatsApp with your intent and a plan suggestion."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SectionReveal delay={60}>
            <SpotlightCard className="rounded-2xl p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Step {step} of 4
                </p>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <span
                      key={s}
                      className={`h-1.5 w-7 rounded-full ${
                        step >= s ? "bg-accent" : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {step === 1 && (
                <>
                  <h3 className="font-display text-3xl tracking-wide text-white">
                    Primary goal?
                  </h3>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {GOALS.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] ${
                          goal === g.id
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-white/10 text-white/70 hover:border-white/25"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="font-display text-3xl tracking-wide text-white">
                    Experience level?
                  </h3>
                  <div className="mt-5 grid gap-2">
                    {EXPERIENCE.map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        onClick={() => setExperience(e.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] ${
                          experience === e.id
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-white/10 text-white/70"
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-display text-3xl tracking-wide text-white">
                    Preferred training time?
                  </h3>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {TIMING.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTiming(t.id)}
                        className={`rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] ${
                          timing === t.id
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-white/10 text-white/70"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="font-display text-3xl tracking-wide text-white">
                    What are you eyeing?
                  </h3>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {INTEREST.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        onClick={() => setInterest(i.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] ${
                          interest === i.id
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-white/10 text-white/70"
                        }`}
                      >
                        {i.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-accent/30 bg-accent/10 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      Suggestion for you
                    </p>
                    <p className="mt-2 text-sm text-white/75">{hint}</p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow inline-flex justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-gym-black"
                    >
                      Open WhatsApp
                    </a>
                    <a
                      href={TEL_URL}
                      className="inline-flex justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </>
              )}

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className="text-xs uppercase tracking-[0.2em] text-white/40 hover:text-accent disabled:opacity-30"
                >
                  ← Back
                </button>
                {step < 4 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => Math.min(4, s + 1))}
                    className="btn-glow inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gym-black disabled:opacity-40"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </SpotlightCard>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <SpotlightCard className="space-y-5 rounded-2xl p-6 md:p-8">
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Phone</p>
                    <a
                      href={TEL_URL}
                      className="mt-1 block font-display text-3xl text-white hover:text-accent"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Location</p>
                    <p className="mt-1 text-white/75">{CONTACT.addressLine}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Hours</p>
                    <p className="mt-1 text-white/75">{CONTACT.hours}</p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-2xl border-dashed p-6 text-center">
                <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,107,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.15)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative">
                  <p className="font-display text-3xl tracking-wide text-white/70">
                    Google Maps
                  </p>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-white/45">
                    {CONTACT.mapNote}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
