import React from 'react';
import { ArrowUpRight, ShieldCheck, Sun, CheckCircle, TrendingUp, Award, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import verdantHillsImg from '../assets/images/verdant_solar_hills_1788815605533.jpg';
import { SplitText, AnimatedCounter } from './effects/TextEffects';

interface LightSectionProps {
  onOpenQuote: () => void;
}

export const LightSection: React.FC<LightSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="nosotros" className="bg-[#f4f7f4] text-[#091b15] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Headline + Visual + Stats + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Who We Are & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>Quiénes Somos</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#06120e] leading-[1.15]">
              <SplitText text="Liderando la transición solar en Argentina" />
            </h2>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              Fundada en 2015, <strong className="text-[#06120e]">EcoApo</strong> nació con la convicción de que la energía del sol debe ser accesible, confiable y rentable tanto para una familia en Buenos Aires como para un productor agropecuario en el interior del país o una pyme industrial.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Combinamos nuestra condición de <span className="font-semibold text-emerald-900">importadores directos</span> con cuadrillas de ingeniería propias para obras llave en mano, garantizando stock permanente, repuestos locales y la mayor formación técnica de instaladores del país.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#091b15] hover:bg-[#06120e] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Conocer Más Sobre EcoApo</span>
                <ArrowUpRight className="w-4 h-4 text-[#84cc16] stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual + Stats + 01/02 Bento Blocks */}
          <div className="lg:col-span-7 space-y-8">
            {/* Visual Header with Real Installation & Metric Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-emerald-950/10 aspect-[4/3] bg-emerald-100">
                <img
                  src={verdantHillsImg}
                  alt="Instalación sustentable en campo argentino"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Stats Bar */}
              <div className="sm:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Una década de excelencia
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-display text-3xl font-extrabold text-[#06120e]">
                      <AnimatedCounter to={10} suffix="+" duration={1.5} />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Años en el Mercado</div>
                  </div>

                  <div>
                    <div className="font-display text-3xl font-extrabold text-[#06120e]">
                      <AnimatedCounter to={1400} prefix="+" duration={2} />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Instalaciones Reales</div>
                  </div>

                  <div>
                    <div className="font-display text-3xl font-extrabold text-[#06120e]">
                      <AnimatedCounter to={4800} prefix="+" suffix=" Tn" duration={2} />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">CO₂ Evitadas</div>
                  </div>

                  <div>
                    <div className="font-display text-3xl font-extrabold text-[#06120e]">
                      <AnimatedCounter to={100} suffix="%" duration={1.5} />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Cobertura Nacional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 01 Misión & 02 Visión Blocks (matching the reference layout!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 01 Misión Card */}
              <div className="bg-white p-7 rounded-2xl border border-emerald-900/10 shadow-sm space-y-3">
                <span className="font-display text-2xl font-black text-emerald-800/40">01</span>
                <h4 className="font-display text-lg font-bold text-[#06120e]">Nuestra Misión</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Facilitar la adopción de energías renovables a través de equipos certificados, dimensionamiento honesto y soporte posventa directo, convirtiendo el gasto de luz en ahorro sustentable y patrimonio.
                </p>
              </div>

              {/* 02 Visión Card (Lime Accent Block as in the reference mockup) */}
              <div className="bg-[#84cc16] p-7 rounded-2xl shadow-md text-[#06120e] space-y-3">
                <span className="font-display text-2xl font-black text-[#06120e]/40">02</span>
                <h4 className="font-display text-lg font-bold text-[#06120e]">Nuestra Visión</h4>
                <p className="text-sm text-[#0a2318] leading-relaxed font-medium">
                  Consolidarnos como el principal referente de energía solar fotovoltaica, bombeo agropecuario y capacitación técnica especializada de Argentina, impulsando comunidades energéticamente autónomas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
