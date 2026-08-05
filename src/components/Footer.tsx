import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { Leaf, Instagram, MessageSquare, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenBooking }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#3f6212] text-white flex items-center justify-center">
                <Leaf className="w-5 h-5 text-lime-300 fill-lime-300/30" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-tight block leading-none">
                  Nutri Lane
                </span>
                <span className="text-[10px] text-stone-400 tracking-wider uppercase font-semibold block mt-0.5">
                  Nutrição Personalizada
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Atendimento nutricional focado em emagrecimento saudável, reeducação alimentar e saúde da mulher sem dietas restritivas.
            </p>

            <p className="text-xs text-stone-400">
              <strong className="text-stone-300">Responsável Técnica:</strong> Nutri Lane — CRN-3 48.912/SP
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Nutricionista</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais do Método</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Avaliações do Google</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona a Consulta</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atendimento</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Consultório Guaianases</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Localização e Contato</h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.street}, {CLINIC_INFO.address.suite} — {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
              </p>
            </div>
          </div>

          {/* Col 4: Socials & LGPD */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm">Redes Sociais & Privacidade</h4>
            
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 hover:bg-stone-700 text-white rounded-2xl transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={onOpenBooking}
                className="p-3 bg-stone-800 hover:bg-emerald-600 text-white rounded-2xl transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
              </button>
              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-800 hover:bg-stone-700 text-white rounded-2xl transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            <div>
              <button
                onClick={onOpenPrivacy}
                className="text-xs text-stone-400 hover:text-lime-300 flex items-center gap-1.5 transition-colors underline"
              >
                <ShieldCheck className="w-4 h-4" />
                Política de Privacidade & LGPD
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Nutri Lane. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido para gerar saúde e transformar vidas <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
