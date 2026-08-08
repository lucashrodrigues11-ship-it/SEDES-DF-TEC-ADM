import React from 'react';
import { PlayCircle, FileText, Edit3, XCircle, CheckCircle2, ArrowRight, BrainCircuit, Zap, Download } from 'lucide-react';
import { OfferConfig } from '../types';

interface HeroSectionProps {
  config: OfferConfig;
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden bg-[#060B13] text-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-blue-950/60">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-blue-900/30 via-blue-600/10 to-indigo-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-blue-900/50 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-display">
              Método de Retenção Ativa SEDES/DF
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent block drop-shadow-sm">
              NÃO ADIANTA ESTUDAR MAIS SE VOCÊ <span className="text-blue-500 bg-none">ESQUECER O QUE ESTUDOU.</span>
            </span>
          </h1>

          <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto my-2 shadow-lg shadow-blue-500/50"></div>

          {/* Sub-headline */}
          <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Mais de <strong className="text-blue-400 font-bold">1.200 flashcards revisados</strong> cobrindo todas as Matérias Gerais e Conhecimentos Específicos para o cargo de <span className="text-blue-400 font-bold underline decoration-blue-500/60 underline-offset-4">Técnico Administrativo da SEDES/DF</span> prontos para usar no Anki.
          </p>

          {/* Pain Points vs Solution Grid */}
          <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            {/* The Problem */}
            <div className="bg-[#0B1322]/80 border border-rose-900/40 rounded-2xl p-5 sm:p-6 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-500" />
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wide mb-3 font-display">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span>O ciclo frustrante da maioria dos candidatos:</span>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <PlayCircle className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Você assiste às aulas.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Lê os PDFs extensos.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Edit3 className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Faz resumos acumulados.</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-rose-300 bg-rose-950/40 p-2 rounded-lg border border-rose-900/30">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Mas, na hora da questão, a resposta desaparece.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-br from-[#0B1322]/90 to-[#0B1322]/60 border border-blue-500/30 rounded-2xl p-5 sm:p-6 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide mb-3 font-display">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>A solução com Flashcards SEDES/DF no Anki:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Os Flashcards SEDES/DF no Anki ajudam você a revisar com mais frequência, testar sua memória e identificar os conteúdos que ainda precisam de atenção.
              </p>
              <div className="bg-blue-950/50 p-3 rounded-xl border border-blue-500/30 space-y-1.5 text-xs sm:text-sm font-semibold text-blue-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>1. Você recebe os cartões prontos.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>2. Importa para o Anki em 1 clique.</span>
                </div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>3. E começa a revisar com repetição espaçada.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4 space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto min-w-[320px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-lg sm:text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group font-display uppercase tracking-wide"
            >
              <span>QUERO ACESSAR OS FLASHCARDS NO ANKI</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform stroke-[3]" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Entrega Imediata no Seu E-mail
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Baralho Completo .apkg
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Garantia de 7 Dias
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
