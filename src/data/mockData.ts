import { SolutionItem, ProjectCase, CourseItem } from '../types';
import batteryImg from '../assets/images/home_battery_storage_1788815562616.jpg';
import modernHouseImg from '../assets/images/modern_solar_house_1788815537326.jpg';
import waterHeaterImg from '../assets/images/solar_water_heater_1788816193104.jpg';
import farmPumpImg from '../assets/images/farm_solar_irrigation_1788815585269.jpg';
import verdantHillsImg from '../assets/images/verdant_solar_hills_1788815605533.jpg';
import industrialSolarImg from '../assets/images/industrial_solar_rooftop_1788816172266.jpg';
import solarEngineerImg from '../assets/images/solar_engineer_hero_1788815493429.jpg';

export const COMPANY_INFO = {
  name: 'EcoApo',
  fullName: 'EcoApo Energía Solar & Sustentable',
  tagline: 'Líderes en Soluciones Fotovoltaicas y Energía Limpia en Argentina',
  foundedYear: 2015,
  phone: '+54 9 11 6850-9944',
  phoneDisplay: '+54 11 6850-9944',
  whatsappUrl: 'https://wa.me/5491168509944',
  email: 'info@ecoapo.com.ar',
  branches: [
    {
      city: 'Banfield, Zona Sur GBA',
      address: 'Av. Hipólito Yrigoyen / Lomas de Zamora',
      zone: 'Gran Buenos Aires',
      hours: 'Lun a Vie 9:00 a 18:00 hs',
    },
    {
      city: 'CABA, Buenos Aires',
      address: 'Distrito Tecnológico / Centro de Envíos',
      zone: 'Capital Federal',
      hours: 'Lun a Vie 9:30 a 17:30 hs',
    }
  ],
  stats: {
    years: '10+',
    projectsCompleted: '1.400+',
    co2SavedTons: '4.800+',
    solarKwInstalled: '9.2 MW+',
    provincesCovered: '24',
    googleRating: '4.9/5'
  }
};

