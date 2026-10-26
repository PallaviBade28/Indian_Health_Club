import BackgroundLayer from "@/components/BackgroundLayer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import HomeDeferred from "@/components/HomeDeferred";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <BackgroundLayer />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <StatsStrip />
        <AboutSection />
        <HomeDeferred />
      </main>
      <StickyWhatsApp />
    </>
  );
}
