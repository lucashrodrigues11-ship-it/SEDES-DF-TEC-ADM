import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const ImportantNotice: React.FC = () => {
  return (
    <section className="py-12 bg-[#060B13] text-slate-400 border-b border-blue-950/60 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1322] border border-blue-950 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs font-display">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>AVISO IMPORTANTE</span>
          </div>
          <p className="leading-relaxed">
            Este é um material preparatório independente produzido por Lucas. Não possui vínculo oficial com a Secretaria de Desenvolvimento Social do Distrito Federal (SEDES/DF), com o Governo do Distrito Federal (GDF), com a banca organizadora do concurso público ou com os desenvolvedores responsáveis pelo aplicativo Anki.
          </p>
          <p className="leading-relaxed">
            Anki é uma plataforma de terceiros mantida por seus próprios criadores. A disponibilidade, as funcionalidades, os preços e as regras de utilização de cada versão do aplicativo podem ser alterados por seus responsáveis sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};
