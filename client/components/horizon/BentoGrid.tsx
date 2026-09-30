import React, { useState } from 'react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Wifi,
  Wrench,
} from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

const SERVICES = [
  {
    id: 'venta',
    code: '01 // ELECCIÓN',
    tag: 'ASESORÍA',
    title: 'Venta de cámaras Ring',
    summary: 'Encuentra el equipo adecuado para tu hogar o negocio.',
    description: 'Te orientamos según el espacio que quieres proteger, el tipo de propiedad y la forma en que deseas usar tu cámara.',
    icon: Camera,
    accent: 'blue',
    features: ['Opciones para interiores y accesos', 'Recomendación según tu necesidad', 'Compra de equipos Ring'],
  },
  {
    id: 'instalacion',
    code: '02 // MONTAJE',
    tag: 'EN TU ESPACIO',
    title: 'Instalación profesional',
    summary: 'Instalamos tu cámara y la dejamos correctamente ubicada.',
    description: 'Nos encargamos del montaje y revisamos que la cámara quede lista para cumplir su función desde el primer día.',
    icon: Wrench,
    accent: 'orange',
    features: ['Ubicación pensada para cada ambiente', 'Montaje ordenado y limpio', 'Revisión final del equipo'],
  },
  {
    id: 'configuracion',
    code: '03 // CONTROL',
    tag: 'RING APP',
    title: 'Configuración de Ring App',
    summary: 'Mira y controla tus cámaras desde tu teléfono.',
    description: 'Configuramos la aplicación y te explicamos lo necesario para que puedas visualizar, recibir alertas y usar tu equipo con confianza.',
    icon: Smartphone,
    accent: 'blue',
    features: ['Vinculación con tu celular', 'Alertas y visualización en vivo', 'Orientación para usar la app'],
  },
  {
    id: 'conectividad',
    code: '04 // CONEXIÓN',
    tag: 'TODO EN ORDEN',
    title: 'Conectividad y configuración',
    summary: 'Comprobamos que tus dispositivos se comuniquen correctamente.',
    description: 'Revisamos la conexión de tus equipos y te ayudamos a dejar todo funcionando de forma simple y clara.',
    icon: Wifi,
    accent: 'green',
    features: ['Conexión de dispositivos', 'Prueba de funcionamiento', 'Soporte después de la instalación'],
  },
] as const;

export const BentoGrid: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('venta');
  const selectedService = SERVICES.find((service) => service.id === selectedServiceId) ?? SERVICES[0];
  const SelectedIcon = selectedService.icon;

  return (
    <section id="pilares" className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#0D3F7C]" />
            <span>QUÉ HACEMOS · SOLUCIONES RING</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0D3F7C] sm:text-4xl md:text-5xl">
            Seguridad clara, útil y pensada para ti.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Te acompañamos desde la elección de tu cámara hasta la configuración final, para que puedas proteger tus espacios sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const ServiceIcon = service.icon;
            const isSelected = selectedServiceId === service.id;
            const accentClasses = {
              blue: 'bg-[#0D3F7C]/5 border-[#0D3F7C]/15 text-[#0D3F7C]',
              orange: 'bg-[#F57C00]/10 border-[#F57C00]/20 text-[#F57C00]',
              green: 'bg-emerald-50 border-emerald-200 text-emerald-600',
            }[service.accent];

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`group flex h-full cursor-pointer flex-col rounded-2xl border p-6 text-left transition-all duration-200 sm:p-7 ${
                  isSelected
                    ? 'border-[#0D3F7C]/60 bg-white shadow-lg ring-1 ring-[#0D3F7C]/15'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold text-slate-400">{service.code}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-600">{service.tag}</span>
                </div>
                <div className="my-5 flex-1">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${accentClasses}`}>
                    <ServiceIcon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#0F172A]">{service.title}</h3>
                  <p className="mt-2 text-xs font-semibold text-[#0D3F7C]">{service.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                  <span>{isSelected ? 'Ver detalles' : 'Seleccionar'}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${isSelected ? 'translate-x-1 text-[#F57C00]' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00]">
                <SelectedIcon className="h-4 w-4" />
                <span>{selectedService.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D3F7C] sm:text-2xl">{selectedService.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{selectedService.description}</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {selectedService.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-[#F8FAFC] p-3 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-200 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm font-bold text-[#0F172A]">Seguridad. Tecnología. Confianza.</p>
              <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0D3F7C]" /> Productos Ring</div>
                <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-[#F57C00]" /> Atención personalizada</div>
                <div className="flex items-center gap-2"><Camera className="h-4 w-4 text-emerald-600" /> Para hogares y negocios</div>
              </div>
              <a
                href={getGeneralQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0D3F7C] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#0A2F5C]"
              >
                <span>Habla con nosotros</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
