import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/content';
import { UtensilsCrossed, MessageCircleHeart, Smile, Brain, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const Differentials: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#3f6212]" />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart className="w-6 h-6 text-[#3f6212]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#3f6212]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#3f6212]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#3f6212]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#3f6212]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-[#FAF9F5] border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" /> Por que escolher a Nutri Lane
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Diferenciais que garantem a sua adesão e sucesso
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Um método estruturado para você atingir seus objetivos de forma leve, sem passar fome e sem desistir no caminho.
          </p>
        </div>

        {/* Grid of 6 Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#3f6212]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#f7fee7] border border-[#d9f99d] flex items-center justify-center mb-5 group-hover:bg-[#3f6212] group-hover:text-white transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 font-bold text-sm">✔</span>
                  <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-[#3f6212] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
