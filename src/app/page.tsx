import Link from 'next/link';
import { ArrowRight, Code, Globe, Smartphone, Star, Users, Zap, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'WordPress Websites',
      description: 'Professionele WordPress websites die snel laden en gemakkelijk te beheren zijn.',
      href: '/diensten/wordpress-websites',
      features: ['Responsive Design', 'SEO Geoptimaliseerd', 'Gebruiksvriendelijk CMS']
    },
    {
      icon: Code,
      title: 'Next.js Web Apps',
      description: 'Moderne web applicaties gebouwd met de nieuwste technologieën voor optimale prestaties.',
      href: '/diensten/next-js-web-apps',
      features: ['Blazing Fast', 'Server-Side Rendering', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobiele Apps',
      description: 'Cross-platform mobiele applicaties die naadloos werken op iOS en Android.',
      href: '/diensten/mobiele-app-ontwikkeling',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
    }
  ];

  const portfolioHighlights = [
    {
      title: 'E-commerce Platform',
      description: 'Moderne webshop met Next.js en Stripe integratie',
      category: 'Next.js Web App',
      image: '/placeholder-project-1.jpg'
    },
    {
      title: 'Restaurant Website',
      description: 'Responsive WordPress website met online reserveringen',
      category: 'WordPress',
      image: '/placeholder-project-2.jpg'
    },
    {
      title: 'Fitness App',
      description: 'Cross-platform mobiele app voor personal trainers',
      category: 'Mobiele App',
      image: '/placeholder-project-3.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah van der Berg',
      company: 'Bloemenwinkel De Tulp',
      text: 'LA Webdesign heeft onze oude website getransformeerd tot een moderne, snelle site die perfect werkt op alle apparaten.',
      rating: 5
    },
    {
      name: 'Mark Janssen',
      company: 'TechStart BV',
      text: 'Professioneel, snel en betaalbaar. Onze Next.js applicatie overtreft alle verwachtingen qua prestaties.',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary-900 to-background min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 lg:py-60 xl:py-72">
          <div className="text-center">
            <AnimatedSection animation="fadeIn" duration={1} delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-8">
                Moderne Websites &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                  Web Apps
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" duration={0.8} delay={0.4}>
              <p className="text-xl md:text-2xl lg:text-3xl text-secondary-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Van WordPress websites tot complexe Next.js applicaties. 
                Wij bouwen digitale oplossingen die je bedrijf laten groeien.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" duration={0.8} delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-background px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-200 flex items-center space-x-3 group shadow-lg hover:shadow-xl"
                >
                  <span>Plan Gratis Consult</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
                <Link
                  href="/cases"
                  className="border-2 border-border hover:border-primary-500 text-foreground px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-200 hover:bg-primary-500 hover:text-background"
                >
                  Bekijk Ons Werk
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger" duration={0.6} delay={0.8} stagger={0.2}>
              <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-secondary-400">
                <div className="flex items-center space-x-3 text-lg">
                  <Users size={24} />
                  <span>50+ Tevreden Klanten</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <Zap size={24} />
                  <span>Gemiddeld 2 Weken Oplevering</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <Star size={24} />
                  <span>4.9/5 Klantbeoordeling</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Diensten
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Wij bieden een breed scala aan webdevelopment diensten, 
              van eenvoudige websites tot complexe web applicaties.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-8 hover:border-primary-500 transition-all duration-300 group"
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="text-primary-400" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-secondary-300">
                          <CheckCircle size={16} className="text-primary-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={service.href}
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Meer informatie</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Werk
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Een selectie van onze meest recente projecten die laten zien 
              wat wij voor jouw bedrijf kunnen betekenen.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioHighlights.map((project, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-400 font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-300 mb-4">
                      {project.description}
                    </p>
                    <Link
                      href="/cases"
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Bekijk project</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3} className="text-center mt-12">
            <Link
              href="/cases"
              className="bg-primary-500 hover:bg-primary-600 text-background px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Alle Projecten Bekijken
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-secondary-300">
              Ontdek waarom bedrijven kiezen voor LA Webdesign
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-secondary-300 mb-6 text-lg italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-secondary-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om je Online Aanwezigheid te Versterken?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Plan een gratis consult en ontdek hoe wij jouw bedrijf kunnen helpen groeien 
            met een professionele website of web applicatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Plan Gratis Consult</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Bekijk Alle Diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
