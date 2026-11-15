import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/data';

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statsData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                {/* Large Orange Number */}
                <div className="text-4xl sm:text-5xl font-black text-[#FF6B00] mb-4 tracking-tighter opacity-90 group-hover:scale-105 transition-transform origin-left">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-[#FF6B00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent Line Indicator */}
              <div className="w-12 h-1 bg-orange-100 rounded-full mt-6 group-hover:w-20 group-hover:bg-[#FF6B00] transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
