import { ProductItem, ServicePillar, FaqItem, ComparisonRow } from './types';

export const COMPANY_INFO = {
  name: 'Horizon Smart Security',
  tagline: 'Seguridad inteligente para hogares y negocios',
  phonePeru: '+51 982 473 866',
  phoneUSA: '+1 5593045728',
  phoneUSARaw: '15593045728',
  email: 'contacto@horizonsmartsecurity.pe',
  operatingHours: 'Lun - Sáb: 8:00 AM - 7:00 PM',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'ring-doorbell-wired',
    name: 'Ring Video Doorbell Wired',
    category: 'Control de Acceso Perimetral',
    badge: 'Más vendido',
    headline: 'Videotimbre cableado para supervisar tu acceso desde la app Ring, con conexión a cables especiales de timbre o adaptador de pared.',
    imageVisual: 'doorbell',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2Fe794889a743e444caaf9eaf82fcfd68a?format=webp&width=2000&height=3000',
    specs: [
      'Videotimbre cableado para el acceso principal',
      'Configuración y control desde la aplicación Ring',
      'Alimentación continua para una instalación permanente',
      'Conexión a cables especiales de timbre o adaptador de pared',
    ],
    technicalNote: 'Conecta el equipo a cables especiales de timbre o utiliza un adaptador para enchufe de pared.',
    recommendedFor: 'Puertas principales, portones residenciales y accesos comerciales.',
    voltageInfo: 'Cables de timbre o adaptador para enchufe de pared',
    includedTurnkey: [
      'Hardware Ring Video Doorbell original sellado',
      'Conexión a cables especiales de timbre o adaptador para enchufe de pared',
      'Canalizado técnico y fijación en el acceso principal',
      'Revisión de conectividad en el punto de instalación',
      'Emparejamiento y configuración en tu smartphone',
      'Garantía de instalación HSS por 90 días',
    ],
    detailHighlights: [
      { label: 'Tipo', value: 'Videotimbre cableado' },
      { label: 'Control', value: 'Desde Ring App' },
      { label: 'Alimentación', value: 'Conexión continua' },
      { label: 'Instalación', value: 'Timbre o pared' },
    ],
    detailGroups: [
      {
        title: 'Control de acceso',
        description: 'Una solución cableada para mantener tu acceso principal bajo control.',
        items: [
          'Videotimbre pensado para puertas principales y accesos',
          'Configuración y control desde la aplicación Ring',
          'Supervisión del acceso desde tu celular según la configuración del equipo',
          'Integración dentro de la experiencia de seguridad Ring',
        ],
      },
      {
        title: 'Conexión e instalación',
        description: 'Elige la alternativa que mejor se adapta al punto donde instalarás tu Doorbell.',
        items: [
          'Conexión a cables especiales de timbre',
          'Como alternativa, uso de adaptador para enchufe de pared',
          'Alimentación continua para dejarlo listo de forma permanente',
          'Montaje ordenado y configuración inicial de la aplicación',
          'Soportes o accesorios de montaje específicos cotizados por separado',
        ],
      },
      {
        title: 'Uso y requisitos',
        description: 'Lo necesario para ponerlo en marcha y aprovechar su control remoto.',
        items: [
          'Aplicación Ring para configurar y controlar el equipo',
          'Conexión a Internet para las funciones remotas',
          'Cuenta Ring y teléfono compatible para el emparejamiento',
          'Revisa las condiciones vigentes de Ring para grabación y almacenamiento',
        ],
      },
    ],
    detailRequirements: [
      'Punto de conexión con cables especiales de timbre o adaptador de pared',
      'Conexión a Internet para las funciones remotas',
      'Aplicación Ring instalada en tu smartphone',
      'Revisión de las condiciones del servicio Ring para grabaciones',
    ],
  },
  {
    id: 'ring-pan-tilt-indoor',
    name: 'Ring Pan-Tilt Indoor Cam',
    category: 'Cobertura Dinámica 360°',
    badge: 'Cobertura Total',
    headline: 'Cámara para interiores con visión panorámica de 360°, movimiento Pan-Tilt y control desde la app Ring.',
    imageVisual: 'pantilt',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2F70d780f15de74f0e8427e9e820e6aab4?format=webp&width=2000&height=3000',
    specs: [
      'Video HD con visión panorámica de 360°',
      'Movimiento Pan-Tilt controlable desde la app Ring',
      'Visión nocturna a color para monitoreo interior',
      'Audio bidireccional y alertas de movimiento',
    ],
    recommendedFor: 'Salas principales, recepciones de consultorios, oficinas y negocios comerciales.',
    voltageInfo: 'Lista para instalación eléctrica local',
    includedTurnkey: [
      'Cámara Ring Pan-Tilt original sellada de fábrica',
      'Adaptador y cable de alimentación',
      'Anclaje técnico en techo o pared',
      'Configuración del movimiento desde la app Ring',
      'Prueba de transmisión en vivo y alertas',
      'Garantía de instalación HSS por 90 días',
    ],
    detailHighlights: [
      { label: 'Video', value: 'HD · 360° panorámico' },
      { label: 'Movimiento', value: 'Pan-Tilt desde Ring App' },
      { label: 'Visión nocturna', value: 'A color' },
      { label: 'Audio', value: 'Bidireccional' },
    ],
    detailGroups: [
      {
        title: 'Video y cobertura',
        description: 'Una vista amplia para revisar tu ambiente desde la aplicación Ring.',
        items: [
          'Video HD para monitoreo de interiores',
          'Visión panorámica de 360° para revisar distintos ángulos',
          'Visión nocturna a color',
          'Transmisión en vivo desde la app Ring',
        ],
      },
      {
        title: 'Movimiento y comunicación',
        description: 'Controla la cámara y comunícate sin estar frente al equipo.',
        items: [
          'Movimiento horizontal y vertical Pan-Tilt controlable desde la app',
          'Audio bidireccional para escuchar y hablar desde tu celular',
          'Alertas de movimiento configurables desde la aplicación',
          'Revisión de eventos disponibles según las funciones de tu cuenta Ring',
        ],
      },
      {
        title: 'Instalación y uso',
        description: 'Pensada para integrarse fácilmente a un espacio interior.',
        items: [
          'Diseñada para uso en interiores',
          'Alimentación continua mediante enchufe',
          'Requiere la app Ring y conexión a Internet para funciones remotas',
          'Instalación en un punto con tomacorriente cercano',
          'Monturas o accesorios específicos cotizados por separado del equipo',
        ],
      },
    ],
    detailRequirements: [
      'Cuenta Ring para configurar y controlar el equipo',
      'Conexión a Internet para transmisión y acceso remoto',
      'Tomacorriente cercano para alimentación continua',
      'Las funciones de grabación dependen del plan Ring aplicable',
    ],
  },
  {
    id: 'ring-indoor-cam-gen2',
    name: 'Ring Indoor Cam (2da Gen)',
    category: 'Seguridad Compacta',
    badge: 'Máxima Discreción',
    headline: 'Cámara compacta para interiores con video HD 1080p y alimentación continua por enchufe.',
    imageVisual: 'indoor',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F30fb2522c52c42458e32df881ac7668a%2F45c29923282744a28142313e553a36b1?format=webp&width=2000&height=3000',
    specs: [
      'Video HD 1080p para supervisión de interiores',
      'Formato compacto para dormitorios, pasillos y espacios puntuales',
      'Alimentación continua desde una toma de corriente estándar',
      'Variante anunciada con 1 cámara',
    ],
    recommendedFor: 'Monitoreo de dormitorios, pasillos, mascotas y cajas registradoras.',
    voltageInfo: 'Lista para instalación eléctrica local',
    includedTurnkey: [
      'Cámara Ring Indoor 2da Gen original sellada',
      'Ubicación interior definida según el espacio a supervisar',
      'Fijación estética y ocultamiento de cableado expuesto',
      'Conexión a toma de corriente estándar',
      'Configuración inicial y orientación de uso',
      'Garantía de instalación HSS por 90 días',
    ],
    detailHighlights: [
      { label: 'Video', value: 'HD 1080p' },
      { label: 'Formato', value: 'Cámara para interiores' },
      { label: 'Alimentación', value: 'Toma estándar' },
      { label: 'Variante', value: '1 cámara' },
    ],
    detailGroups: [
      {
        title: 'Video y formato',
        description: 'Una cámara compacta para supervisar espacios interiores de forma continua.',
        items: [
          'Video HD 1080p para monitoreo de interiores',
          'Diseño compacto para habitaciones y espacios puntuales',
          'Variante anunciada con 1 cámara',
          'Recomendada para dormitorios, pasillos y áreas interiores',
        ],
      },
      {
        title: 'Alimentación e instalación',
        description: 'Una solución práctica para instalar en un punto interior con corriente cercana.',
        items: [
          'Conexión a una toma de corriente estándar',
          'Alimentación continua para una instalación permanente',
          'Ubicación definida según el ambiente que deseas supervisar',
          'Montaje y cableado ordenado para conservar la estética del espacio',
          'Soportes o monturas específicos cotizados por separado',
        ],
      },
      {
        title: 'Uso y condiciones',
        description: 'Pensada para integrarse a una instalación interior sencilla.',
        items: [
          'Diseñada para uso en interiores',
          'Las funciones remotas pueden requerir conexión a Internet',
          'Revisa las condiciones vigentes de Ring para grabación y almacenamiento',
          'No se presenta como una cámara alimentada por batería',
        ],
      },
    ],
    detailRequirements: [
      'Toma de corriente estándar cercana al punto de instalación',
      'Espacio interior donde quieras supervisar actividad',
      'Conexión a Internet para las funciones remotas que actives',
      'Revisión de las condiciones del servicio Ring para grabaciones',
    ],
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'importacion-directa',
    title: 'Importación Directa',
    subtitle: 'Cadena de suministro verificada. Sin clones ni intermediarios.',
    code: 'RING-HUB // VERIFIED',
    description: 'Adquirimos equipos originales de distribuidores autorizados. Cada unidad cuenta con número de serie verificable ante Ring LLC, precinto intacto y firmware original sin alteraciones.',
    features: [
      'Aprovisionamiento mediante canales autorizados',
      'Precinto de fábrica y número de serie cotejable',
      'Cero productos reacondicionados (Refurbished) camuflados',
    ],
  },
  {
    id: 'ingenieria-electrica',
    title: 'Ingeniería Eléctrica 220V',
    subtitle: 'Equipos listos para una instalación eléctrica local segura y ordenada.',
    code: 'ELEC-SPEC // 220V-60Hz',
    description: 'Las cámaras Ring están listas para conectarse a la instalación eléctrica local. Para Ring Video Doorbell, realizamos la conexión a cables especiales de timbre o instalamos un adaptador para enchufe de pared.',
    features: [
      'Conexión eléctrica adecuada para cada equipo',
      'Equipos listos para la instalación eléctrica local',
      'Revisión del punto de conexión antes del montaje',
    ],
  },
  {
    id: 'instalacion-limpia',
    title: 'Instalación Limpia',
    subtitle: 'Montaje estético, canalizado oculto y diagnóstico de señal Wi-Fi antes de perforar.',
    code: 'STRUCT // RF-DIAGNOSTIC',
    description: 'No improvisamos. Antes de hacer una sola perforación realizamos un escaneo de RSSI (fuerza de señal Wi-Fi) en 2.4 GHz en el punto de fijación. Ocultamos cables con canaletas perimetrales a tono con la fachada o muro interior.',
    features: [
      'Test de cobertura de señal RF en decibelios (dBm)',
      'Canalizado técnico sobrio y brocas especiales para porcelanato/ladrillo',
      'Nivelación micrométrica y sellado perimetral anti-humedad',
    ],
  },
  {
    id: 'soporte-remoto',
    title: 'Soporte coordinado',
    subtitle: 'Acompañamiento claro antes y después de tu instalación.',
    code: 'SUPPORT // DIRECT',
    description: 'Te orientamos durante la elección, configuración y uso de tus equipos Ring, con atención directa para resolver tus dudas y coordinar cualquier seguimiento necesario.',
    features: [
      'Orientación directa por teléfono y WhatsApp',
      'Seguimiento de la instalación y configuración',
      'Apoyo para usar la aplicación Ring',
    ],
  },
];

