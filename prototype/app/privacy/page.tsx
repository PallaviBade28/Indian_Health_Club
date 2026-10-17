import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-5 py-24 text-white">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">Legal</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-wide">Privacy Policy</h1>
      <p className="mt-6 text-white/65 leading-relaxed">
        Stub page for the Indian Health Club prototype. A full privacy notice will be
        drafted before go-live (what we collect via WhatsApp/phone enquiries, retention,
        and contact for requests).
      </p>
      <Link href="/" className="mt-10 inline-block text-accent hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
