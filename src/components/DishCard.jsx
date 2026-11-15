import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function DishCard({ dish, onSelect, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl p-5 border border-zinc-100 shadow-sm hover:shadow-xl hover:border-orange-200/80 transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Category badge */}
      {dish.category && (
        <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full">
          {dish.category}
        </span>
      )}

      {/* Circular Image Container */}
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 my-3 rounded-full overflow-hidden p-2 transition-transform duration-500 group-hover:scale-105">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-50 to-orange-100/50 -z-10 group-hover:from-orange-100 group-hover:to-orange-200/60 transition-colors" />
        <img
          src={dish.img}
          alt={dish.title}
          className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:rotate-3"
          loading="lazy"
        />
      </div>

      {/* Dish Details */}
      <div className="w-full mt-2">
        <h3 className="font-bold text-zinc-900 text-base sm:text-lg group-hover:text-[#FF6B00] transition-colors line-clamp-1">
          {dish.title}
        </h3>
        
        <div className="mt-3 flex items-center justify-between w-full pt-3 border-t border-zinc-100">
          <span className="text-xl font-extrabold text-[#FF6B00]">
            {dish.price}
          </span>

          <button
            onClick={() => onSelect && onSelect(dish)}
            className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
            title="Book table for this dish"
            aria-label={`Order or reserve ${dish.title}`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
