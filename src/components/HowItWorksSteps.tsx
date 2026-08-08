import React from 'react';
import { Download, PlayCircle, BrainCircuit, CheckCircle2, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface HowItWorksStepsProps {
  onOpenCheckout?: () => void;
}

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({ onOpenCheckout }) => {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Baixe o Arquivo do Baralho (.apkg)',
      description: 'Após a confirmação do pagamento, você recebe imediatamente o link para download do arquivo completo com todos os flashcards organizados.'
    },
    {
      number: '02',
      icon: PlayCircle,
      title: 'Importe para o Anki com 1 Clique',
      description: 'Abra o aplicativo gratuito do Anki no seu computador, celular ou tablet e dê um duplo clique no arquivo para importar todo o baralho instantaneamente.'
    },
    {
      number: '03',
      icon: BrainCircuit,
      title: 'Estude com Repetição Espaçada',
      description: 'Siga a rotina diária recomendada pelo Anki. O algoritmo te mostra exatamente os cartões que você precisa revisar a cada dia para fixação permanente.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onOpenCheckout) {
      onOpenCheckout();
    }
  };

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#080E1A] text-white border-b border-blue-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs uppercase tracking-wider font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            COMO FUNCIONA O MATERIAL
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa fazer para começar a revisar de forma inteligente em menos de 3 minutos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1322] border border-blue-900/40 rounded-3xl p-8 space-y-6 relative group hover:border-blue-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <IconComp className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className="font-display font-black text-4xl text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Prático e sem complicação</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECOND CTA BUTTON (Bottom of Como Funciona section) */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#0B1322] border border-blue-500/30 rounded-2xl p-6 text-center space-y-4 shadow-xl">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Pronto para acelerar sua aprovação no concurso de Técnico Administrativo da SEDES/DF?
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('oferta')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm py-4 px-8 rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] cursor-pointer font-display uppercase tracking-wider"
            >
              <Zap className="w-4 h-4 text-blue-300" />
              <span>QUERO ACELERAR MINHA APROVAÇÃO — IR PARA A OFERTA</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
