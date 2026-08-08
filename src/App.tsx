import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AnkiSimulator } from './components/AnkiSimulator';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorksSteps } from './components/HowItWorksSteps';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { TimeSavingComparison } from './components/TimeSavingComparison';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { ImportantNotice } from './components/ImportantNotice';
import { FinalCta } from './components/FinalCta';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { DEFAULT_OFFER_CONFIG } from './data/copyData';
import { OfferConfig } from './types';
import { Layers, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [offerConfig, setOfferConfig] = useState<OfferConfig>(() => {
    const saved = localStorage.getItem('cards_lucas_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved config', e);
      }
    }
    return DEFAULT_OFFER_CONFIG;
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'gerais' | 'tecnico'>('tecnico');

  useEffect(() => {
    localStorage.setItem('cards_lucas_config', JSON.stringify(offerConfig));
  }, [offerConfig]);

  const handleResetConfig = () => {
    setOfferConfig(DEFAULT_OFFER_CONFIG);
    localStorage.removeItem('cards_lucas_config');
  };

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDirectCheckout = () => {
    window.location.href = 'https://chk.eduzz.com/KW8ZGERO01';
  };

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-100 font-sans selection:bg-blue-500 selection:text-white pb-16 md:pb-0">
      {/* Top Header */}
      <Header
        config={offerConfig}
        onOpenCheckout={scrollToOffer}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          config={offerConfig}
          onOpenCheckout={scrollToOffer}
        />

        {/* 2. Interactive Anki Demo Simulator */}
        <AnkiSimulator
          onOpenCheckout={scrollToOffer}
        />

        {/* 3. Problem & Solution (Pare de recomeçar do zero & O Anki organiza) */}
        <ProblemSolution
          onOpenCheckout={scrollToOffer}
        />

        {/* How It Works Steps */}
        <HowItWorksSteps
          onOpenCheckout={scrollToOffer}
        />

        {/* 4. What you will find in the material */}
        <WhatYouGetSection />

        {/* 5. Time saving comparison (8 steps vs 3 steps) */}
        <TimeSavingComparison
          onOpenCheckout={scrollToOffer}
        />

        {/* 6. What you receive today (Pricing & Offer card) */}
        <OfferSection
          config={offerConfig}
          onOpenCheckout={handleDirectCheckout}
        />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Important Disclaimer Notice */}
        <ImportantNotice />

        {/* 10. Final Call To Action */}
        <FinalCta
          config={offerConfig}
          onOpenCheckout={scrollToOffer}
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#04070D] border-t border-blue-950/80 py-10 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-slate-300 font-bold text-sm font-display">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-black text-xs font-display">
              L
            </div>
            <span>Cards do Lucas — Anki SEDES/DF</span>
          </div>

          <p className="text-slate-400">
            © {new Date().getFullYear()} Cards do Lucas. Todos os direitos reservados. Material preparatório independente.
          </p>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido para máxima retenção no Anki</span>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar on Mobile */}
      <StickyMobileCta
        config={offerConfig}
        onOpenCheckout={scrollToOffer}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        config={offerConfig}
        initialPlanId={selectedPlanId}
      />
    </div>
  );
}
