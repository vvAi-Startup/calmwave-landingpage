'use client';

import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { translations } from '@/locales/translations';

export default function Footer() {
  const { language } = useAccessibility();
  const t = translations[language].footer;

  const footerLinks = {
    produto: [
      { name: t.links.resources, href: "#recursos" },
      { name: t.links.pricing, href: "#" },
      { name: t.links.faq, href: "#" }
    ],
    empresa: [
      { name: t.links.about, href: "#" },
      { name: t.links.blog, href: "#" },
      { name: t.links.careers, href: "#" }
    ],
    contato: [
      { icon: HiOutlineEnvelope, text: "contato@calmwave.com.br", href: "mailto:contato@calmwave.com.br" },
      { icon: HiOutlinePhone, text: "(11) 1234-5678", href: "tel:+551112345678" },
      { icon: HiOutlineMapPin, text: "São Paulo, SP", href: "#" }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="animate-fadeIn">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 text-teal-500" aria-label="Logo CalmWave">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="4"/>
                  <path d="M 20 130 Q 50 110, 80 115 T 140 125 T 180 130 L 180 190 Q 100 195, 20 190 Z" fill="currentColor" opacity="0.9"/>
                  <path d="M 120 90 Q 140 70, 160 80 L 170 110 Q 150 95, 130 100 Z" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">Calm Wave</span>
            </div>
            <p className="text-slate-600">
              {t.description}
            </p>
          </div>

          {/* Produto */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold mb-4 text-teal-500">{t.product}</h4>
            <ul className="space-y-2 text-slate-600">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-teal-500 transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-teal-500"
                    aria-label={`${language === 'pt' ? 'Link para' : 'Link to'} ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold mb-4 text-teal-500">{t.company}</h4>
            <ul className="space-y-2 text-slate-600">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-teal-500 transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-teal-500"
                    aria-label={`${language === 'pt' ? 'Link para' : 'Link to'} ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold mb-4 text-teal-500">{t.contact}</h4>
            <ul className="space-y-3 text-slate-600">
              {footerLinks.contato.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href={item.href} 
                    className="hover:text-teal-500 transition-colors duration-300 focus:outline-none focus:text-teal-500"
                    aria-label={item.text}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
