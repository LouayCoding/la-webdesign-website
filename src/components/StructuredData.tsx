interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined structured data generators
export const structuredDataGenerators = {
  // Organization schema
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LA Webdesign',
    url: 'https://lawebdesign.nl',
    logo: 'https://lawebdesign.nl/logo.png',
    description: 'Professionele webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-6-12345678',
      contactType: 'customer service',
      email: 'info@lawebdesign.nl'
    },
    sameAs: [
      'https://linkedin.com/company/lawebdesign',
      'https://github.com/lawebdesign'
    ]
  }),

  // Local business schema
  localBusiness: () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://lawebdesign.nl',
    name: 'LA Webdesign',
    image: 'https://lawebdesign.nl/logo.png',
    description: 'Professionele webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.',
    url: 'https://lawebdesign.nl',
    telephone: '+31-6-12345678',
    email: 'info@lawebdesign.nl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.3676,
      longitude: 4.9041
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '45'
    }
  }),

  // Service schema
  service: (serviceName: string, description: string, price?: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'LA Webdesign',
      url: 'https://lawebdesign.nl'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands'
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'EUR'
      }
    })
  }),

  // Article schema for blog posts
  article: (
    title: string,
    description: string,
    publishedAt: string,
    author: string,
    slug: string
  ) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://lawebdesign.nl/blog/${slug}/image.jpg`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://lawebdesign.nl/over-ons'
    },
    publisher: {
      '@type': 'Organization',
      name: 'LA Webdesign',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lawebdesign.nl/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lawebdesign.nl/blog/${slug}`
    }
  }),

  // FAQ schema
  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  // Breadcrumb schema
  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),

  // Website schema
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LA Webdesign',
    url: 'https://lawebdesign.nl',
    description: 'Professionele webdesign en ontwikkeling in Amsterdam. WordPress websites, Next.js web apps en mobiele applicaties voor groeiende bedrijven.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://lawebdesign.nl/blog?search={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  })
};
