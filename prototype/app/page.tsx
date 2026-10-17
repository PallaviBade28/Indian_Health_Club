import BackgroundLayer from "@/components/BackgroundLayer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import TrainersSection from "@/components/TrainersSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BmiCalculator from "@/components/BmiCalculator";
import MarqueeStrip from "@/components/MarqueeStrip";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
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
        <ProgramsSection />
        <PricingSection />
        <TrainersSection />
        <BeforeAfterSection />
        <BmiCalculator />
        <MarqueeStrip />
        <FaqSection />
        <ContactSection />
        <SiteFooter />
      </main>
      <StickyWhatsApp />
    </>
  );
}
