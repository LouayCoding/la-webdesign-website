import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '/diensten/wordpress-websites', label: 'WordPress Websites' },
    { href: '/diensten/next-js-web-apps', label: 'Next.js Web Apps' },
    { href: '/diensten/mobiele-app-ontwikkeling', label: 'Mobiele Apps' },
  ];

  const company = [
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/cases', label: 'Cases' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', icon: Github, label: 'GitHub' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">LA</span>
              </div>
              <span className="text-xl font-semibold text-foreground">
                LA Webdesign
              </span>
            </Link>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Professionele webdesign en ontwikkeling voor moderne bedrijven. 
              Van WordPress websites tot complexe web applicaties.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300 text-sm">
                <Mail size={16} className="text-primary-400" />
                <span>info@lawebdesign.nl</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300 text-sm">
                <Phone size={16} className="text-primary-400" />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300 text-sm">
                <MapPin size={16} className="text-primary-400" />
                <span>Amsterdam, Nederland</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-primary-500 hover:bg-primary-600 text-background px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Plan Gratis Consult
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {currentYear} LA Webdesign. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                Privacy Beleid
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
