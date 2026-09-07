import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ShieldCheck, Truck, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

interface BranchesAndContactProps {
  initialSubject?: string;
}

export const BranchesAndContact: React.FC<BranchesAndContactProps> = ({ initialSubject }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    provincia: 'Buenos Aires (AMBA)',
    interes: initialSubject || 'Sistema Solar Residencial (Hogar)',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // ignore
    }
  };

  const generateWhatsAppDirectLink = () => {
    const text = `Hola EcoApo! Mi nombre es ${formData.nombre || 'un cliente'}. Me comunico desde ${formData.provincia} con interés en: ${formData.interes}.`;
    return `https://wa.me/5491168509944?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="sucursales" className="py-24 bg-[#091b15] relative text-white border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
            Atención y Sucursales
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Estamos cerca tuyo en Buenos Aires y llegamos a todo el país
          </h2>
          <p className="text-emerald-200/70 text-base">
            Visitanos en nuestras sucursales o contactate con un ingeniero especialista para evaluar tu caso sin cargo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Branches Cards & National Shipping Guarantee */}
          <div className="lg:col-span-6 space-y-6">
            {/* Banfield Branch */}
            <div className="bg-[#0c241c] border border-emerald-700/60 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16] bg-[#84cc16]/10 px-2.5 py-1 rounded border border-[#84cc16]/30">
                  Casa Central & Showroom
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Zona Sur GBA</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#84cc16]" />
                  <span>Sucursal Banfield</span>
                </h3>
                <p className="text-sm text-emerald-100 font-medium">
                  {COMPANY_INFO.branches[0].address}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-900/60 flex flex-wrap items-center gap-4 text-xs text-emerald-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>{COMPANY_INFO.branches[0].hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </div>
            </div>

            {/* CABA Branch */}
            <div className="bg-[#0c241c] border border-emerald-700/60 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16] bg-[#84cc16]/10 px-2.5 py-1 rounded border border-[#84cc16]/30">
                  Centro Logístico & Retiro
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Capital Federal</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#84cc16]" />
                  <span>Sucursal CABA</span>
                </h3>
                <p className="text-sm text-emerald-100 font-medium">
                  {COMPANY_INFO.branches[1].address}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-900/60 flex flex-wrap items-center gap-4 text-xs text-emerald-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>{COMPANY_INFO.branches[1].hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Federal Shipping Banner */}
            <div className="bg-gradient-to-r from-emerald-950/80 to-[#0c261c] border border-emerald-700/50 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#84cc16]/20 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-xs text-emerald-200">
                <strong className="text-white text-sm block mb-0.5">Envíos a todo el país con seguro de carga</strong>
                Despachos diarios en pallets reforzados a transportes y expresos hacia las 24 provincias argentinas.
              </div>
            </div>
          </div>

          {/* Right: Fast Contact Form */}
          <div className="lg:col-span-6 bg-[#0c241c] border border-emerald-700/70 rounded-3xl p-6 sm:p-9 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#84cc16] text-[#06120e] flex items-center justify-center mx-auto shadow-lg shadow-lime-500/30">
                  <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-sm text-emerald-200/80 max-w-md mx-auto">
                    Un asesor técnico especializado de EcoApo analizará tu consulta y te responderá a la brevedad por teléfono o WhatsApp.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#84cc16] text-[#06120e] font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Hablar Ahora por WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="py-3 px-5 rounded-xl bg-emerald-950 text-emerald-200 border border-emerald-800 text-xs font-semibold hover:text-white"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                    Formulario Directo
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Solicitá Asesoramiento Técnico Sin Cargo
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej: Marcelo Fernández"
                      className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="Ej: 11 4455-6677"
                      className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                      Provincia / Localidad
                    </label>
                    <input
                      type="text"
                      value={formData.provincia}
                      onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
                      placeholder="Ej: Banfield / Pergamino / Córdoba"
                      className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                    ¿En qué solución estás interesado?
                  </label>
                  <select
                    value={formData.interes}
                    onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                    className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                  >
                    <option value="Sistema Solar Híbrido con Baterías (Anti-cortes)">Sistema Solar Híbrido con Baterías (Anti-cortes)</option>
                    <option value="Sistema Solar On-Grid (Ahorro e Inyección a Red)">Sistema Solar On-Grid (Ahorro e Inyección a Red)</option>
                    <option value="Bombeo Solar para Campo / Ganadería">Bombeo Solar para Campo / Ganadería</option>
                    <option value="Electrificación Rural Aislada (Off-Grid)">Electrificación Rural Aislada (Off-Grid)</option>
                    <option value="Termotanques Solares">Termotanques Solares</option>
                    <option value="Planta Solar Comercial / Pyme">Planta Solar Comercial / Pyme</option>
                    <option value="Venta Mayorista / Distribuidores">Venta Mayorista / Distribuidores</option>
                    <option value="Cursos de Instalador Solar (cursosecoapo.com)">Cursos de Instalador Solar (cursosecoapo.com)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1.5">
                    Comentarios o consumo actual (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Contanos sobre tu techo, si tenés factura bimestral o qué equipos necesitás alimentar..."
                    className="w-full bg-[#081a14] border border-emerald-800/60 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#84cc16]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-lime-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Enviar Solicitud de Presupuesto</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-400/80">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#84cc16]" />
                    Tus datos están protegidos
                  </span>
                  <span>Respuesta habitual en &lt; 3 horas</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
