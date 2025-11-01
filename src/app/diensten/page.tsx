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
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 sm:mb-8 tracking-tight">
            Onze <span className="font-medium">Diensten</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Van eenvoudige WordPress websites tot complexe web applicaties en mobiele apps. 
            Wij bieden de perfecte digitale oplossing voor jouw bedrijf.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:shadow-lg transition-all duration-500 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Info */}
                    <div>
                      <div className="flex items-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mr-4 sm:mr-6">
                          <Icon className="text-gray-600" size={32} />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
                            {service.title}
                          </h2>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-black font-semibold">{service.price}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>
                      
                      <div className="mb-6 sm:mb-8">
                        <h3 className="text-lg font-medium text-black mb-4">Ideaal voor:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.ideal.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        href={service.href}
                        className="inline-flex items-center space-x-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                      >
                        <span>Meer informatie</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </Link>
                    </div>
                    
                    {/* Right Column - Features */}
                    <div>
                      <h3 className="text-lg font-medium text-black mb-6">Wat je krijgt:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                            <span className="font-medium">{feature}</span>
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
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Ons <span className="font-medium">Werkproces</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Van eerste gesprek tot succesvolle lancering. 
              Zo werken wij samen aan jouw digitale succes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Waarom Kiezen voor <span className="font-medium">LA Webdesign?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Klaar om te <span className="font-medium">Beginnen?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Plan een gratis consult en ontdek welke dienst het beste bij jouw bedrijf past.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Plan Gratis Consult</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
