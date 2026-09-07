export interface SolutionItem {
  id: string;
  category: 'hogar' | 'campo' | 'industria' | 'distribuidores';
  title: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
  savingEstimate: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  location: string;
  province: string;
  category: 'Residencial' | 'Agropecuario' | 'Industrial' | 'Comercial';
  power: string;
  panelsCount: number;
  inverterType: string;
  year: string;
  savingPercent: string;
  image: string;
  description: string;
}

export interface CalculatorState {
  sector: 'hogar' | 'comercio' | 'campo';
  monthlyBill: number; // in ARS
  location: string;
  hasOutages: boolean;
  roofType: 'chapa' | 'teja' | 'losa' | 'suelo';
}

export interface CalculationResult {
  recommendedPowerKw: number;
  panelsCount: number;
  estimatedMonthlySavingsArs: number;
  estimatedAnnualSavingsArs: number;
  estimatedAnnualCo2Tons: number;
  roiYears: number;
  recommendedSystem: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
  duration: string;
  modality: string;
  certification: string;
  description: string;
  topics: string[];
}
