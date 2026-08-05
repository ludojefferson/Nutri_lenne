import React from 'react';
import { motion } from 'motion/react';
import { Heart, Brain, Utensils, Award, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { ASSETS, CLINIC_INFO } from '../data/content';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Large Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle background frame decoration */}
              <div className="absolute -inset-4 bg-[#F4F1EA] rounded-3xl -rotate-2" />
              
              <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
                <img
                  src={ASSETS.about}
                  alt="Nutri Lane em consulta"
                  className="w-full h-[450px] object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200/80 shadow-md flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <Award className="w-4 h-4 text-[#3f6212]" />
                  <span>Especialista em Nutrição Comportamental</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Humanized Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" /> Sobre a Nutricionista
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Acredito em uma nutrição <span className="text-[#3f6212] italic">humana, sem julgamentos</span> e focada em resultados duradouros.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Olá! Sou a <strong>Nutri Lane</strong>, nutricionista pós-graduada e apaixonada por transformar vidas através da comida de verdade. Ao longo da minha carreira, percebi que a maior barreira no emagrecimento não é a falta de vontade, mas a imposição de dietas inflexíveis que não respeitam a realidade das pessoas.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              No meu consultório em Guaianases e nos atendimentos online, minha missão é proporcionar um <strong>ambiente acolhedor</strong>, onde você é ouvido com atenção. Construímos juntos um plano alimentar saboroso, praticável e sustentável.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#3f6212] font-semibold text-sm">
                  <Heart className="w-4 h-4" /> Acolhimento Sincero
                </div>
                <p className="text-xs text-stone-500">
                  Espaço livre de culpa, julgamentos ou balanças punitivas.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#3f6212] font-semibold text-sm">
                  <Brain className="w-4 h-4" /> Mudança de Hábitos
                </div>
                <p className="text-xs text-stone-500">
                  Foco na reeducação da mente para controlar a ansiedade e beliscos.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#3f6212] font-semibold text-sm">
                  <Utensils className="w-4 h-4" /> Comida Prática & Acessível
                </div>
                <p className="text-xs text-stone-500">
                  Ingredientes simples do supermercado que você já compra.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-[#3f6212] font-semibold text-sm">
                  <Sparkles className="w-4 h-4" /> Acompanhamento Próximo
                </div>
                <p className="text-xs text-stone-500">
                  Suporte direto pelo WhatsApp durante todo o tratamento.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-7 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Agendar Minha Consulta de Avaliação
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
