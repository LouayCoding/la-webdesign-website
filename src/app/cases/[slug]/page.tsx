import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink, CheckCircle, Quote } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseBySlug, caseStudies, type CaseStudy } from '@/data/cases';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseBySlug(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Niet Gevonden - LA Webdesign',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | LA Webdesign`,
    description: caseStudy.description,
    keywords: [caseStudy.category, ...caseStudy.technologies, 'case study', 'portfolio'],
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseBySlug(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

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

  // Get related cases (same category, excluding current)
  const relatedCases = caseStudies
    .filter(c => c.category === caseStudy.category && c.slug !== caseStudy.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="py-8 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Terug naar Cases</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category & Meta */}
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(caseStudy.category)}`}>
                  {caseStudy.category}
                </span>
                <div className="flex items-center space-x-4 text-secondary-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{caseStudy.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{caseStudy.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Title & Client */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-primary-400 font-semibold mb-2">
                {caseStudy.client}
              </p>
              <p className="text-lg text-secondary-300 mb-8 leading-relaxed">
                {caseStudy.subtitle}
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-500 hover:bg-primary-600 text-background px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Bekijk Live Website</span>
                    <ExternalLink size={20} />
                  </a>
                )}
                <Link
                  href="/contact"
                  className="border border-border hover:border-primary-500 text-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
                >
                  Vergelijkbaar Project?
                </Link>
              </div>
            </div>
            
            {/* Project Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-30">
                  {caseStudy.category === 'WordPress' && '🌐'}
                  {caseStudy.category === 'Next.js Web App' && '⚡'}
                  {caseStudy.category === 'Mobiele App' && '📱'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Overzicht</h2>
                <p className="text-lg text-secondary-300 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">De Uitdaging</h2>
                <p className="text-lg text-secondary-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Onze Oplossing</h2>
                <p className="text-lg text-secondary-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Resultaten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-secondary-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Galerij</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.gallery.map((image, index) => (
                    <div key={index} className="aspect-video bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-lg flex items-center justify-center">
                      <div className="text-4xl opacity-30">🖼️</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-secondary-400 mb-1">Klant</div>
                    <div className="text-foreground font-medium">{caseStudy.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-400 mb-1">Jaar</div>
                    <div className="text-foreground font-medium">{caseStudy.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-400 mb-1">Duur</div>
                    <div className="text-foreground font-medium">{caseStudy.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-400 mb-1">Categorie</div>
                    <div className="text-foreground font-medium">{caseStudy.category}</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technologieën</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary-800 text-secondary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Vergelijkbaar Project Nodig?
                </h3>
                <p className="text-secondary-300 mb-4 text-sm">
                  Plan een gratis consult en ontdek hoe wij jouw bedrijf kunnen helpen.
                </p>
                <Link
                  href="/contact"
                  className="block bg-primary-500 hover:bg-primary-600 text-background px-4 py-2 rounded-lg font-semibold text-center transition-colors duration-200"
                >
                  Plan Gratis Consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 text-center">
              <Quote className="text-primary-400 mx-auto mb-6" size={48} />
              <blockquote className="text-xl lg:text-2xl text-secondary-300 mb-8 italic leading-relaxed">
                "{caseStudy.testimonial.text}"
              </blockquote>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-secondary-400">
                  {caseStudy.testimonial.position}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-secondary-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Vergelijkbare Projecten
              </h2>
              <p className="text-xl text-secondary-300">
                Ontdek meer {caseStudy.category.toLowerCase()} projecten
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.map((relatedCase) => (
                <div
                  key={relatedCase.slug}
                  className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {relatedCase.category === 'WordPress' && '🌐'}
                      {relatedCase.category === 'Next.js Web App' && '⚡'}
                      {relatedCase.category === 'Mobiele App' && '📱'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-400 transition-colors">
                      {relatedCase.title}
                    </h3>
                    <p className="text-secondary-300 mb-4 line-clamp-2">
                      {relatedCase.description}
                    </p>
                    <Link
                      href={`/cases/${relatedCase.slug}`}
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Lees Case Study</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar voor jouw Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Laat ons jouw volgende succesverhaal worden. Plan een gratis consult 
            en ontdek de mogelijkheden.
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