export const COMPARISONS: ComparisonRow[] = [
  {
    aspect: 'Alimentación eléctrica',
    informal: 'Conexión directa a 220V o cargadores genéricos chinos que sobrecalientan y queman el equipo en semanas.',
    informalRisk: 'high',
    horizon: 'Conexión ordenada y adecuada para el equipo, lista para la instalación eléctrica local.',
  },
  {
    aspect: 'Diagnóstico Wi-Fi',
    informal: 'Instalan a ciegas. La cámara sufre retardos, cortes de video (lag) y notificaciones tardías.',
    informalRisk: 'medium',
    horizon: 'Medición de radiofrecuencia (dBm) previa para asegurar latencia mínima y video fluido en vivo.',
  },
  {
    aspect: 'Acabado y fijación',
    informal: 'Cables expuestos que invitan a vandalismo o filtraciones de lluvia y polvo costero.',
    informalRisk: 'medium',
    horizon: 'Canalizado arquitectónico oculto, sellado de intemperie y tacos de expansión milimétricos.',
  },
  {
    aspect: 'Procedencia del hardware',
    informal: 'Riesgo de equipos "Open Box", refurbished de lotes de liquidación o versiones obsoletas.',
    informalRisk: 'high',
    horizon: 'Hardware original precintado, con serial oficial Ring y procedencia verificable.',
  },
  {
    aspect: 'Garantía y postventa',
    informal: 'Sin acompañamiento después de la compra. El cliente debe resolver solo cualquier duda o inconveniente.',
    informalRisk: 'high',
    horizon: 'Acompañamiento directo para coordinar la solución correspondiente ante cualquier duda o falla de fábrica.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Puedo usar una cámara Ring sin suscripción?',
    answer: 'Sí. Puedes ver el video en vivo, recibir alertas en tiempo real y usar las funciones principales de tu cámara sin contratar una suscripción.',
  },
  {
    id: 'faq-2',
    question: '¿Qué incluye Ring Protect?',
    answer: 'Después de los 30 días de prueba gratuita, Ring Protect es opcional. Según el plan disponible, permite guardar grabaciones en la nube hasta por 180 días y revisar videos anteriores. Contáctanos para recibir asesoría personalizada sobre las opciones disponibles según el número de cámaras que instalarás.',
  },
  {
    id: 'faq-6',
    question: '¿Qué sucede después de los 30 días de prueba?',
    answer: [
      'Tu cámara Ring seguirá funcionando. Podrás ver video en vivo y recibir alertas en tiempo real desde la aplicación.',
      'Si deseas guardar y revisar grabaciones de eventos anteriores, necesitarás contratar un plan Ring compatible.',
      'HORIZON SMART SECURITY puede orientarte sobre las opciones disponibles para tu cámara y ubicación.',
    ].join('\n'),
  },
  {
    id: 'faq-3',
    question: '¿La instalación incluye la configuración en mi celular?',
    answer: 'Sí. Coordinamos la instalación, vinculamos la cámara con la aplicación Ring y te orientamos para que puedas ver tu equipo y recibir alertas desde tu dispositivo.',
  },
  {
    id: 'faq-4',
    question: '¿Cómo coordinan la instalación?',
    answer: 'Coordinamos contigo la fecha y hora de atención que mejor se adapten a tu agenda y revisamos contigo los detalles del espacio que quieres proteger.',
  },
  {
    id: 'faq-5',
    question: '¿Puedo instalar cámaras en mi hogar y negocio?',
    answer: 'Sí. Te ayudamos a elegir cámaras para interiores, accesos, oficinas, negocios y otros espacios según lo que quieras vigilar y el nivel de cobertura que necesites.',
  },
];
