import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import type { Metadata } from 'next';
import { blogPosts, getAllCategories, getAllTags } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - LA Webdesign',
  description: 'Lees onze laatste artikelen over webdesign, development trends, SEO tips en technische insights voor moderne websites en web apps.',
  keywords: ['webdesign blog', 'development tips', 'SEO', 'WordPress', 'Next.js', 'web development'],
};

export default function BlogPage() {
  const categories = getAllCategories();
  const tags = getAllTags();
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary-900 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ontdek de laatste trends in webdesign, development tips en inzichten 
              die je helpen om betere digitale ervaringen te creëren.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary-900/50 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-primary-500 text-background rounded-lg font-medium transition-colors duration-200">
              Alle Artikelen
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Uitgelichte Artikelen</h2>
              <p className="text-xl text-secondary-300">Onze meest populaire en actuele content</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center ${
                    index === 0 ? 'aspect-[2/1]' : 'aspect-video'
                  }`}>
                    <div className="text-6xl opacity-30">📝</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    {/* Meta */}
                    <div className="flex items-center space-x-4 mb-4 text-secondary-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    {/* Category */}
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Title & Excerpt */}
                    <h3 className={`font-bold text-foreground mb-4 group-hover:text-primary-400 transition-colors ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-secondary-300 mb-6 leading-relaxed ${
                      index === 0 ? 'text-lg' : ''
                    }`}>
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded text-xs flex items-center space-x-1"
                        >
                          <Tag size={10} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Lees Artikel</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Alle Artikelen</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">📝</div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 mb-4 text-secondary-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Title & Excerpt */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary-800 text-secondary-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Lees Artikel</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Blijf op de Hoogte
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Ontvang onze nieuwste artikelen en tips direct in je inbox. 
              Geen spam, alleen waardevolle content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Je email adres"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary-500 text-foreground"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-background px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Aanmelden
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hulp Nodig met je Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Onze artikelen geven je inzicht, maar soms heb je professionele hulp nodig. 
            Plan een gratis consult en ontdek hoe wij kunnen helpen.
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
