"use client";

import Headers from "./components/Headers";
import MarketplaceSection from "./components/MarketplaceSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <Headers />

      {/* Hero */}
      <Hero />

      {/* Marketplace */}
      <MarketplaceSection />

      {/* Services */}
      <ServicesSection />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
