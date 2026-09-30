import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  MessageSquare,
  ShieldCheck,
  Video,
} from 'lucide-react';
import { FAQS } from './mockData';
import { getGeneralQuoteUrl, getSubscriptionAdviceUrl } from './whatsapp';

const RING_PROTECT_PLANS = [
  {
    eyebrow: 'PRIMEROS 30 DÍAS',
    title: 'Prueba gratuita',
    subtitle: null,
    price: '30 días',
    description: 'Control total para conocer tu cámara y sus funciones en la nube.',
    features: ['Grabación en la nube', 'Revisión de video', 'Alertas y control desde la app'],
    icon: ShieldCheck,
    featured: true,
  },
  {
    eyebrow: 'DESPUÉS DE LA PRUEBA',
    title: 'Sin suscripción',
    subtitle: null,
    price: 'S/ 0',
    description: 'Sigue usando las funciones esenciales de tu cámara sin un plan activo.',
    features: ['Video en vivo', 'Alertas en tiempo real', 'Sin acceso a grabaciones pasadas'],
    icon: Video,
    featured: false,
  },
  {
    eyebrow: 'PLAN INDIVIDUAL',
    title: 'Plan para 1 cámara',
    subtitle: '(Ring Solo)',
    price: null,
    description: 'Grabaciones en la nube y funciones avanzadas para una cámara Ring.',
    features: [
      'Hasta 180 días de historial de eventos de video',
      'Revisión y descarga de grabaciones',
      'Alertas inteligentes de personas, paquetes y vehículos',
      'Video en directo ampliado',
      'Modos del dispositivo y llamadas de timbre',
      'Funciones de Ring Protect para una cámara',
    ],
    icon: Cloud,
    featured: false,
  },
  {
    eyebrow: 'PLAN MULTIDISPOSITIVO',
    title: 'De 2 a más de 10 cámaras',
    subtitle: '(Ring Multi)',
    price: null,
    description: 'Funciones de Ring Protect para varios dispositivos en una sola ubicación.',
    features: [
      'Hasta 180 días de historial de eventos de video',
      'Cobertura para varios dispositivos en una ubicación',
      'Alertas inteligentes de personas, paquetes y vehículos',
      'Video en directo ampliado',
      'Modos del dispositivo y llamadas de timbre',
      'Revisión y descarga de grabaciones',
      'Funciones de Ring Protect para varias cámaras',
    ],
    icon: Cloud,
    featured: false,
  },
] as const;

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((previous) => (previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]));
  };

  return (
    <section id="faq" className="border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[#0D3F7C]/15 bg-[#0D3F7C]/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D3F7C]">
            RING PROTECT · INFORMACIÓN CLARA
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-4xl">Elige cómo quieres usar tu Ring.</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            La suscripción es opcional. Estas son las alternativas principales para que puedas decidir con tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {RING_PROTECT_PLANS.map((plan) => {
            const PlanIcon = plan.icon;
            return (
              <div key={plan.title} className={`flex h-full flex-col rounded-2xl border p-5 shadow-2xs transition-all hover:-translate-y-1 hover:shadow-md sm:p-6 ${plan.featured ? 'border-[#F57C00]/50 bg-white ring-1 ring-[#F57C00]/20' : 'border-slate-200 bg-white'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{plan.eyebrow}</p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-[#0F172A]">{plan.title}</h3>
                    {plan.subtitle && <p className="mt-1 text-xs font-semibold tracking-wide text-[#0D3F7C]">{plan.subtitle}</p>}
                  </div>
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${plan.featured ? 'bg-[#F57C00]/10 text-[#F57C00]' : 'bg-[#0D3F7C]/5 text-[#0D3F7C]'}`}>
                    <PlanIcon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 min-h-[76px]">
                  {plan.price && <p className="text-xl font-black text-[#0D3F7C]">{plan.price}</p>}
                  <p className={`${plan.price ? 'mt-2' : ''} text-xs leading-relaxed text-slate-600`}>{plan.description}</p>
                </div>
                <div className="mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#0D3F7C]/15 bg-white p-5 shadow-2xs sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F57C00]/10 text-[#F57C00]">
              <MessageSquare className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#F57C00]">Asesoría personalizada</p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-700">Te brindamos asesoría personalizada para elegir el plan ideal según el número de cámaras que instales.</p>
            </div>
          </div>
          <a
            href={getSubscriptionAdviceUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0D3F7C] px-4 py-3 text-xs font-semibold tracking-wide text-white shadow-xs transition-colors hover:bg-[#0A2F5C]"
          >
            <MessageSquare className="h-4 w-4 text-[#F57C00]" />
            <span>Solicitar asesoría</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F57C00]">PREGUNTAS FRECUENTES</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-3xl">¿Tienes alguna duda?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Te ayudamos a entender tu equipo, la instalación y las opciones de uso.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} id={faq.id} className={`rounded-xl border transition-all ${isOpen ? 'border-slate-300 bg-white shadow-xs' : 'border-slate-200 bg-white/80 hover:border-slate-300'}`}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold tracking-tight text-[#0F172A] sm:text-base">{faq.question}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0D3F7C] text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="animate-in fade-in-50 space-y-3 border-t border-slate-100 px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 duration-150">
                      {faq.answer.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs sm:flex-row">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-[#0F172A]">¿Quieres una recomendación para tu espacio?</h4>
              <p className="mt-0.5 text-xs text-slate-500">Cuéntanos qué necesitas y te orientamos por WhatsApp.</p>
            </div>
            <a
              href={getGeneralQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0D3F7C] px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-xs transition-colors hover:bg-[#0A2F5C]"
            >
              <MessageSquare className="h-3.5 w-3.5 text-[#F57C00]" />
              <span>Hablar por WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
