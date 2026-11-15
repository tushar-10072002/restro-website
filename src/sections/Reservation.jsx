import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, UserCheck, Star, Quote, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { bookingSteps, bookingTestimonial } from '../data/data';

const stepIcons = [Calendar, Clock, UserCheck];

export default function Reservation({ onOpenBooking }) {
  return (
    <section id="reservation" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SEAMLESS RESERVATIONS"
          title="Reserve your table in three simple steps"
          subtitle="Plan your visit effortlessly with instant confirmation and dedicated table preparation."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3 Numbered Steps */}
          <div className="lg:col-span-7 space-y-6">
            {bookingSteps.map((step, idx) => {
              const StepIcon = stepIcons[idx] || Calendar;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className="p-6 sm:p-7 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 transition-all flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-[#FF6B00]/20">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-zinc-950 mb-1 group-hover:text-[#FF6B00] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenBooking}
                className="font-bold shadow-lg shadow-[#FF6B00]/25"
              >
                Start Reservation
              </Button>
            </div>
          </div>

          {/* Right: Featured Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-orange-500 to-[#FF6B00] text-white shadow-2xl overflow-hidden">
              {/* Background ambient pattern */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/15" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-amber-200">
                  {Array.from({ length: bookingTestimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-200 text-amber-200" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl font-medium leading-relaxed italic mb-8 text-white/95">
                  "{bookingTestimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <img
                    src={bookingTestimonial.authorImg}
                    alt={bookingTestimonial.authorName}
                    className="w-13 h-13 rounded-full object-cover ring-2 ring-white/50 shadow-md"
                  />
                  <div>
                    <h5 className="font-extrabold text-base text-white">
                      {bookingTestimonial.authorName}
                    </h5>
                    <p className="text-xs text-orange-100 font-medium">Verified Guest Review</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
