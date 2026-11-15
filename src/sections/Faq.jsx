import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import FaqItem from '../components/FaqItem';
import { faqs } from '../data/data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-zinc-50 border-t border-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything you need to know"
          subtitle="Find answers to common questions about our ingredients, online reservations, dietary preferences, and private events."
          className="mb-12 sm:mb-14"
        />

        {/* Accordion List (Only one open at a time) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