export const PARTNERS_LOGOS = [
  { name: 'Growatt Inverters', tag: 'Inversores Inteligentes' },
  { name: 'Deye Energy', tag: 'Sistemas Híbridos & On-Grid' },
  { name: 'Victron Energy', tag: 'Sistemas Off-Grid Premium' },
  { name: 'Canadian Solar', tag: 'Paneles Tier 1 Alta Eficiencia' },
  { name: 'Jinko Solar', tag: 'Células N-Type TOPCon' },
  { name: 'Pylontech / Felicity', tag: 'Baterías de Litio LiFePO4' },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'hogar-hibrido',
    category: 'hogar',
    title: 'Sistemas Solares Híbridos (Ahorro + Baterías)',
    tagline: 'Ahorrá en la factura y olvidate de los cortes de luz',
    description: 'Generá tu propia energía eléctrica para consumo diario e inyectá excedentes a la red bajo la Ley de Generación Distribuida. Sus baterías de litio de respaldo se activan en milisegundos cuando la red pública falla, protegiendo tus heladeras, aires, bombas y computadoras.',
    badge: 'Más Elegido en Hogares',
    image: batteryImg,
    features: [
      'Respaldo automático ante cortes de Edenor / Edesur / Cooperativas',
      'Ahorro de hasta el 85% en la factura de electricidad bimestral',
      'Monitoreo en tiempo real desde app móvil (Android / iOS)',
      'Baterías de litio LiFePO4 de larga vida útil (más de 6.000 ciclos)'
    ],
    specs: [
      { label: 'Potencia disponible', value: '3 kW a 15 kW Monofásico / Trifásico' },
      { label: 'Tipo de Inversor', value: 'Híbrido Inteligente Deye / Growatt' },
      { label: 'Garantía paneles', value: '25 años de rendimiento lineal' },
      { label: 'Retorno estimado', value: '3 a 5 años' }
    ],
    idealFor: 'Casas en barrios cerrados, quintas y residencias que buscan tranquilidad total y reducción drástica de tarifas.',
    savingEstimate: 'Hasta 85% de ahorro mensual'
  },
  {
    id: 'hogar-ongrid',
    category: 'hogar',
    title: 'Sistemas On-Grid (Inyección y Máximo Ahorro)',
    tagline: 'Invertí en el sol sin baterías: retorno acelerado',
    description: 'Conectado en paralelo a la red eléctrica. Toda la energía solar producida abastece tus electrodomésticos en horario diurno; el sobrante se inyecta a la red eléctrica acreditando saldo a tu favor según la Ley 27.424.',
    badge: 'Mayor Rentabilidad',
    image: modernHouseImg,
    features: [
      'Cero mantenimiento químico (sin costo de recambio de baterías)',
      'Aprobado para medidor bidireccional en todas las distribuidoras',
      'Retorno de inversión veloz con menores costos de entrada',
      'Estructuras de aluminio anodizado resistentes a granizo y vientos'
    ],
    specs: [
      { label: 'Capacidad', value: '1.5 kW a 10 kW' },
      { label: 'Medidor', value: 'Trámite de usuario-generador incluido' },
      { label: 'Vida útil estimada', value: 'Más de 30 años' },
      { label: 'Tiempo de instalación', value: '1 a 2 jornadas técnicas' }
    ],
    idealFor: 'Hogares urbanos con red eléctrica estable que priorizan pagar lo mínimo indispensable de electricidad.',
    savingEstimate: 'Ahorro de hasta un 90% en horario diurno'
  },
  {
    id: 'hogar-termotanque',
    category: 'hogar',
    title: 'Termotanques Solares y Climatización',
    tagline: 'Agua caliente sanitaria gratis gracias al sol todo el año',
    description: 'Equipos solares térmicos de tubos de vacío de alta eficiencia con tanque de acero inoxidable. Calientan agua para uso sanitario reduciendo hasta un 80% el consumo de gas envasado, gas natural o termotanque eléctrico.',
    badge: 'Ahorro Inmediato',
    image: waterHeaterImg,
    features: [
      'Funciona incluso en días nublados por aislamiento de vacío',
      'Tanques térmicos de 150L, 200L, 250L y 300L',
      'Kit de resistencia eléctrica inteligente auxiliar para invierno',
      'Apto para reemplazo directo de termotanque convencional'
    ],
    specs: [
      { label: 'Capacidad litros', value: '150 a 300 Lts para 2 a 8 personas' },
      { label: 'Eficiencia térmica', value: 'Retención de calor hasta 72 hs' },
      { label: 'Material interior', value: 'Acero Inoxidable SUS304 apto consumo' },
      { label: 'Amortización', value: '18 a 24 meses' }
    ],
    idealFor: 'Viviendas sin gas natural, zonas donde el gas envasado es costoso y familias con alto consumo de agua caliente.',
    savingEstimate: '80% de ahorro en gas o electricidad térmica'
  },
  {
    id: 'campo-bombeo',
    category: 'campo',
    title: 'Bombeo Solar para Ganadería y Riego',
    tagline: 'Agua garantizada en potreros sin combustible ni generadores',
    description: 'Reemplazá los costosos grupos electrógenos y viejos molinos de viento mecánicos por bombas solares sumergibles de última generación. Bombean agua directamente desde la napa a bebederos y tanques australianos durante todas las horas de sol.',
    badge: 'Indispensable en el Campo',
    image: farmPumpImg,
    features: [
      'Elimina el gasto y traslado de gasoil a campos lejanos',
      'Caudales desde 1.000 hasta 50.000 litros/hora',
      'Sensor de nivel en tanque: se detiene sola cuando está lleno',
      'Arranque suave (soft start) que alarga la vida útil del pozo'
    ],
    specs: [
      { label: 'Profundidades de pozo', value: '10m hasta 150m' },
      { label: 'Tipo de bomba', value: 'Helicoidal o Centrífuga de Acero Inoxidable' },
      { label: 'Controlador MPPT', value: 'Automático con protección contra marcha en seco' },
      { label: 'Mantenimiento', value: 'Cero engrases, 100% libre de desgaste' }
    ],
    idealFor: 'Campos ganaderos, tambos, feedlots, hacienda en islas y riego por goteo en producciones agrícolas.',
    savingEstimate: '100% de ahorro en combustible de bombeo'
  },
  {
    id: 'campo-offgrid',
    category: 'campo',
    title: 'Electrificación Rural Aislada (Off-Grid)',
    tagline: 'Luz y confort completo donde no llega el tendido eléctrico',
    description: 'Generación eléctrica 100% autónoma para cascos de estancia, puestos rurales, galpones de acopio y cabañas de campo. Diseñamos bancos de energía con inversores cargadores Victron y Growatt con baterías de ciclo profundo.',
    badge: 'Autonomía Total 24/7',
    image: verdantHillsImg,
    features: [
      'Electricidad 220V senoidal pura para toda clase de electrodomésticos',
      'Integración automática con grupo electrógeno existente de auxilio',
      'Estructuras elevadas antivandálicas para paneles en campo abierto',
      'Boyeros solares y electrificadores de alambrados integrados'
    ],
    specs: [
      { label: 'Rango de potencia', value: '1 kVA a 30 kVA' },
      { label: 'Autonomía', value: '2 a 4 días nublados de reserva' },
      { label: 'Inversores', value: 'Victron MultiPlus / Growatt SPF' },
      { label: 'Capacidad de arranque', value: 'Alto pico de arranque para motores y bombas' }
    ],
    idealFor: 'Casas de campo, puesteros, silos de acopio, lodges de pesca y cazadores sin acceso a tendido eléctrico.',
    savingEstimate: 'Elimina el 95% del gasto en generadores nafteros'
  },
  {
    id: 'industria-fotovoltaica',
    category: 'industria',
    title: 'Parques Solares para Industrias y Pymes',
    tagline: 'Transformá un costo operativo variable en una inversión rentable',
    description: 'Ingeniería, provisión y montaje de plantas solares comerciales sobre techos de naves industriales, galpones logísticos y playas de estacionamiento (Solar Carports). Reduce la potencia contratada y el costo del MWh en hora pico.',
    badge: 'Máximo Impacto Financiero',
    image: industrialSolarImg,
    features: [
      'Ahorro directo en cargos por energía y potencia pico',
      'Certificados de huella de carbono y cumplimiento de normas ESG',
      'Monitoreo centralizado multi-inversor con estación meteorológica',
      'Beneficios fiscales y amortización acelerada por Ley Nacional'
    ],
    specs: [
      { label: 'Escala de proyecto', value: '20 kW hasta 1 MWp' },
      { label: 'Inversores', value: 'Trifásicos comerciales Deye / Growatt MAX' },
      { label: 'Estudio previo', value: 'Simulación PVSyst y análisis de curvas de carga' },
      { label: 'TIR estimada', value: '18% a 28% anual en USD' }
    ],
    idealFor: 'Fábricas, cámaras frigoríficas, galpones logísticos, cadenas comerciales y estaciones de servicio.',
    savingEstimate: 'Ahorro del 40% al 75% del consumo eléctrico diurno'
  },
  {
    id: 'distribuidor-mayorista',
    category: 'distribuidores',
    title: 'Venta Mayorista & Kits Prearmados',
    tagline: 'El mayor stock de paneles, inversores y accesorios para profesionales',
    description: 'Abastecemos a instaladores, cooperativas eléctricas, constructoras y revendedores en las 24 provincias argentinas con precios directos de importador, despacho inmediato y asesoramiento técnico de ingeniería.',
    badge: 'Canal Profesional',
    image: solarEngineerImg,
    features: [
      'Precios preferenciales por volumen y facturación A / B',
      'Despacho en 24/48hs a transportes con alcance federal',
      'Tableros de protección AC/DC prearmados listos para montar',
      'Soporte técnico posventa de ingeniería dedicado a instaladores'
    ],
    specs: [
      { label: 'Stock permanente', value: 'Paneles Canadian/Jinko, Inversores Deye/Growatt' },
      { label: 'Accesorios', value: 'Cables solares XLPE 4/6mm², conectores MC4, protecciones' },
      { label: 'Envíos', value: 'Todo el país desde Banfield y CABA' },
      { label: 'Garantías', value: 'Gestión local directa sin demoras aduaneras' }
    ],
    idealFor: 'Instaladores independientes, electricistas matriculados, arquitectos e integradores de energías renovables.',
    savingEstimate: 'Márgenes de rentabilidad del 25% al 45% en reventa'
  }
];

