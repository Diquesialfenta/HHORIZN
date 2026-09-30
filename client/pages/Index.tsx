import { useState } from "react";
import { BentoGrid } from "@/components/horizon/BentoGrid";
import { FaqSection } from "@/components/horizon/FaqSection";
import { FloatingWhatsApp } from "@/components/horizon/FloatingWhatsApp";
import { HardwareCatalog } from "@/components/horizon/HardwareCatalog";
import { Hero } from "@/components/horizon/Hero";
import { Navbar } from "@/components/horizon/Navbar";
import { OperationsSection } from "@/components/horizon/OperationsSection";
import { TechnicalBookingModal } from "@/components/horizon/TechnicalBookingModal";
import { TechnicalComparison } from "@/components/horizon/TechnicalComparison";
import { TechnicalFooter } from "@/components/horizon/TechnicalFooter";
import { WarrantySection } from "@/components/horizon/WarrantySection";

export default function Index() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const openBooking = () => setBookingModalOpen(true);

  return (
    <div
      className="min-h-screen w-full min-w-0 overflow-x-clip flex flex-col bg-white text-[#0F172A] font-sans antialiased selection:bg-[#F57C00]/20 selection:text-[#0D3F7C]"
      style={{ zoom: 0.98 }}
    >
      <Navbar onOpenBooking={openBooking} />
      <main className="w-full min-w-0 max-w-full grow">
        <Hero onOpenBooking={openBooking} />
        <BentoGrid />
        <OperationsSection />
        <HardwareCatalog onOpenBooking={openBooking} />
        <TechnicalComparison />
        <WarrantySection />
        <FaqSection />
      </main>
      <TechnicalFooter />
      <TechnicalBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
      <FloatingWhatsApp />
    </div>
  );
}
