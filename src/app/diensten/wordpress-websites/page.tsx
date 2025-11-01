import Link from 'next/link';
import { ArrowRight, Globe, CheckCircle, Clock, Users, Shield, Zap, Search, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Websites - LA Webdesign',
  description: 'Professionele WordPress websites die snel laden, SEO-geoptimaliseerd zijn en gemakkelijk te beheren. Vanaf €1.500 met 1 jaar ondersteuning.',
  keywords: ['WordPress website', 'WordPress ontwikkeling', 'CMS website', 'responsive website', 'SEO WordPress'],
};

export default function WordPressWebsitesPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Jouw website ziet er perfect uit op alle apparaten - desktop, tablet en mobiel.'
    },
    {
      icon: Search,
      title: 'SEO Geoptimaliseerd',
      description: 'Ingebouwde SEO-optimalisatie voor betere vindbaarheid in Google.'
    },
    {
      icon: Shield,
      title: 'Veilig & Betrouwbaar',
      description: 'SSL certificaat, regelmatige updates en beveiligingsmonitoring.'
    },
    {
      icon: Zap,
      title: 'Snelle Laadtijden',
      description: 'Geoptimaliseerd voor snelheid met caching en beeldcompressie.'
    },
    {
      icon: Users,
      title: 'Gebruiksvriendelijk CMS',
      description: 'Eenvoudig content beheren zonder technische kennis.'
    },
    {
      icon: Globe,
      title: 'Professioneel Design',
      description: 'Modern, clean design dat past bij jouw bedrijfsidentiteit.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '€1.500',
      description: 'Perfect voor kleine bedrijven en startups',
      features: [
        'Tot 5 pagina\'s',
        'Responsive design',
        'Contact formulier',
        'Google Analytics',
        'SSL certificaat',
        'SEO basis setup',
        '3 maanden ondersteuning'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '€2.500',
      description: 'Ideaal voor groeiende bedrijven',
      features: [
        'Tot 10 pagina\'s',
        'Blog functionaliteit',
        'Social media integratie',
        'Geavanceerde SEO',
        'Google My Business setup',
        'Newsletter integratie',
        '6 maanden ondersteuning'
      ],
      popular: true
    },
    {
      name: 'E-commerce',
      price: '€3.500',
      description: 'Voor online verkoop en webshops',
      features: [
        'WooCommerce webshop',
        'Onbeperkt producten',
        'Betaalintegraties',
        'Voorraad beheer',
        'Verzendopties',
        'Product reviews',
        '1 jaar ondersteuning'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Intake Gesprek',
      description: 'We bespreken jouw wensen, doelgroep en functionele eisen.',
      duration: '1 uur'
    },
    {
      step: 2,
      title: 'Design & Wireframes',
      description: 'We maken wireframes en designs voor jouw goedkeuring.',
      duration: '3-5 dagen'
    },
    {
      step: 3,
      title: 'Ontwikkeling',
      description: 'We bouwen jouw WordPress website volgens de specificaties.',
      duration: '1-2 weken'
    },
    {
      step: 4,
      title: 'Content & Testing',
      description: 'Content toevoegen, testen en optimaliseren voor alle apparaten.',
      duration: '2-3 dagen'
    },
    {
      step: 5,
      title: 'Lancering & Training',
      description: 'Website live zetten en training in het gebruik van WordPress.',
      duration: '1 dag'
    }
  ];

  const faqs = [
    {
      question: 'Hoe lang duurt het om een WordPress website te maken?',
      answer: 'Een standaard WordPress website duurt gemiddeld 2-3 weken. Dit hangt af van de complexiteit en het aantal pagina\'s.'
    },
    {
      question: 'Kan ik zelf content toevoegen en wijzigen?',
      answer: 'Ja, WordPress is zeer gebruiksvriendelijk. We geven je een training en documentatie om zelf content te beheren.'
    },
    {
      question: 'Is mijn website veilig tegen hackers?',
      answer: 'We installeren beveiligingsplugins, SSL certificaten en zorgen voor regelmatige updates om je website veilig te houden.'
    },
    {
      question: 'Wat gebeurt er na de lancering?',
      answer: 'Je krijgt ondersteuning voor technische vragen, updates en kleine aanpassingen gedurende de ondersteuningstermijn.'
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
                  <Globe className="text-primary-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    WordPress Websites
                  </h1>
                  <p className="text-primary-400 font-semibold text-lg mt-1">
                    Vanaf €1.500 • 2-3 weken oplevering
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
                Professionele WordPress websites die snel laden, SEO-geoptimaliseerd zijn 
                en gemakkelijk te beheren. Perfect voor bedrijven die een sterke online 
                aanwezigheid willen zonder technische complexiteit.
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
                <div className="text-8xl opacity-30">🌐</div>
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
              Waarom WordPress?
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              WordPress is het meest gebruikte CMS ter wereld. 
              Betrouwbaar, flexibel en perfect voor bedrijfswebsites.
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

      {/* Packages Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              WordPress Pakketten
            </h2>
            <p className="text-xl text-secondary-300">
              Kies het pakket dat het beste bij jouw bedrijf past
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
                  <p className="text-secondary-300">
                    {pkg.description}
                  </p>
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
                  Kies Dit Pakket
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
              Ons Ontwikkelproces
            </h2>
            <p className="text-xl text-secondary-300">
              Stap voor stap naar jouw perfecte WordPress website
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

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde Vragen
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar voor jouw WordPress Website?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plan een gratis consult en ontdek hoe wij jouw bedrijf online kunnen brengen 
            met een professionele WordPress website.
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
