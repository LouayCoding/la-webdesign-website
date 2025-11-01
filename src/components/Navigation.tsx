'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
              <span className="text-white dark:text-black font-semibold text-sm">LA</span>
            </div>
            <span className="text-xl font-medium text-black dark:text-white">
              LA Webdesign
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Gratis Consult
            </Link>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-300 min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services submenu */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                <p className="text-sm font-medium mb-3 text-gray-500 dark:text-gray-400 px-4 uppercase tracking-wide">
                  Diensten
                </p>
                <div className="space-y-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-300 min-h-[44px]"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon size={20} />
                        <span>{service.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 mt-6">
                <Link
                  href="/contact"
                  className="block bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black px-6 py-4 rounded-full font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Gratis Consult
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
