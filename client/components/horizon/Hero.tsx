import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden border-b border-slate-200 bg-white pb-16 pt-24 sm:pb-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[350px] w-[800px] -translate-x-1/2 bg-linear-to-b from-blue-100/50 via-slate-50/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex min-w-0 flex-col space-y-6 lg:col-span-7">
            <div className="self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0D3F7C]/15 bg-[#0D3F7C]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D3F7C] shadow-2xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F57C00]" />
                <span>HORIZON SMART SECURITY</span>
              </div>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#0D3F7C] sm:text-5xl lg:text-[58px]">
                Seguridad inteligente para tu hogar y negocio
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Venta, instalación y configuración de cámaras Ring.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Protege lo que más importa y mantén el control desde tu celular, estés donde estés.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3.5 pt-1 sm:flex-row sm:items-center">
              <button
                type="button"
                id="hero-btn-cotiza"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#F57C00] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#E65100] hover:shadow-lg active:scale-95"
              >
                <span>Cotiza ahora</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={getGeneralQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0D3F7C] shadow-xs transition-all hover:border-[#0D3F7C]/40 hover:bg-slate-50"
              >
                <MessageSquare className="h-4 w-4 text-[#F57C00]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-sm">
                Venta <span className="mx-1.5 text-[#F57C00]">•</span> Instalación{' '}
                <span className="mx-1.5 text-[#F57C00]">•</span> Configuración{' '}
                <span className="mx-1.5 text-[#F57C00]">•</span> Soporte
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#0D3F7C]" />
                  <span className="text-xs font-semibold text-slate-700">Orientación personalizada</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-3">
                  <Smartphone className="h-5 w-5 shrink-0 text-[#F57C00]" />
                  <span className="text-xs font-semibold text-slate-700">Control desde tu celular</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-700">Listo para usar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-5">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#0D3F7C]/5 blur-2xl" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2Fbde75ee4784a4d7287e3039e03574950?format=webp&width=1600&height=2400"
              alt="Cámaras Ring para el hogar y negocio"
              className="relative mx-auto block w-full max-w-[560px] rounded-3xl object-cover shadow-2xl ring-1 ring-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
