import React from 'react';
import { Clock, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './mockData';
import { getGeneralQuoteUrl } from './whatsapp';

export const TechnicalFooter: React.FC = () => {
  return (
    <footer id="contacto" className="border-t border-slate-800 bg-[#0F172A] pb-12 pt-16 text-sm text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-blue-500/40 bg-[#0D3F7C] shadow-xs">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2F893f4cd2e3124ed786f742f1986ec085?format=webp&width=800&height=1200"
                  alt="Horizon Smart Security"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-base font-bold uppercase tracking-wider text-white">
                  HORIZON <span className="text-[#F57C00]">SMART SECURITY</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  VENTA ONLINE <span className="text-[#F57C00]">|</span> INSTALACIÓN COORDINADA
                </span>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-400">
              Una marca enfocada en brindar soluciones inteligentes de seguridad para hogares y negocios. Somos especialistas en soluciones de seguridad con cámaras Ring.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-slate-400">
              {['Venta', 'Instalación', 'Configuración', 'Soporte'].map((item) => (
                <span key={item} className="rounded bg-slate-800/80 px-2.5 py-1.5 uppercase tracking-wider">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Contacto y cotizaciones
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Atención para elegir, instalar y configurar tu solución Ring.
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <a
                href={getGeneralQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-200 transition-colors hover:text-[#F57C00]"
              >
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#F57C00]" />
                <span>
                  <strong className="block font-mono text-sm">{COMPANY_INFO.phoneUSA}</strong>
                  <span className="text-[11px] text-slate-400">WhatsApp y cotizaciones · USA</span>
                </span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-300">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#0D3F7C]" />
                <span>
                  <strong className="block font-mono text-sm">{COMPANY_INFO.phonePeru}</strong>
                  <span className="text-[11px] text-slate-400">Contacto alternativo · Perú</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
              <span className="h-2 w-2 rounded-full bg-[#F57C00]" />
              Atención
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Estamos disponibles para ayudarte a proteger lo que más importa.
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-2.5 text-slate-300 transition-colors hover:text-[#F57C00]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500 sm:flex-row">
          <span>Copyright © 2026 Horizon Smart Security. Todos los derechos reservados.</span>
          <span>Venta online · Instalación coordinada</span>
        </div>
      </div>
    </footer>
  );
};
