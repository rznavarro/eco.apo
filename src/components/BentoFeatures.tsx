import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, Zap, ArrowRight, BatteryCharging, LineChart, Shield } from 'lucide-react';
import { SplitText } from './effects/TextEffects';

interface BentoFeaturesProps {
  onSelectFeature: (featureKey: string) => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onSelectFeature }) => {
  return (
    <section className="py-20 bg-[#06120e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
            Nuestro Compromiso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            <SplitText text="Construyendo un futuro más limpio con tecnología solar inteligente" />
          </h2>
          <p className="text-emerald-200/70 text-base">
            Combinamos los mejores componentes del mercado global con la experiencia técnica argentina de más de una década en el rubro renovable.
          </p>
        </div>

        {/* 3 Bento Cards Grid (faithful to the user's reference mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Green & Sustainable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="bg-[#091b15] border border-emerald-800/50 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-[#84cc16] group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a3e635] transition-colors">
                  Sustentable y Rentable
                </h3>
                <p className="text-sm text-emerald-200/70 leading-relaxed">
                  Proyectos diseñados para amortizarse rápidamente mediante la Ley de Generación Distribuida (inyección a la red) y la reducción inmediata de costos en tarifas de energía eléctrica.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-300/80">
                <LineChart className="w-4 h-4 text-[#84cc16]" />
                <span>Hasta 90% de reducción en boleta de luz</span>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-900/60 mt-6">
              <button
                onClick={() => onSelectFeature('ahorro')}
                className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#a3e635] transition-colors cursor-pointer"
              >
                <span>Conocer Más</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Expert Team & Quality Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="bg-[#091b15] border border-emerald-800/50 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-600 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-[#84cc16] group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a3e635] transition-colors">
                  Equipo Experto y Soporte
                </h3>
                <p className="text-sm text-emerald-200/70 leading-relaxed">
                  Ingenieros y técnicos capacitados con matriculación para tramitar el medidor bidireccional y avalar cada instalación con memoria de cálculo y pruebas de carga reales.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-300/80">
                <Shield className="w-4 h-4 text-[#84cc16]" />
                <span>Garantía de rendimiento lineal por 25 años</span>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-900/60 mt-6">
              <button
                onClick={() => onSelectFeature('equipo')}
                className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#a3e635] transition-colors cursor-pointer"
              >
                <span>Conocer Más</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Smart & Efficient Energy (Lime Accent Card as in reference image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="bg-[#84cc16] text-[#06120e] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#a3e635] hover:-translate-y-1 shadow-xl shadow-lime-500/20 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#06120e] flex items-center justify-center text-[#84cc16] group-hover:scale-110 transition-transform shadow-md">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#06120e] mb-2">
                  Energía Inteligente & Baterías
                </h3>
                <p className="text-sm text-[#0c261c] font-medium leading-relaxed">
                  Sistemas híbridos con baterías de litio LiFePO4 que conmutan en menos de 10 milisegundos cuando hay un corte de red. Sin ruidos, sin humo y sin mantenimiento.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#06120e]">
                <BatteryCharging className="w-4 h-4" />
                <span>Autonomía continua para heladeras, WiFi y aires</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#06120e]/15 mt-6">
              <button
                onClick={() => onSelectFeature('hibridos')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#06120e] group-hover:translate-x-0.5 transition-all cursor-pointer"
              >
                <span>Explorar Sistemas Híbridos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
