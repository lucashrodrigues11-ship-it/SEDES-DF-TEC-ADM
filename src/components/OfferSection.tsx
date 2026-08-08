import React from 'react';
import { Check, ShieldCheck, Lock, Sparkles, ArrowRight, Star, Layers, Zap, BookOpen, Award } from 'lucide-react';
import { OfferConfig, PlanOffer } from '../types';

interface OfferSectionProps {
  config: OfferConfig;
  onOpenCheckout: (planId?: 'gerais' | 'tecnico') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ config, onOpenCheckout }) => {
  const generalSubjects = [
    'Língua Portuguesa',
    'Conhecimentos do DF',
    'Legislação Aplicada',
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

  const plan = config.plans?.[0] || {
    id: 'tecnico' as const,
    title: 'Pacote Completo — Técnico Administrativo',
    badge: 'OFERTA EXCLUSIVA & COMPLETA',
    subtitle: 'Conhecimentos Gerais + Conhecimentos Específicos para o cargo de Técnico Administrativo da SEDES/DF',
    cardQuantity: '+1.200 Flashcards Revisados',
    originalPrice: 119.90,
    promoPrice: 59.90,
    popular: true,
    subjects: [],
    features: [
      'Mais de 1.200 Flashcards 100% focados na SEDES/DF',
      'Cobertura completa de Matérias Gerais e Conhecimentos Específicos',
      'Baralho .apkg pronto e organizado em sub-baralhos para o Anki',
      'Acesso Vitalício + Atualizações pós-edital sem custo extra',
      'Guia rápido e simples de instalação em 1 clique',
      'Garantia Incondicional de 7 dias'
    ]
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#060B13] text-white relative overflow-hidden border-b border-blue-950/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs uppercase tracking-wider font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Oferta Exclusiva Técnico Administrativo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight">
            PACOTE COMPLETO DE FLASHCARDS NO ANKI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa para dominar o conteúdo de Técnico Administrativo da SEDES/DF com revisão ativa diária.
          </p>
        </div>

        {/* Single Main Offer Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0B1322] border-2 border-blue-500 rounded-3xl p-6 sm:p-10 relative shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30 flex flex-col space-y-8">
            
            {/* Ribbon Badge */}
            <div className="absolute -top-3.5 right-6 sm:right-10 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-display tracking-wider">
              <Star className="w-4 h-4 fill-white" />
              <span>OFERTA ÚNICA & COMPLETA</span>
            </div>

            {/* Header Box */}
            <div className="border-b border-blue-900/50 pb-6 text-center sm:text-left space-y-2">
              <div className="inline-block bg-blue-500/20 text-blue-300 font-extrabold text-xs px-3 py-1 rounded-full border border-blue-500/30 font-display uppercase tracking-wider">
                +1.200 Flashcards Revisados
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
                TÉCNICO ADMINISTRATIVO — SEDES/DF
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Baralho completo cobrindo 100% das Matérias Gerais e Conhecimentos Específicos do edital.
              </p>
            </div>

            {/* Subjects Grid (Gerais + Específicos) */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200 font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Matérias Incluídas neste Baralho (+1.200 Cards):</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Matérias Gerais */}
                <div className="bg-[#060B13] p-4 rounded-2xl border border-blue-900/50 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-display border-b border-blue-900/30 pb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Matérias Gerais:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {generalSubjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conhecimentos Específicos */}
                <div className="bg-[#060B13] p-4 rounded-2xl border border-blue-900/50 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-display border-b border-blue-900/30 pb-2">
                    <Award className="w-4 h-4" />
                    <span>Conhecimentos Específicos:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {specificSubjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span className="font-semibold text-slate-200">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-[#060B13] p-6 rounded-2xl border border-blue-500/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs sm:text-sm font-bold uppercase text-slate-300 tracking-wider">
                de 119,90 por apenas
              </span>
              <div className="mt-2 flex items-baseline justify-center gap-1.5">
                <span className="text-base sm:text-xl font-bold text-blue-400 font-display">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight font-display">
                  {plan.promoPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-medium">
                ou 12x de <strong className="text-blue-300 font-bold">R$ 6,20</strong> no cartão
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-500/20 font-display uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>liberação imediata do arquivo (.apkg)</span>
              </div>
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-4 pt-2">
              <button
                onClick={() => onOpenCheckout('tecnico')}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base sm:text-xl py-5 px-8 rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer font-display uppercase tracking-wider"
              >
                <span>QUERO O PACOTE COMPLETO TÉCNICO ADMINISTRATIVO</span>
                <ArrowRight className="w-6 h-6 stroke-[3]" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  Pagamento 100% Seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  Acesso Imediato ao Arquivo
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Garantia de 7 Dias
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Guarantee Banner */}
        <div id="garantia" className="max-w-4xl mx-auto mt-12 bg-[#0B1322] border border-blue-900/50 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xl">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-black text-xl shrink-0 font-display">
            7
          </div>
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-blue-300 block font-bold text-sm font-display uppercase">Garantia Incondicional de 7 Dias:</strong>
            Se você testar os +1.200 flashcards no seu Anki e achar que o material não acelera sua memorização, basta solicitar o reembolso. Devolvemos 100% do seu investimento sem burocracia.
          </div>
        </div>

      </div>
    </section>
  );
};
