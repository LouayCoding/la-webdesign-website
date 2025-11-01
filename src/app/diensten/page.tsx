import Link from 'next/link';
import { ArrowRight, Code, Globe, Smartphone, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onze Diensten - LA Webdesign',
  description: 'Professionele webdesign diensten: WordPress websites, Next.js web apps en mobiele applicaties. Moderne oplossingen voor groeiende bedrijven.',
  keywords: ['webdesign diensten', 'WordPress websites', 'Next.js web apps', 'mobiele apps', 'webdevelopment'],
};

export default function DienstenPage() {
  const services = [
    {
      icon: Globe,
      title: 'WordPress Websites',
      description: 'Professionele WordPress websites die snel laden, SEO-geoptimaliseerd zijn en gemakkelijk te beheren.',
      href: '/diensten/wordpress-websites',
      price: 'Vanaf €1.500',
      duration: '2-3 weken',
      features: [
        'Responsive Design',
        'SEO Geoptimaliseerd',
        'Gebruiksvriendelijk CMS',
        'SSL Certificaat',
        'Google Analytics',
        'Contact Formulieren',
        'Social Media Integratie',
        '1 Jaar Ondersteuning'
      ],
      ideal: ['Kleine tot middelgrote bedrijven', 'Blogs en portfolios', 'E-commerce websites', 'Bedrijfspresentaties']
    },
    {
      icon: Code,
      title: 'Next.js Web Apps',
      description: 'Moderne, snelle web applicaties gebouwd met Next.js, TypeScript en de nieuwste technologieën.',
      href: '/diensten/next-js-web-apps',
      price: 'Vanaf €3.500',
      duration: '4-8 weken',
      features: [
        'Server-Side Rendering',
        'TypeScript',
        'API Integratie',
        'Database Connectie',
        'Gebruikersbeheer',
        'Real-time Features',
        'Progressive Web App',
        'Uitgebreide Testing'
      ],
      ideal: ['SaaS Applicaties', 'Dashboards', 'E-commerce Platforms', 'Data Visualisatie']
    },
    {
      icon: Smartphone,
      title: 'Mobiele App Ontwikkeling',
      description: 'Cross-platform mobiele applicaties die naadloos werken op zowel iOS als Android.',
      href: '/diensten/mobiele-app-ontwikkeling',
      price: 'Vanaf €5.000',
      duration: '6-12 weken',
      features: [
        'Cross-Platform',
        'Native Performance',
        'Push Notificaties',
        'Offline Functionaliteit',
        'App Store Deployment',
        'Backend Integratie',
        'User Authentication',
        'Analytics & Monitoring'
      ],
      ideal: ['Business Apps', 'E-commerce Apps', 'Social Platforms', 'Productiviteits Apps']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Gratis Consult',
      description: 'We bespreken jouw wensen, doelen en budget in een vrijblijvend gesprek.'
    },
    {
      step: '02',
      title: 'Voorstel & Planning',
      description: 'Je ontvangt een gedetailleerd voorstel met timeline en kostenraming.'
    },
    {
      step: '03',
      title: 'Design & Ontwikkeling',
      description: 'We ontwerpen en bouwen jouw project met regelmatige updates.'
    },
    {
      step: '04',
      title: 'Testing & Lancering',
      description: 'Uitgebreid testen en een succesvolle lancering van jouw project.'
    },
    {
      step: '05',
      title: 'Ondersteuning',
      description: 'Doorlopende ondersteuning en onderhoud voor optimale prestaties.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Snelle Oplevering',
      description: 'Gemiddeld binnen 2-8 weken afhankelijk van de complexiteit'
    },
    {
      icon: Users,
      title: 'Persoonlijke Service',
      description: 'Direct contact met je ontwikkelaar, geen tussenpersonen'
    },
    {
      icon: CheckCircle,
      title: 'Kwaliteitsgarantie',
      description: '100% tevredenheidsgarantie en 1 jaar gratis ondersteuning'
    },
    {
      icon: Clock,
      title: 'Transparante Communicatie',
      description: 'Regelmatige updates en volledige transparantie over de voortgang'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary-900 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Diensten</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Van eenvoudige WordPress websites tot complexe web applicaties en mobiele apps. 
              Wij bieden de perfecte digitale oplossing voor jouw bedrijf.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-8 lg:p-12 hover:border-primary-500 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Info */}
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="text-primary-400" size={32} />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-primary-400 font-semibold">{service.price}</span>
                            <span className="text-secondary-400">•</span>
                            <span className="text-secondary-400">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-secondary-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Ideaal voor:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.ideal.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-secondary-300">
                              <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        href={service.href}
                        className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-background px-6 py-3 rounded-lg font-semibold transition-colors duration-200 group"
                      >
                        <span>Meer informatie</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </Link>
                    </div>
                    
                    {/* Right Column - Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-6">Wat je krijgt:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-secondary-300">
                            <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ons Werkproces
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Van eerste gesprek tot succesvolle lancering. 
              Zo werken wij samen aan jouw digitale succes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-background rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-300 text-sm">
                  {step.description}
                </p>
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
              Waarom Kiezen voor LA Webdesign?
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om te Beginnen?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plan een gratis consult en ontdek welke dienst het beste bij jouw bedrijf past.
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