export const REAL_PROJECTS: ProjectCase[] = [
  {
    id: 'p-nordelta',
    title: 'Sistema Híbrido Residencial con Baterías LiFePO4',
    location: 'Nordelta, Tigre',
    province: 'Buenos Aires',
    category: 'Residencial',
    power: '8.2 kWp',
    panelsCount: 16,
    inverterType: 'Deye Hybrid 8kW + 10kWh Baterías Litio',
    year: '2024',
    savingPercent: '82%',
    image: modernHouseImg,
    description: 'Instalación sobre cubierta de losa con orientación norte. Autonomía completa ante cortes de luz y reducción del 82% en la factura de Edenor.'
  },
  {
    id: 'p-pergamino',
    title: 'Bombeo Solar Profundo para Hacienda Ganadera',
    location: 'Pergamino',
    province: 'Buenos Aires',
    category: 'Agropecuario',
    power: '5.5 HP / 4 kWp',
    panelsCount: 10,
    inverterType: 'Controlador Solar MPPT Bombeo Helicoide',
    year: '2024',
    savingPercent: '100% combustible',
    image: farmPumpImg,
    description: 'Abastecimiento de agua a 3 bebederos para más de 450 cabezas de ganado. Sustituyó generador a nafta que demandaba 30 litros semanales.'
  },
  {
    id: 'p-lanus',
    title: 'Planta Solar Fotovoltaica en Techo Industrial',
    location: 'Lanús Oeste',
    province: 'Buenos Aires',
    category: 'Industrial',
    power: '45 kWp',
    panelsCount: 84,
    inverterType: 'Growatt MAX 50KTL3 LV Trifásico',
    year: '2023',
    savingPercent: '68%',
    image: industrialSolarImg,
    description: 'Inyección a la red bajo ley de generación distribuida en fábrica metalúrgica. Disminución de demanda de potencia en horarios pico.'
  },
  {
    id: 'p-chascomus',
    title: 'Estancia Aislada 100% Autónoma Off-Grid',
    location: 'Chascomús',
    province: 'Buenos Aires',
    category: 'Agropecuario',
    power: '12 kWp',
    panelsCount: 24,
    inverterType: 'Victron Quattro 10kVA + Banco Litio 20kWh',
    year: '2024',
    savingPercent: '100% Red',
    image: verdantHillsImg,
    description: 'Casco de estancia sin conexión a tendido eléctrico. Energía para 2 casas, bombas de agua, galpón y cerco eléctrico.'
  },
  {
    id: 'p-rio-cuarto',
    title: 'Autoconsumo Comercial para Concesionaria',
    location: 'Río Cuarto',
    province: 'Córdoba',
    category: 'Comercial',
    power: '22 kWp',
    panelsCount: 42,
    inverterType: 'Deye On-Grid 25kW Trifásico',
    year: '2024',
    savingPercent: '74%',
    image: batteryImg,
    description: 'Integración en cubierta metálica de showroom. Iluminación continua, climatización y cargador solar de vehículos eléctricos.'
  },
  {
    id: 'p-balcarce',
    title: 'Sistema de Riego Solar para Producción Hortícola',
    location: 'Balcarce',
    province: 'Buenos Aires',
    category: 'Agropecuario',
    power: '15 HP / 14 kWp',
    panelsCount: 32,
    inverterType: 'Variador de frecuencia solar para bomba trifásica',
    year: '2023',
    savingPercent: '95%',
    image: farmPumpImg,
    description: 'Riego presurizado diurno para 12 hectáreas de papa y hortalizas, operando de forma autónoma con radiación solar.'
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'c-instalador-profesional',
    title: 'Curso de Instalador de Paneles Solares Fotovoltaicos',
    level: 'Inicial a Avanzado',
    duration: '6 Semanas (Teórico + Práctico en banco real)',
    modality: 'Híbrida: Clases online en vivo + Práctica en Banfield / CABA',
    certification: 'Certificado Nacional EcoApo con matrícula técnica',
    description: 'Aprendé desde cero el dimensionamiento de sistemas On-Grid, Híbridos y Off-Grid, normativas vigentes en Argentina, seguridad eléctrica, y montaje sobre techos de chapa, losa y teja.',
    topics: [
      'Física solar y cálculo de radiación en provincias argentinas',
      'Dimensionamiento de baterías de litio y ciclo profundo',
      'Tableros de protección DC/AC y descargadores atmosféricos',
      'Normativa Ley 27.424 y trámites de usuario-generador'
    ]
  },
  {
    id: 'c-bombeo-solar',
    title: 'Especialización en Bombeo Solar y Aplicaciones Rurales',
    level: 'Intermedio',
    duration: '3 Semanas intensivas',
    modality: '100% Online + Talleres de cálculo hidráulico',
    certification: 'Certificado Técnico Especialista en Bombeo Solar',
    description: 'Orientado a técnicos agropecuarios, electricistas y agrónomos que buscan diseñar e instalar bombas solares para hacienda y riego sin errores de dimensionamiento.',
    topics: [
      'Cálculo de caudal, altura manométrica dinámica y pérdidas de carga',
      'Selección de bombas sumergibles helicoidales vs centrífugas',
      'Programación de variadores de frecuencia y controladores MPPT',
      'Protecciones contra marcha en seco y sobretensión'
    ]
  }
];

