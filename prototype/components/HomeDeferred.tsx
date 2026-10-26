"use client";

import LazySection from "@/components/LazySection";

const loadPrograms = () => import("@/components/ProgramsSection");
const loadPricing = () => import("@/components/PricingSection");
const loadTrainers = () => import("@/components/TrainersSection");
const loadTransformations = () => import("@/components/BeforeAfterSection");
const loadBmi = () => import("@/components/BmiCalculator");
const loadMarquee = () => import("@/components/MarqueeStrip");
const loadFaq = () => import("@/components/FaqSection");
const loadContact = () => import("@/components/ContactSection");
const loadFooter = () => import("@/components/SiteFooter");

/** Below-fold sections — JS loads on scroll / hash nav (not on first paint). */
export default function HomeDeferred() {
  return (
    <>
      <LazySection id="programs" loader={loadPrograms} />
      <LazySection id="pricing" loader={loadPricing} />
      <LazySection id="trainers" loader={loadTrainers} />
      <LazySection id="transformations" loader={loadTransformations} />
      <LazySection id="bmi" loader={loadBmi} minHeight="80vh" />
      <LazySection
        id="marquee"
        loader={loadMarquee}
        minHeight="6rem"
        rootMargin="200px 0px"
      />
      <LazySection id="faq" loader={loadFaq} />
      <LazySection id="contact" loader={loadContact} />
      <LazySection
        id="footer"
        loader={loadFooter}
        minHeight="12rem"
        rootMargin="160px 0px"
      />
    </>
  );
}
