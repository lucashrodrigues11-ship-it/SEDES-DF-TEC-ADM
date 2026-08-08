import React from 'react';
import { X, Check, Clock, Zap, ArrowRight, FileCheck } from 'lucide-react';
import { MANUAL_STEPS } from '../data/copyData';

interface TimeSavingComparisonProps {
  onOpenCheckout: () => void;
}

export const TimeSavingComparison: React.FC<TimeSavingComparisonProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-24 bg-[#060B13] text-white border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs mb-3 uppercase tracking-wider font-display">
            <Clock className="w-3.5 h-3.5" />
            <span>Economize Mais de 100 Horas de Trabalho Manual</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            VOCÊ NÃO PRECISA CRIAR CENTENAS DE CARTÕES
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Criar flashcards do zero exige um tempo precioso que você deveria usar resolvendo questões e retendo a matéria.
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Manual Way (Red / Tedious) */}
          <div className="bg-[#0B1322] border border-rose-900/40 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3 border-b border-rose-900/40 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-rose-300 font-display uppercase">Criar Flashcards Sozinho</h3>
                <p className="text-xs text-slate-400">Exige tempo e desgasta sua energia de estudo (8 etapas):</p>
              </div>
            </div>

            <div className="space-y-3">
              {MANUAL_STEPS.map(item => (
                <div key={item.number} className="flex items-start gap-3 p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/20">
                  <span className="w-6 h-6 rounded-lg bg-rose-900/50 text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 font-display">
                    {item.number}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-rose-200 block">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-rose-950/40 border border-rose-900/30 rounded-xl text-xs text-rose-300 font-medium text-center">
               Resultado: Semanas perdidas apenas digitando e formatando cartões no computador.
            </div>
          </div>

          {/* Column 2: Cards do Lucas Way (Blue / Fast) */}
          <div className="bg-gradient-to-b from-[#0B1322] to-[#080E1A] border-2 border-blue-500/40 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-blue-500/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-blue-500/30 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-300 font-display uppercase">Com os Flashcards SEDES/DF (Lucas)</h3>
                  <p className="text-xs text-blue-400/80 font-semibold">Tudo pronto em apenas 3 passos simples:</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm shrink-0 font-display">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base font-display uppercase">Receba o arquivo .apkg pronto</h4>
                    <p className="text-xs text-slate-300 mt-1">Gabarito revisado e estruturado para o edital da SEDES/DF.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm shrink-0 font-display">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base font-display uppercase">Importe para o Anki com 1 clique</h4>
                    <p className="text-xs text-slate-300 mt-1">Compatível com computador, tablet e celular.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm shrink-0 font-display">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base font-display uppercase">Comece sua revisão imediatamente</h4>
                    <p className="text-xs text-slate-300 mt-1">Recuperação ativa imediata sem perder tempo.</p>
                  </div>
                </div>
              </div>

              {/* Big Benefit Box */}
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-400/40 p-4 rounded-2xl text-center space-y-1">
                <p className="text-lg font-black text-blue-300 font-display uppercase">
                  MENOS TEMPO MONTANDO MATERIAL.
                </p>
                <p className="text-xl font-black text-white font-display uppercase">
                  MAIS TEMPO ESTUDANDO E RETENDO.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenCheckout}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold text-base py-4 rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:scale-[1.01] font-display uppercase tracking-wide"
              >
                <span>QUERO O BARALHO PRONTO NO ANKI</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
