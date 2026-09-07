import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { LightSection } from './components/LightSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { SolutionsSection } from './components/SolutionsSection';
import { SolarCalculator } from './components/SolarCalculator';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AcademySection } from './components/AcademySection';
import { LatestInsights } from './components/LatestInsights';
import { FaqSection } from './components/FaqSection';
import { PreFooterCta } from './components/PreFooterCta';
import { BranchesAndContact } from './components/BranchesAndContact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SolutionItem, ProjectCase } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quotePreset, setQuotePreset] = useState<{
    serviceInterest?: string;
    monthlyBill?: number;
    kwp?: number;
    system?: string;
    province?: string;
  } | null>(null);

  const handleOpenQuote = (serviceInterest?: string) => {
    setQuotePreset(serviceInterest ? { serviceInterest } : null);
    setQuoteModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolutionForQuote = (solution: SolutionItem) => {
    setQuotePreset({
      serviceInterest: `${solution.title} (${solution.savingEstimate})`,
    });
    setQuoteModalOpen(true);
  };

  const handleQuoteProjectLike = (project: ProjectCase) => {
    setQuotePreset({
      serviceInterest: `Proyecto similar a: ${project.title} (${project.power} en ${project.location})`,
      province: project.province,
    });
    setQuoteModalOpen(true);
  };

  const handleCalculatorQuote = (details: {
    sector: string;
    monthlyBill: number;
    province: string;
    system: string;
    kwp: number;
    annualSavings: number;
  }) => {
    setQuotePreset({
      system: details.system,
      serviceInterest: `${details.system} (${details.kwp} kWp para ${details.sector})`,
      monthlyBill: details.monthlyBill,
      kwp: details.kwp,
      province: details.province,
    });
    setQuoteModalOpen(true);
  };

  const handleConsultCourse = (courseTitle: string) => {
    setQuotePreset({
      serviceInterest: `Inscripción / Consulta: ${courseTitle}`,
    });
    setQuoteModalOpen(true);
  };

  const handleSelectFeature = (featureKey: string) => {
    if (featureKey === 'hibridos') {
      const el = document.getElementById('soluciones');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenQuote(
        featureKey === 'ahorro'
          ? 'Asesoramiento sobre Ahorro e Inyección a Red'
          : 'Consultoría con Ingeniero Matriculado'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#06120e] text-[#f1f5f3] selection:bg-[#84cc16] selection:text-[#06120e]">
      {/* Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenCalculator={handleScrollToCalculator}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onOpenCalculator={handleScrollToCalculator}
        />

        {/* Bento Commitment Cards */}
        <BentoFeatures onSelectFeature={handleSelectFeature} />

        {/* Light Contrast Section (01/02 Mission & Vision + Stats) */}
        <LightSection onOpenQuote={() => handleOpenQuote('Información Institucional EcoApo')} />

        {/* Sustainability at Our Core (Plant Seedling & Environmental Impact) */}
        <SustainabilitySection onOpenQuote={() => handleOpenQuote('Compromiso Ambiental y Sustentabilidad')} />

        {/* Comprehensive Solar Solutions */}
        <SolutionsSection onSelectSolutionForQuote={handleSelectSolutionForQuote} />

        {/* Interactive Solar Savings Simulator */}
        <SolarCalculator onQuoteRequested={handleCalculatorQuote} />

        {/* Real Argentine Projects Gallery */}
        <ProjectsGallery onQuoteProjectLike={handleQuoteProjectLike} />

        {/* EcoApo Cursos / Training Academy */}
        <AcademySection onConsultCourse={handleConsultCourse} />

        {/* Latest Technical Insights & Articles (3 Featured Guides) */}
        <LatestInsights />

        {/* FAQs */}
        <FaqSection />

        {/* Pre-footer Call to Action Banner (Verdant Solar Landscape) */}
        <PreFooterCta onOpenQuote={() => handleOpenQuote('Propuesta Integral y Cotización')} />

        {/* Physical Branches (Banfield & CABA) + Direct Contact */}
        <BranchesAndContact />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />

      {/* Modal for Quick Quotes & Calculations */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        presetData={quotePreset}
      />
    </div>
  );
}
