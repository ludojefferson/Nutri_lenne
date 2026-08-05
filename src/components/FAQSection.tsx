import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#FAF9F5] border-y border-stone-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Perguntas Frequentes sobre a Consulta
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Tudo o que você precisa saber sobre o atendimento presencial e online com a Nutri Lane.
          </p>

          {/* Quick Search */}
          <div className="pt-2 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: convênio, retorno, tempo)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#4d7c0f]/20 shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left font-serif font-bold text-stone-900 text-base flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-full bg-stone-100 text-stone-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#f7fee7] text-[#3f6212]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center space-y-3 p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <p className="text-stone-700 font-medium text-xs sm:text-sm">
            Ficou com alguma dúvida específica que não encontrou aqui?
          </p>
          <button
            onClick={onOpenBooking}
            className="py-2.5 px-5 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-xl text-xs inline-flex items-center gap-2 shadow-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            Tirar Dúvida no WhatsApp com a Equipe
          </button>
        </div>

      </div>
    </section>
  );
};
