import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';
import { dishes } from '../data/data';

export default function SignatureDishes({ onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mains', 'Starters'];

  const filteredDishes = activeCategory === 'All'
    ? dishes
    : dishes.filter(d => d.category === activeCategory);

  return (
    <section id="dishes" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CHEF'S SIGNATURE SELECTION"
          title="Discover our signature dishes"
          subtitle="Carefully handcrafted culinary creations prepared with the freshest seasonal produce and authentic recipes."
          className="mb-10"
        />

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Grid for 8 Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredDishes.map((dish, index) => (
            <DishCard
              key={dish.id}
              dish={dish}
              index={index}
              onSelect={onSelectDish}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
