'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

// Note: This would normally be in a separate file, but for demo purposes it's here
const metadata: Metadata = {
  title: 'Contact - Plan je Gratis Consult | LA Webdesign',
  description: 'Neem contact op voor een gratis consult over je website, web app of mobiele applicatie. We helpen je graag verder met professioneel advies.',
  keywords: ['contact', 'gratis consult', 'webdesign advies', 'offerte aanvragen'],
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const services = [
    'WordPress Website',
    'Next.js Web App',
    'Mobiele App',
    'Website Redesign',
    'SEO Optimalisatie',
    'Onderhoud & Support',
    'Anders / Niet zeker'
  ];

  const budgets = [
    'Onder €2.500',
    '€2.500 - €5.000',
    '€5.000 - €10.000',
    '€10.000 - €25.000',
    'Boven €25.000',
    'Nog niet bepaald'
  ];

  const timelines = [
    'Zo snel mogelijk',
    'Binnen 1 maand',
    '1-3 maanden',
    '3-6 maanden',
    'Meer dan 6 maanden',
    'Nog niet bepaald'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Bericht wordt verzonden...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Bedankt voor je bericht! We nemen binnen 24 uur contact met je op.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        throw new Error('Er ging iets mis bij het verzenden');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Er ging iets mis bij het verzenden. Probeer het opnieuw of neem direct contact met ons op.'
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@lawebdesign.nl',
      link: 'mailto:info@lawebdesign.nl'
    },
    {
      icon: Phone,
      title: 'Telefoon',
      value: '+31 6 12345678',
      link: 'tel:+31612345678'
    },
    {
      icon: MapPin,
      title: 'Locatie',
      value: 'Amsterdam, Nederland',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Beschikbaarheid',
      value: 'Ma-Vr: 9:00 - 18:00',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'Hoe lang duurt een gratis consult?',
      answer: 'Een gratis consult duurt meestal 30-60 minuten. We bespreken je wensen, geven advies en maken een plan van aanpak.'
    },
    {
      question: 'Wat kost een website of web app?',
      answer: 'De kosten variëren per project. WordPress websites starten vanaf €1.500, web apps vanaf €3.500 en mobiele apps vanaf €5.000.'
    },
    {
      question: 'Hoe lang duurt een project?',
      answer: 'WordPress websites: 2-4 weken, Next.js web apps: 4-12 weken, mobiele apps: 6-16 weken. Afhankelijk van complexiteit.'
    },
    {
      question: 'Bieden jullie onderhoud en support?',
      answer: 'Ja, we bieden verschillende onderhoudscontracten voor updates, beveiliging en technische support.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 sm:mb-8 tracking-tight">
            Plan je <span className="font-medium">Gratis Consult</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Vertel ons over je project en ontdek hoe wij jouw bedrijf kunnen helpen groeien 
            met een professionele website, web app of mobiele applicatie.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-medium text-black mb-6 sm:mb-8">
                  Vertel ons over je Project
                </h2>
                
                {/* Status Message */}
                {status.type !== 'idle' && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : status.type === 'error'
                      ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                      : 'bg-primary-500/10 border border-primary-500/20 text-primary-400'
                  }`}>
                    {status.type === 'success' && <CheckCircle size={20} />}
                    {status.type === 'error' && <AlertCircle size={20} />}
                    {status.type === 'loading' && <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                        placeholder="Je volledige naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                        placeholder="je@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                        Bedrijf
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                        placeholder="Je bedrijfsnaam"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                      Type Project *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                    >
                      <option value="">Selecteer een service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                      >
                        <option value="">Selecteer budget</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-black mb-2">
                        Gewenste Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black transition-all duration-200 min-h-[48px]"
                      >
                        <option value="">Selecteer timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Projectomschrijving *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-black resize-vertical transition-all duration-200"
                      placeholder="Vertel ons over je project, doelen en specifieke wensen..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-black hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl min-h-[56px]"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
                        <span>Verzenden...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Verstuur Bericht</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Information */}
              <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-6">
                  Contact Informatie
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Icon className="text-gray-600" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">{info.title}</div>
                          {info.link && info.link !== '#' ? (
                            <a
                              href={info.link}
                              className="text-black hover:text-gray-600 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-black font-medium">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-6">
                  Veelgestelde Vragen
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-base font-medium text-black mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Liever <span className="font-medium">Direct Contact?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 font-light leading-relaxed">
            Bel ons voor een snelle vraag of om direct een afspraak in te plannen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="tel:+31612345678"
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl min-h-[48px]"
            >
              <Phone size={20} />
              <span>+31 6 12345678</span>
            </a>
            <a
              href="mailto:info@lawebdesign.nl"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px]"
            >
              <Mail size={20} />
              <span>info@lawebdesign.nl</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
