import Link from 'next/link';
import { ArrowRight, Smartphone, CheckCircle, Clock, Zap, Users, Bell, Download, Shield, BarChart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiele App Ontwikkeling - LA Webdesign',
  description: 'Cross-platform mobiele apps voor iOS en Android. React Native ontwikkeling vanaf €5.000 met native performance en app store deployment.',
  keywords: ['mobiele app ontwikkeling', 'React Native', 'iOS app', 'Android app', 'cross-platform'],
};

export default function MobieleAppOntwikkelingPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Eén codebase voor zowel iOS als Android, kostenefficiënt en snel.'
    },
    {
      icon: Zap,
      title: 'Native Performance',
      description: 'Prestaties vergelijkbaar met native apps door optimalisatie en best practices.'
    },
    {
      icon: Bell,
      title: 'Push Notificaties',
      description: 'Houd gebruikers betrokken met gerichte push notificaties en messaging.'
    },
    {
      icon: Shield,
      title: 'Offline Functionaliteit',
      description: 'Apps werken ook zonder internetverbinding met lokale data opslag.'
    },
    {
      icon: Download,
      title: 'App Store Ready',
      description: 'Complete ondersteuning voor publicatie in Apple App Store en Google Play.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Ingebouwde analytics voor gebruikersgedrag en app prestaties.'
    }
  ];

  const appTypes = [
    {
      title: 'Business Apps',
      description: 'Interne bedrijfsapps voor productiviteit, communicatie en workflow management.',
      examples: ['CRM mobiele apps', 'Inventory management', 'Field service apps', 'Employee portals']
    },
    {
      title: 'E-commerce Apps',
      description: 'Mobiele webshops en marketplace apps met betalingen en order tracking.',
      examples: ['Retail apps', 'Food delivery', 'Booking platforms', 'Subscription services']
    },
    {
      title: 'Social & Community',
      description: 'Social networking apps, forums en community platforms voor engagement.',
      examples: ['Social networks', 'Dating apps', 'Community forums', 'Event platforms']
    },
    {
      title: 'Utility & Productivity',
      description: 'Handige apps die dagelijkse taken vereenvoudigen en productiviteit verhogen.',
      examples: ['Task managers', 'Note-taking apps', 'Calendar apps', 'Finance trackers']
    }
  ];

  const techStack = [
    { name: 'React Native', description: 'Cross-platform framework van Facebook' },
    { name: 'Expo', description: 'Development platform voor snellere builds' },
    { name: 'TypeScript', description: 'Type-safe development voor betere code' },
    { name: 'Firebase', description: 'Backend services en real-time database' },
    { name: 'Redux Toolkit', description: 'State management voor complexe apps' },
    { name: 'Native Base', description: 'UI component library voor consistente styling' }
  ];

  const packages = [
    {
      name: 'Starter App',
      price: '€5.000',
      description: 'Eenvoudige app met basis functionaliteit',
      features: [
        'Tot 5 schermen',
        'Basis navigatie',
        'API integratie',
        'Push notificaties',
        'App store deployment',
        'iOS & Android',
        '3 maanden ondersteuning'
      ],
      timeline: '6-8 weken'
    },
    {
      name: 'Business App',
      price: '€10.000',
      description: 'Volledige business app met geavanceerde features',
      features: [
        'Onbeperkt schermen',
        'User authentication',
        'Offline functionaliteit',
        'Real-time updates',
        'Analytics dashboard',
        'Admin panel',
        '6 maanden ondersteuning'
      ],
      timeline: '8-12 weken',
      popular: true
    },
    {
      name: 'Enterprise App',
      price: 'Op maat',
      description: 'Complexe apps voor grote organisaties',
      features: [
        'Custom architectuur',
        'Advanced security',
        'Multi-tenant support',
        'Integration APIs',
        'White-label oplossing',
        'DevOps pipeline',
        '1 jaar ondersteuning'
      ],
      timeline: '12+ weken'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Concept & Strategy',
      description: 'App concept uitwerken, doelgroep analyse en feature planning.',
      duration: '1 week'
    },
    {
      step: 2,
      title: 'UI/UX Design',
      description: 'Wireframes, prototypes en visueel design voor optimale user experience.',
      duration: '2-3 weken'
    },
    {
      step: 3,
      title: 'Development',
      description: 'App ontwikkeling met React Native voor iOS en Android platforms.',
      duration: '4-8 weken'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Uitgebreid testen op verschillende devices en operating systems.',
      duration: '1-2 weken'
    },
    {
      step: 5,
      title: 'App Store Launch',
      description: 'Publicatie in Apple App Store en Google Play Store.',
      duration: '1 week'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Snellere Time-to-Market',
      description: 'Cross-platform development betekent snellere lancering op beide platforms'
    },
    {
      icon: Users,
      title: 'Bredere Doelgroep',
      description: 'Bereik zowel iOS als Android gebruikers met één app'
    },
    {
      icon: CheckCircle,
      title: 'Kostenefficiënt',
      description: 'Lagere ontwikkelkosten dan separate native apps'
    },
    {
      icon: Shield,
      title: 'Eenvoudig Onderhoud',
      description: 'Eén codebase betekent eenvoudiger updates en onderhoud'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary-900 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="text-primary-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Mobiele App Ontwikkeling
                  </h1>
                  <p className="text-primary-400 font-semibold text-lg mt-1">
                    Vanaf €5.000 • 6-12 weken oplevering
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
                Cross-platform mobiele applicaties die naadloos werken op zowel iOS als Android. 
                Gebouwd met React Native voor native performance en kostenefficiënte ontwikkeling 
                zonder concessies aan kwaliteit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-background px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Plan Gratis Consult</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/cases"
                  className="border border-border hover:border-primary-500 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center"
                >
                  Bekijk Voorbeelden
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-30">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waarom React Native?
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              React Native wordt gebruikt door Facebook, Instagram, Uber en vele andere 
              toonaangevende bedrijven voor hun mobiele apps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              App Categorieën
            </h2>
            <p className="text-xl text-secondary-300">
              We ontwikkelen apps voor verschillende doeleinden en branches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {type.title}
                </h3>
                <p className="text-secondary-300 mb-6">
                  {type.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-secondary-400 mb-3 uppercase tracking-wider">
                    Voorbeelden:
                  </h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-secondary-300">
                        <CheckCircle size={16} className="text-primary-400" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Voordelen van Cross-Platform Apps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Tech Stack
            </h2>
            <p className="text-xl text-secondary-300">
              Bewezen technologieën voor betrouwbare mobiele apps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tech.name}
                </h3>
                <p className="text-secondary-300 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              App Ontwikkeling Pakketten
            </h2>
            <p className="text-xl text-secondary-300">
              Van eenvoudige apps tot enterprise oplossingen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-background border rounded-2xl p-8 relative ${
                  pkg.popular 
                    ? 'border-primary-500 ring-2 ring-primary-500/20' 
                    : 'border-border hover:border-primary-500'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Meest Populair
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-secondary-300 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-secondary-400">
                    <Clock size={16} />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                      <span className="text-secondary-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-background'
                      : 'border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-background'
                  }`}
                >
                  {pkg.price === 'Op maat' ? 'Vraag Offerte' : 'Kies Dit Pakket'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              App Ontwikkelproces
            </h2>
            <p className="text-xl text-secondary-300">
              Van concept tot app store in 5 stappen
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-background border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-primary-500 text-background rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-300">
                    {step.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-secondary-400">
                  <Clock size={16} />
                  <span>{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar voor jouw Mobiele App?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plan een gratis consult en ontdek hoe wij jouw app idee kunnen omzetten 
            in een succesvolle mobiele applicatie voor iOS en Android.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            <span>Plan Gratis Consult</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
