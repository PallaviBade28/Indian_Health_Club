"use client";

import { useMemo, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { whatsappUrl } from "@/lib/theme";

const GOALS = [
  { id: "muscle", label: "Muscle gain" },
  { id: "fat", label: "Fat loss" },
  { id: "strength", label: "Strength" },
  { id: "recomp", label: "Recomposition" },
  { id: "endurance", label: "Endurance" },
  { id: "general", label: "General fitness" },
] as const;

const ACTIVITY = [
  { id: "sedentary", label: "Mostly desk", factor: 1.2 },
  { id: "light", label: "1–2 days / wk", factor: 1.375 },
  { id: "moderate", label: "3–4 days / wk", factor: 1.55 },
  { id: "hard", label: "5–6 days / wk", factor: 1.725 },
  { id: "athlete", label: "Daily athlete", factor: 1.9 },
] as const;

const EXPERIENCE = [
  { id: "new", label: "New to gym" },
  { id: "returning", label: "Returning" },
  { id: "regular", label: "Regular" },
  { id: "advanced", label: "Advanced" },
] as const;

function classifyBmi(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", tone: 0.22 };
  if (bmi < 25) return { label: "Healthy range", tone: 0.45 };
  if (bmi < 30) return { label: "Overweight", tone: 0.68 };
  return { label: "Higher range", tone: 0.88 };
}

function suggestions(opts: {
  goal: (typeof GOALS)[number]["id"];
  experience: (typeof EXPERIENCE)[number]["id"];
  bmi: number;
  gender: "male" | "female";
}) {
  const lines: string[] = [];
  if (opts.experience === "new") {
    lines.push("Start with the Beginner Path + a 1 or 3 month membership.");
  }
  if (opts.goal === "fat" || opts.bmi >= 25) {
    lines.push("Pair strength with conditioning 3–4× / week — protect muscle while cutting.");
  }
  if (opts.goal === "muscle" || opts.goal === "strength") {
    lines.push("Prioritize progressive overload on the strength floor 4× / week.");
  }
  if (opts.goal === "recomp") {
    lines.push("Gold P.T. helps lock form + weekly structure for recomposition.");
  }
  if (opts.gender === "female") {
    lines.push("Ladies Special rates are a strong start — ask about coaching add-ons.");
  }
  if (opts.experience === "advanced" || opts.goal === "endurance") {
    lines.push("Diamond P.T. fits higher intensity and tighter feedback loops.");
  }
  if (lines.length < 2) {
    lines.push("WhatsApp us with your goal — we will map the right plan in minutes.");
  }
  return lines.slice(0, 3);
}

export default function BmiCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState(28);
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);
  const [goal, setGoal] = useState<(typeof GOALS)[number]["id"]>("strength");
  const [activity, setActivity] =
    useState<(typeof ACTIVITY)[number]["id"]>("moderate");
  const [experience, setExperience] =
    useState<(typeof EXPERIENCE)[number]["id"]>("returning");

  const result = useMemo(() => {
    const meters = heightCm / 100;
    const bmi = weightKg / (meters * meters);
    const bmiMeta = classifyBmi(bmi);

    // Mifflin-St Jeor
    const bmr =
      gender === "male"
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

    const factor = ACTIVITY.find((a) => a.id === activity)?.factor ?? 1.55;
    const tdee = bmr * factor;

    // Devine ideal body weight (approx)
    const inches = heightCm / 2.54;
    const ideal =
      gender === "male"
        ? 50 + 2.3 * Math.max(0, inches - 60)
        : 45.5 + 2.3 * Math.max(0, inches - 60);

    const tips = suggestions({ goal, experience, bmi, gender });

    return {
      bmi,
      ...bmiMeta,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      idealLow: Math.round(ideal * 0.95),
      idealHigh: Math.round(ideal * 1.05),
      tips,
    };
  }, [gender, age, heightCm, weightKg, goal, activity, experience]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference * (1 - result.tone);

  const wa = whatsappUrl(
    `Hi IHC! Body check results — Goal: ${GOALS.find((g) => g.id === goal)?.label}, Experience: ${EXPERIENCE.find((e) => e.id === experience)?.label}, BMI ~${result.bmi.toFixed(1)}, TDEE ~${result.tdee} kcal. I'd like a plan suggestion.`
  );

  return (
    <section id="bmi" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Body check"
            title="Your personal"
            accent="training snapshot"
            glowAccent
            support="More than BMI — age, activity, experience, and goal feed a quick plan hint. Not a medical diagnosis."
          />
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionReveal delay={60}>
            <SpotlightCard className="space-y-6 rounded-2xl p-6 md:space-y-7 md:p-8">
              <div className="space-y-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Gender
                </p>
                <div className="flex flex-wrap gap-3">
                  {(["male", "female"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`chip-fire rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] ${
                        gender === g
                          ? "chip-fire-on bg-accent text-gym-black"
                          : "border border-white/15 text-white/60"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Goal focus
                </p>
                <div className="flex flex-wrap gap-3">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id)}
                      className={`chip-fire rounded-md px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                        goal === g.id
                          ? "chip-fire-on bg-accent text-gym-black"
                          : "border border-white/15 text-white/60 hover:border-accent-hot/50"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Activity level
                </p>
                <div className="flex flex-wrap gap-3">
                  {ACTIVITY.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setActivity(a.id)}
                      className={`chip-fire rounded-md px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                        activity === a.id
                          ? "chip-fire-on bg-accent-hot text-gym-black"
                          : "border border-white/15 text-white/60"
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Experience
                </p>
                <div className="flex flex-wrap gap-3">
                  {EXPERIENCE.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setExperience(e.id)}
                      className={`chip-fire rounded-md px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                        experience === e.id
                          ? "chip-fire-on bg-accent text-gym-black"
                          : "border border-white/15 text-white/60"
                      }`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-2 space-y-3.5 border-t border-accent-flame/30 pt-8">
                <label className="block">
                  <div className="mb-1.5 flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    <span>Age</span>
                    <span className="text-accent-hot tabular-nums">{age}</span>
                  </div>
                  <input
                    type="range"
                    min={16}
                    max={65}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="range-fire w-full"
                  />
                </label>
                <label className="block">
                  <div className="mb-1.5 flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    <span>Height</span>
                    <span className="text-accent-hot tabular-nums">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min={140}
                    max={210}
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="range-fire w-full"
                  />
                </label>
                <label className="block">
                  <div className="mb-1.5 flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    <span>Weight</span>
                    <span className="text-accent-hot tabular-nums">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={150}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="range-fire w-full"
                  />
                </label>
              </div>
            </SpotlightCard>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <SpotlightCard className="rounded-2xl p-6 md:p-8">
                <div className="grid gap-6 sm:grid-cols-[130px_1fr] sm:items-center">
                  <div className="relative mx-auto h-[130px] w-[130px]">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#ff7a00"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-[stroke-dashoffset] duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-3xl text-white tabular-nums">
                        {result.bmi.toFixed(1)}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        BMI
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-accent tracking-wide">
                      {result.label}
                    </p>
                    <p className="mt-2 text-sm text-white/55">
                      Snapshot for{" "}
                      {GOALS.find((g) => g.id === goal)?.label?.toLowerCase()} ·{" "}
                      {EXPERIENCE.find((e) => e.id === experience)?.label}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "BMR", value: `${result.bmr}` },
                    { label: "TDEE", value: `${result.tdee}` },
                    {
                      label: "Ideal wt",
                      value: `${result.idealLow}–${result.idealHigh}`,
                    },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-center"
                    >
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                        {m.label}
                      </p>
                      <p className="mt-1 font-display text-2xl text-white tabular-nums">
                        {m.value}
                      </p>
                      {m.label !== "Ideal wt" ? (
                        <p className="text-[10px] text-white/30">kcal</p>
                      ) : (
                        <p className="text-[10px] text-white/30">kg</p>
                      )}
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  Personalized suggestions
                </p>
                <ul className="mt-3 space-y-2">
                  {result.tips.map((tip) => (
                    <li key={tip} className="flex gap-2 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow mt-5 inline-flex rounded-md bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-gym-black"
                >
                  Send results on WhatsApp
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
