import { ArrowLeft, ArrowUpRight, CheckCircle2, Play, ShieldCheck, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FloatingWhatsApp } from "@/components/horizon/FloatingWhatsApp";
import { Navbar } from "@/components/horizon/Navbar";
import { TechnicalBookingModal } from "@/components/horizon/TechnicalBookingModal";
import { TechnicalFooter } from "@/components/horizon/TechnicalFooter";
import { PRODUCTS } from "@/components/horizon/mockData";
import { getProductWhatsAppUrl } from "@/components/horizon/whatsapp";
import type { PurchaseMode } from "@/components/horizon/types";
import { useEffect, useRef, useState } from "react";

interface VideoPreviewProps {
  src: string;
}

function VideoPreview({ src }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState<string>();

  const capturePoster = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth || !video.videoHeight) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    try {
      canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPoster(canvas.toDataURL("image/jpeg", 0.88));
    } catch {
      setPoster(undefined);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("loadeddata", capturePoster);
    return () => video.removeEventListener("loadeddata", capturePoster);
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        className="h-full w-full max-w-full object-contain"
        controls
        playsInline
        preload="auto"
        poster={poster}
        src={src}
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </>
  );
}

const PRODUCT_GALLERIES = {
  "ring-doorbell-wired": {
    eyebrow: "Galería del equipo",
    title: "Diseño, visión y montaje.",
    description: "Conoce algunos detalles del Ring Video Doorbell Wired antes de elegir la instalación para tu acceso.",
    images: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F41307dfc11a64855ba60b2173e35df88?format=webp&width=800&height=1200",
        label: "Diseño renovado",
        description: "Una presencia moderna para tu acceso principal.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Ffcc032cc3f674d66aebff33410d18fb6?format=webp&width=800&height=1200",
        label: "Color real en poca luz",
        description: "Pensado para ayudarte a identificar lo que ocurre.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Fce13278579b245729fca1d01c17aa5ea?format=webp&width=800&height=1200",
        label: "Detección de movimiento",
        description: "Mayor control sobre el área frente a tu puerta.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F68dee3e401be4d539f99537b2db67c47?format=webp&width=800&height=1200",
        label: "Instalación cableada",
        description: "Una conexión ordenada y lista para el uso diario.",
      },
    ],
  },
  "ring-pan-tilt-indoor": {
    eyebrow: "Galería del equipo",
    title: "Una cámara que mira contigo.",
    description: "Descubre cómo la Ring Pan-Tilt Indoor Cam se adapta a tus espacios interiores y a tu forma de supervisarlos.",
    images: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Fa00222fdfb334904bd3031e6f66bb11f?format=webp&width=800&height=1200",
        label: "Cubre todos los ángulos",
        description: "Una cámara pensada para acompañar distintos espacios interiores.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F46b8181185b24404a7c7b3fe52459846?format=webp&width=800&height=1200",
        label: "Panorámica de 360°",
        description: "Inclina y gira la cámara para revisar tu ambiente.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Fc6c6744b225f4e0a8a5e03b4b635c084?format=webp&width=800&height=1200",
        label: "Ve, escucha y habla",
        description: "Controla la vista y comunícate desde la aplicación.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F1e0d1960809040a1a00ac84d08572f29?format=webp&width=800&height=1200",
        label: "Cubierta de privacidad manual",
        description: "Cubre el lente cuando quieras disfrutar más privacidad.",
      },
    ],
  },
  "ring-indoor-cam-gen2": {
    eyebrow: "Galería del equipo",
    title: "Protección interior con más control.",
    description: "Descubre cómo la Ring Indoor Cam (2da Gen) se integra en distintos espacios del hogar.",
    images: [
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F117a46dcd2c645ef89ed4c82ab181369?format=webp&width=800&height=1200",
        label: "Privacidad para interiores",
        description: "Una solución discreta para proteger tus espacios con tranquilidad.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Fa103c0badba144f0993448e7c5d4687b?format=webp&width=800&height=1200",
        label: "Ve, escucha y habla",
        description: "Mantén el contacto con las personas dentro de casa.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2Fba3e4cc922234725a8bd9071ab4c5502?format=webp&width=800&height=1200",
        label: "Cubierta de privacidad manual",
        description: "Cubre el lente cuando quieras priorizar tu privacidad.",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets%2F60ead0d9092a4498bc630a717567c6fc%2F918032e46cf249619a151559b9682226?format=webp&width=800&height=1200",
        label: "Instalación versátil",
        description: "Colócala en el punto interior que mejor se adapte a tu espacio.",
      },
    ],
  },
} as const;

