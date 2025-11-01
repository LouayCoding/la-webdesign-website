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
      <section className="relative bg-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <AnimatedSection animation="fadeIn" duration={1} delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-black mb-6 sm:mb-8 tracking-tight leading-tight">
              Moderne{' '}
              <span className="font-medium">Websites</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" duration={0.8} delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 sm:mb-16 max-w-4xl mx-auto font-light leading-relaxed">
              Van WordPress tot Next.js. Wij bouwen digitale ervaringen 
              die je bedrijf laten groeien.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" duration={0.8} delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl min-h-[48px]"
              >
                <span>Plan Gratis Consult</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/cases"
                className="w-full sm:w-auto text-black hover:text-gray-600 px-6 sm:px-8 py-4 font-medium text-base sm:text-lg transition-colors duration-300 underline decoration-2 underline-offset-4 min-h-[48px] flex items-center justify-center"
              >
                Bekijk Ons Werk
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger" duration={0.6} delay={0.8} stagger={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-light text-black mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Tevreden Klanten</div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-light text-black mb-2">2 weken</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Gemiddelde Oplevering</div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-light text-black mb-2">4.9★</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Klantbeoordeling</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Onze <span className="font-medium">Diensten</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Van eenvoudige websites tot complexe applicaties. 
              Elke oplossing op maat gemaakt voor jouw bedrijf.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 group border border-gray-100"
                  >
                    <div className="mb-6 sm:mb-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <Icon size={24} className="sm:w-7 sm:h-7" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-black mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                          <span className="font-medium text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={service.href}
                      className="text-black hover:text-gray-600 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300 underline decoration-2 underline-offset-4 text-sm sm:text-base"
                    >
                      <span>Meer informatie</span>
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Recent <span className="font-medium">Werk</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Een selectie van onze meest recente projecten die laten zien 
              wat wij voor jouw bedrijf kunnen betekenen.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {portfolioHighlights.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl opacity-30">🚀</div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium mb-2 sm:mb-3 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    <Link
                      href="/cases"
                      className="text-black hover:text-gray-600 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300 underline decoration-2 underline-offset-4 text-sm sm:text-base"
                    >
                      <span>Bekijk project</span>
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3} className="text-center mt-12 sm:mt-16">
            <Link
              href="/cases"
              className="inline-block bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center"
            >
              Alle Projecten Bekijken
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Wat Onze <span className="font-medium">Klanten</span> Zeggen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
              Ontdek waarom bedrijven kiezen voor LA Webdesign
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="stagger" stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed font-light italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <div className="font-medium text-black text-base sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 font-light text-sm sm:text-base">
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
      <section className="py-20 sm:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8 tracking-tight">
              Klaar om je Online Aanwezigheid te{' '}
              <span className="font-medium">Versterken?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Plan een gratis consult en ontdek hoe wij jouw bedrijf kunnen helpen groeien 
              met een professionele website of web applicatie.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl min-h-[48px]"
              >
                <span>Plan Gratis Consult</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/diensten"
                className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 min-h-[48px] flex items-center justify-center"
              >
                Bekijk Alle Diensten
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
