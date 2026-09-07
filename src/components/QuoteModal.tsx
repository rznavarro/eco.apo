import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, ArrowUpRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    serviceInterest?: string;
    monthlyBill?: number;
    kwp?: number;
    system?: string;
    province?: string;
  } | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, presetData }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [interes, setInteres] = useState('Sistema Híbrido Residencial (Baterías)');
  const [provincia, setProvincia] = useState('Buenos Aires');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetData?.serviceInterest) {
      setInteres(presetData.serviceInterest);
    } else if (presetData?.system) {
      setInteres(presetData.system);
    }
    if (presetData?.province) {
      setProvincia(presetData.province);
    }
  }, [presetData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const getWhatsAppUrl = () => {
    let msg = `Hola EcoApo! Me gustaría pedir presupuesto para: ${interes}.`;
    if (presetData?.kwp) {
      msg += ` Potencia estimada: ${presetData.kwp} kWp.`;
    }
    if (presetData?.monthlyBill) {
      msg += ` Consumo actual: $${presetData.monthlyBill.toLocaleString('es-AR')}/mes.`;
    }
    msg += ` Mi nombre es ${nombre || 'un cliente'} desde ${provincia}.`;
    return `https://wa.me/5491168509944?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#091b15] border border-emerald-600/80 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative text-white space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2 rounded-lg bg-emerald-950 border border-emerald-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-xl bg-[#84cc16] text-[#06120e] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              ¡Solicitud enviada!
            </h3>
            <p className="text-sm text-emerald-200/80">
              Nuestro equipo técnico se pondrá en contacto contigo a la brevedad con una propuesta dimensionada a tu medida.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#84cc16] text-[#06120e] font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Continuar por WhatsApp Inmediato</span>
              </a>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-emerald-950 text-emerald-300 text-xs font-semibold hover:text-white"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#84cc16] uppercase tracking-wider">
                Presupuesto Sin Cargo
              </span>
              <h3 className="text-2xl font-bold text-white">
                Cotizá tu Proyecto Solar
              </h3>
              <p className="text-xs text-emerald-300">
                EcoApo Argentina · Asesoramiento honesto de ingenieros especializados
              </p>
            </div>

            {presetData?.kwp && (
              <div className="bg-[#06120e] p-3 rounded-xl border border-emerald-800/60 flex items-center justify-between text-xs">
                <span className="text-emerald-300">Configuración Calculada:</span>
                <span className="font-bold text-[#84cc16]">~{presetData.kwp} kWp (${presetData.monthlyBill?.toLocaleString('es-AR')}/mes)</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-emerald-300 mb-1">
                Nombre y Apellido *
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Laura Rossi"
                className="w-full bg-[#06120e] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1">
                  WhatsApp / Celular *
                </label>
                <input
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej: 11 3456-7890"
                  className="w-full bg-[#06120e] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-1">
                  Provincia / Ciudad
                </label>
                <input
                  type="text"
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  placeholder="Ej: CABA / Banfield"
                  className="w-full bg-[#06120e] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-300 mb-1">
                Interés o Tipo de Proyecto
              </label>
              <select
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                className="w-full bg-[#06120e] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
              >
                <option value="Sistema Híbrido Residencial (Baterías)">Hogar: Sistema Híbrido (Ahorro + Baterías)</option>
                <option value="Sistema On-Grid (Inyección a Red)">Hogar: Sistema On-Grid (Inyección a Red)</option>
                <option value="Termotanque Solar para Agua Caliente">Hogar: Termotanque Solar</option>
                <option value="Bombeo Solar para Ganadería o Riego">Campo: Bombeo Solar Sumergible</option>
                <option value="Electrificación Rural Aislada (Off-Grid)">Campo: Casco Aislado Off-Grid</option>
                <option value="Planta Fotovoltaica Comercial / Industrial">Comercio / Industria: Techo Solar</option>
                <option value="Distribución Mayorista para Instaladores">Venta Mayorista / Distribuidores</option>
                <option value="Cursos Técnicos de Instalador">Cursos Técnicos de Instalador</option>
              </select>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Pedir Presupuesto Formal</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#84cc16]" />
                <span>O consultar directamente por WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
