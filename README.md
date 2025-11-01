# LA Webdesign Website

Modern, Apple/Vercel-inspired website for LA Webdesign - a web development agency specializing in WordPress, Next.js, and mobile applications.

## 🚀 Features

- **Modern Design**: Clean, minimalist Apple/Vercel-inspired aesthetic
- **Performance**: Built with Next.js 15 and optimized for speed
- **Animations**: Smooth GSAP animations with scroll triggers
- **SEO Optimized**: Complete SEO setup with structured data
- **Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Full TypeScript implementation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP (GreenSock)
- **Icons**: Lucide React
- **Content**: MDX for blog posts and case studies
- **Font**: Lexend (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog system with MDX
│   ├── cases/             # Case studies
│   ├── diensten/          # Services pages
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # Reusable React components
├── data/                  # Static data (blog posts, cases)
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 🎨 Design System

### Colors
- **Background**: Pure white (#ffffff)
- **Text**: Black (#000000)
- **Secondary**: Gray scale (50-950)
- **Accents**: High contrast black/white

### Typography
- **Font**: Lexend (300, 400, 500, 600, 700)
- **Hierarchy**: Light weights for headers, medium for accents
- **Spacing**: Generous whitespace following Apple guidelines

### Components
- **Cards**: Rounded corners (rounded-3xl), subtle shadows
- **Buttons**: Rounded-full, smooth transitions
- **Navigation**: Glassmorphism with backdrop-blur

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/LouayCoding/la-webdesign-website.git
   cd la-webdesign-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🎯 Key Pages

- **Homepage**: Hero section, services overview, testimonials
- **Services**: WordPress, Next.js, and Mobile App development
- **Cases**: Portfolio of completed projects
- **Blog**: Technical articles and insights
- **Contact**: Lead generation form with consultation booking

## 🔧 Configuration

### Tailwind CSS
Custom configuration with Apple-inspired design tokens in `tailwind.config.ts`

### GSAP Animations
- Scroll-triggered animations
- Page transitions
- Hover effects
- Dynamic imports for SSR compatibility

### SEO
- Structured data (JSON-LD)
- Dynamic sitemap generation
- Optimized meta tags
- Open Graph support

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large tap targets, smooth interactions

## 🎨 Animation System

Custom `AnimatedSection` component with GSAP integration:
- Fade in effects
- Slide animations
- Stagger animations
- Scroll triggers

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Optimized bundle size

## 🔒 SEO & Analytics

- **Structured Data**: Organization, LocalBusiness, Website schemas
- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Sitemap**: Dynamically generated XML sitemap
- **Robots.txt**: Search engine crawling configuration

## 🚀 Deployment

Ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any Node.js hosting provider

## 📄 License

This project is private and proprietary to LA Webdesign.

## 🤝 Contributing

This is a private project for LA Webdesign. For any questions or suggestions, please contact the development team.

---

Built with ❤️ by LA Webdesign