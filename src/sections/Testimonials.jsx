import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="LOVED BY FOOD LOVERS"
          title="What Our Guests Say"
          subtitle="Honest impressions from food enthusiasts, regulars, and travelers who have dined with us."
          className="mb-14 sm:mb-16"
        />

        {/* 3x2 Grid for 6 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={`${item.name}-${index}`}
              testimonial={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
