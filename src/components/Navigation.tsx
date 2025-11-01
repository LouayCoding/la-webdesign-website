'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Globe } from 'lucide-react';

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
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold text-sm">LA</span>
            </div>
            <span className="text-xl font-medium text-black">
              LA Webdesign
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Gratis Consult
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-black transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300 ${
              isScrolled 
                ? 'bg-white border-gray-200' 
                : 'bg-gray-900/95 backdrop-blur-sm border-gray-700'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-primary-600' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services submenu */}
              <div className="px-3 py-2">
                <p className={`text-sm font-medium mb-2 ${
                  isScrolled ? 'text-gray-500' : 'text-gray-400'
                }`}>Diensten</p>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`flex items-center space-x-2 px-3 py-2 transition-colors duration-200 ${
                        isScrolled 
                          ? 'text-gray-600 hover:text-primary-600' 
                          : 'text-gray-300 hover:text-white'
                      }`}
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