export default function ProductDetail() {
  const { productId } = useParams();
  const product = PRODUCTS.find((item) => item.id === productId);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [panTiltColor, setPanTiltColor] = useState<"blanco" | "negro">("blanco");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen w-full min-w-0 max-w-full overflow-x-clip bg-slate-50 text-slate-900">
        <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
        <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 pt-24 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F57C00]">Equipo no encontrado</span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#0D3F7C]">La ficha técnica no está disponible.</h1>
          <Link to="/#equipos" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0D3F7C] px-5 py-3 text-sm font-bold text-white">
            <ArrowLeft className="h-4 w-4" /> Volver al catálogo
          </Link>
        </main>
        <TechnicalFooter />
        <TechnicalBookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      </div>
    );
  }

  const turnkeyMode: PurchaseMode = "turnkey_installed";
  const videoUrl = product.id === "ring-pan-tilt-indoor"
    ? "https://cdn.builder.io/o/assets%2F3fcabb9c0e314c91a44320c3595080c8%2F1da2b74860ab49159e627165e312bcd8?alt=media&token=505fe14c-f48f-4a73-a981-91ea59401e9f&apiKey=3fcabb9c0e314c91a44320c3595080c8"
    : product.id === "ring-indoor-cam-gen2"
      ? "https://cdn.builder.io/o/assets%2F60ead0d9092a4498bc630a717567c6fc%2F346676f6e45e4854890f8e3208feb7a9?alt=media&token=673f96ea-8229-464a-b15e-8d07eee6e97a&apiKey=60ead0d9092a4498bc630a717567c6fc"
      : product.id === "ring-doorbell-wired"
        ? "https://cdn.builder.io/o/assets%2F60ead0d9092a4498bc630a717567c6fc%2F5e17c6c0d977414da4167e5176c22f8c?alt=media&token=866783b2-ef1e-4b11-a0ab-489630c14c31&apiKey=60ead0d9092a4498bc630a717567c6fc"
        : null;
  const gallery = PRODUCT_GALLERIES[product.id as keyof typeof PRODUCT_GALLERIES];
  const productImage = product.id === "ring-pan-tilt-indoor" && panTiltColor === "negro"
    ? "https://cdn.builder.io/api/v1/image/assets%2F78153447dbf048a2ba95b40876998a37%2F9719daef83c343869833cbd3c6db2a07?format=webp&width=800&height=1200"
    : product.imageUrl;

  return (
    <div className="min-h-screen w-full min-w-0 max-w-full overflow-x-clip bg-white text-[#0F172A] selection:bg-[#F57C00]/20 selection:text-[#0D3F7C]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      <main className="min-w-0">
        <section className="border-b border-slate-200 bg-[#F8FAFC] pb-14 pt-28 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link to="/#equipos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors hover:text-[#0D3F7C]">
              <ArrowLeft className="h-4 w-4" /> Volver al catálogo
            </Link>

            <div className="mt-8 grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl sm:p-5">
                <div className="relative">
                  <img src={productImage} alt={product.id === "ring-pan-tilt-indoor" ? `${product.name}, color ${panTiltColor}` : product.name} className="aspect-[4/3] w-full rounded-2xl object-contain object-center sm:aspect-[5/4]" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0D3F7C] shadow-sm backdrop-blur sm:left-5 sm:top-5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Equipo original sellado
                  </div>
                </div>
                {product.id === "ring-pan-tilt-indoor" && (
                  <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Color disponible</p>
                      <p className="mt-0.5 text-sm font-semibold capitalize text-[#0D3F7C]">{panTiltColor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {(["blanco", "negro"] as const).map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setPanTiltColor(color)}
                          aria-label={`Seleccionar color ${color}`}
                          aria-pressed={panTiltColor === color}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C00] focus-visible:ring-offset-2 ${panTiltColor === color ? 'border-[#0D3F7C] ring-2 ring-[#0D3F7C]/20' : 'border-slate-300 hover:border-[#0D3F7C]'}`}
                        >
                          <span className={`h-6 w-6 rounded-full border ${color === 'blanco' ? 'border-slate-300 bg-white' : 'border-slate-950 bg-slate-950'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="inline-flex items-center rounded-md border border-[#0D3F7C]/15 bg-[#0D3F7C]/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D3F7C]">
                  {product.category}
                </div>
                <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-[#0D3F7C] sm:text-5xl">{product.name}</h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.headline}</p>

                {product.detailHighlights ? (
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {product.detailHighlights.map((highlight) => (
                      <div key={highlight.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{highlight.label}</p>
                        <p className="mt-2 text-sm font-bold leading-snug text-[#0D3F7C]">{highlight.value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <Zap className="h-5 w-5 text-[#F57C00]" />
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Alimentación</p>
                      <p className="mt-1 text-sm font-semibold text-slate-700">{product.voltageInfo}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <ShieldCheck className="h-5 w-5 text-[#0D3F7C]" />
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Garantía de instalación</p>
                      <p className="mt-1 text-sm font-semibold text-slate-700">90 días de respaldo</p>
                    </div>
                  </div>
                )}

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={getProductWhatsAppUrl(product, turnkeyMode)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#E65100]">
                    Cotizar instalación <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button type="button" onClick={() => setBookingModalOpen(true)} className="inline-flex items-center justify-center rounded-xl border border-[#0D3F7C] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0D3F7C] transition hover:bg-[#0D3F7C] hover:text-white">
                    Agendar visita
                  </button>
                </div>
                <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-500">
                  <span className="font-bold text-[#0D3F7C]">Accesorios de montaje:</span> Los soportes, monturas o accesorios específicos para cada cámara se cotizan por separado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {gallery && (
          <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F57C00]">{gallery.eyebrow}</span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-4xl">{gallery.title}</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-slate-500">{gallery.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                {gallery.images.map((image) => (
                  <figure key={image.src} className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D3F7C]/25 hover:shadow-lg">
                    <div className="overflow-hidden bg-slate-100">
                      <img
                        src={image.src}
                        alt={`${product.name}: ${image.label}`}
                        className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="p-4 sm:p-5">
                      <p className="text-sm font-bold leading-tight text-[#0D3F7C]">{image.label}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{image.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F57C00]">Video descriptivo</span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-4xl">Conoce el equipo en acción.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-500">Aquí podrás ver la demostración completa, instalación y configuración de {product.name}.</p>
            </div>
            <div className="relative flex min-h-[300px] w-full min-w-0 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-[#0F172A] shadow-2xl aspect-[4/3] sm:aspect-video sm:min-h-[420px] lg:min-h-[560px]">
              {videoUrl ? (
                <VideoPreview src={videoUrl} />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,63,124,0.42),transparent_58%)]" />
                  <div className="relative flex flex-col items-center gap-4 text-center text-white">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F57C00] shadow-[0_0_0_10px_rgba(245,124,0,0.14)] sm:h-20 sm:w-20">
                      <Play className="ml-1 h-7 w-7 fill-white sm:h-9 sm:w-9" />
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-wider">Video próximamente</p>
                      <p className="mt-1 text-sm text-slate-300">Espacio preparado para la demostración del producto</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {product.detailGroups ? (
              <>
                <div className="mb-10 max-w-3xl">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F57C00]">Especificaciones y características</span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0D3F7C] sm:text-4xl">Conoce todo lo que puede hacer por tu espacio.</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">Una ficha clara para entender su cobertura, control desde la app e instalación antes de elegirla.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.detailGroups.map((group, index) => (
                      <article key={group.title} className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 ${index === product.detailGroups!.length - 1 ? 'sm:col-span-2' : ''}`}>
                        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#F57C00]">0{index + 1} · DETALLE</span>
                            <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0D3F7C]">{group.title}</h3>
                          </div>
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-500">{group.description}</p>
                        <ul className="mt-5 space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D3F7C]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>

                  <aside className="rounded-2xl border border-[#0D3F7C]/15 bg-[#0D3F7C] p-6 text-white shadow-lg sm:p-7">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#F6A04B]">Antes de instalar</span>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Simple de poner en marcha.</h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-100">Ten en cuenta estos puntos para disfrutar sus funciones desde el primer día.</p>
                    {product.technicalNote && (
                      <div className="mt-5 rounded-xl border border-white/15 bg-white/10 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F6A04B]">Opciones de conexión</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{product.technicalNote}</p>
                      </div>
                    )}
                    <ul className="mt-6 space-y-4">
                      {product.detailRequirements?.map((requirement) => (
                        <li key={requirement} className="flex items-start gap-3 text-sm leading-relaxed text-blue-50">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F6A04B]" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 border-t border-white/15 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">Ideal para</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-white">{product.recommendedFor}</p>
                    </div>
                  </aside>
                </div>
              </>
            ) : (
              <div className="grid min-w-0 gap-10 lg:grid-cols-2">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F57C00]">Especificaciones</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-[#0D3F7C]">Diseñado para una instalación confiable.</h2>
                  <ul className="mt-7 space-y-4">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl border border-slate-200 p-6 sm:p-8 ${product.technicalNote ? 'bg-slate-50' : 'bg-white'}`}>
                  {product.technicalNote && (
                    <>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D3F7C]">Opciones de conexión</p>
                      <p className="mt-4 text-base leading-relaxed text-slate-700">{product.technicalNote}</p>
                    </>
                  )}
                  <p className={`${product.technicalNote ? 'mt-6 border-t border-slate-200 pt-5' : ''} text-sm leading-relaxed text-slate-600`}>Recomendado para: {product.recommendedFor}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <TechnicalFooter />
      <TechnicalBookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
