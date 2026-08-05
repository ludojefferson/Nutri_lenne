import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO, ASSETS } from '../data/content';
import { MapPin, Clock, Phone, Navigation, Building2, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Highlight */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Atendimento presencial em Guaianases - São Paulo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Venha conhecer nosso espaço de atendimento
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Consultório moderno, seguro e confortável no centro comercial de Guaianases com fácil acesso por trem ou carro.
          </p>
        </div>

        {/* Map + Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#FAF9F5] p-4 sm:p-6 rounded-3xl border border-stone-200 shadow-md">
          
          {/* Left Column: Embedded Google Maps */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-stone-200 relative shadow-inner">
            <iframe
              title="Google Maps Guaianases Nutri Lane"
              src={CLINIC_INFO.address.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Right Column: Address Details, Hours & Route CTA */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold text-[#3f6212] uppercase tracking-wider block mb-1">
                  Consultório Presencial
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {CLINIC_INFO.name} Guaianases
                </h3>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-stone-200/80">
                <MapPin className="w-5 h-5 text-[#3f6212] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 space-y-0.5">
                  <p className="font-bold text-stone-900">{CLINIC_INFO.address.street}</p>
                  <p>{CLINIC_INFO.address.suite}</p>
                  <p>{CLINIC_INFO.address.neighborhood} — {CLINIC_INFO.address.city} / {CLINIC_INFO.address.state}</p>
                  <p className="text-stone-400">CEP: {CLINIC_INFO.address.cep}</p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start gap-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-stone-200/80">
                <Clock className="w-5 h-5 text-[#3f6212] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 space-y-1">
                  <p className="font-bold text-stone-900">Horário de Funcionamento</p>
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-4 text-stone-600">
                      <span>{h.days}:</span>
                      <span className="font-medium text-stone-900">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comfort highlights */}
              <div className="space-y-2 pt-1 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Estacionamento e segurança no local</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Próximo à Estação Guaianases da CPTM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Bioimpedância médica de alta precisão</span>
                </div>
              </div>

            </div>

            {/* Route Button */}
            <div className="pt-2">
              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#3f6212] hover:bg-[#365314] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
