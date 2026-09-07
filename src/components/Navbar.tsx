import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuote: (serviceInterest?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06120e]/85 backdrop-blur-md border-b border-emerald-950/80 py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="EcoApo Inicio"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <a
              href="#soluciones"
              className="text-xs lg:text-sm font-medium text-emerald-100/70 hover:text-white transition-colors"
            >
              Soluciones
            </a>
            <button
              onClick={onOpenCalculator}
              className="text-xs lg:text-sm font-medium text-emerald-100/70 hover:text-[#84cc16] transition-colors cursor-pointer"
            >
              Simulador
            </button>
            <a
              href="#proyectos"
              className="text-xs lg:text-sm font-medium text-emerald-100/70 hover:text-white transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#cursos"
              className="text-xs lg:text-sm font-medium text-emerald-100/70 hover:text-white transition-colors"
            >
              Cursos
            </a>
            <a
              href="#sucursales"
              className="text-xs lg:text-sm font-medium text-emerald-100/70 hover:text-white transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Minimalist Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-1.5 bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-lime-500/20 active:scale-95 cursor-pointer"
            >
              <span>Cotizar</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#84cc16] text-[#06120e] font-bold text-xs px-3 py-1.5 rounded-lg active:scale-95"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-emerald-200 hover:text-white rounded-lg focus:outline-hidden"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06120e]/95 backdrop-blur-xl border-b border-emerald-900/60 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm">
            <a
              href="#soluciones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100/80 hover:text-[#84cc16] transition-colors py-1"
            >
              Soluciones
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="text-left text-emerald-100/80 hover:text-[#84cc16] transition-colors py-1"
            >
              Simulador de Ahorro
            </button>
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100/80 hover:text-[#84cc16] transition-colors py-1"
            >
              Proyectos Realizados
            </a>
            <a
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100/80 hover:text-[#84cc16] transition-colors py-1"
            >
              Cursos Técnicos
            </a>
            <a
              href="#sucursales"
              onClick={() => setMobileMenuOpen(false)}
              className="text-emerald-100/80 hover:text-[#84cc16] transition-colors py-1"
            >
              Sucursales & Contacto
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-[#84cc16] text-[#06120e] font-bold text-xs flex items-center justify-center gap-2"
            >
              <span>Solicitar Cotización</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
