'use client';

import Logo from './Logo';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { translations } from '@/locales/translations';

export default function Header() {
  const { language } = useAccessibility();
  const t = translations[language].header;

  return (
    <header 
      className="bg-[#FEFDFA]/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 transition-all duration-300"
      role="banner"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          <Logo />
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#recursos"
              className="text-slate-700 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={language === 'pt' ? 'Ir para seção de recursos' : 'Go to resources section'}
            >
              {t.resources}
            </a>
            <a
              href="#como-funciona"
              className="text-slate-700 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={language === 'pt' ? 'Ir para seção como funciona' : 'Go to how it works section'}
            >
              {t.howItWorks}
            </a>
            <a
              href="#beneficios"
              className="text-slate-700 hover:text-teal-500 transition-all duration-300 font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={language === 'pt' ? 'Ir para seção de benefícios' : 'Go to benefits section'}
            >
              {t.benefits}
            </a>
            <button 
              className="bg-teal-500 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label={language === 'pt' ? 'Começar a usar CalmWave' : 'Get started with CalmWave'}
            >
              {t.start}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

