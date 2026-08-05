import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS } from '../data/content';
import { Calendar, Stethoscope, Utensils, MessageCircleHeart, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Calendar className="w-6 h-6 text-white" />;
      case 2:
        return <Stethoscope className="w-6 h-6 text-white" />;
      case 3:
        return <Utensils className="w-6 h-6 text-white" />;
      case 4:
        return <MessageCircleHeart className="w-6 h-6 text-white" />;
      default:
        return <CheckCircle className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-[#FAF9F5] border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Como funciona sua jornada de transformação
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Sem complicações ou burocracias. Entenda as 4 etapas da sua consulta com a Nutri Lane.
          </p>
        </div>

        {/* 4 Steps Grid/Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {HOW_IT_WORKS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#3f6212]/40 transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Step Number Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3f6212] flex items-center justify-center shadow-md">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="text-4xl font-serif font-bold text-stone-200">
                    0{step.number}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#3f6212] uppercase tracking-wider mb-1">
                  Etapa {step.number}
                </p>

                <h3 className="font-serif font-bold text-stone-900 text-xl mb-2">
                  {step.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-stone-100 space-y-1.5">
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="py-4 px-8 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-3"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Iniciar no Passo 1: Agendar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
