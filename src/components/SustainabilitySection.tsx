import React from 'react';
import { Leaf, ShieldCheck, Droplets, SunMedium, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import seedlingImg from '../assets/images/hands_seedling_eco_1788815517484.jpg';
import { SplitText, AnimatedCounter } from './effects/TextEffects';

interface SustainabilitySectionProps {
  onOpenQuote: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-[#071711] text-white relative overflow-hidden border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Hands holding plant seedling (as in the reference mockup) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-700/60 shadow-2xl group">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={seedlingImg}
                  alt="Sustentabilidad y compromiso ambiental en EcoApo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071711] via-transparent to-black/20" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#091f17]/95 backdrop-blur-md border border-emerald-600/60 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#84cc16] flex items-center justify-center text-[#06120e] shrink-0 font-bold">
                    <Leaf className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Impacto Positivo Real</h4>
                    <p className="text-xs text-emerald-300/80">
                      <AnimatedCounter to={4800} prefix="+" suffix=" Tn de CO₂ neutralizadas" duration={2.2} />
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#84cc16] bg-[#84cc16]/10 px-2 py-1 rounded border border-[#84cc16]/30">
                  ESG 100%
                </span>
              </div>
            </div>
          </div>

          {/* Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-bold uppercase tracking-wider">
              <SunMedium className="w-3.5 h-3.5" />
              <span>Sustentabilidad en Nuestro ADN</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <SplitText text="Construyendo un presente limpio y un futuro rentable" />
            </h2>

            <p className="text-emerald-200/80 text-base leading-relaxed">
              En <strong className="text-white">EcoApo</strong> entendemos la sustentabilidad no solo como un principio ecológico, sino como una decisión económica inteligente para familias y empresas que buscan independencia ante la volatilidad tarifaria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#091f17] border border-emerald-800/60 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Reducción Drástica de Emisiones</span>
                </div>
                <p className="text-xs text-emerald-300/70 leading-relaxed">
                  Cada kWp instalado evita aproximadamente 540 kg de gases de efecto invernadero al año en Argentina.
                </p>
              </div>

              <div className="bg-[#091f17] border border-emerald-800/60 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Conservación de Recursos Fósiles</span>
                </div>
                <p className="text-xs text-emerald-300/70 leading-relaxed">
                  Sustitución directa de generadores diésel y nafteros en campos ganaderos y zonas rurales aisladas.
                </p>
              </div>

              <div className="bg-[#091f17] border border-emerald-800/60 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Empoderamiento Productivo</span>
                </div>
                <p className="text-xs text-emerald-300/70 leading-relaxed">
                  Autonomía energética continua para tambos, criaderos, industrias y hogares sin depender de la red pública.
                </p>
              </div>

              <div className="bg-[#091f17] border border-emerald-800/60 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Economía Circular & 25 Años</span>
                </div>
                <p className="text-xs text-emerald-300/70 leading-relaxed">
                  Módulos de silicio monocristalino Tier 1 con garantía de generación asegurada durante un cuarto de siglo.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-lime-500/20 cursor-pointer"
              >
                <span>Sumar tu Proyecto al Cambio</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
