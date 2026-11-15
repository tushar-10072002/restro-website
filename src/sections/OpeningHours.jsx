import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { timingData } from '../data/data';

export default function OpeningHours({ onOpenBooking }) {
  return (
    <section id="timing" className="py-20 md:py-32 bg-zinc-50 border-t border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="HOURS & LOCATION"
          title="When you can visit us"
          subtitle="Join us for lunch, dinner, or weekend celebrations. Walk-ins are always welcomed subject to availability."
          className="mb-14"
        />

        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[520px] lg:min-h-[580px] flex items-center justify-end p-6 sm:p-10 lg:p-12">
          
          {/* Background Interior Image */}
          <img
            src="/assets/restro-timing.png"
            alt="Restro Restaurant Interior Ambience"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Dark Overlay for rich contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60 pointer-events-none" />

          {/* Floating White Card showing Mon-Sun Timings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-zinc-950">Operating Hours</h4>
                <p className="text-xs text-zinc-500 font-medium">Bistro Royale, New York</p>
              </div>
            </div>

            {/* Schedule List */}
            <div className="space-y-2.5 mb-8">
              {timingData.map((item) => {
                const isClosed = item.hours.toLowerCase().includes('closed');
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                      isClosed
                        ? 'bg-red-50/80 text-red-600 font-semibold'
                        : 'hover:bg-zinc-50 text-zinc-800'
                    }`}
                  >
                    <span className="font-semibold text-zinc-900">{item.day}</span>
                    <span className={isClosed ? 'text-red-500 font-bold' : 'text-zinc-600'}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center font-bold shadow-lg shadow-[#FF6B00]/25"
              icon={ArrowRight}
              onClick={onOpenBooking}
            >
              Book a table
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
