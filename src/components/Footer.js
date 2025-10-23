'use client';

import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { translations } from '@/locales/translations';
import Logo from './Logo';

export default function Footer() {
  const { language } = useAccessibility();
  const t = translations[language].footer;

  const footerLinks = {
    produto: [
      // { name: t.links.resources, href: "#recursos" },
      // { name: t.links.pricing, href: "#" },
      // { name: t.links.faq, href: "#" }
    ],
    empresa: [
      // { name: t.links.about, href: "#" },
      // { name: t.links.blog, href: "#" },
      // { name: t.links.careers, href: "#" }
    ],
    contato: [
      { icon: HiOutlineEnvelope, text: "vvai2023ltda@gmail.com", href: "mailto:vvai2023ltda@gmail.com" },
      { icon: HiOutlineMapPin, text: "Registro, SP", href: "https://www.google.com/maps/place/Fatec+Registro/@-24.4961672,-47.8488176,17z/data=!3m1!4b1!4m6!3m5!1s0x94c5338bea658bc1:0xdea6f93b5aae61a8!8m2!3d-24.4961672!4d-47.8462427!16s%2Fg%2F11t9v8sg3d?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="animate-fadeIn">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 text-teal-500" aria-label="Logo CalmWave">
                <Logo variant="colored" showText={false} />
              </div>
              <span className="text-xl font-bold text-slate-900">Calm Wave</span>
            </div>
            <p className="text-slate-600">
              {t.description}
            </p>
          </div>

          {/* Produto
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
          {/*
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
          </div> */}

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
