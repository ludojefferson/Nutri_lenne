import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { Flame, Apple, Zap, HeartPulse, Sparkles, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

interface ServicesProps {
  onSelectServiceBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#3f6212]" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#3f6212]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#3f6212]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#3f6212]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#3f6212]" />;
    }
  };

  return (
    <section id="areas" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
            <span>Atendimento Focado e Especializado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Áreas de Atendimento Nutricional
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Estratégias específicas e personalizadas para a necessidade exata da sua saúde e do seu momento de vida.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAF9F5] p-7 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-[#3f6212]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#f7fee7] border border-[#d9f99d] flex items-center justify-center mb-5 group-hover:bg-[#3f6212] transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-xl mb-1">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#3f6212] uppercase tracking-wider mb-3">
                  {service.subtitle}
                </p>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking CTA per Area */}
              <div className="pt-4 border-t border-stone-200/60">
                <button
                  onClick={() => onSelectServiceBooking(service.title)}
                  className="w-full py-3 px-4 bg-white hover:bg-[#3f6212] text-stone-800 hover:text-white font-bold rounded-xl text-xs border border-stone-200 transition-all shadow-xs flex items-center justify-center gap-2 group/btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-stone-600 group-hover/btn:fill-white transition-colors" />
                  <span>Agendar {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
