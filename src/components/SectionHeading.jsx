import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            light 
              ? 'bg-white/15 text-orange-200' 
              : 'bg-orange-50 text-[#FF6B00] border border-orange-200/60'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
          {eyebrow}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
            light ? 'text-white' : 'text-zinc-950'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            light ? 'text-zinc-200' : 'text-zinc-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
