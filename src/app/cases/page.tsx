import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import { caseStudies, type CaseStudy } from '@/data/cases';

export const metadata: Metadata = {
  title: 'Cases & Portfolio - LA Webdesign',
  description: 'Bekijk onze succesvolle projecten: WordPress websites, Next.js web apps en mobiele applicaties voor tevreden klanten.',
  keywords: ['portfolio', 'case studies', 'WordPress projecten', 'Next.js projecten', 'mobiele apps'],
};

export default function CasesPage() {
  const categories: CaseStudy['category'][] = ['WordPress', 'Next.js Web App', 'Mobiele App'];
  
  const getCategoryColor = (category: CaseStudy['category']) => {
    switch (category) {
      case 'WordPress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Next.js Web App':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Mobiele App':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-primary-500/10 text-primary-400 border-primary-500/20';
    }
  };

  const stats = [
    { label: 'Succesvolle Projecten', value: '50+' },
    { label: 'Tevreden Klanten', value: '45+' },
    { label: 'Jaren Ervaring', value: '5+' },
    { label: 'Gemiddelde Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary-900 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Cases</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ontdek hoe wij bedrijven helpen groeien met professionele websites, 
              web applicaties en mobiele apps. Elk project is uniek en op maat gemaakt.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-secondary-900/50 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-primary-500 text-background rounded-lg font-medium transition-colors duration-200">
              Alle Projecten
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-border hover:border-primary-500 text-secondary-300 hover:text-foreground rounded-lg font-medium transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.slug}
                className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-30">
                    {caseStudy.category === 'WordPress' && '🌐'}
                    {caseStudy.category === 'Next.js Web App' && '⚡'}
                    {caseStudy.category === 'Mobiele App' && '📱'}
                  </div>
                  {caseStudy.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(caseStudy.category)}`}>
                      {caseStudy.category}
                    </span>
                    <div className="flex items-center space-x-4 text-secondary-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{caseStudy.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{caseStudy.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title & Client */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-secondary-400 text-sm mb-3">
                    {caseStudy.client}
                  </p>
                  
                  {/* Description */}
                  <p className="text-secondary-300 mb-6 line-clamp-3">
                    {caseStudy.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded text-xs">
                          +{caseStudy.technologies.length - 3} meer
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/cases/${caseStudy.slug}`}
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Lees Case Study</span>
                      <ArrowRight size={16} />
                    </Link>
                    
                    {caseStudy.liveUrl && (
                      <a
                        href={caseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-400 hover:text-foreground transition-colors"
                        title="Bekijk live website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
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
            Klaar voor jouw Succesverhaal?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Laat ons jouw volgende project worden. Plan een gratis consult 
            en ontdek hoe wij jouw bedrijf kunnen helpen groeien.
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
              Bekijk Onze Diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
