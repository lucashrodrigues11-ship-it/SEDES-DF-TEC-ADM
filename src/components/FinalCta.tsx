import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { OfferConfig } from '../types';

interface FinalCtaProps {
  config: OfferConfig;
  onOpenCheckout: (planId?: 'gerais' | 'tecnico') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ config, onOpenCheckout }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#060B13] via-[#080E1A] to-[#060B13] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold text-xs uppercase tracking-wider font-display">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Sua Aprovação Começa na Retenção</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">
          PARE DE APENAS RECONHECER O CONTEÚDO.
          <span className="block text-blue-400 mt-2">
            COMECE A TREINAR PARA LEMBRAR.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
          Chega de branquear na hora da prova. Garanta o seu baralho de flashcards SEDES/DF no Anki e automatize suas revisões hoje mesmo.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto min-w-[320px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer mx-auto font-display uppercase tracking-wider"
          >
            <span>QUERO ACESSAR OS FLASHCARDS NO ANKI</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium pt-4">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Download Imediato (.apkg)
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Pagamento Único sem Mensalidade
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            7 Dias de Garantia Total
          </span>
        </div>

      </div>
    </section>
  );
};
