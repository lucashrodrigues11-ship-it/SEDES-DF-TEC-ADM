import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Lock, QrCode, CreditCard, Copy, Download, ArrowRight, Layers, Check, Sparkles } from 'lucide-react';
import { OfferConfig, PlanOffer } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: OfferConfig;
  initialPlanId?: 'gerais' | 'tecnico';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, config, initialPlanId = 'tecnico' }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsPaid(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPlan: PlanOffer = config.plans?.[0] || {
    id: 'tecnico',
    title: 'Pacote Completo — Técnico Administrativo',
    subtitle: 'Conhecimentos Gerais + Conhecimentos Específicos para Técnico Administrativo da SEDES/DF',
    cardQuantity: '+1.200 Flashcards Revisados',
    originalPrice: 119.90,
    promoPrice: 59.90,
    subjects: [
      'Gerais: Português, Conhecimentos do DF, Legislação, PDPM, Noções de Primeiros Socorros, Programas Assistenciais e SUAS',
      'Específicos: Direito Administrativo, Constitucional, Administração Geral, Arquivologia, Administração de Recursos Materiais, Licitações e Contratos'
    ],
    features: []
  };

  const pixKey = "00020126580014BR.GOV.BCB.PIX0136cardsdolucas-sedes-df-anki-2026520400005303986540567.005802BR5915Lucas Rodrigues6008Brasilia62070503***6304E2D1";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setIsPaid(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B13]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1322] border border-blue-900/60 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#060B13] p-5 border-b border-blue-900/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-xs sm:text-sm text-slate-200 font-display uppercase tracking-wider">
              Checkout Seguro — SEDES/DF Anki
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-blue-950 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {!isPaid ? (
            <>
              {/* Order Summary Box */}
              <div className="bg-[#060B13] p-4.5 rounded-2xl border border-blue-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-blue-900/40 pb-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-display">
                      <Sparkles className="w-3 h-3" />
                      <span>{currentPlan.cardQuantity}</span>
                    </div>
                    <h4 className="font-black text-sm sm:text-base text-white font-display uppercase mt-1">
                      {currentPlan.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block line-through">R$ {currentPlan.originalPrice.toFixed(2).replace('.', ',')}</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-400 font-display">R$ {currentPlan.promoPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 space-y-1">
                  <p><strong className="text-blue-300">Gerais:</strong> Português, Conhecimentos do DF, Legislação, PDPM, Primeiros Socorros, Programas Assistenciais e SUAS.</p>
                  <p><strong className="text-blue-300">Específicos:</strong> Dir. Administrativo, Constitucional, Adm. Geral, Arquivologia, Adm. Recursos Materiais, Licitações e Contratos.</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#060B13] border border-blue-900/50 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Seu E-mail (Para envio imediato do arquivo .apkg)</label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-[#060B13] border border-blue-900/50 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Forma de Pagamento</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all font-display uppercase tracking-wide cursor-pointer ${
                        paymentMethod === 'pix'
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : 'bg-[#060B13] border-blue-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span>PIX (Acesso Imediato)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all font-display uppercase tracking-wide cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : 'bg-[#060B13] border-blue-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="bg-[#060B13] p-4 rounded-2xl border border-blue-500/30 text-center space-y-3">
                    <p className="text-xs text-slate-300">
                      Copie a chave Pix abaixo para pagamento com liberação automática em menos de 10 segundos:
                    </p>
                    
                    <div className="bg-[#080E1A] p-2.5 rounded-xl border border-blue-900/40 font-mono text-[10px] text-slate-300 truncate text-left">
                      {pixKey}
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="w-full bg-blue-950 hover:bg-blue-900 text-blue-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 border border-blue-500/30 transition-colors font-display uppercase tracking-wider cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedPix ? 'Chave PIX Copiada!' : 'Copiar Chave PIX'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-[#060B13] p-4 rounded-2xl border border-blue-900/40 space-y-3 text-xs">
                    <input
                      type="text"
                      placeholder="Número do Cartão (Simulação)"
                      className="w-full bg-[#080E1A] border border-blue-900/40 rounded-xl px-3 py-2 text-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="bg-[#080E1A] border border-blue-900/40 rounded-xl px-3 py-2 text-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="bg-[#080E1A] border border-blue-900/40 rounded-xl px-3 py-2 text-white"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black text-sm sm:text-base py-4 rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all font-display uppercase tracking-wider"
                >
                  <span>PAGAR R$ {currentPlan.promoPrice.toFixed(2).replace('.', ',')} E BAIXAR (.APKG)</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </form>
            </>
          ) : (
            /* Payment Success State */
            <div className="py-6 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white font-display uppercase">Parabéns, {userName || 'Futuro Aprovado'}!</h3>
                <p className="text-sm text-blue-400 font-bold">
                  Seu acesso ao pacote Técnico Administrativo (+1.200 Flashcards) foi liberado!
                </p>
                <p className="text-xs text-slate-400">
                  Enviamos o arquivo e as instruções de importação para <strong>{userEmail}</strong>.
                </p>
              </div>

              <div className="bg-[#060B13] p-4 rounded-2xl border border-blue-900/40 space-y-3">
                <span className="text-xs font-bold text-blue-300 block font-display uppercase">Download do Baralho Completo (.apkg):</span>
                
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Download do baralho SEDES_DF_Anki_Tecnico_Administrativo_Completo.apkg iniciado!");
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors cursor-pointer font-display uppercase tracking-wider"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Baralho Anki (+1.200 Cards)</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Fechar Janela
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
