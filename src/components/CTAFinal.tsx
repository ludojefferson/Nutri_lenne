import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface CTAFinalProps {
  onOpenBooking: () => void;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#3f6212] text-white relative overflow-hidden">
      
      {/* Soft ambient background circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-lime-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Transformação e Saúde Sustentável
        </div>

        {/* Big Requested Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
          Sua saúde começa com uma decisão.
        </h2>

        {/* Subtitle */}
        <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Dê o primeiro passo hoje mesmo. Atendimento presencial e personalizado no Centro Empresarial de Guaianases ou online para onde você estiver.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-lime-200 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-lime-400" />
            <span>Atendimento 100% Individualizado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-lime-400" />
            <span>Plano Alimentar no Aplicativo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-lime-400" />
            <span>Acompanhamento Próximo</span>
          </div>
        </div>

        {/* Requested Big CTA Button */}
        <div className="pt-4">
          <button
            onClick={onOpenBooking}
            className="py-5 px-10 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold rounded-2xl text-base sm:text-lg shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 group"
          >
            <MessageSquare className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
            <span>Agendar Consulta pelo WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-xs text-stone-300 pt-2">
          Resposta em poucos minutos • {CLINIC_INFO.whatsappDisplay}
        </p>

      </div>
    </section>
  );
};
