import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, ShieldCheck, SunMedium, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import solarEngineerImg from '../assets/images/solar_engineer_hero_1788815493429.jpg';
import { SplitText, WordRotate, AnimatedCounter, ShimmerText } from './effects/TextEffects';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenCalculator }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#040e0a] via-[#071712] to-[#06120e]">
      {/* Subtle radial glow decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#84cc16]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Pill Badge with pulse */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-700/50 backdrop-blur-md shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#84cc16] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Líderes en Energía Solar Argentina · Desde 2015
              </span>
            </motion.div>

            {/* Main Dynamic Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                <SplitText text="Impulsando un" delay={0.1} /> <br />
                <ShimmerText className="font-extrabold">
                  Futuro Sustentable
                </ShimmerText> <br />
                <span className="inline-flex items-center gap-2 flex-wrap">
                  <span className="text-white">e Inteligente</span>
                  <WordRotate
                    words={['para tu Hogar', 'para tu Empresa', 'para el Campo', 'para la Industria', 'con Ahorro Real']}
                    className="text-[#a3e635] bg-[#84cc16]/10 px-3 py-1 rounded-xl border border-[#84cc16]/30 text-3xl sm:text-4xl lg:text-5xl"
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-emerald-100/75 max-w-2xl font-normal leading-relaxed"
            >
              En <strong className="text-white font-medium">EcoApo</strong> transformamos la radiación solar en ahorro económico real e independencia energética. Diseñamos e instalamos sistemas para <span className="text-emerald-200 underline decoration-[#84cc16]/40 underline-offset-4">hogares, campo e industrias</span> en todo el país.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2.5 bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-lime-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>Calcular Mi Ahorro Solar</span>
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-100 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-emerald-700/60 hover:border-emerald-500 transition-all cursor-pointer"
              >
                <span>Pedir Cotización Llave en Mano</span>
                <ArrowUpRight className="w-4 h-4 text-[#84cc16] stroke-[2.5]" />
              </button>
            </motion.div>

            {/* Animated Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 border-t border-emerald-900/50 flex flex-wrap items-center gap-8 sm:gap-10"
            >
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <AnimatedCounter to={10} suffix="+" duration={1.5} />
                  <span className="text-[#84cc16] text-xl ml-1.5">Años</span>
                </div>
                <div className="text-xs text-emerald-300/70 font-medium">Trayectoria en Argentina</div>
              </div>

              <div className="h-9 w-px bg-emerald-800/40 hidden sm:block" />

              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <AnimatedCounter to={1400} prefix="+" suffix=" Obras" duration={2} />
                </div>
                <div className="text-xs text-emerald-300/70 font-medium">Instalaciones Exitosas</div>
              </div>

              <div className="h-9 w-px bg-emerald-800/40 hidden sm:block" />

              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center">
                  <AnimatedCounter to={90} prefix="Hasta " suffix="%" duration={1.8} />
                </div>
                <div className="text-xs text-emerald-300/70 font-medium">Ahorro en Factura Eléctrica</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with engineer & solar panels */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-700/50 shadow-2xl bg-emerald-950/40 group"
            >
              {/* Main Image: High Quality Solar Field & Inspection */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                <img
                  src={solarEngineerImg}
                  alt="Ingeniera solar de EcoApo inspeccionando instalación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06120e] via-[#06120e]/20 to-transparent" />
              </div>

              {/* Floating Pill on top right of the image */}
              <div className="absolute top-4 right-4 bg-[#06120e]/85 backdrop-blur-md border border-emerald-600/50 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg">
                <div className="w-6 h-6 rounded-full bg-[#84cc16]/20 flex items-center justify-center text-[#84cc16]">
                  <SunMedium className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-emerald-100">
                  Energía Limpia 24/7
                </span>
              </div>

              {/* Floating Status card on bottom of the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#091f17]/90 backdrop-blur-md border border-emerald-600/60 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#84cc16] to-[#15803d] flex items-center justify-center text-[#06120e] shrink-0 font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#06120e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Confiable. Eficiente. Seguro.</h4>
                    <p className="text-xs text-emerald-300/80">Equipos Tier 1 con garantía oficial local</p>
                  </div>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-[#84cc16] bg-[#84cc16]/10 px-2 py-1 rounded border border-[#84cc16]/30">
                  Certificado
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Partner / Trust Bar below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 pt-8 border-t border-emerald-900/60"
        >
          <div className="bg-[#091b15]/80 border border-emerald-800/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Partner Card with Inset Photo */}
              <div className="md:col-span-5 flex items-center gap-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden border border-emerald-700/60 shrink-0 shadow-md">
                  <img
                    src={solarEngineerImg}
                    alt="Equipo de ingeniería solar EcoApo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06120e]/90 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-bold text-center text-[#84cc16] bg-[#06120e]/80 py-0.5 rounded backdrop-blur-xs">
                    Aliado Solar
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#84cc16] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tu Aliado Estratégico</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    Respaldo de ingeniería en soluciones solares integrales.
                  </h3>
                </div>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-emerald-900/60 pt-4 md:pt-0 md:pl-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Tecnología Certificada</h5>
                    <p className="text-[11px] text-emerald-300/70">Deye, Growatt, Canadian Solar</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Ingenieros Matriculados</h5>
                    <p className="text-[11px] text-emerald-300/70">Firma de planos y medidor bidireccional</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Cobertura en 24 Provincias</h5>
                    <p className="text-[11px] text-emerald-300/70">Envíos e instalaciones a todo el país</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
