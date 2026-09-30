import { COMPANY_INFO } from './mockData';
import { ProductItem, PurchaseMode } from './types';

export function createWhatsAppUrl(message: string): string {
  const cleanPhone = COMPANY_INFO.phoneUSARaw;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(product: ProductItem, mode: PurchaseMode): string {
  const modeText = mode === 'turnkey_installed'
    ? 'Kit Llave en Mano Instalado'
    : 'Solo Equipo';
  
  const text = `Hola Horizon Smart Security, deseo cotizar el siguiente equipo Ring:
  
• Producto: ${product.name}
• Modalidad: ${modeText}
• Incluye: ${mode === 'turnkey_installed' ? 'Adaptación 220V + Instalación profesional + Garantía' : 'Hardware original sellado'}

¿Podrían confirmarme disponibilidad inmediata y coordinar detalles? Gracias.`;

  return createWhatsAppUrl(text);
}

export function getGeneralQuoteUrl(): string {
  const text = `Hola Horizon Smart Security, deseo cotizar una solución de seguridad inteligente con cámaras Ring para mi hogar o negocio.`;
  return createWhatsAppUrl(text);
}

export function getSubscriptionAdviceUrl(): string {
  const text = `Hola Horizon Smart Security, quisiera recibir asesoría personalizada para elegir el plan Ring ideal según el número de cámaras que instalaré.`;
  return createWhatsAppUrl(text);
}

export function getBookingWhatsAppUrl(data: {
  name: string;
  phone: string;
  propertyType: string;
  equipmentInterested: string;
  notes?: string;
}): string {
  const text = `Hola Horizon Smart Security, deseo cotizar una instalación de cámaras Ring:

• Nombre: ${data.name}
• Teléfono: ${data.phone}
• Tipo de inmueble: ${data.propertyType}
• Equipos de interés: ${data.equipmentInterested}
${data.notes ? `• Comentarios adicionales: ${data.notes}\n` : ''}
Por favor confirmar disponibilidad y horarios para esta semana.`;

  return createWhatsAppUrl(text);
}
