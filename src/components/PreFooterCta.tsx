import React from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import verdantLandscapeImg from '../assets/images/verdant_solar_hills_1788815605533.jpg';
import { COMPANY_INFO } from '../data/mockData';

interface PreFooterCtaProps {
  onOpenQuote: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#06120e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-600/60 shadow-2xl">
          {/* Background image of verdant rolling green hills with solar panels */}
          <div className="absolute inset-0 z-0">
            <img
              src={verdantLandscapeImg}
              alt="Paisaje sustentable con paneles solares EcoApo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Deep rich gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06120e] via-[#06120e]/90 to-[#06120e]/60" />
            <div className="absolute inset-0 bg-[#06120e]/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84cc16]/20 border border-[#84cc16]/40 text-[#84cc16] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Empezá Hoy Tu Transición</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Construyamos juntos un futuro energético independiente y sustentable
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
              Enviamos tu proyecto o tu factura de luz. En menos de 24 horas hábiles nuestros ingenieros te enviarán el estudio de prefactibilidad y propuesta técnica sin compromiso.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-lime-500/25 hover:scale-[1.02] cursor-pointer text-sm"
              >
                <span>Solicitar Asesoramiento sin Cargo</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#091b15]/90 hover:bg-emerald-900/80 text-white font-bold px-6 py-4 rounded-xl border border-emerald-600/70 transition-all backdrop-blur-md text-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#84cc16] fill-current" />
                <span>Chat Directo por WhatsApp</span>
              </a>
            </div>

            {/* Micro badges */}
            <div className="pt-6 border-t border-emerald-700/50 flex flex-wrap items-center gap-6 text-xs text-emerald-200">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#84cc16]" />
                Garantía escrita de 25 años
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#84cc16]" />
                Trámite de Medidor Bidireccional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
