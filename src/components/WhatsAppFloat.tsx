import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, CheckCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Consulta Presencial em Guaianases');

  const options = [
    'Consulta Presencial em Guaianases',
    'Consulta Online (Brasil e Exterior)',
    'Dúvidas sobre Reembolso de Convênio',
    'Pacotes de Acompanhamento'
  ];

  const handleStartChat = () => {
    const text = `Olá Dra. Lane! Vim pelo site e gostaria de informações sobre: ${selectedOption}. Como funcionam os próximos horários disponíveis?`;
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#128C7E] text-white p-4 relative flex items-center gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                    alt="Nutri Lane"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <h4 className="font-bold text-sm leading-tight">Nutri Lane</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-lime-300" /> Atendimento Online Agora
                </p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#E5DDD5] space-y-3 max-h-80 overflow-y-auto text-xs">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-stone-800 space-y-1">
                <p className="font-medium text-stone-900">Olá! Seja muito bem-vindo(a) 👋🏼</p>
                <p className="text-stone-600">
                  Como a Nutri Lane pode ajudar você hoje? Selecione o assunto e fale direto no WhatsApp:
                </p>
                <span className="text-[10px] text-stone-400 block text-right flex items-center justify-end gap-1">
                  16:13 <CheckCheck className="w-3 h-3 text-emerald-600" />
                </span>
              </div>

              {/* Option Selectors */}
              <div className="space-y-1.5 pt-1">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all ${
                      selectedOption === opt
                        ? 'bg-[#128C7E] text-white shadow-md'
                        : 'bg-white hover:bg-stone-50 text-stone-700 border border-stone-200/60'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-stone-200">
              <button
                onClick={handleStartChat}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4 fill-white" />
                Iniciar Conversa no WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Atendimento pelo WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </motion.button>
    </div>
  );
};
