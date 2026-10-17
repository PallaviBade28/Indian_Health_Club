import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-5 py-24 text-white">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-wide">Terms of Use</h1>
      <p className="mt-6 text-white/65 leading-relaxed">
        Stub page for the Indian Health Club prototype. Membership fees are non-refundable
        per club rate posters. Full website terms will be finalized before public launch.
      </p>
      <Link href="/" className="mt-10 inline-block text-accent hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
