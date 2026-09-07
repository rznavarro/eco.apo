import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Zap, Battery, Droplets, Building2, Store, SlidersHorizontal, Info } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/mockData';
import { SolutionItem } from '../types';
import { SplitText } from './effects/TextEffects';

interface SolutionsSectionProps {
  onSelectSolutionForQuote: (solution: SolutionItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolutionForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalSolution, setActiveModalSolution] = useState<SolutionItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas las Soluciones' },
    { id: 'hogar', label: 'Hogares & Departamentos' },
    { id: 'campo', label: 'Campo & Agropecuario' },
    { id: 'industria', label: 'Comercios & Industrias' },
    { id: 'distribuidores', label: 'Venta Mayorista' },
  ];

  const filteredSolutions = selectedCategory === 'todos'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="soluciones" className="py-24 bg-[#06120e] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
              Nuestras Soluciones Solares
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <SplitText text="Energía limpia diseñada para cada necesidad en Argentina" />
            </h2>
            <p className="text-emerald-200/70 text-base">
              Desde sistemas híbridos anti-cortes para familias hasta bombeo de agua en campos y plantas solares para grandes empresas.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`https://wa.me/5491168509944?text=${encodeURIComponent('Hola EcoApo! Me gustaría recibir asesoramiento sobre soluciones solares.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#84cc16] hover:text-[#a3e635] py-2 px-3 rounded-lg border border-[#84cc16]/40 hover:border-[#84cc16] transition-colors"
            >
              <span>Consultar por WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#84cc16] text-[#06120e] shadow-md shadow-lime-500/20'
                  : 'bg-emerald-950/60 text-emerald-200/80 hover:text-white hover:bg-emerald-900/60 border border-emerald-800/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#091b15] border border-emerald-800/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Image header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-emerald-950/40">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091b15] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-[#06120e]/90 text-emerald-300 backdrop-blur-md border border-emerald-700/50 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {solution.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#84cc16] text-[#06120e] font-extrabold text-[11px] px-2.5 py-1 rounded-md shadow-sm">
                    {solution.savingEstimate}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#a3e635] transition-colors leading-snug">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium mt-1">
                      {solution.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-emerald-200/70 leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>

                  {/* Quick Features */}
                  <div className="space-y-2 pt-2 border-t border-emerald-900/60">
                    {solution.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100/90">
                        <Check className="w-3.5 h-3.5 text-[#84cc16] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalSolution(solution)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900/80 border border-emerald-700/50 text-emerald-200 text-xs font-semibold text-center transition-colors cursor-pointer"
                >
                  Ver Ficha Técnica
                </button>
                <button
                  onClick={() => onSelectSolutionForQuote(solution)}
                  className="py-2.5 px-4 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <span>Cotizar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      {activeModalSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#091b15] border border-emerald-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModalSolution(null)}
              className="absolute top-4 right-4 text-emerald-400 hover:text-white p-2 rounded-lg bg-emerald-950 border border-emerald-800 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#84cc16] uppercase tracking-wider">
                {activeModalSolution.badge}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {activeModalSolution.title}
              </h3>
              <p className="text-sm text-emerald-300">
                {activeModalSolution.tagline}
              </p>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed">
              {activeModalSolution.description}
            </p>

            {/* Specifications Grid */}
            <div className="bg-[#06120e] p-4 rounded-xl border border-emerald-900/60 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Especificaciones Técnicas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalSolution.specs.map((spec, idx) => (
                  <div key={idx} className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/40">
                    <span className="block text-[11px] text-emerald-400/80">{spec.label}</span>
                    <span className="text-xs font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/40 text-xs text-emerald-200">
              <strong className="text-white">Ideal para:</strong> {activeModalSolution.idealFor}
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Ventajas y Beneficios
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {activeModalSolution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100">
                    <Check className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-900/60 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalSolution(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 hover:text-white"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const sol = activeModalSolution;
                  setActiveModalSolution(null);
                  onSelectSolutionForQuote(sol);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <span>Solicitar Cotización de este Equipo</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
