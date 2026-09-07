import React, { useState, useId } from 'react';
import { Zap, Sun, Battery, DollarSign, Leaf, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SplitText } from './effects/TextEffects';

interface SolarCalculatorProps {
  onQuoteRequested: (calcDetails: {
    sector: string;
    monthlyBill: number;
    province: string;
    system: string;
    kwp: number;
    annualSavings: number;
  }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onQuoteRequested }) => {
  const [sector, setSector] = useState<'hogar' | 'comercio' | 'campo'>('hogar');
  const [monthlyBill, setMonthlyBill] = useState<number>(120000); // 120.000 ARS
  const [province, setProvince] = useState<string>('Buenos Aires (AMBA)');
  const [hasOutages, setHasOutages] = useState<boolean>(true);
  const sliderId = useId();

  // Dynamic calculations tailored to current Argentine tariffs
  // Rough tariff per kWh: ~150 ARS/kWh avg with recent updates
  const tariffPerKwh = sector === 'comercio' ? 175 : sector === 'campo' ? 190 : 155;
  const estimatedMonthlyKwh = Math.round(monthlyBill / tariffPerKwh);

  // Solar radiation index in Argentina (~3.8 to 5.2 peak sun hours daily)
  const radiationFactor = province.includes('Cuyo') || province.includes('NOA') ? 145 : 125; // kWh generated per kWp/month

  // Recommended system size in kWp (aiming for 75% to 85% self-consumption)
  const targetCoverage = 0.82;
  const neededMonthlyKwh = estimatedMonthlyKwh * targetCoverage;
  const rawKw = neededMonthlyKwh / radiationFactor;
  // Round to realistic inverter step sizes (e.g., 3kW, 5kW, 8kW, 10kW, 15kW, 20kW)
  const recommendedKw = Math.max(1.5, Math.round(rawKw * 10) / 10);

  // Panels calculation using standard 550W Tier 1 modules
  const panelsCount = Math.max(4, Math.ceil((recommendedKw * 1000) / 550));

  // Savings
  const monthlySavingsArs = Math.round(monthlyBill * 0.82);
  const annualSavingsArs = monthlySavingsArs * 12;

  // Ecological impact: 0.45 kg CO2 avoided per kWh generated in Argentina
  const annualKwhGenerated = recommendedKw * radiationFactor * 12;
  const annualCo2Tons = Math.round((annualKwhGenerated * 0.45) / 100) / 10;

  // System type based on outages preference
  const systemName = hasOutages
    ? 'Sistema Solar Híbrido con Baterías de Litio'
    : 'Sistema Solar On-Grid (Inyección Directa a Red)';

  const estimatedRoiYears = hasOutages ? '4.2 a 4.9 años' : '3.1 a 3.8 años';

  const handleCelebrateAndQuote = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // ignore
    }

    onQuoteRequested({
      sector: sector === 'hogar' ? 'Hogar Residencial' : sector === 'comercio' ? 'Comercio / Pyme' : 'Campo / Agropecuario',
      monthlyBill,
      province,
      system: systemName,
      kwp: recommendedKw,
      annualSavings: annualSavingsArs
    });
  };

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-b from-[#06120e] via-[#091b15] to-[#06120e] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Simulador de Ahorro Solar · Argentina</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            <SplitText text="Descubrí cuánto podés ahorrar con energía solar" />
          </h2>
          <p className="text-emerald-200/70 text-base">
            Calculá en segundos la potencia recomendada para tu consumo eléctrico, la cantidad de paneles solares y el retorno estimado de tu inversión.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-[#0c241c] border border-emerald-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls Side (Left 6 cols) */}
            <div className="lg:col-span-6 space-y-7">
              {/* Sector selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                  1. ¿Para qué sector es la instalación?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSector('hogar');
                      if (monthlyBill > 400000) setMonthlyBill(120000);
                    }}
                    className={`py-3 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                      sector === 'hogar'
                        ? 'bg-[#84cc16] text-[#06120e] shadow-md shadow-lime-500/20'
                        : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-800/40'
                    }`}
                  >
                    Hogar / Casa
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSector('comercio');
                      if (monthlyBill < 150000) setMonthlyBill(350000);
                    }}
                    className={`py-3 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                      sector === 'comercio'
                        ? 'bg-[#84cc16] text-[#06120e] shadow-md shadow-lime-500/20'
                        : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-800/40'
                    }`}
                  >
                    Comercio / Pyme
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSector('campo');
                      if (monthlyBill < 200000) setMonthlyBill(450000);
                    }}
                    className={`py-3 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                      sector === 'campo'
                        ? 'bg-[#84cc16] text-[#06120e] shadow-md shadow-lime-500/20'
                        : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-800/40'
                    }`}
                  >
                    Campo / Agro
                  </button>
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div className="space-y-3 bg-[#081a14] p-5 rounded-2xl border border-emerald-800/40">
                <div className="flex items-center justify-between">
                  <label htmlFor={sliderId} className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    2. ¿Cuánto pagás de luz al mes? (ARS)
                  </label>
                  <span className="font-display text-2xl font-black text-[#84cc16]">
                    ${monthlyBill.toLocaleString('es-AR')}
                  </span>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min={sector === 'hogar' ? 30000 : sector === 'comercio' ? 100000 : 150000}
                  max={sector === 'hogar' ? 600000 : sector === 'comercio' ? 2500000 : 3500000}
                  step={10000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#84cc16]"
                />

                <div className="flex justify-between text-[11px] text-emerald-400/70 font-medium pt-1">
                  <span>Mínimo: ${sector === 'hogar' ? '30.000' : '100.000'}</span>
                  <span>Consumo est.: ~{estimatedMonthlyKwh} kWh/mes</span>
                  <span>Máx: ${sector === 'hogar' ? '600.000+' : '3.5M+'}</span>
                </div>
              </div>

              {/* Province / Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                    3. Provincia / Zona
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#84cc16]"
                  >
                    <option value="Buenos Aires (AMBA)">Buenos Aires (AMBA)</option>
                    <option value="Buenos Aires (Interior)">Buenos Aires (Interior)</option>
                    <option value="Córdoba">Córdoba (EPEC / Coops)</option>
                    <option value="Santa Fe">Santa Fe (EPE)</option>
                    <option value="Cuyo (Mendoza / San Juan)">Cuyo (Mendoza / San Juan)</option>
                    <option value="Entre Ríos / Litoral">Entre Ríos / Litoral</option>
                    <option value="NOA (Salta / Tucumán)">NOA (Salta / Tucumán)</option>
                    <option value="Patagonia (Neuquén / Río Negro)">Patagonia (Río Negro / Neuquén)</option>
                  </select>
                </div>

                {/* Outages switch */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                    4. ¿Hay cortes de luz en tu zona?
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setHasOutages(true)}
                      className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        hasOutages
                          ? 'bg-[#84cc16] text-[#06120e]'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                      }`}
                    >
                      Sí, quiero baterías
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasOutages(false)}
                      className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        !hasOutages
                          ? 'bg-[#84cc16] text-[#06120e]'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                      }`}
                    >
                      No, solo ahorro
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Side (Right 6 cols) */}
            <div className="lg:col-span-6 bg-[#081a14] border border-emerald-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#84cc16]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#84cc16]">
                  Resultado Personalizado EcoApo
                </span>
                <h3 className="text-xl font-bold text-white">
                  {systemName}
                </h3>
              </div>

              {/* Big Savings Block */}
              <div className="bg-[#0c261d] p-5 rounded-xl border border-emerald-600/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-300/80 uppercase font-semibold">
                    Ahorro Anual Estimado
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white mt-0.5">
                    ${annualSavingsArs.toLocaleString('es-AR')}
                    <span className="text-xs font-normal text-emerald-400 ml-1">/año</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-300/80 uppercase font-semibold">
                    Ahorro Mensual
                  </span>
                  <div className="font-display text-xl font-bold text-[#84cc16]">
                    -${monthlySavingsArs.toLocaleString('es-AR')}
                  </div>
                </div>
              </div>

              {/* Technical breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-[#05130e] p-3 rounded-lg border border-emerald-900/60 text-center">
                  <Sun className="w-5 h-5 text-[#84cc16] mx-auto mb-1" />
                  <span className="block font-display text-lg font-bold text-white">{recommendedKw} kWp</span>
                  <span className="text-[11px] text-emerald-400/80">Potencia Solar</span>
                </div>

                <div className="bg-[#05130e] p-3 rounded-lg border border-emerald-900/60 text-center">
                  <Zap className="w-5 h-5 text-[#84cc16] mx-auto mb-1" />
                  <span className="block font-display text-lg font-bold text-white">{panelsCount} Paneles</span>
                  <span className="text-[11px] text-emerald-400/80">Tier 1 de 550W</span>
                </div>

                <div className="bg-[#05130e] p-3 rounded-lg border border-emerald-900/60 text-center col-span-2 sm:col-span-1">
                  <Clock className="w-5 h-5 text-[#84cc16] mx-auto mb-1" />
                  <span className="block font-display text-lg font-bold text-white">{estimatedRoiYears}</span>
                  <span className="text-[11px] text-emerald-400/80">Retorno (ROI)</span>
                </div>
              </div>

              {/* Ecological Impact */}
              <div className="flex items-center gap-3 p-3 bg-emerald-950/40 rounded-lg border border-emerald-800/40 text-xs text-emerald-200">
                <Leaf className="w-4 h-4 text-[#84cc16] shrink-0" />
                <span>
                  Evitás la emisión de <strong className="text-white font-bold">{annualCo2Tons} toneladas de CO2 al año</strong>, equivalente a plantar {Math.round(annualCo2Tons * 15)} árboles.
                </span>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCelebrateAndQuote}
                  className="w-full py-4 px-6 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-lime-500/25 cursor-pointer"
                >
                  <span>Solicitar Presupuesto Formal con esta Configuración</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <p className="text-[11px] text-center text-emerald-400/70 mt-2">
                  ✓ Presupuesto sin cargo ni compromiso · Financiación disponible · Garantía oficial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
