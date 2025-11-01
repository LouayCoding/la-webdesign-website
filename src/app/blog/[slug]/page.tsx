import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts, type BlogPost } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Niet Gevonden - LA Webdesign',
    };
  }

  return {
    title: `${post.title} - LA Webdesign Blog`,
    description: post.excerpt,
    keywords: [post.category, ...post.tags, 'blog', 'webdesign'],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Simple markdown-to-HTML converter for demo purposes
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold text-foreground mb-6 mt-8">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-semibold text-foreground mb-4 mt-8">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-medium text-foreground mb-3 mt-6">{line.slice(4)}</h3>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-secondary-300 mb-2 ml-6 list-disc">
              {line.slice(2)}
            </li>
          );
        }
        if (line.match(/^\d+\. /)) {
          return (
            <li key={index} className="text-secondary-300 mb-2 ml-6 list-decimal">
              {line.replace(/^\d+\. /, '')}
            </li>
          );
        }
        
        // Checkboxes
        if (line.startsWith('- [ ] ')) {
          return (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="rounded" disabled />
              <span className="text-secondary-300">{line.slice(6)}</span>
            </div>
          );
        }
        
        // Links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        if (linkRegex.test(line)) {
          const processedLine = line.replace(linkRegex, (match, text, url) => {
            return `<a href="${url}" class="text-primary-400 hover:text-primary-300 underline">${text}</a>`;
          });
          return (
            <p key={index} className="text-secondary-300 mb-4 leading-relaxed" 
               dangerouslySetInnerHTML={{ __html: processedLine }} />
          );
        }
        
        // Regular paragraphs
        if (line.trim() && !line.startsWith('#')) {
          return <p key={index} className="text-secondary-300 mb-4 leading-relaxed">{line}</p>;
        }
        
        // Empty lines
        return <br key={index} />;
      });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="py-8 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Terug naar Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
            <div className="flex items-center space-x-2 text-secondary-400">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary-400">
              <Calendar size={16} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary-400">
              <Clock size={16} />
              <span>{post.readTime} leestijd</span>
            </div>
            <button className="flex items-center space-x-2 text-secondary-400 hover:text-primary-400 transition-colors">
              <Share2 size={16} />
              <span>Delen</span>
            </button>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary-800 text-secondary-300 rounded-full text-sm flex items-center space-x-1"
              >
                <Tag size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-8xl opacity-30">📝</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-20 bg-secondary-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {post.author}
                </h3>
                <p className="text-secondary-300 mb-4">
                  Het LA Webdesign team bestaat uit ervaren developers en designers 
                  die gepassioneerd zijn over het creëren van moderne, performante websites 
                  en web applicaties.
                </p>
                <Link
                  href="/over-ons"
                  className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2"
                >
                  <span>Meer over ons team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Gerelateerde Artikelen
              </h2>
              <p className="text-xl text-secondary-300">
                Meer over {post.category.toLowerCase()}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-secondary-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-secondary-300 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hulp Nodig met je Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Dit artikel gaf je hopelijk nuttige inzichten. Wil je professionele hulp 
            bij het implementeren van deze tips? Plan een gratis consult.
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
