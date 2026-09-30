import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const LOCATIONS = [
  {
    icon: Globe2,
    eyebrow: 'ORIGEN · USA',
    name: 'California',
    description: 'Desde California, USA, se coordinan el abastecimiento y la exportación de equipos Ring originales hacia nuestra operación en Perú.',
    accent: 'border-[#F57C00]/30 bg-[#F57C00]/10 text-[#F57C00]',
  },
  {
    icon: MapPin,
    eyebrow: 'ATENCIÓN · PERÚ',
    name: 'Chiclayo',
    description: 'En Chiclayo recibimos, verificamos y acercamos esta tecnología a hogares y negocios con atención e instalación local.',
    accent: 'border-[#7CC4FF]/30 bg-[#7CC4FF]/10 text-[#7CC4FF]',
  },
] as const;

const PROMISES = [
  { icon: PackageCheck, label: 'Equipos originales y trazables' },
  { icon: BadgeCheck, label: 'Revisión antes de entregar' },
  { icon: ShieldCheck, label: 'Acompañamiento local' },
];

export const OperationsSection: React.FC = () => {
  return (
    <section id="operacion" className="relative overflow-hidden border-b border-slate-200 bg-white py-20 text-[#0F172A] sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#F57C00]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0D3F7C]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#F57C00]" />
              <span>HORIZON SMART SECURITY · OPERACIÓN BINACIONAL</span>
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
              Tecnología que cruza fronteras.{' '}
              <span className="text-[#0D3F7C]">Confianza que se instala localmente.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Horizon Smart Security conecta dos puntos para darte una experiencia más completa: California, USA, como origen de nuestros equipos, y Chiclayo, Perú, como el lugar donde los convertimos en soluciones cercanas para tu hogar o negocio.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
              {LOCATIONS.map((location, index) => {
                const LocationIcon = location.icon;
                return (
                  <div key={location.name} className="contents">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0D3F7C]/25 hover:shadow-md sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${location.accent}`}>
                          <LocationIcon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-slate-400">{location.eyebrow}</span>
                      </div>
                      <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#0D3F7C]">{location.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{location.description}</p>
                    </div>
                    {index === 0 && (
                      <div className="flex items-center justify-center py-1 sm:px-1 sm:py-0">
                        <div className="flex items-center gap-2 text-[#F57C00]">
                          <span className="hidden h-px w-7 bg-[#F57C00]/60 sm:block" />
                          <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" />
                          <span className="hidden h-px w-7 bg-[#F57C00]/60 sm:block" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-[#0F172A] shadow-lg sm:p-8">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#F57C00]/10" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#F57C00]">LA DIFERENCIA HORIZON</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D3F7C]">Más que importar equipos.</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0D3F7C]/10 text-[#0D3F7C]">
                  <Building2 className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Seleccionamos tecnología que conocemos, la acercamos a Chiclayo y te acompañamos para que llegue a tu espacio con claridad, respaldo y una instalación bien pensada.
              </p>
              <div className="mt-6 space-y-3">
                {PROMISES.map((promise) => {
                  const PromiseIcon = promise.icon;
                  return (
                    <div key={promise.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-slate-700">
                      <PromiseIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{promise.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 rounded-2xl bg-[#0D3F7C] p-5 text-white">
                <p className="text-sm font-bold leading-relaxed">“Lo que empieza en California, se vuelve tranquilidad en Chiclayo.”</p>
                <p className="mt-2 text-xs text-blue-200">Una operación cercana, con visión internacional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
