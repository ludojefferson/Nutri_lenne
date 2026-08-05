import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, CheckCircle, Search, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/content';

interface GoogleReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBooking: () => void;
}

export const GoogleReviewsModal: React.FC<GoogleReviewsModalProps> = ({
  isOpen,
  onClose,
  onSelectBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string>('Todos');

  if (!isOpen) return null;

  const tags = ['Todos', 'Emagrecimento', 'Reeducação Alimentar', 'Performance & Saúde', 'Qualidade de Vida', 'Saúde da Mulher'];

  const filteredReviews = REVIEWS.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.highlightQuote.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = activeTag === 'Todos' || r.tag === activeTag;

    return matchesSearch && matchesTag;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF9F5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
        >
          {/* Header */}
          <div className="p-6 bg-white border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-xl text-stone-900">5.0</span>
                <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> 148 Avaliações Verificadas no Google
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Depoimentos Reais de Pacientes da Nutri Lane
              </h2>
            </div>

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 bg-stone-50 border-b border-stone-200 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar depoimento por palavra-chave (ex: emagrecimento, atenciosa, exames)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d7c0f]/20"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeTag === tag
                      ? 'bg-[#3f6212] text-white shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4 max-h-[60vh]">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-12 text-stone-500">
                <p>Nenhuma avaliação encontrada para os filtros selecionados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between hover:border-[#3f6212]/30 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-11 h-11 rounded-full object-cover border border-stone-200"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-semibold text-stone-900 text-sm">{review.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-stone-500">
                              <span>{review.date}</span>
                              <span>•</span>
                              <span>{review.treatmentType}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <div className="inline-block px-2.5 py-1 bg-lime-100 text-[#3f6212] text-xs font-semibold rounded-lg mb-2">
                        "{review.highlightQuote}"
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed mb-3">
                        {review.comment}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5" /> Avaliação verificada no Google
                      </span>
                      <span>{review.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer actions */}
          <div className="p-4 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 text-xs flex items-center gap-1 font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver perfil oficial no Google Meu Negócio
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  onClose();
                  onSelectBooking();
                }}
                className="px-5 py-2.5 bg-[#3f6212] hover:bg-[#365314] text-white rounded-xl text-xs font-bold shadow-md"
              >
                Quero Minha Consulta
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
