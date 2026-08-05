import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Droplets, Calculator, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const NutritionTools: React.FC = () => {
  const [weight, setWeight] = useState<number>(68);
  const [activity, setActivity] = useState<string>('moderado');
  const [goal, setGoal] = useState<string>('emagrecimento');

  // Water calculation: ~35ml to 40ml per kg of weight
  const waterLiters = ((weight * 38) / 1000).toFixed(1);
  
  // Protein calculation recommendation range
  let minProtein = (weight * 1.2).toFixed(0);
  let maxProtein = (weight * 1.8).toFixed(0);

  if (goal === 'hipertrofia') {
    minProtein = (weight * 1.6).toFixed(0);
    maxProtein = (weight * 2.2).toFixed(0);
  }

  const handleSendAssessmentToWhatsApp = () => {
    const message = `Olá Dra. Lane! Usei a calculadora no seu site e calculei minha meta diária:
    
⚖️ *Peso Atual:* ${weight} kg
🎯 *Objetivo:* ${goal === 'emagrecimento' ? 'Emagrecimento' : goal === 'hipertrofia' ? 'Ganho de Massa' : 'Saúde & Qualidade de Vida'}
💧 *Meta de Água:* ${waterLiters} Litros/dia
🥩 *Meta Proteica Estimada:* ${minProtein}g a ${maxProtein}g / dia

Gostaria de agendar uma avaliação para adequar meu plano completo!`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white border-y border-stone-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column Left: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-[#3f6212] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Ferramenta Gratuita de Saúde
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Calcule sua Meta de Hidratação & Proteína em 10 Segundos
            </h2>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              O primeiro passo para o emagrecimento ou ganho de massa de sucesso é alinhar a ingestão de água e proteína adequada para o seu metabolismo.
            </p>

            <ul className="space-y-2 pt-2 text-xs font-medium text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4d7c0f]" /> Sem fórmulas genéricas da internet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4d7c0f]" /> Envie o resultado direto para a Dra. Lane
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4d7c0f]" /> Descubra o ajuste ideal para sua rotina
              </li>
            </ul>
          </div>

          {/* Column Right: Interactive Widget */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
            <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-lime-100 text-[#3f6212] rounded-2xl">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">Calculadora Nutricional</h3>
                  <p className="text-stone-500 text-xs">Ajuste os valores para ver seu resultado em tempo real</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Weight Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                  <span>Seu Peso Corporal</span>
                  <span className="text-[#3f6212] font-bold text-sm bg-lime-100 px-2.5 py-0.5 rounded-lg">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={140}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#3f6212] cursor-pointer"
                />
              </div>

              {/* Goal Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-stone-800">Seu Objetivo Principal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-stone-200 text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#4d7c0f]/20"
                >
                  <option value="emagrecimento">Emagrecimento & Queima de Gordura</option>
                  <option value="hipertrofia">Ganho de Massa Muscular / Definição</option>
                  <option value="saude">Saúde, Disposição e Reeducação</option>
                </select>
              </div>
            </div>

            {/* Results Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center gap-3">
                <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-sm">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-emerald-800 font-medium">Meta diária de água</p>
                  <p className="text-2xl font-serif font-bold text-emerald-950">{waterLiters} Litros/dia</p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center gap-3">
                <div className="p-3 bg-amber-500 text-white rounded-xl shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-800 font-medium">Meta proteica diária</p>
                  <p className="text-2xl font-serif font-bold text-amber-950">{minProtein}g a {maxProtein}g</p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-6">
              <button
                onClick={handleSendAssessmentToWhatsApp}
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 fill-white" />
                Enviar Resultado para Análise no WhatsApp da Nutri Lane
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
