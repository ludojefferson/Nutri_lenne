import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { NutritionTools } from './components/NutritionTools';
import { InstagramFeed } from './components/InstagramFeed';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BackToTop } from './components/BackToTop';
import { BookingModal } from './components/BookingModal';
import { GoogleReviewsModal } from './components/GoogleReviewsModal';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState<boolean>(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Emagrecimento Saudável');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans selection:bg-lime-200 selection:text-stone-900">
      
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* HERO */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* SOBRE A NUTRICIONISTA */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* DIFERENCIAIS */}
        <Differentials />

        {/* SEÇÃO PRINCIPAL — DEPOIMENTOS (GOOGLE REVIEWS AIRBNB STYLE) */}
        <Testimonials
          onOpenReviewsModal={() => setIsReviewsOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* COMO FUNCIONA (4 ETAPAS) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* ÁREAS DE ATENDIMENTO */}
        <Services onSelectServiceBooking={(service) => handleOpenBooking(service)} />

        {/* FERRAMENTA INTERATIVA DE SAÚDE / CALCULADORA */}
        <NutritionTools />

        {/* GALERIA INSTAGRAM */}
        <InstagramFeed />

        {/* LOCALIZAÇÃO (MAPA GUAIANASES - SP) */}
        <LocationSection />

        {/* FAQ */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />

        {/* CTA FINAL */}
        <CTAFinal onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* RODAPÉ */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* FLOATING WIDGETS */}
      <WhatsAppFloat />
      <BackToTop />

      {/* MODALS */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />

      <GoogleReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onSelectBooking={() => {
          setIsReviewsOpen(false);
          handleOpenBooking();
        }}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

    </div>
  );
}
