import React from 'react';
import { Settings, X, RotateCcw, Check, Sliders } from 'lucide-react';
import { OfferConfig } from '../types';

interface AdminCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: OfferConfig;
  onChangeConfig: (newConfig: OfferConfig) => void;
  onReset: () => void;
}

export const AdminCustomizer: React.FC<AdminCustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
  onReset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-[#0B1322] border-l border-blue-900/60 p-6 overflow-y-auto text-white shadow-2xl animate-slideLeft">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-900/40">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-blue-400" />
          <h3 className="font-bold text-base font-display uppercase tracking-wider">Painel do Vendedor (Lucas)</h3>
        </div>
        <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <p className="text-xs text-slate-400 mb-6">
        Personalize em tempo real os valores e placeholders da oferta na página de vendas:
      </p>

      <div className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-slate-300 mb-1">Quantidade de Flashcards</label>
          <input
            type="text"
            value={config.cardQuantity}
            onChange={(e) => onChangeConfig({ ...config, cardQuantity: e.target.value })}
            className="w-full bg-[#060B13] border border-blue-900/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-300 mb-1">Cargos Contemplados</label>
          <textarea
            rows={2}
            value={config.rolesCovered}
            onChange={(e) => onChangeConfig({ ...config, rolesCovered: e.target.value })}
            className="w-full bg-[#060B13] border border-blue-900/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-300 mb-1">Prazo de Acesso</label>
          <input
            type="text"
            value={config.accessPeriod}
            onChange={(e) => onChangeConfig({ ...config, accessPeriod: e.target.value })}
            className="w-full bg-[#060B13] border border-blue-900/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">Preço Original (R$)</label>
            <input
              type="number"
              value={config.originalPrice}
              onChange={(e) => onChangeConfig({ ...config, originalPrice: parseFloat(e.target.value) || 0 })}
              className="w-full bg-[#060B13] border border-blue-900/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">Preço Promo (R$)</label>
            <input
              type="number"
              value={config.promoPrice}
              onChange={(e) => onChangeConfig({ ...config, promoPrice: parseFloat(e.target.value) || 0 })}
              className="w-full bg-[#060B13] border border-blue-900/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-blue-900/40 flex gap-2">
          <button
            onClick={onReset}
            className="flex-1 bg-blue-950/80 hover:bg-blue-900 text-slate-300 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 font-display uppercase tracking-wider"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 font-display uppercase tracking-wider"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Salvar & Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
