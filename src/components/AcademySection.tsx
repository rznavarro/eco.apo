import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ArrowUpRight, Wrench } from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { SplitText } from './effects/TextEffects';

interface AcademySectionProps {
  onConsultCourse: (courseTitle: string) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onConsultCourse }) => {
  return (
    <section id="cursos" className="py-24 bg-[#091b15] relative text-white border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 text-[#84cc16] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EcoApo Cursos & Capacitaciones</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <SplitText text="Convertite en instalador solar profesional certificado" />
            </h2>

            <p className="text-emerald-200/80 text-base leading-relaxed">
              En EcoApo capacitamos a la nueva generación de técnicos, electricistas e ingenieros en energías renovables. Formación práctica sobre bancos reales de prueba en nuestras sedes de <strong className="text-white">Banfield</strong> y <strong className="text-white">CABA</strong>.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-[#84cc16] shrink-0" />
                <span>Certificado Nacional con matrícula técnica para trámites</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-[#84cc16] shrink-0" />
                <span>Acceso a listas de precios mayoristas exclusivas para egresados</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-emerald-100">
                <CheckCircle className="w-5 h-5 text-[#84cc16] shrink-0" />
                <span>Soporte pos-curso con nuestros ingenieros en tus primeras obras</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://cursosecoapo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-lime-500/20"
              >
                <span>Visitar Campus de Cursos (cursosecoapo.com)</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right courses list */}
          <div className="lg:col-span-7 space-y-6">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="bg-[#0c241c] border border-emerald-700/60 rounded-2xl p-6 sm:p-7 space-y-5 hover:border-emerald-500 transition-all shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#84cc16] uppercase tracking-wider bg-[#84cc16]/10 px-2.5 py-1 rounded border border-[#84cc16]/30">
                    {course.level} · {course.duration}
                  </span>
                  <span className="text-xs text-emerald-300/80 font-medium">
                    {course.modality}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-emerald-200/80 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="bg-[#081a14] p-4 rounded-xl border border-emerald-900/60 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Temas Clave de Estudio:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100">
                        <span className="text-[#84cc16] font-bold">›</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#84cc16]" />
                    <span>{course.certification}</span>
                  </span>

                  <button
                    onClick={() => onConsultCourse(course.title)}
                    className="py-2 px-4 rounded-xl bg-emerald-900/60 hover:bg-[#84cc16] text-emerald-200 hover:text-[#06120e] border border-emerald-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    Consultar Próxima Fecha
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
