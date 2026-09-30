import React from 'react';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  MessageSquare,
  Settings2,
  Smartphone,
} from 'lucide-react';
import { getGeneralQuoteUrl } from './whatsapp';

const STEPS = [
  {
    number: '01',
    title: 'Elige tu cámara',
    description: 'Te ayudamos a seleccionar la opción adecuada para tu espacio y tu forma de vivir.',
    icon: Camera,
  },
  {
    number: '02',
    title: 'Agenda tu instalación',
    description: 'Coordinamos contigo el día y la hora que mejor se adapten a tu agenda.',
    icon: CalendarDays,
  },
  {
    number: '03',
    title: 'Instalamos y configuramos',
    description: 'Dejamos tu cámara instalada, conectada y configurada en la aplicación Ring.',
    icon: Settings2,
  },
  {
    number: '04',
    title: 'Empieza a proteger tu propiedad',
    description: 'Visualiza y controla tus cámaras desde tu celular, estés donde estés.',
    icon: Smartphone,
  },
];

export const TechnicalComparison: React.FC = () => {
  return (
    <section id="como-funciona" className="border-b border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[#0D3F7C]/15 bg-[#0D3F7C]/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D3F7C]">
            CÓMO FUNCIONA
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-4xl">
            Tu seguridad, lista en cuatro pasos.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Nos encargamos de hacer que elegir, instalar y usar tu solución Ring sea una experiencia sencilla.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const StepIcon = step.icon;
            return (
              <div key={step.number} className="relative rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all hover:-translate-y-1 hover:border-[#0D3F7C]/30 hover:bg-white hover:shadow-md sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#F57C00]">{step.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0D3F7C]/15 bg-white text-[#0D3F7C]">
                    <StepIcon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3F7C]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Incluido en tu atención</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0D3F7C] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-bold">¿Ya sabes qué necesitas?</p>
            <p className="mt-1 text-sm text-blue-100">Escríbenos y te orientamos para encontrar la solución adecuada.</p>
          </div>
          <a
            href={getGeneralQuoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F57C00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#E65100] sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Consultar por WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
