'use client';

import WaveLogo from './WaveLogo';
import { HiSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { translations } from '@/locales/translations';

export default function Hero() {
  const { language } = useAccessibility();
  const t = translations[language].hero;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="bg-[#FEFDFA] py-20 md:py-32" role="region" aria-label={language === 'pt' ? 'Seção principal' : 'Main section'}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <motion.span 
                className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold border border-teal-200 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(20, 184, 166, 0.2)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <HiSparkles className="w-4 h-4" aria-hidden="true" />
                </motion.div>
                {t.badge}
              </motion.span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-slate-900"
            >
              {t.title}
              <motion.span 
                className="block text-teal-500 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {t.subtitle}
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 leading-relaxed"
            >
              {t.description}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label={language === 'pt' ? 'Experimentar CalmWave gratuitamente' : 'Try CalmWave for free'}
              >
                {t.tryFree}
              </motion.button>
              <motion.button 
                className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-full font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label={language === 'pt' ? 'Saiba mais sobre CalmWave' : 'Learn more about CalmWave'}
              >
                {t.learnMore}
              </motion.button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              variants={containerVariants}
            >
              {[
                { value: "95%", label: t.stats.noiseReduction },
                { value: "100+", label: t.stats.schools },
                { value: "24/7", label: t.stats.support }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center sm:text-left"
                  variants={statsVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-teal-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (index * 0.1), duration: 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.div 
              className="absolute inset-0 bg-teal-400/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="relative w-80 h-80 text-teal-500 drop-shadow-2xl"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-label="Logo CalmWave"
            >
              <WaveLogo className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
