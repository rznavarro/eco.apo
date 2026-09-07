import React, { useState } from 'react';
import { Calendar, Clock, ArrowUpRight, BookOpen, X, Check } from 'lucide-react';
import modernHouseImg from '../assets/images/modern_solar_house_1788815537326.jpg';
import batteryStorageImg from '../assets/images/home_battery_storage_1788815562616.jpg';
import farmSolarImg from '../assets/images/farm_solar_irrigation_1788815585269.jpg';

interface InsightArticle {
  id: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  fullContent: string[];
}

const ARTICLES: InsightArticle[] = [
  {
    id: 'art-ley-distribuida',
    title: 'El Futuro de la Generación Distribuida en Argentina: Claves de la Ley 27.424',
    tag: 'Legislación & Ahorro',
    date: '15 Mayo 2026',
    readTime: '4 min de lectura',
    image: modernHouseImg,
    summary: 'Cómo funciona el trámite de usuario-generador con Edenor, Edesur y cooperativas provinciales para inyectar excedentes y descontar plata de la factura.',
    fullContent: [
      'La Ley Nacional 27.424 establece el marco regulatorio para que cualquier usuario de la red eléctrica pueda generar su propia energía a partir de fuentes renovables e inyectar los excedentes a la red pública.',
      'Al instalar paneles solares e inversores homologados, la empresa distribuidora (Edenor, Edesur, EPEC, EPE, etc.) reemplaza el medidor tradicional por un medidor bidireccional digital.',
      'Durante las horas diurnas de máxima radiación, la energía solar alimenta primero todos los electrodomésticos de la casa. Si tu consumo es menor a lo generado, el remanente se inyecta a la red y genera un crédito a tu favor que se descuenta en la siguiente factura.',
      'En EcoApo nos encargamos de todo el circuito de gestión técnica: firma de planos con ingenieros matriculados, protocolo de puesta a tierra y homologación ante el ente regulador.'
    ]
  },
  {
    id: 'art-baterias-litio',
    title: 'Baterías de Litio LiFePO4: Cómo Blindar tu Hogar Frente a Cortes de Luz',
    tag: 'Tecnología & Backup',
    date: '28 Abril 2026',
    readTime: '5 min de lectura',
    image: batteryStorageImg,
    summary: 'La evolución definitiva frente al viejo grupo electrógeno a nafta: silencio absoluto, cero emisiones, conmutación en milisegundos y vida útil de 15 años.',
    fullContent: [
      'Los cortes de energía durante los meses de altas temperaturas o tormentas son uno de los mayores dolores de cabeza para familias y comerciantes en el AMBA y ciudades del interior.',
      'Las tradicionales baterías de plomo-ácido y los ruidosos generadores a combustible están siendo reemplazados globalmente por baterías de Fosfato de Hierro y Litio (LiFePO4).',
      'Ventajas fundamentales de los sistemas híbridos con litio EcoApo: admiten descargas profundas del 90% sin degradarse, ofrecen más de 6.000 ciclos de vida útil y conmutan automáticamente ante un corte de calle en menos de 10 milisegundos.',
      'Esto significa que ni siquiera tus computadoras de escritorio, servidores hogareños o el router Wi-Fi se reinician cuando Edenor o Edesur interrumpen el suministro.'
    ]
  },
  {
    id: 'art-bombeo-agro',
    title: 'Bombeo Solar en el Campo: Ahorro Total de Gasoil y Agua Garantizada para Ganado',
    tag: 'Agro & Campo',
    date: '10 Abril 2026',
    readTime: '6 min de lectura',
    image: farmSolarImg,
    summary: 'Por qué los productores agropecuarios argentinos están sustituyendo generadores y viejos molinos por bombas solares sumergibles de última generación.',
    fullContent: [
      'El costo del gasoil y la logística de transportar bidones de combustible a puestos lejanos representan uno de los gastos operativos más desgastantes para la ganadería y la agricultura.',
      'Los sistemas de bombeo solar sumergible EcoApo funcionan conectando directamente los paneles solares a un controlador electrónico inteligente MPPT que modula la velocidad de la bomba según la intensidad del sol.',
      'No requieren baterías químicas: el agua se bombea en los horarios de mayor radiación solar (entre las 9:00 y las 17:30 hs) directamente a tanques australianos o bebederos de gran capacidad.',
      'Con caudales de hasta 50.000 litros por hora y profundidades de pozo de hasta 150 metros, se amortizan en menos de 18 meses únicamente con el ahorro en combustible y roturas de molinos mecánicos.'
    ]
  }
];

export const LatestInsights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section className="py-24 bg-[#06120e] text-white relative border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
              Novedades & Publicaciones Técnicas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Información clara para tomar la mejor decisión energética
            </h2>
            <p className="text-emerald-200/70 text-base">
              Artículos redactados por el equipo de ingenieros de EcoApo sobre normativas, dimensionamiento y tecnologías renovables en Argentina.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-2 rounded-xl border border-emerald-800/60">
              <BookOpen className="w-3.5 h-3.5 text-[#84cc16]" />
              <span>Actualizado Semanalmente</span>
            </span>
          </div>
        </div>

        {/* 3 Articles Grid (matching the Latest Insights block from the reference mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-[#091b15] border border-emerald-800/50 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091b15] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#06120e]/90 text-[#84cc16] backdrop-blur-md border border-emerald-700/50 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {art.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-emerald-400/80">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#84cc16]" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#84cc16]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#a3e635] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-emerald-200/75 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-950 hover:bg-[#84cc16] text-emerald-200 hover:text-[#06120e] border border-emerald-700/50 hover:border-[#84cc16] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Leer Artículo Completo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#091b15] border border-emerald-600 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6 text-white">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2 rounded-lg bg-emerald-950 border border-emerald-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-emerald-800/60 shadow-md">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#06120e]/90 text-[#84cc16] text-xs font-bold px-3 py-1 rounded-md border border-emerald-700/50">
                {selectedArticle.tag}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-emerald-400">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span className="text-white font-medium">Por Ing. EcoApo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-emerald-100/90 leading-relaxed border-t border-emerald-900/60 pt-4">
              {selectedArticle.fullContent.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-emerald-900/60 flex justify-between items-center">
              <span className="text-xs text-emerald-400">¿Tenés dudas sobre este tema?</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-[#06120e] font-bold text-xs"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
