import React, { useState } from 'react';
import {
  Video,
  ShieldAlert,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  Info,
  ArrowRight,
  Eye,
  RotateCw,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from './mockData';
import { ProductItem, PurchaseMode } from './types';
import { getProductWhatsAppUrl } from './whatsapp';

interface HardwareCatalogProps {
  onOpenBooking: () => void;
}

export const HardwareCatalog: React.FC<HardwareCatalogProps> = ({ onOpenBooking }) => {
  // Store individual mode selection per product, default to 'turnkey_installed' (the recommended value pack)
  const [selectedModes, setSelectedModes] = useState<Record<string, PurchaseMode>>({
    'ring-doorbell-wired': 'turnkey_installed',
    'ring-pan-tilt-indoor': 'turnkey_installed',
    'ring-indoor-cam-gen2': 'turnkey_installed',
  });

  const handleModeChange = (productId: string, mode: PurchaseMode) => {
    setSelectedModes((prev) => ({
      ...prev,
      [productId]: mode,
    }));
  };

  const handleGlobalModeChange = (mode: PurchaseMode) => {
    const updated: Record<string, PurchaseMode> = {};
    PRODUCTS.forEach((p) => {
      updated[p.id] = mode;
    });
    setSelectedModes(updated);
  };

  const renderProductImage = (url: string, alt: string) => (
    <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden border border-slate-200 bg-white">
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );

  // Render high-precision vector illustration for each hardware product
  const renderProductGraphic = (type: string) => {
    if (type === 'doorbell') {
      return (
        <div className="relative w-full h-48 bg-slate-900 rounded-xl flex items-center justify-center p-4 overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
          {/* Ring Doorbell Silhouette */}
          <div className="relative w-20 h-36 bg-slate-950 rounded-lg border-2 border-slate-700 shadow-2xl flex flex-col items-center justify-between py-3 px-2">
            {/* Camera lens */}
            <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-950 border border-blue-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
            {/* Ring LED button */}
            <div className="relative w-9 h-9 rounded-full bg-slate-900 border-2 border-[#0D3F7C] flex items-center justify-center shadow-[0_0_12px_rgba(13,63,124,0.6)]">
              <div className="w-4 h-4 rounded-full border border-blue-400/80" />
            </div>
            {/* Subtle mic holes */}
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="w-1 h-1 rounded-full bg-slate-700" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
            1080p HD WIRED
          </span>
        </div>
      );
    }

    if (type === 'pantilt') {
      return (
        <div className="relative w-full h-48 bg-slate-900 rounded-xl flex items-center justify-center p-4 overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
          {/* Motorized Pan Tilt Silhouette */}
          <div className="relative flex flex-col items-center">
            {/* Sphere / Head */}
            <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center shadow-xl relative">
              {/* Privacy shutter ring */}
              <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-900/60 border border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              <span className="absolute -top-1 right-2 text-[9px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                360° PAN
              </span>
            </div>
            {/* Motorized Base */}
            <div className="w-28 h-8 -mt-2 bg-slate-900 rounded-b-xl border-2 border-slate-700 flex items-center justify-center">
              <RotateCw className="w-3.5 h-3.5 text-slate-500 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
            MOTORIZADA 360°
          </span>
        </div>
      );
    }

    // Indoor Gen 2
    return (
      <div className="relative w-full h-48 bg-slate-900 rounded-xl flex items-center justify-center p-4 overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
        {/* Compact Indoor Camera Silhouette */}
        <div className="relative flex flex-col items-center">
          {/* Cylinder Body */}
          <div className="w-18 h-24 bg-slate-950 rounded-2xl border-2 border-slate-700 shadow-xl flex flex-col items-center justify-center p-2 relative">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-900/70 border border-blue-400/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
            <div className="w-6 h-1 bg-slate-800 rounded-full mt-2" />
          </div>
          {/* Articulated Stand */}
          <div className="w-12 h-4 bg-slate-800 rounded-md -mt-1 border border-slate-700" />
          <div className="w-16 h-2 bg-slate-700 rounded-full mt-0.5" />
        </div>
        <span className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
          DISCRETA 2DA GEN
        </span>
      </div>
    );
  };

  return (
    <section
      id="equipos"
      className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 flex min-w-0 flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D3F7C]/5 border border-[#0D3F7C]/15 text-[#0D3F7C] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              CATÁLOGO DE HARDWARE RING
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3F7C] tracking-tight">
              Fichas técnicas y cotización directa.
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Hardware original de Ring. Puedes adquirir únicamente el equipo sellado o nuestro recomendado <strong className="text-[#0D3F7C]">Kit Llave en Mano Instalado</strong>.
            </p>
          </div>

          {/* Quick toggle bar */}
          <div className="flex w-full max-w-full flex-col items-stretch self-start rounded-lg border border-slate-200 bg-white p-1 text-xs font-mono shadow-2xs sm:w-auto sm:flex-row sm:items-center lg:self-auto">
            <button
              type="button"
              onClick={() => handleGlobalModeChange('turnkey_installed')}
              className="flex min-w-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-left font-semibold text-[#0D3F7C] transition-colors hover:bg-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-[#F57C00]" />
              Ver Kit Llave en Mano (Recomendado)
            </button>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <button
              type="button"
              onClick={() => handleGlobalModeChange('hardware_only')}
              className="rounded-md px-3 py-1.5 text-left font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              Ver Solo Equipo
            </button>
          </div>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const currentMode = selectedModes[product.id] || 'turnkey_installed';
            const isTurnkey = currentMode === 'turnkey_installed';
            const whatsAppUrl = getProductWhatsAppUrl(product, currentMode);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
              >
                {/* Product Header & Graphic */}
                <div className="p-6">
                  
                  {/* Top Category and Badge */}
                  <div className="mb-3 flex min-w-0 flex-wrap items-start justify-between gap-2">
                    <span className="min-w-0 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="shrink-0 rounded-full border border-[#F57C00]/25 bg-[#F57C00]/10 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wide text-[#F57C00]">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Headline */}
                  <h3 className="min-w-0 text-xl font-bold tracking-tight text-[#0F172A]">
                    <Link to={`/equipos/${product.id}`} className="transition-colors hover:text-[#0D3F7C]">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {product.headline}
                  </p>

                  {/* Graphic Visual */}
                  <Link to={`/equipos/${product.id}`} className="group mt-4 block" aria-label={`Ver ficha de ${product.name}`}>
                    {renderProductImage(product.imageUrl, product.name)}
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#0D3F7C] transition-colors group-hover:text-[#F57C00]">
                      Ver ficha completa <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>

                  {/* Mode Selector Pill */}
                  <div className="mt-5 grid min-w-0 grid-cols-2 rounded-lg border border-slate-200 bg-slate-100 p-1 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => handleModeChange(product.id, 'turnkey_installed')}
                      className={`py-1.5 px-2 rounded-md font-semibold transition-all text-center cursor-pointer ${
                        isTurnkey
                          ? 'bg-[#0D3F7C] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Llave en Mano
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange(product.id, 'hardware_only')}
                      className={`py-1.5 px-2 rounded-md font-medium transition-all text-center cursor-pointer ${
                        !isTurnkey
                          ? 'bg-white text-slate-900 shadow-2xs border border-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Solo Equipo
                    </button>
                  </div>

                  {/* Technical Specs List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      ESPECIFICACIONES TÉCNICAS
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D3F7C] mt-1.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlighted Technical Note */}
                  {product.id === 'ring-doorbell-wired' && product.technicalNote && (
                    <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#F57C00] mt-0.5 shrink-0" />
                      <div>
                        <strong className="font-semibold block text-[#0D3F7C] font-mono">OPCIONES DE CONEXIÓN:</strong>
                        <span>{product.technicalNote}</span>
                      </div>
                    </div>
                  )}

                  {/* Recommended For */}
                  <div className="mt-3 text-[11px] text-slate-500 font-mono">
                    <span className="text-slate-400">Enfoque:</span> {product.recommendedFor}
                  </div>

                </div>

                <div className="flex flex-col justify-between border-t border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 rounded-xl border border-[#0D3F7C]/10 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F57C00]">Cotización personalizada</p>
                        <p className="mt-1 text-sm font-semibold text-[#0D3F7C]">{isTurnkey ? 'Kit llave en mano instalado' : 'Equipo original sellado'}</p>
                      </div>
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0D3F7C]" />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">Contáctanos para recibir orientación sobre esta opción de compra.</p>
                  </div>

                  {/* Micro list of what's included in Turnkey */}
                  {isTurnkey ? (
                    <div className="mb-4 text-[11px] text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{product.id === 'ring-doorbell-wired' ? 'Conexión a timbre o adaptador de pared' : 'Instalación eléctrica local'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Instalación y canalizado profesional</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 text-[11px] text-slate-500 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>Equipo sellado con garantía de fábrica</span>
                      </div>
                      <div className="text-[10px] text-amber-700 font-mono">
                        Equipo listo para instalación eléctrica local.
                      </div>
                    </div>
                  )}

                  {/* Primary CTA */}
                  <a
                    id={`btn-cotizar-${product.id}`}
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-[#F57C00] px-4 py-3 text-center text-xs font-semibold tracking-wide text-white shadow-xs transition-colors hover:bg-[#E65100] sm:text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="min-w-0">Solicitar cotización por WhatsApp</span>
                  </a>

                </div>

              </div>
            );
          })}
        </div>

        {/* Technical Callout banner below products */}
        <div className="mt-12 flex min-w-0 flex-col items-stretch justify-between gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-2xs sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#0D3F7C]/10 border border-[#0D3F7C]/20 flex items-center justify-center text-[#0D3F7C] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-[#0D3F7C]">
                ¿Necesitas un paquete integral con múltiples cámaras y portero exterior?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Diseñamos proyectos a medida para residencias, oficinas y condominios, con descuento en mano de obra combinada.
              </p>
            </div>
          </div>

          <button
            type="button"
            id="btn-agendar-visita-callout"
            onClick={onOpenBooking}
            className="w-full shrink-0 rounded-lg border border-[#0D3F7C] px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#0D3F7C] transition-colors hover:bg-[#0D3F7C] hover:text-white sm:w-auto"
          >
            Agendar Visita Técnica
          </button>
        </div>

      </div>
    </section>
  );
};
