import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { rating = 5, review, name, location, avatar } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-100 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`}
              />
            ))}
          </div>
          <Quote className="w-5 h-5 text-orange-200" />
        </div>

        {/* Review text */}
        <p className="text-zinc-600 text-sm leading-relaxed italic">
          "{review}"
        </p>
      </div>

      {/* Author info */}
      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-100"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-zinc-900 text-sm">{name}</h4>
          <p className="text-xs text-zinc-400">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
