'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div 
      className="bg-white border-2 border-teal-100 p-8 rounded-3xl group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        borderColor: "rgb(94 234 212)",
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
      }}
      role="article"
      aria-labelledby={`feature-${index}`}
    >
      <motion.div 
        className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)"
        }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <Icon className="w-7 h-7" aria-hidden="true" />
      </motion.div>
      <motion.h3 
        id={`feature-${index}`} 
        className="text-xl font-bold mb-3 text-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-slate-600 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
