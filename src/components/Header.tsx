import React, { useState } from 'react';
import { Layers, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { OfferConfig } from '../types';

interface HeaderProps {
  config: OfferConfig;
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#080E1A]/95 backdrop-blur-md border-b border-blue-950/60 text-slate-100 shadow-xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white font-semibold text-xs md:text-sm py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
        <span>
          <strong>Lançamento Especial SEDES/DF:</strong> Acesso imediato ao baralho Anki com desconto exclusivo!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-black text-xl">
            <Layers className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="font-extrabold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5 font-display uppercase">
              Cards do Lucas
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Revisão por Repetição Espaçada</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#demo" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Testar Demo
          </a>
          <a href="#como-funciona" className="hover:text-blue-400 transition-colors">Como Funciona</a>
          <a href="#conteudo" className="hover:text-blue-400 transition-colors">Conteúdo</a>
          <a href="#oferta" className="hover:text-blue-400 transition-colors">Garantia & Oferta</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Quero os Flashcards</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
