import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function CtaBanner({ onOpenBooking }) {
  const floatingDishes = [
    { img: '/assets/dish1.png', className: 'top-6 left-6 sm:left-14 w-20 h-20 sm:w-28 sm:h-28' },
    { img: '/assets/dish2.png', className: 'bottom-6 left-10 sm:left-28 w-18 h-18 sm:w-24 sm:h-24' },
    { img: '/assets/dish6.png', className: 'top-8 right-8 sm:right-16 w-20 h-20 sm:w-28 sm:h-28' },
    { img: '/assets/dish7.png', className: 'bottom-6 right-10 sm:right-28 w-18 h-18 sm:w-24 sm:h-24' },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FF6B00] overflow-hidden text-white">
      {/* Ambient background glow & radial circles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none" />

      {/* 4 Floating Circular Dish Images */}
      {floatingDishes.map((dish, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, i % 2 === 0 ? -12 : 12, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute hidden md:block rounded-full p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl ${dish.className}`}
        >
          <img
            src={dish.img}
            alt="Signature Dish Thumbnail"
            className="w-full h-full object-contain filter drop-shadow-md rounded-full"
            loading="lazy"
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          A CULINARY CELEBRATION
        </motion.div>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
        >
          Every Meal Is Made <br className="hidden sm:inline" />
          To Be Remembered
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Whether joining us for an intimate dinner or gathering with colleagues, your unforgettable table awaits.
        </motion.p>

        {/* White Book Your Table Button with Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            variant="white"
            size="xl"
            icon={ArrowRight}
            onClick={onOpenBooking}
            className="text-[#FF6B00] font-extrabold shadow-2xl hover:bg-zinc-50 hover:scale-105 transition-transform"
          >
            Book Your Table
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
