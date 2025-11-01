export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: 'WordPress' | 'Next.js Web App' | 'Mobiele App';
  client: string;
  year: string;
  duration: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  liveUrl?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'bloemenwinkel-de-tulp-wordpress',
    title: 'Bloemenwinkel De Tulp',
    subtitle: 'Moderne WordPress website met online bestelsysteem',
    category: 'WordPress',
    client: 'De Tulp Bloemen',
    year: '2024',
    duration: '3 weken',
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Stripe'],
    description: 'Een complete website redesign voor een lokale bloemenwinkel met focus op online bestellingen en seizoensgebonden promoties.',
    challenge: 'De oude website was verouderd en niet mobiel-vriendelijk. Klanten konden niet online bestellen en de eigenaar had moeite met het beheren van content.',
    solution: 'We hebben een moderne WordPress website gebouwd met WooCommerce voor online bestellingen, een gebruiksvriendelijk CMS en responsive design.',
    results: [
      '150% toename in online bestellingen',
      '60% meer mobiele bezoekers',
      '40% verbetering in laadtijd',
      'Eenvoudig contentbeheer voor eigenaar'
    ],
    image: '/placeholder-case-tulp.jpg',
    gallery: [
      '/placeholder-case-tulp-1.jpg',
      '/placeholder-case-tulp-2.jpg',
      '/placeholder-case-tulp-3.jpg'
    ],
    testimonial: {
      text: 'LA Webdesign heeft onze oude website getransformeerd tot een moderne, snelle site die perfect werkt op alle apparaten. Onze online verkoop is enorm gestegen!',
      author: 'Sarah van der Berg',
      position: 'Eigenaar, De Tulp Bloemen'
    },
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    slug: 'techstart-dashboard-nextjs',
    title: 'TechStart Analytics Dashboard',
    subtitle: 'Real-time data dashboard voor startup analytics',
    category: 'Next.js Web App',
    client: 'TechStart BV',
    year: '2024',
    duration: '8 weken',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Chart.js'],
    description: 'Een geavanceerd analytics dashboard voor een tech startup om hun KPIs en gebruikersdata in real-time te monitoren.',
    challenge: 'TechStart had geen centraal overzicht van hun belangrijkste metrics en moest handmatig data verzamelen uit verschillende bronnen.',
    solution: 'We ontwikkelden een Next.js dashboard met real-time data synchronisatie, interactieve grafieken en geautomatiseerde rapportage.',
    results: [
      '80% tijdsbesparing bij rapportage',
      'Real-time inzicht in alle KPIs',
      'Geautomatiseerde alerts bij afwijkingen',
      'Verbeterde besluitvorming door data'
    ],
    image: '/placeholder-case-techstart.jpg',
    gallery: [
      '/placeholder-case-techstart-1.jpg',
      '/placeholder-case-techstart-2.jpg',
      '/placeholder-case-techstart-3.jpg'
    ],
    testimonial: {
      text: 'Het dashboard heeft onze manier van werken compleet veranderd. We hebben nu real-time inzicht in onze prestaties en kunnen veel sneller bijsturen.',
      author: 'Mark Janssen',
      position: 'CEO, TechStart BV'
    },
    featured: true
  },
  {
    slug: 'fitcoach-mobiele-app',
    title: 'FitCoach Personal Training App',
    subtitle: 'Cross-platform app voor personal trainers en cliënten',
    category: 'Mobiele App',
    client: 'FitCoach Nederland',
    year: '2024',
    duration: '12 weken',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Push Notifications'],
    description: 'Een mobiele app die personal trainers en hun cliënten verbindt met workout planning, voortgang tracking en communicatie.',
    challenge: 'Personal trainers hadden geen efficiënte manier om workouts te plannen, voortgang bij te houden en met cliënten te communiceren.',
    solution: 'We bouwden een cross-platform app met workout planning, voortgang tracking, chat functionaliteit en betaalintegratie.',
    results: [
      '200+ actieve personal trainers',
      '1000+ tevreden app gebruikers',
      '95% client retention rate',
      'Gemiddeld 4.8 sterren in app stores'
    ],
    image: '/placeholder-case-fitcoach.jpg',
    gallery: [
      '/placeholder-case-fitcoach-1.jpg',
      '/placeholder-case-fitcoach-2.jpg',
      '/placeholder-case-fitcoach-3.jpg'
    ],
    testimonial: {
      text: 'De app heeft mijn business getransformeerd. Ik kan nu veel meer cliënten helpen en zij zijn veel betrokken bij hun fitness journey.',
      author: 'Lisa de Vries',
      position: 'Personal Trainer'
    },
    featured: true
  },
  {
    slug: 'restaurant-bella-vista-wordpress',
    title: 'Restaurant Bella Vista',
    subtitle: 'Elegante restaurant website met reserveringssysteem',
    category: 'WordPress',
    client: 'Bella Vista Restaurant',
    year: '2023',
    duration: '4 weken',
    technologies: ['WordPress', 'OpenTable API', 'Custom Theme', 'Google Maps'],
    description: 'Een stijlvolle website voor een Italiaans restaurant met online reserveringen en menuweergave.',
    challenge: 'Het restaurant ontving veel telefonische reserveringen en wilde dit automatiseren. Ook was er behoefte aan een professionele online aanwezigheid.',
    solution: 'Een custom WordPress website met geïntegreerd reserveringssysteem, digitale menukaart en fotogalerij.',
    results: [
      '70% minder telefonische reserveringen',
      '45% toename in nieuwe klanten',
      'Verbeterde online reputatie',
      'Eenvoudig menu- en eventbeheer'
    ],
    image: '/placeholder-case-bella.jpg',
    gallery: [
      '/placeholder-case-bella-1.jpg',
      '/placeholder-case-bella-2.jpg'
    ],
    featured: false
  },
  {
    slug: 'logistics-pro-web-app',
    title: 'LogisticsPro Management System',
    subtitle: 'Logistiek management platform voor transport bedrijven',
    category: 'Next.js Web App',
    client: 'LogisticsPro BV',
    year: '2023',
    duration: '16 weken',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    description: 'Een uitgebreid logistiek management systeem voor het plannen van routes, beheren van chauffeurs en tracking van zendingen.',
    challenge: 'LogisticsPro gebruikte verouderde software die niet schaalbaar was en veel handmatig werk vereiste.',
    solution: 'Een moderne web applicatie met geautomatiseerde routeplanning, real-time tracking en uitgebreide rapportage.',
    results: [
      '50% efficiëntere routeplanning',
      '30% kostenbesparing op brandstof',
      'Real-time zicht op alle zendingen',
      'Geautomatiseerde klantcommunicatie'
    ],
    image: '/placeholder-case-logistics.jpg',
    gallery: [
      '/placeholder-case-logistics-1.jpg',
      '/placeholder-case-logistics-2.jpg'
    ],
    featured: false
  },
  {
    slug: 'eventplanner-app',
    title: 'EventPlanner Community App',
    subtitle: 'Social platform voor event organisatie en networking',
    category: 'Mobiele App',
    client: 'EventPlanner Community',
    year: '2023',
    duration: '14 weken',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    description: 'Een sociale app voor event organisatoren om evenementen te promoten en bezoekers om elkaar te ontmoeten.',
    challenge: 'Event organisatoren hadden moeite om hun evenementen te promoten en bezoekers misten een platform om te netwerken.',
    solution: 'Een sociale app met event discovery, ticketing, chat functionaliteit en networking features.',
    results: [
      '500+ succesvolle evenementen',
      '5000+ actieve gebruikers',
      '85% event attendance rate',
      'Sterke community opgebouwd'
    ],
    image: '/placeholder-case-eventplanner.jpg',
    gallery: [
      '/placeholder-case-eventplanner-1.jpg',
      '/placeholder-case-eventplanner-2.jpg'
    ],
    featured: false
  }
];

export const getFeaturedCases = () => caseStudies.filter(c => c.featured);
export const getCaseBySlug = (slug: string) => caseStudies.find(c => c.slug === slug);
export const getCasesByCategory = (category: CaseStudy['category']) => 
  caseStudies.filter(c => c.category === category);
