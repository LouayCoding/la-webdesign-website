import Link from 'next/link';
import { ArrowRight, Users, Target, Zap, Heart, Award, Code, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons - LA Webdesign Team',
  description: 'Leer het LA Webdesign team kennen. Gepassioneerde developers en designers die moderne websites en web apps bouwen voor groeiende bedrijven.',
  keywords: ['over ons', 'webdesign team', 'developers', 'designers', 'Amsterdam'],
};

export default function OverOnsPage() {
  const values = [
    {
      icon: Target,
      title: 'Resultaatgericht',
      description: 'We focussen op meetbare resultaten die jouw bedrijf vooruit helpen.'
    },
    {
      icon: Zap,
      title: 'Innovatief',
      description: 'We gebruiken de nieuwste technologieën en best practices in onze projecten.'
    },
    {
      icon: Heart,
      title: 'Persoonlijk',
      description: 'Elke klant krijgt persoonlijke aandacht en maatwerk oplossingen.'
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'We leveren alleen werk af waar we 100% achter staan en trots op zijn.'
    }
  ];

  const services = [
    {
      icon: Globe,
      title: 'WordPress Websites',
      description: 'Professionele websites die snel laden en gemakkelijk te beheren zijn.'
    },
    {
      icon: Code,
      title: 'Next.js Web Apps',
      description: 'Moderne web applicaties met de nieuwste technologieën.'
    },
    {
      icon: Users,
      title: 'Mobiele Apps',
      description: 'Cross-platform apps voor iOS en Android.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Kennismaking',
      description: 'We leren je bedrijf, doelen en uitdagingen kennen in een gratis consult.'
    },
    {
      step: '02',
      title: 'Strategie',
      description: 'Samen ontwikkelen we een strategie die past bij jouw doelen en budget.'
    },
    {
      step: '03',
      title: 'Ontwerp & Ontwikkeling',
      description: 'We ontwerpen en bouwen jouw project met regelmatige updates en feedback.'
    },
    {
      step: '04',
      title: 'Lancering & Ondersteuning',
      description: 'Na de lancering blijven we beschikbaar voor ondersteuning en doorontwikkeling.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Succesvolle Projecten' },
    { number: '45+', label: 'Tevreden Klanten' },
    { number: '5+', label: 'Jaren Ervaring' },
    { number: '4.9/5', label: 'Gemiddelde Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary-900 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">LA Webdesign</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Wij zijn een gepassioneerd team van developers en designers die moderne, 
              performante websites en web applicaties bouwen voor groeiende bedrijven.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Onze Missie
              </h2>
              <p className="text-lg text-secondary-300 mb-6 leading-relaxed">
                Bij LA Webdesign geloven we dat elke onderneming een professionele online aanwezigheid 
                verdient. We helpen bedrijven groeien door middel van moderne websites, web applicaties 
                en mobiele apps die niet alleen mooi zijn, maar ook daadwerkelijk resultaten opleveren.
              </p>
              <p className="text-lg text-secondary-300 mb-8 leading-relaxed">
                Ons doel is om complexe technologie toegankelijk te maken en jouw digitale ambities 
                om te zetten in concrete resultaten. We doen dit met persoonlijke aandacht, 
                transparante communicatie en een focus op langdurige partnerships.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-background px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <span>Leer ons kennen</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-30">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Waarden
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Deze principes sturen ons in alles wat we doen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Wij Doen
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Onze expertise in moderne web technologieën
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 text-center hover:border-primary-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-background px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>Bekijk Alle Diensten</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hoe Wij Werken
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Ons bewezen proces voor succesvolle projecten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Resultaten
            </h2>
            <p className="text-xl text-secondary-300">
              Cijfers die onze expertise bevestigen
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Het LA Webdesign Team
          </h2>
          <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
            Ons team bestaat uit ervaren developers, designers en project managers 
            die samen zorgen voor de beste resultaten voor onze klanten. We combineren 
            technische expertise met creatieve visie en een sterke focus op 
            gebruikerservaring.
          </p>
          <p className="text-lg text-secondary-300 mb-8">
            Gevestigd in Amsterdam, werken we met klanten door heel Nederland en daarbuiten. 
            Onze passie voor technologie en design drijft ons om elke dag beter te worden 
            en onze klanten te helpen hun doelen te bereiken.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om Samen te Werken?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We horen graag over jouw project en hoe wij kunnen helpen. 
            Plan een gratis consult en laten we kijken wat mogelijk is.
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
              href="/cases"
              className="border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Bekijk Ons Werk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
