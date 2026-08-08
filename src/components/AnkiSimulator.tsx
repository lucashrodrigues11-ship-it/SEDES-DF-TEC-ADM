import React, { useState } from 'react';
import { Brain, RotateCcw, Eye, Sparkles, Check, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { Flashcard } from '../types';
import { SAMPLE_FLASHCARDS } from '../data/copyData';

interface AnkiSimulatorProps {
  onOpenCheckout: () => void;
}

export const AnkiSimulator: React.FC<AnkiSimulatorProps> = ({ onOpenCheckout }) => {
  const [cards, setCards] = useState<Flashcard[]>(SAMPLE_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [stats, setStats] = useState({ reviewed: 0, easy: 0, good: 0, hard: 0, again: 0 });

  const currentCard = cards[currentIndex];

  const handleRating = (difficulty: 'again' | 'hard' | 'good' | 'easy') => {
    setStats(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      [difficulty]: prev[difficulty] + 1
    }));

    setShowAnswer(false);
    setCurrentIndex(prev => (prev + 1) % cards.length);
  };

  return (
    <section id="demo" className="py-16 bg-[#060B13] border-b border-blue-950/60 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs mb-3 uppercase tracking-wider font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador Interativo Anki</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight">
            Experimente a Recuperação Ativa Agora
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Veja como funciona o estudo por flashcards no Anki. Tente responder mentalmente antes de revelar o verso do cartão!
          </p>
        </div>

        {/* Anki Card Container */}
        <div className="max-w-2xl mx-auto bg-[#0B1322] border-2 border-blue-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Card Top Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/40 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-semibold text-slate-300 font-display uppercase">Baralho: SEDES_DF :: {currentCard.subject}</span>
            </div>
            <span>Cartão {currentIndex + 1} de {cards.length}</span>
          </div>

          {/* Flashcard Body */}
          <div className="min-h-[220px] flex flex-col justify-between space-y-6">
            
            {/* Question (Frente) */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20 inline-block font-display">
                Frente (Pergunta)
              </span>
              <p className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed pt-1">
                {currentCard.question}
              </p>
            </div>

            {/* Answer (Verso) */}
            {showAnswer ? (
              <div className="pt-4 border-t border-blue-900/40 space-y-2 animate-fadeIn">
                <span className="text-[11px] font-bold tracking-wider text-blue-300 uppercase bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20 inline-block font-display">
                  Verso (Resposta)
                </span>
                <p className="text-sm sm:text-base font-semibold text-blue-100 bg-[#080E1A] p-4 rounded-xl border border-blue-500/30 whitespace-pre-line leading-relaxed">
                  {currentCard.answer}
                </p>
              </div>
            ) : (
              <div className="py-4 text-center">
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer text-sm font-display uppercase tracking-wide"
                >
                  <Eye className="w-4 h-4" />
                  <span>Mostrar Resposta (Espaço)</span>
                </button>
              </div>
            )}
          </div>

          {/* Anki Rating Buttons (Only shown when answer is revealed) */}
          {showAnswer && (
            <div className="mt-8 pt-6 border-t border-blue-900/40">
              <p className="text-xs text-center text-slate-400 font-medium mb-3">
                Qual foi a sua facilidade para lembrar esta resposta?
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => handleRating('again')}
                  className="bg-rose-950/80 hover:bg-rose-900 border border-rose-700/50 text-rose-200 font-bold p-3 rounded-xl transition-all text-xs flex flex-col items-center gap-1 cursor-pointer font-display"
                >
                  <span className="text-[10px] text-rose-400 uppercase font-mono">&lt; 1 min</span>
                  <span>Repetir</span>
                </button>

                <button
                  onClick={() => handleRating('hard')}
                  className="bg-amber-950/80 hover:bg-amber-900 border border-amber-700/50 text-amber-200 font-bold p-3 rounded-xl transition-all text-xs flex flex-col items-center gap-1 cursor-pointer font-display"
                >
                  <span className="text-[10px] text-amber-400 uppercase font-mono">10 min</span>
                  <span>Difícil</span>
                </button>

                <button
                  onClick={() => handleRating('good')}
                  className="bg-blue-950/80 hover:bg-blue-900 border border-blue-700/50 text-blue-200 font-bold p-3 rounded-xl transition-all text-xs flex flex-col items-center gap-1 cursor-pointer font-display"
                >
                  <span className="text-[10px] text-blue-400 uppercase font-mono">1 dia</span>
                  <span>Bom</span>
                </button>

                <button
                  onClick={() => handleRating('easy')}
                  className="bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/50 text-indigo-200 font-bold p-3 rounded-xl transition-all text-xs flex flex-col items-center gap-1 cursor-pointer font-display"
                >
                  <span className="text-[10px] text-indigo-400 uppercase font-mono">4 dias</span>
                  <span>Fácil</span>
                </button>
              </div>
            </div>
          )}

          {/* Stats Bar */}
          <div className="mt-6 pt-4 border-t border-blue-950 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Sua Sessão: {stats.reviewed} cartões</span>
            <div className="flex gap-2">
              <span className="text-rose-400">Erro: {stats.again}</span>
              <span className="text-amber-400">Bom: {stats.good}</span>
              <span className="text-blue-400">Fácil: {stats.easy}</span>
            </div>
          </div>
        </div>

        {/* Demo Bottom Banner */}
        <div className="mt-8 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400 mb-3">
            Isto é apenas uma pequena amostra. O baralho completo da SEDES/DF contém <strong>1.800+ flashcards</strong> cobrindo todo o conteúdo programático do concurso.
          </p>
          <button
            onClick={onOpenCheckout}
            className="text-blue-400 hover:text-blue-300 font-bold text-sm inline-flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
          >
            <span>Quero baixar o baralho completo para o meu Anki</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
