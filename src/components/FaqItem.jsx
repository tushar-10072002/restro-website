import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FaqItem({ faq, isOpen, onToggle, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl transition-all duration-200 border ${
        isOpen
          ? 'bg-orange-50/40 border-orange-200 shadow-sm'
          : 'bg-white border-zinc-100 hover:border-zinc-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base sm:text-lg transition-colors ${
          isOpen ? 'text-[#FF6B00]' : 'text-zinc-900'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 bg-[#FF6B00] text-white' : 'bg-zinc-100 text-zinc-600'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed border-t border-orange-100/60 pt-3">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
