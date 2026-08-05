import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Video, CheckCircle, MessageSquare, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'Presencial' | 'Online';
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'Presencial',
  defaultService = 'Emagrecimento Saudável'
}) => {
  const [mode, setMode] = useState<'Presencial' | 'Online'>(defaultMode);
  const [goal, setGoal] = useState<string>(defaultService);
  const [preferredShift, setPreferredShift] = useState<string>('Manhã (08h às 12h)');
  const [name, setName] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Dra. Lane! Gostaria de agendar uma consulta nutricional.
    
📌 *Tipo:* ${mode} ${mode === 'Presencial' ? '(Guaianases - SP)' : '(Atendimento Online)'}
🎯 *Objetivo:* ${goal}
⏰ *Horário Preferido:* ${preferredShift}
👤 *Nome:* ${name || 'Não informado'}

Vim pelo site e aguardo as opções de datas disponíveis!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const goalsList = [
    'Emagrecimento Saudável',
    'Reeducação Alimentar',
    'Performance & Hipertrofia',
    'Saúde Gastrointestinal & Exames',
    'Saúde da Mulher (SOP / Hormonal)',
    'Outro Objetivo'
  ];

  const shiftList = [
    'Manhã (08h às 12h)',
    'Tarde (13h às 17h)',
    'Noite (17h às 19h)',
    'Sábados (08h às 13h)'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10"
        >
          {/* Header */}
          <div className="bg-[#2E4F1E] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-lime-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Agendamento Inteligente
            </div>
            <h3 className="text-2xl font-serif font-bold">Agende sua Consulta</h3>
            <p className="text-stone-200 text-sm mt-1">
              Responda a 3 passos rápidos para direcionarmos o melhor horário no WhatsApp.
            </p>

            {/* Step Progress Bar */}
            <div className="flex gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    step >= s ? 'bg-lime-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSendToWhatsApp} className="p-6 space-y-6">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <label className="block text-sm font-semibold text-stone-800">
                  1. Qual tipo de atendimento você prefere?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('Presencial')}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      mode === 'Presencial'
                        ? 'border-[#3f6212] bg-[#f7fee7] text-[#365314] ring-2 ring-[#4d7c0f]/20 shadow-sm'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full mb-3">
                      <MapPin className={`w-6 h-6 ${mode === 'Presencial' ? 'text-[#4d7c0f]' : 'text-stone-400'}`} />
                      {mode === 'Presencial' && <CheckCircle className="w-5 h-5 text-[#4d7c0f]" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Presencial</p>
                      <p className="text-xs text-stone-500 mt-0.5">Guaianases - São Paulo</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('Online')}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      mode === 'Online'
                        ? 'border-[#3f6212] bg-[#f7fee7] text-[#365314] ring-2 ring-[#4d7c0f]/20 shadow-sm'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full mb-3">
                      <Video className={`w-6 h-6 ${mode === 'Online' ? 'text-[#4d7c0f]' : 'text-stone-400'}`} />
                      {mode === 'Online' && <CheckCircle className="w-5 h-5 text-[#4d7c0f]" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Online</p>
                      <p className="text-xs text-stone-500 mt-0.5">Atendimento Brasil / Exterior</p>
                    </div>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 px-6 bg-[#3f6212] hover:bg-[#365314] text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Próximo Passo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <label className="block text-sm font-semibold text-stone-800">
                  2. Qual o seu principal objetivo no momento?
                </label>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {goalsList.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`w-full p-3 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                        goal === g
                          ? 'border-[#3f6212] bg-[#f7fee7] text-[#365314] font-medium'
                          : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{g}</span>
                      {goal === g && <CheckCircle className="w-4 h-4 text-[#4d7c0f]" />}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 px-4 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-all text-sm"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 px-6 bg-[#3f6212] hover:bg-[#365314] text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Avançar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1">
                    Seu Nome Completo (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Maria Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#4d7c0f]/30 bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1">
                    Qual período você prefere para o atendimento?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {shiftList.map((shift) => (
                      <button
                        key={shift}
                        type="button"
                        onClick={() => setPreferredShift(shift)}
                        className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                          preferredShift === shift
                            ? 'border-[#3f6212] bg-[#f7fee7] text-[#365314] font-medium'
                            : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        {shift}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Atendimento rápido! Responderemos em instantes com as datas disponíveis.</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3.5 px-4 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl transition-all text-sm"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    Enviar no WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
