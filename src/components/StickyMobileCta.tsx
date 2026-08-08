import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { OfferConfig } from '../types';

interface StickyMobileCtaProps {
  config: OfferConfig;
  onOpenCheckout: (planId?: 'gerais' | 'tecnico') => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ config, onOpenCheckout }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#080E1A]/95 border-t border-blue-900/60 p-3 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[10px] text-slate-400 block font-display uppercase tracking-wider">
            Pacote Completo por
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-blue-400 font-bold">R$</span>
            <span className="text-xl font-black text-white font-display">59,90</span>
          </div>
        </div>

        <button
          onClick={() => onOpenCheckout('tecnico')}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black text-xs py-3 px-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5 active:scale-95 transition-transform font-display uppercase tracking-wide cursor-pointer"
        >
          <span>QUERO MEU BARALHO (+1.200 CARDS)</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
