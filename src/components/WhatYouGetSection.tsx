import React from 'react';
import { Target, Download, Brain, Repeat, AlertCircle, Smartphone, CheckCircle2, ShieldCheck, BookOpen, Award, Check } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Flashcards direcionados (+1.200 Cards)',
      desc: 'Perguntas e respostas focadas estritamente nos conteúdos de Técnico Administrativo da Secretaria de Desenvolvimento Social do DF.'
    },
    {
      icon: Download,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Baralho pronto para importar',
      desc: 'Você recebe o arquivo .apkg preparado e estruturado em sub-baralhos. Basta dar um duplo clique ou importar no aplicativo.'
    },
    {
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Revisão por recuperação ativa',
      desc: 'Força o cérebro a buscar a resposta na memória antes de virar o cartão, consolidando a retenção definitiva.'
    },
    {
      icon: Repeat,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Repetição espaçada automatizada',
      desc: 'O Anki programa o momento exato de cada nova revisão conforme suas respostas anteriores e nivelamento de dificuldade.'
    },
    {
      icon: AlertCircle,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      title: 'Identificação rápida de dificuldades',
      desc: 'Errou ou ficou em dúvida? Marque a dificuldade no aplicativo e continue revisando com maior frequência os pontos fracos.'
    },
    {
      icon: Smartphone,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: 'Acesso em múltiplos dispositivos',
      desc: 'Estude no computador, notebook, celular ou tablet de acordo com a compatibilidade da versão do Anki escolhida.'
    }
  ];

  const generalSubjects = [
    'Português',
    'Conhecimentos do DF',
    'Legislação',
    'PDPM (Plano Distrital de Políticas para Mulheres)',
    'Noções de Primeiros Socorros',
    'Programas Assistenciais e SUAS'
  ];

  const specificSubjects = [
    'Direito Administrativo',
    'Direito Constitucional',
    'Administração Geral',
    'Arquivologia',
    'Administração de Recursos Materiais',
    'Licitações e Contratos'
  ];

  return (
    <section id="conteudo" className="py-16 md:py-24 bg-[#060B13] text-white border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs mb-3 uppercase tracking-wider font-display">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Estrutura do Material Completo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            O QUE VOCÊ ENCONTRARÁ NO MATERIAL
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Tudo o que você precisa para maximizar sua retenção e gabaritar as questões de Técnico Administrativo da SEDES/DF.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1322] border border-blue-950 hover:border-blue-800 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-2xl space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} border ${item.borderColor} ${item.color} flex items-center justify-center shrink-0`}>
                  <IconComp className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-display uppercase">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Subject Breakdown Block */}
        <div className="bg-[#0B1322] border border-blue-900/50 rounded-3xl p-6 sm:p-10 relative shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center sm:text-left max-w-3xl mb-8 space-y-2">
            <div className="inline-block text-blue-400 font-extrabold text-xs uppercase tracking-wider font-display bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Grade Curricular dos Flashcards
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
              MATÉRIAS ABRANGIDAS (+1.200 FLASHCARDS)
            </h3>
            <p className="text-sm text-slate-300">
              Baralho totalmente dividido por matérias gerais e específicas para o edital de Técnico Administrativo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* General Subjects Box */}
            <div className="bg-[#060B13] border border-blue-900/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-extrabold text-sm uppercase font-display border-b border-blue-900/30 pb-3">
                <BookOpen className="w-5 h-5" />
                <span>Matérias Gerais (6 Disciplinas)</span>
              </div>
              <ul className="space-y-3">
                {generalSubjects.map((sub, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specific Subjects Box */}
            <div className="bg-[#060B13] border border-blue-900/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-extrabold text-sm uppercase font-display border-b border-blue-900/30 pb-3">
                <Award className="w-5 h-5" />
                <span>Conhecimentos Específicos (6 Disciplinas)</span>
              </div>
              <ul className="space-y-3">
                {specificSubjects.map((sub, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
