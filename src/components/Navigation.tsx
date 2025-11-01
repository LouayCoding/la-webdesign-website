'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code, Smartphone, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/cases', label: 'Cases' },
    { href: '/blog', label: 'Blog' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    {
      href: '/diensten/wordpress-websites',
      label: 'WordPress Websites',
      icon: Globe,
    },
    {
      href: '/diensten/next-js-web-apps',
      label: 'Next.js Web Apps',
      icon: Code,
    },
    {
      href: '/diensten/mobiele-app-ontwikkeling',
      label: 'Mobiele Apps',
      icon: Smartphone,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">LA</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              LA Webdesign
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-background px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Gratis Consult
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary-300 hover:text-foreground transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services submenu */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-secondary-400 mb-2">Diensten</p>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center space-x-2 px-3 py-2 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={16} />
                      <span>{service.label}</span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="block mx-3 mt-4 bg-primary-500 hover:bg-primary-600 text-background px-6 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Gratis Consult
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