export const FAQS = [
  {
    q: '¿Qué pasa los días nublados o de lluvia con los paneles solares?',
    a: 'Los paneles fotovoltaicos continúan generando energía aun con cielo encapotado, aprovechando la radiación difusa (entre un 20% y 35% de su potencia nominal). Si tenés un sistema híbrido, el faltante se complementa automáticamente con la red o con las baterías sin cortes ni pestañeos.'
  },
  {
    q: '¿Qué diferencia hay entre un sistema On-Grid y un sistema Híbrido con baterías?',
    a: 'El sistema On-Grid busca el máximo ahorro económico al menor costo de inversión, pero por norma de seguridad internacional (anti-isla), se apaga si se corta la luz de la calle. El sistema Híbrido, en cambio, tiene un banco de baterías de litio que mantiene tu casa o negocio con luz ininterrumpida ante cualquier apagón.'
  },
  {
    q: '¿Cómo funciona la Ley de Generación Distribuida en Argentina?',
    a: 'La Ley Nacional 27.424 te permite instalar paneles solares e inyectar a la red pública el excedente de energía que no consumas. Tu distribuidora (Edenor, Edesur, EPEC, EPE, etc.) te instala un medidor bidireccional y descuenta los kWh inyectados de tu factura eléctrica.'
  },
  {
    q: '¿Hacen envíos de equipos al interior del país?',
    a: 'Sí, despachamos todos los días desde nuestras sucursales de Banfield y CABA hacia las 24 provincias argentinas a través de expresos y transportes con seguro de carga. Los paneles viajan en pallets reforzados protegidos especialmente contra impactos.'
  },
  {
    q: '¿Cuánto tiempo duran los paneles solares y qué garantía tienen?',
    a: 'Los paneles solares Tier 1 (Canadian Solar, Jinko, etc.) tienen una vida útil superior a los 30 años, con una garantía de rendimiento lineal del 80% asegurada por 25 años. Los inversores cuentan con garantía oficial directa con nuestro servicio técnico en Argentina.'
  },
  {
    q: '¿Ustedes realizan la instalación o solo venden los productos?',
    a: 'Brindamos ambos servicios: somos importadores/distribuidores mayoristas y también contamos con cuadrillas propias de ingenieros e instaladores certificados para realizar obras llave en mano con firma de planos y gestiones de distribuidora.'
  }
];
