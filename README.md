# LA Webdesign Website

Een moderne, professionele website voor LA Webdesign gebouwd met Next.js 15, TypeScript, Tailwind CSS en GSAP animaties.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Werkt perfect op alle apparaten
- **SEO Geoptimaliseerd**: Sitemap, robots.txt, structured data
- **GSAP Animaties**: Vloeiende scroll-triggered animaties
- **Blog Systeem**: MDX ondersteuning voor content management
- **Case Studies**: Dynamische portfolio pagina's
- **Contact Formulier**: Met API route voor form handling
- **Performance**: Geoptimaliseerd voor snelheid en Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock)
- **Icons**: Lucide React
- **Font**: Lexend (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── cases/             # Case study pages
│   ├── contact/           # Contact page
│   ├── diensten/          # Services pages
│   └── over-ons/          # About page
├── components/            # Reusable components
├── data/                  # Static data (blog, cases)
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/la-webdesign-website.git
cd la-webdesign-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Blog Posts

Blog posts are managed in `src/data/blog.ts`. To add a new post:

1. Add a new entry to the `blogPosts` array
2. Include title, excerpt, content, author, publishedAt, etc.
3. The content supports markdown formatting

### Case Studies

Case studies are managed in `src/data/cases.ts`. To add a new case:

1. Add a new entry to the `caseStudies` array
2. Include all required fields like title, client, technologies, etc.
3. Set `featured: true` for homepage highlights

## 🎨 Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  // ...
}
```

### Animations

GSAP animations are configured in `src/lib/gsap.ts`. Use the `AnimatedSection` component for scroll-triggered animations:

```tsx
<AnimatedSection animation="fadeIn" duration={0.8}>
  <YourContent />
</AnimatedSection>
```

## 📧 Contact Form

The contact form uses a Next.js API route (`/api/contact`). To enable email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Add your API key to environment variables
3. Update the API route in `src/app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 SEO Features

- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration
- Structured data (JSON-LD) for better search visibility
- Open Graph and Twitter Card meta tags
- Optimized meta descriptions and titles

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📄 License

This project is private and proprietary to LA Webdesign.

## 🤝 Contributing

This is a private project. For any changes or improvements, please contact the development team.

## 📞 Support

For technical support or questions about this website:

- Email: info@lawebdesign.nl
- Phone: +31 6 12345678

---

Built with ❤️ by LA Webdesign