export default function GlowDivider() {
  return (
    <div className="relative mx-auto h-px max-w-5xl px-5" aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-8 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-2xl" />
    </div>
  );
}
