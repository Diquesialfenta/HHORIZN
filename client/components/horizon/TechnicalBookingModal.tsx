import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Phone, User, Home, Shield, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { getBookingWhatsAppUrl } from './whatsapp';

interface TechnicalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalBookingModal: React.FC<TechnicalBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Casa particular / Residencia',
    equipmentInterested: 'Ring Video Doorbell Wired',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getBookingWhatsAppUrl(formData);
    // Open WhatsApp in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        id="booking-modal-card"
        className="w-full min-w-0 max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in fade-in-90 zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="flex min-w-0 items-center justify-between gap-3 bg-[#0D3F7C] p-5 text-white">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#F57C00]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base tracking-tight font-mono">
                COTIZA TU SOLUCIÓN RING
              </h3>
              <p className="text-xs text-slate-300">
                Cuéntanos qué espacio quieres proteger
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-slate-200 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#0F172A]">
              ¡Solicitud Generada con Éxito!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hemos abierto WhatsApp con los detalles de tu solicitud. Si la ventana no abrió automáticamente, pulsa el botón a continuación para enviarlos a nuestro equipo.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getBookingWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#F57C00] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continuar en WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2 px-4 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider font-mono"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                Nombre Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Ej. Ing. Carlos Salazar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0D3F7C] focus:ring-1 focus:ring-[#0D3F7C]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                Teléfono / WhatsApp *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="Ej. 982 473 866"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0D3F7C] focus:ring-1 focus:ring-[#0D3F7C]"
                />
              </div>
            </div>

            {/* Property type */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                Tipo de Inmueble
              </label>
              <div className="relative">
                <Home className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0D3F7C] focus:ring-1 focus:ring-[#0D3F7C] bg-white"
                >
                  <option value="Casa particular / Residencia">Casa particular / Residencia</option>
                  <option value="Departamento / Edificio">Departamento / Edificio</option>
                  <option value="Condominio cerrado">Condominio cerrado</option>
                  <option value="Negocio / Oficina / Consultorio">Negocio / Oficina / Consultorio</option>
                </select>
              </div>
            </div>

            {/* Equipment interested */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                Equipo de Interés Principal
              </label>
              <select
                value={formData.equipmentInterested}
                onChange={(e) => setFormData({ ...formData, equipmentInterested: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0D3F7C] focus:ring-1 focus:ring-[#0D3F7C] bg-white"
              >
                <option value="Ring Video Doorbell Wired">
                  Ring Video Doorbell Wired (Acceso principal)
                </option>
                <option value="Ring Pan-Tilt Indoor Cam 360 (Sala/Comercio)">
                  Ring Pan-Tilt Indoor Cam (Sala o negocio)
                </option>
                <option value="Ring Indoor Cam 2da Gen (Seguridad compacta)">
                  Ring Indoor Cam 2da Gen (Espacios interiores)
                </option>
                <option value="Paquete Completo (Timbre exterior + Cámaras interiores)">
                  Solución para varios espacios (Asesoría personalizada)
                </option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                Comentarios (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ej. Quiero proteger la entrada, sala, oficina u otro espacio."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0D3F7C] focus:ring-1 focus:ring-[#0D3F7C]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                id="modal-submit-btn"
                className="flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-[#F57C00] px-4 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-xs transition-colors hover:bg-[#E65100]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar y continuar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono mt-2">
                Atención personalizada para tu proyecto
              </p>
            </div>

          </form>
        )}
      </div>
    </div>,
    document.body,
  );
};
