import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink, Quote, Sparkles, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/content';

interface TestimonialsProps {
  onOpenReviewsModal: () => void;
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenReviewsModal, onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const highlightPhrases = [
    "Melhor nutricionista que já passei.",
    "Atendimento extremamente humano.",
    "Plano alimentar que realmente funciona.",
    "Profissional muito atenciosa.",
    "Excelente acompanhamento."
  ];

  const categories = ['Todos', 'Emagrecimento', 'Reeducação Alimentar', 'Performance & Saúde', 'Qualidade de Vida', 'Saúde da Mulher'];

  const filteredReviews = REVIEWS.filter(
    (r) => activeFilter === 'Todos' || r.tag === activeFilter
  );

  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-100/50 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>SEÇÃO PRINCIPAL — AVALIAÇÕES REAIS DO GOOGLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            O que nossos pacientes dizem sobre a <span className="text-[#3f6212] italic">Nutri Lane</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            A prova social da nossa dedicação: histórias reais de emagrecimento, saúde e transformação de vida.
          </p>

          {/* Large Airbnb-style Google Rating Banner */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-[#FAF9F5] px-6 py-3 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-3xl font-serif font-bold text-stone-900">5,0</span>
                <div className="flex items-center gap-0.5 text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="h-8 w-px bg-stone-300 hidden sm:block" />

              <div className="text-left">
                <p className="text-xs font-bold text-stone-900 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Baseado nas avaliações do Google
                </p>
                <p className="text-[11px] text-stone-500">140+ depoimentos 100% autênticos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Highlight Quote Chips Bar */}
        <div className="mb-10 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center justify-center min-w-max gap-3 px-4">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mr-1">
              Destaques:
            </span>
            {highlightPhrases.map((phrase, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-[#f7fee7] border border-[#d9f99d] text-[#3f6212] rounded-full text-xs font-bold shadow-2xs flex items-center gap-1.5"
              >
                <Quote className="w-3 h-3 text-[#65a30d]" />
                "{phrase}"
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar mb-8 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-[#3f6212] text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Airbnb Style Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAF9F5] p-7 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#3f6212]/30 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#3f6212]/10 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-600/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">{review.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-stone-400">• {review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight Quote Banner */}
                <div className="inline-block px-3 py-1 bg-[#f7fee7] text-[#3f6212] text-xs font-bold rounded-lg mb-3 border border-[#d9f99d]">
                  "{review.highlightQuote}"
                </div>

                {/* Commentary */}
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1 font-medium text-emerald-800">
                  <CheckCircle className="w-3.5 h-3.5" /> Google Verificado
                </span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200 text-[11px]">
                  {review.treatmentType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FAF9F5] p-8 rounded-3xl border">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-serif font-bold text-xl text-stone-900">
              Quer ser nossa próxima história de sucesso?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Agende sua consulta de avaliação presencial em Guaianases ou online para todo o Brasil.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenReviewsModal}
              className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-stone-50 text-stone-800 font-bold rounded-xl text-xs border border-stone-300 transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-[#3f6212]" />
              Ver Todas as Avaliações no Google
            </button>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto py-3.5 px-6 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Agendar Minha Consulta
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
