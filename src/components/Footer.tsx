import React from 'react';
import { Sun, Phone, Mail, MapPin, ArrowUpRight, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040c09] text-white border-t border-emerald-950/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-950/80">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Empresa argentina líder desde 2015 en distribución, ingeniería e instalación de sistemas solares fotovoltaicos, térmicos y bombeo para hogares, campo e industrias.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#84cc16]" />
              <span>Garantía Oficial & Envíos a todo el país</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Soluciones
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/70">
              <li><a href="#soluciones" className="hover:text-[#84cc16] transition-colors">Sistemas Híbridos</a></li>
              <li><a href="#soluciones" className="hover:text-[#84cc16] transition-colors">Sistemas On-Grid</a></li>
              <li><a href="#soluciones" className="hover:text-[#84cc16] transition-colors">Bombeo Solar Rural</a></li>
              <li><a href="#soluciones" className="hover:text-[#84cc16] transition-colors">Termotanques Solares</a></li>
              <li><a href="#soluciones" className="hover:text-[#84cc16] transition-colors">Venta Mayorista</a></li>
            </ul>
          </div>

          {/* Company & Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Empresa & Formación
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/70">
              <li><a href="#calculadora" className="hover:text-[#84cc16] transition-colors">Simulador de Ahorro</a></li>
              <li><a href="#proyectos" className="hover:text-[#84cc16] transition-colors">Casos de Éxito en Argentina</a></li>
              <li><a href="#cursos" className="hover:text-[#84cc16] transition-colors">Cursos de Instalador (cursosecoapo.com)</a></li>
              <li><a href="#nosotros" className="hover:text-[#84cc16] transition-colors">Sobre EcoApo</a></li>
              <li><a href="#sucursales" className="hover:text-[#84cc16] transition-colors">Sucursales Banfield & CABA</a></li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Contacto Directo
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#84cc16] shrink-0 mt-0.5" />
                <span>Banfield (GBA Sur) & CABA (Capital Federal)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-3 rounded-lg bg-[#84cc16] text-[#06120e] font-bold text-xs shadow-sm hover:bg-[#a3e635] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Atención Inmediata</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div>
            © {new Date().getFullYear()} EcoApo Argentina. Todos los derechos reservados.
            <span className="block sm:inline sm:ml-2 text-emerald-500/70">
              Inscripto bajo Ley Nacional 27.424 de Generación Distribuida.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://ecoapo.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Sitio Oficial: ecoapo.com.ar
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <aside aria-label="Contacto flotante" className="fixed bottom-6 right-6 z-40">
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 group font-bold text-xs"
          aria-label="Contactar por WhatsApp a EcoApo"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Chatear con un Asesor</span>
        </a>
      </aside>
    </footer>
  );
};
