import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Zap, ArrowUpRight, CheckCircle2, Sliders } from 'lucide-react';
import { REAL_PROJECTS } from '../data/mockData';
import { ProjectCase } from '../types';
import { SplitText } from './effects/TextEffects';

interface ProjectsGalleryProps {
  onQuoteProjectLike: (project: ProjectCase) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onQuoteProjectLike }) => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Agropecuario', 'Industrial', 'Comercial'];

  const filteredProjects = filter === 'Todos'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-24 bg-[#06120e] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
              Casos Reales en Argentina
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <SplitText text="Instalaciones funcionando en todo el país" />
            </h2>
            <p className="text-emerald-200/70 text-base">
              Conocé algunas de las más de 1.400 obras ejecutadas por el equipo de ingeniería de EcoApo en Buenos Aires, Córdoba, Santa Fe y el interior rural.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#84cc16] text-[#06120e] shadow-md shadow-lime-500/20'
                    : 'bg-emerald-950/60 text-emerald-200 hover:text-white border border-emerald-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-[#091b15] border border-emerald-800/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091b15] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-[#06120e]/90 text-emerald-300 backdrop-blur-md border border-emerald-700/50 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#84cc16]" />
                    <span>{project.location}, {project.province}</span>
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#84cc16] text-[#06120e] font-extrabold text-[11px] px-2.5 py-1 rounded-md">
                    {project.power}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#84cc16]">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#a3e635] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="bg-[#06120e] p-3 rounded-xl border border-emerald-900/60 space-y-1.5 text-xs">
                    <div className="flex justify-between text-emerald-300/80">
                      <span>Equipamiento:</span>
                      <span className="font-semibold text-white">{project.inverterType}</span>
                    </div>
                    <div className="flex justify-between text-emerald-300/80">
                      <span>Módulos solares:</span>
                      <span className="font-semibold text-white">{project.panelsCount} paneles</span>
                    </div>
                    <div className="flex justify-between text-emerald-300/80">
                      <span>Ahorro logrado:</span>
                      <span className="font-bold text-[#84cc16]">{project.savingPercent}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onQuoteProjectLike(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-950 hover:bg-[#84cc16] text-emerald-200 hover:text-[#06120e] border border-emerald-700/50 hover:border-[#84cc16] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Pedir Cotización Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
