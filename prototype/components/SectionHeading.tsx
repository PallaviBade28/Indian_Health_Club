export default function SectionHeading({
  eyebrow,
  title,
  accent,
  support,
  align = "left",
  glowAccent = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  support?: string;
  align?: "left" | "center";
  /** Soft glow only on the accent word — use sparingly on key sections */
  glowAccent?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`mb-4 inline-flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          className="h-px w-8 bg-gradient-to-r from-accent-flame via-accent-hot to-accent-ember animate-accent-breathe"
          aria-hidden
        />
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent-hot">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-white md:text-6xl lg:text-7xl">
        {title}
        {accent ? (
          <>
            {" "}
            <span
              className={`text-accent-hot ${glowAccent ? "accent-glow-text" : ""}`}
            >
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      {support ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          {support}
        </p>
      ) : null}
    </div>
  );
}
