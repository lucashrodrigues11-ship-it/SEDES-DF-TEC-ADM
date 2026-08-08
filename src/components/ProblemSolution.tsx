import React from 'react';
import { RefreshCw, Calendar, CalendarDays, CheckCircle2, Sliders, ArrowRight, Brain, Clock, Sparkles } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenCheckout: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenCheckout }) => {
  return (
    <div id="beneficios" className="bg-[#060B13] text-slate-100 py-16 md:py-24 border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: PARE DE RECOMEÇAR A MATÉRIA DO ZERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 font-semibold text-xs uppercase tracking-wider font-display">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>O Fim do Ciclo de Perda de Tempo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
              PARE DE RECOMEÇAR A MATÉRIA DO ZERO
            </h2>

            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              Esqueceu um assunto? <span className="text-blue-400 font-bold">Você não precisa reassistir a uma aula inteira ou reler dezenas de páginas.</span>
            </p>

            {/* Step sequence in Anki */}
            <div className="bg-[#0B1322] border border-blue-900/40 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-blue-900/40 pb-2 font-display">
                O fluxo automático de revisão no Anki:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-3 bg-[#080E1A] p-3 rounded-xl border border-blue-950">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs shrink-0 font-display">1</span>
                  <span className="text-slate-200">Abra o aplicativo Anki.</span>
                </div>

                <div className="flex items-start gap-3 bg-[#080E1A] p-3 rounded-xl border border-blue-950">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs shrink-0 font-display">2</span>
                  <span className="text-slate-200">Leia a pergunta no cartão.</span>
                </div>

                <div className="flex items-start gap-3 bg-[#080E1A] p-3 rounded-xl border border-blue-950">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs shrink-0 font-display">3</span>
                  <span className="text-slate-200">Tente responder de cabeça.</span>
                </div>

                <div className="flex items-start gap-3 bg-[#080E1A] p-3 rounded-xl border border-blue-950">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs shrink-0 font-display">4</span>
                  <span className="text-slate-200">Confira a resposta no verso.</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/5 p-4 rounded-xl border border-blue-500/30 text-blue-200 text-sm flex items-start gap-3">
                <Sliders className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>A Mágica Acontece Aqui:</strong> Você informa ao aplicativo o nível de dificuldade daquele cartão (Errei, Difícil, Bom ou Fácil).
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com base nas suas respostas, o Anki organiza quando cada cartão deverá aparecer novamente. Os conteúdos mais difíceis são revisados com maior frequência. Os mais fáceis aparecem em intervalos maiores. <strong className="text-blue-400">Você não precisa decidir sozinho o que revisar todos os dias.</strong>
            </p>

            <button
              onClick={onOpenCheckout}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base font-display uppercase tracking-wide"
            >
              <span>QUERO COMEÇAR MINHAS REVISÕES</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1322] to-[#080E1A] border border-blue-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                <Brain className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white font-display uppercase">Curva de Retenção Inteligente</h3>
              <p className="text-xs text-slate-400">
                A tecnologia de algoritmo SM-2 do Anki calcula matematicamente o momento exato em que seu cérebro iria esquecer o conteúdo.
              </p>

              {/* Visual Interval Comparison */}
              <div className="space-y-3 pt-2 text-left">
                <div className="bg-[#080E1A] p-3.5 rounded-xl border border-rose-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="font-semibold text-rose-200">Conteúdo Errado / Difícil</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/60 px-2 py-1 rounded">Revisa em 1 dia</span>
                </div>

                <div className="bg-[#080E1A] p-3.5 rounded-xl border border-amber-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-semibold text-amber-200">Conteúdo com Dificuldade Média</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-1 rounded">Revisa em 3 dias</span>
                </div>

                <div className="bg-[#080E1A] p-3.5 rounded-xl border border-blue-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span className="font-semibold text-blue-200">Conteúdo Dominado (Fácil)</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-1 rounded">Revisa em 10+ dias</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <hr className="border-blue-950/60" />

        {/* Section 2: O ANKI ORGANIZA SUAS REVISÕES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 bg-gradient-to-br from-[#0B1322] to-[#080E1A] border border-blue-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-blue-900/40 pb-4">
                <Calendar className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white text-base font-display uppercase">Sistema de Repetição Espaçada (SRS)</h4>
                  <p className="text-xs text-slate-400">Automatização inteligente de agenda de estudos</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 bg-[#080E1A] rounded-xl border border-blue-950 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Você não precisa criar tabelas manuais no Excel ou agendas de papel.</span>
                </div>

                <div className="p-3 bg-[#080E1A] rounded-xl border border-blue-950 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Os cartões não aparecem apenas uma vez; eles voltam ao longo de toda a sua preparação até o dia da prova.</span>
                </div>

                <div className="p-3 bg-[#080E1A] rounded-xl border border-blue-950 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Você se preocupa apenas em responder. O Anki calcula a data perfeita.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs uppercase tracking-wider font-display">
              <Clock className="w-3.5 h-3.5" />
              <span>Automação do Aprendizado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
              O ANKI ORGANIZA SUAS REVISÕES
            </h2>

            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              Revisar todo o conteúdo todos os dias seria inviável. Por isso, o Anki utiliza um <span className="text-blue-400 font-bold">sistema de repetição espaçada</span>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Na prática, você avalia cada resposta e o aplicativo usa essa informação para programar as próximas exibições. Assim, os cartões não aparecem apenas uma vez: eles retornam ao longo de toda a sua preparação.
            </p>

            <div className="p-4 bg-[#080E1A] rounded-2xl border border-blue-900/40 space-y-2 text-sm">
              <p className="text-slate-200">
                Você continua responsável por estudar e manter a constância diária. Mas não precisa perder tempo criando calendários complexos.
              </p>

              <div className="text-blue-300 font-bold pt-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>O Anki mostra exatamente o que revisar hoje. Você se concentra em responder.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
