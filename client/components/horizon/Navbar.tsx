import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ChevronRight, Menu, MessageSquare, ShieldCheck, X } from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      id="main-navbar"
      className={`fixed left-0 right-0 top-0 z-50 w-full overflow-x-clip transition-all duration-200 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/95 py-3.5 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] backdrop-blur-md max-[359px]:py-3 sm:py-2.5'
          : 'border-b border-slate-200/80 bg-white/90 py-4 backdrop-blur-sm max-[359px]:py-3 sm:py-3'
      }`}
    >
      <div className="flex w-full min-w-0 items-center justify-between gap-3 px-3 sm:gap-4 sm:px-6 lg:px-8 xl:px-12">
        <a
          href="#hero-section"
          id="brand-logo"
          className="group flex min-w-0 shrink items-center gap-3 whitespace-nowrap focus:outline-hidden max-[359px]:gap-2 sm:gap-2.5"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#0D3F7C] shadow-2xs ring-2 ring-white transition-all group-hover:ring-[#F57C00]/40 max-[359px]:h-9 max-[359px]:w-9 sm:h-10 sm:w-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2F893f4cd2e3124ed786f742f1986ec085?format=webp&width=800&height=1200"
              alt="Horizon Smart Security"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex min-w-0 items-baseline gap-2 whitespace-nowrap max-[359px]:gap-1 sm:gap-2">
            <span className="font-tech text-[clamp(1rem,5vw,1.25rem)] font-black uppercase tracking-tight text-[#0D3F7C] max-[359px]:text-base sm:text-lg">
              HORIZON
            </span>
            <span className="inline font-tech text-[clamp(0.625rem,3vw,0.75rem)] font-bold uppercase tracking-[0.08em] text-[#F57C00] max-[359px]:text-[9px] sm:text-sm sm:tracking-wider">
              SMART SECURITY
            </span>
          </div>
        </a>

        <div className="hidden shrink-0 items-center gap-5 whitespace-nowrap lg:flex lg:gap-7">
          <nav className="flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-slate-600 lg:gap-6">
            <a href="#pilares" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Qué hacemos
            </a>
            <a href="#operacion" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Operación
            </a>
            <a href="#equipos" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Cámaras Ring
            </a>
            <a href="#como-funciona" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Cómo funciona
            </a>
            <a href="#faq" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Preguntas
            </a>
            <a href="#garantia" className="py-1 transition-colors hover:border-b-2 hover:border-[#0D3F7C] hover:text-[#0D3F7C]">
              Garantía
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="nav-agendar-btn"
              onClick={onOpenBooking}
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D3F7C] transition-colors hover:border-slate-400 hover:bg-slate-100"
            >
              <span>Cotiza ahora</span>
            </button>
            <a
              id="nav-cta-whatsapp"
              href={getGeneralQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#F57C00] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition-all hover:bg-[#E65100] hover:shadow-xs active:scale-95"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              <span>WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-90" />
            </a>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <a
            id="mobile-nav-whatsapp-btn"
            href={getGeneralQuoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#F57C00] p-2.5 text-white shadow-2xs active:scale-95 max-[359px]:p-2 sm:p-2"
            title="Escribir por WhatsApp"
          >
            <MessageSquare className="h-5 w-5 max-[359px]:h-4 max-[359px]:w-4" />
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            className="cursor-pointer rounded-lg border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-100 max-[359px]:p-2 sm:p-2"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 max-[359px]:h-4 max-[359px]:w-4 sm:h-5 sm:w-5" /> : <Menu className="h-5 w-5 max-[359px]:h-4 max-[359px]:w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen &&
        createPortal(
          <div
            id="mobile-nav-panel"
            className="animate-in fade-in-0 slide-in-from-top-3 fixed inset-0 z-40 flex h-dvh min-h-dvh flex-col overflow-y-auto bg-[#F8FAFC] pt-[4.5rem] duration-200 lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#dbe5f0_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
          <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-8 pt-6 max-[359px]:px-4 sm:px-8">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F57C00]">HORIZON SMART SECURITY</p>
                <p className="mt-1 text-xl font-black tracking-tight text-[#0D3F7C]">Tu seguridad, bajo control.</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0D3F7C]/15 bg-white text-[#0D3F7C] shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </span>
            </div>

            <nav className="grid gap-3" aria-label="Navegación principal">
              <a href="#pilares" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">01</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Qué hacemos</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#operacion" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">02</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Operación binacional</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#equipos" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">03</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Cámaras Ring</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#como-funciona" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">04</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Cómo funciona</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#faq" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">05</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Preguntas frecuentes</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#garantia" onClick={closeMobileMenu} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-150 hover:border-[#0D3F7C]/30 hover:shadow-md">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">06</span>
                  <span className="mt-1 block text-base font-bold text-[#0F172A]">Garantía</span>
                </span>
                <ChevronRight className="h-5 w-5 text-[#0D3F7C] transition-transform group-hover:translate-x-1" />
              </a>
            </nav>

            <div className="mt-auto space-y-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center rounded-xl border-2 border-[#0D3F7C] bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0D3F7C] transition-colors hover:bg-[#0D3F7C] hover:text-white"
              >
                Cotiza ahora
              </button>
              <a
                href={getGeneralQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C00] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#E65100]"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="pt-1 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Venta · Instalación · Configuración · Soporte</p>
            </div>
          </div>
          </div>,
          document.body,
        )}
    </header>
  );
};
