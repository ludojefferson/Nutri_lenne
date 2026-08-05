import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Star, HeartHandshake, ShieldCheck, MapPin, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { ASSETS, CLINIC_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5] to-white">
      
      {/* Soft background ambient light circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#ecfccb]/40 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7fee7] border border-[#d9f99d] text-[#3f6212] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#65a30d]" />
              <span>Atendimento Presencial em Guaianases - SP & Online</span>
            </div>

            {/* Emotional Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
              Transforme sua alimentação <span className="text-[#3f6212] italic font-serif">sem dietas impossíveis.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Atendimento nutricional personalizado para quem deseja emagrecer, ganhar qualidade de vida e criar hábitos saudáveis com acompanhamento humanizado e próximo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="py-4 px-8 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-2xl text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#depoimentos"
                className="py-4 px-8 bg-white hover:bg-stone-50 text-stone-800 font-semibold rounded-2xl text-sm border border-stone-200 transition-all text-center hover:border-stone-300 shadow-sm"
              >
                Ver Depoimentos
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-8 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Badge 1: Google Rating */}
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="font-bold text-stone-900 text-sm">5,0 no Google</p>
                <p className="text-xs text-stone-500">140+ avaliações reais</p>
              </div>

              {/* Badge 2: Satisfied Patients */}
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#3f6212]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <p className="font-bold text-stone-900 text-sm">1.200+ Pacientes</p>
                <p className="text-xs text-stone-500">Histórias transformadas</p>
              </div>

              {/* Badge 3: Individualized */}
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#3f6212]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <p className="font-bold text-stone-900 text-sm">100% Personalizado</p>
                <p className="text-xs text-stone-500">Plano feito no app</p>
              </div>

              {/* Badge 4: Presencial */}
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#3f6212]">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="font-bold text-stone-900 text-sm">Guaianases - SP</p>
                <p className="text-xs text-stone-500">Consultório completo</p>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Card Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3f6212]/20 to-lime-200/50 rounded-3xl transform rotate-2 scale-105 blur-lg" />
              
              {/* Main Photo Frame */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
                <img
                  src={ASSETS.hero}
                  alt="Dra. Lane - Nutricionista"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Patient Satisfaction Pill */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Paciente" referrerPolicy="no-referrer" />
                      <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Paciente" referrerPolicy="no-referrer" />
                      <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Paciente" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">Agendamentos Abertos</p>
                      <p className="text-[11px] text-emerald-700 font-medium">Atendimento esta semana</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 bg-[#f7fee7] text-[#3f6212] text-xs font-bold rounded-lg border border-[#d9f99d]">
                      CRN-3 48.912
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
