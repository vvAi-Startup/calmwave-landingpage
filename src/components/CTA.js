'use client';

import { HiOutlineCalendar, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { translations } from '@/locales/translations';

export default function CTA() {
  const { language } = useAccessibility();
  const t = translations[language].cta;

  return (
    <section className="py-20 bg-[#FEFDFA]" role="region" aria-label={language === 'pt' ? 'Chamada para ação' : 'Call to action'}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-teal-500 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.title}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button 
              className="bg-white text-teal-500 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={language === 'pt' ? 'Agendar demonstração do CalmWave' : 'Schedule CalmWave demo'}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <HiOutlineCalendar className="w-5 h-5" aria-hidden="true" />
              </motion.div>
              {t.scheduleDemo}
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={language === 'pt' ? 'Falar com especialista' : 'Talk to a specialist'}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <HiOutlineChatBubbleLeftRight className="w-5 h-5" aria-hidden="true" />
              </motion.div>
              {t.talkToSpecialist}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
