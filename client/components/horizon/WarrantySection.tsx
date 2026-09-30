import { AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Package, ShieldCheck, Wrench } from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

const EXCLUSIONS = [
  'Golpes o accidentes.',
  'Manipulación o modificación del equipo.',
  'Instalaciones realizadas por terceros.',
  'Problemas de Internet, Wi-Fi o suministro eléctrico.',
  'Daños ocasionados por agua, fuego, vandalismo u otras causas externas.',
];

export const WarrantySection: React.FC = () => {
  return (
    <section
      id="garantia"
      aria-labelledby="warranty-heading"
      className="relative overflow-hidden border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#dbe5f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#0D3F7C]/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D3F7C] shadow-2xs">
            <ShieldCheck className="h-4 w-4 text-[#F57C00]" />
            <span>GARANTÍA HORIZON SMART SECURITY</span>
          </div>
          <h2 id="warranty-heading" className="text-3xl font-extrabold leading-tight tracking-tight text-[#0D3F7C] sm:text-4xl md:text-5xl">
            Tu seguridad, nuestra prioridad.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            En HORIZON SMART SECURITY queremos que tengas tranquilidad después de tu compra e instalación. Todos nuestros productos Ring cuentan con la garantía correspondiente del fabricante, de acuerdo con los términos y condiciones de Ring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-[#F57C00]/25 bg-white p-6 shadow-sm sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#F57C00]/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F57C00]">01 · PRODUCTO RING</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A]">Garantía del producto Ring</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F57C00]/20 bg-[#F57C00]/10 text-[#F57C00]">
                  <Package className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                La garantía de las cámaras y dispositivos Ring está sujeta a los términos, condiciones y período de garantía establecidos por Ring.
              </p>
              <div className="mt-6 rounded-2xl border border-[#F57C00]/15 bg-[#FFF8F0] p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F57C00]" />
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">Acompañamiento en el proceso</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Para hacer válida una garantía del fabricante, podremos ayudarte con el proceso correspondiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-[#0D3F7C]/20 bg-white p-6 shadow-sm sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#0D3F7C]/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0D3F7C]">02 · SERVICIO HSS</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A]">Garantía de instalación</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0D3F7C]/15 bg-[#0D3F7C]/5 text-[#0D3F7C]">
                  <Wrench className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                Nuestra instalación cuenta con <strong className="font-bold text-[#0D3F7C]">90 días de respaldo</strong> contra problemas directamente relacionados con una instalación incorrecta realizada por HORIZON SMART SECURITY.
              </p>
              <div className="relative mt-6 overflow-hidden rounded-2xl border-2 border-[#0D3F7C]/20 bg-linear-to-br from-[#0D3F7C] via-[#0D3F7C] to-[#0A2F5C] p-5 text-white shadow-md sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#F57C00]/25 blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#F57C00] text-white shadow-lg ring-4 ring-white/10">
                    <span className="text-3xl font-black leading-none">90</span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em]">días</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-200">Periodo de respaldo</p>
                    <p className="mt-1 text-lg font-bold tracking-tight">Garantía de instalación HSS</p>
                    <p className="mt-1 text-xs leading-relaxed text-blue-100">Cobertura por problemas directamente relacionados con la instalación realizada por nuestro equipo.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">ALCANCE DE LA INSTALACIÓN</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">Esta garantía no cubre daños ocasionados por:</h3>
              </div>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EXCLUSIONS.map((exclusion) => (
                <li key={exclusion} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#F57C00]" />
                  <span>{exclusion}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-3xl bg-[#0D3F7C] p-6 text-white shadow-md sm:p-8 lg:col-span-5">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">
                <ShieldCheck className="h-4 w-4" />
                <span>03 · NUESTRO COMPROMISO</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">Estamos para ayudarte.</h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                Si tienes algún inconveniente con tu equipo o instalación, contáctanos. Revisaremos tu caso y te orientaremos sobre la solución correspondiente.
              </p>
              <div className="mt-6 space-y-2.5 border-t border-white/15 pt-5 text-sm text-blue-50">
                <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Revisamos tu caso</div>
                <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Te orientamos sobre el siguiente paso</div>
              </div>
              <a
                href={getGeneralQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C00] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#E65100]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contáctanos</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-2xs sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0D3F7C]">HORIZON SMART SECURITY</p>
            <p className="mt-1 text-base font-semibold text-slate-600">Protege lo que importa.</p>
          </div>
          <ShieldCheck className="h-8 w-8 text-[#F57C00]" />
        </div>
      </div>
    </section>
  );
};
