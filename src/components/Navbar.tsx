import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Menu, X, Leaf, Sparkles, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Instagram', href: '#galeria' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-[#3f6212] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-lime-300 fill-lime-300/30" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight block leading-none">
              Nutri Lane
            </span>
            <span className="text-[10px] text-stone-500 tracking-wider uppercase font-semibold block mt-0.5">
              Nutrição Personalizada
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-stone-700 hover:text-[#3f6212] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#3f6212] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button (WhatsApp CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.whatsappNumber}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-stone-600 font-medium hover:text-[#3f6212]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#3f6212]" />
            {CLINIC_INFO.whatsappDisplay}
          </a>

          <button
            onClick={onOpenBooking}
            className="py-2.5 px-5 bg-[#3f6212] hover:bg-[#365314] text-white font-semibold rounded-full text-xs transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white group-hover:rotate-12 transition-transform" />
            <span>Agendar Consulta</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-[#3f6212] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-200 px-4 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-stone-700 hover:text-[#3f6212] border-b border-stone-100"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Agendar Consulta via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
