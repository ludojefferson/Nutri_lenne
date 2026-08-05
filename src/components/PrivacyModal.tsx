import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF9F5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
        >
          {/* Header */}
          <div className="p-6 bg-[#2E4F1E] text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-stone-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-lime-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" /> Conformidade LGPD
            </div>
            <h3 className="text-xl font-serif font-bold">Política de Privacidade e Proteção de Dados</h3>
            <p className="text-stone-300 text-xs mt-1">
              {CLINIC_INFO.name} — Nutrição Clínica e Comportamental
            </p>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs text-stone-700 leading-relaxed">
            <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 flex items-center gap-2 text-stone-800 font-medium">
              <Lock className="w-4 h-4 text-[#4d7c0f] shrink-0" />
              Seus dados pessoais e informações de saúde são protegidos com sigilo médico absoluto nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </div>

            <h4 className="font-bold text-stone-900 text-sm">1. Coleta e Uso das Informações</h4>
            <p>
              Coletamos apenas as informações essenciais enviadas voluntariamente por você ao solicitar agendamento via WhatsApp ou formulário de contato (nome, telefone e preferências de atendimento).
            </p>

            <h4 className="font-bold text-stone-900 text-sm">2. Finalidade do Tratamento</h4>
            <p>
              Os dados coletados destinam-se exclusivamente a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Agendamento e confirmação de consultas presenciais e online;</li>
              <li>Envio de orientações nutricionais e prontuário no aplicativo do paciente;</li>
              <li>Emissão de Nota Fiscal para reembolso junto ao convênio médico.</li>
            </ul>

            <h4 className="font-bold text-stone-900 text-sm">3. Não Compartilhamento</h4>
            <p>
              Em hipótese alguma vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais ou publicitários.
            </p>

            <h4 className="font-bold text-stone-900 text-sm">4. Seus Direitos</h4>
            <p>
              Você pode solicitar a qualquer momento a confirmação, atualização ou exclusão definitiva dos seus dados armazenados em nossos sistemas enviando um e-mail para <strong className="text-stone-900">{CLINIC_INFO.email}</strong>.
            </p>
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t border-stone-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#3f6212] hover:bg-[#365314] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
            >
              Compreendi e Concordo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
