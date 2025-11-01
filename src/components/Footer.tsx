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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold text-sm">LA</span>
              </div>
              <span className="text-xl font-medium text-black">
                LA Webdesign
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
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
                    className="text-gray-400 hover:text-black transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50"
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
            <h3 className="text-black font-medium mb-6">Diensten</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-black font-medium mb-6">Bedrijf</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <Mail size={16} className="text-gray-400" />
                <span className="font-light">info@lawebdesign.nl</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <Phone size={16} className="text-gray-400" />
                <span className="font-light">+31 6 12345678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <MapPin size={16} className="text-gray-400" />
                <span className="font-light">Amsterdam, Nederland</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Plan Gratis Consult
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              © {currentYear} LA Webdesign. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light"
              >
                Privacy Beleid
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light"
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
