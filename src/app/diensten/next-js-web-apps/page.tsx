import Link from 'next/link';
import { ArrowRight, Code, CheckCircle, Clock, Zap, Database, Shield, Users, Smartphone, BarChart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Web Apps - LA Webdesign',
  description: 'Moderne Next.js web applicaties met TypeScript, server-side rendering en API integratie. Vanaf €3.500 voor snelle, schaalbare oplossingen.',
  keywords: ['Next.js web app', 'React applicatie', 'TypeScript', 'server-side rendering', 'web development'],
};

export default function NextJsWebAppsPage() {
  const features = [
    {
      icon: Zap,
      title: 'Blazing Fast Performance',
      description: 'Server-side rendering en optimalisatie voor de snelst mogelijke laadtijden.'
    },
    {
      icon: Code,
      title: 'TypeScript & Modern Stack',
      description: 'Gebouwd met TypeScript, React en de nieuwste web technologieën.'
    },
    {
      icon: Database,
      title: 'API & Database Integratie',
      description: 'Naadloze integratie met databases, APIs en externe services.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Geavanceerde beveiliging, authenticatie en autorisatie systemen.'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web App',
      description: 'PWA functionaliteit voor app-achtige ervaring op alle apparaten.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Ingebouwde analytics en performance monitoring voor inzichten.'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Platforms',
      description: 'Schaalbare software-as-a-service applicaties met gebruikersbeheer en abonnementen.',
      examples: ['Project management tools', 'CRM systemen', 'Analytics dashboards']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Geavanceerde webshops met real-time voorraad, betalingen en order management.',
      examples: ['Custom webshops', 'B2B portalen', 'Marketplace platforms']
    },
    {
      title: 'Data Dashboards',
      description: 'Interactieve dashboards voor data visualisatie en business intelligence.',
      examples: ['Sales dashboards', 'KPI monitoring', 'Real-time analytics']
    },
    {
      title: 'Web Applications',
      description: 'Complexe web applicaties met geavanceerde functionaliteit en workflows.',
      examples: ['Booking systemen', 'Workflow tools', 'Collaboration platforms']
    }
  ];

  const techStack = [
    { name: 'Next.js 15', description: 'React framework met server-side rendering' },
    { name: 'TypeScript', description: 'Type-safe JavaScript voor betere code kwaliteit' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework voor snelle styling' },
    { name: 'Prisma', description: 'Modern database toolkit en ORM' },
    { name: 'NextAuth.js', description: 'Authenticatie en autorisatie' },
    { name: 'Vercel', description: 'Optimale hosting en deployment' }
  ];

  const packages = [
    {
      name: 'MVP',
      price: '€3.500',
      description: 'Minimum Viable Product voor startups',
      features: [
        'Basis functionaliteit',
        'Gebruikers authenticatie',
        'Database integratie',
        'Responsive design',
        'API endpoints',
        'Basic dashboard',
        '3 maanden ondersteuning'
      ],
      timeline: '4-6 weken'
    },
    {
      name: 'Professional',
      price: '€7.500',
      description: 'Volledige web applicatie voor bedrijven',
      features: [
        'Geavanceerde functionaliteit',
        'Admin dashboard',
        'Real-time features',
        'Payment integratie',
        'Email systeem',
        'Analytics & reporting',
        '6 maanden ondersteuning'
      ],
      timeline: '6-10 weken',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Op maat',
      description: 'Complexe systemen voor grote organisaties',
      features: [
        'Custom architectuur',
        'Microservices',
        'Advanced security',
        'Multi-tenant support',
        'API gateway',
        'DevOps pipeline',
        '1 jaar ondersteuning'
      ],
      timeline: '10+ weken'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Uitgebreide analyse van requirements, user stories en technische architectuur.',
      duration: '1-2 weken'
    },
    {
      step: 2,
      title: 'UI/UX Design',
      description: 'Wireframes, prototypes en visueel design voor optimale gebruikerservaring.',
      duration: '1-2 weken'
    },
    {
      step: 3,
      title: 'Backend Development',
      description: 'Database setup, API ontwikkeling en server-side logica implementatie.',
      duration: '2-4 weken'
    },
    {
      step: 4,
      title: 'Frontend Development',
      description: 'React componenten, state management en gebruikersinterface ontwikkeling.',
      duration: '2-4 weken'
    },
    {
      step: 5,
      title: 'Testing & Deployment',
      description: 'Uitgebreid testen, performance optimalisatie en productie deployment.',
      duration: '1 week'
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
                  <Code className="text-primary-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Next.js Web Apps
                  </h1>
                  <p className="text-primary-400 font-semibold text-lg mt-1">
                    Vanaf €3.500 • 4-10 weken oplevering
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
                Moderne, snelle web applicaties gebouwd met Next.js, TypeScript en de nieuwste 
                technologieën. Perfect voor SaaS platforms, dashboards en complexe web applicaties 
                die schaalbaar en onderhoudbaar moeten zijn.
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
                <div className="text-8xl opacity-30">⚡</div>
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
              Waarom Next.js?
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Next.js is het toonaangevende React framework voor productie-ready applicaties. 
              Gebruikt door bedrijven zoals Netflix, TikTok en Twitch.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Toepassingsgebieden
            </h2>
            <p className="text-xl text-secondary-300">
              Next.js web apps zijn perfect voor complexe, interactieve applicaties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <p className="text-secondary-300 mb-6">
                  {useCase.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-secondary-400 mb-3 uppercase tracking-wider">
                    Voorbeelden:
                  </h4>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, idx) => (
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

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Tech Stack
            </h2>
            <p className="text-xl text-secondary-300">
              We gebruiken de nieuwste en meest betrouwbare technologieën
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
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web App Pakketten
            </h2>
            <p className="text-xl text-secondary-300">
              Van MVP tot enterprise oplossingen
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ontwikkelproces
            </h2>
            <p className="text-xl text-secondary-300">
              Gestructureerde aanpak voor succesvolle web applicaties
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
            Klaar voor jouw Next.js Web App?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plan een gratis consult en ontdek hoe wij jouw idee kunnen omzetten 
            in een krachtige, schaalbare web applicatie.
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
