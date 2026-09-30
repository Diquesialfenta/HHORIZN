import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:bottom-5 sm:right-5">
      {!tooltipDismissed && (
        <div className="pointer-events-auto relative w-full max-w-[240px] rounded-xl border border-slate-200 bg-white p-3 text-xs shadow-xl">
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300"
            aria-label="Cerrar aviso"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="mb-1 flex items-center gap-1.5 text-[11px] font-bold text-[#0D3F7C]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>Estamos para ayudarte</span>
          </div>
          <p className="text-[11px] leading-tight text-slate-600">
            ¿Quieres saber qué cámara se adapta mejor a tu espacio? Escríbenos.
          </p>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={getGeneralQuoteUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-white bg-[#F57C00] px-4 py-3 text-xs font-medium tracking-wide text-white shadow-xl transition-all duration-200 hover:bg-[#E65100] hover:shadow-2xl active:scale-95 sm:text-sm"
        aria-label="Contactar por WhatsApp a Horizon Smart Security"
      >
        <div className="relative">
          <MessageSquare className="h-5 w-5 text-white" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#F57C00]" />
        </div>
        <span className="hidden font-semibold sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
