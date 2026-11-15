import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Sparkles, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/about.png"
                alt="Restro Restaurant Interior and Dining Experience"
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Location Badge: "Bistro Royale, NY - View on Map" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-4 sm:right-8 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-3.5 z-20 hover:border-orange-200 transition-all cursor-pointer group"
              onClick={() => window.open('https://maps.google.com/?q=Bistro+Royale+New+York', '_blank')}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-950 flex items-center gap-1 group-hover:text-[#FF6B00] transition-colors">
                  Bistro Royale, NY
                  <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#FF6B00]" />
                </p>
                <p className="text-[11px] text-zinc-500 font-medium">View on Google Maps</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <SectionHeading
              eyebrow="CRAFTED WITH PASSION"
              title="Experience dining beyond expectations"
              align="left"
              className="max-w-none mb-6"
            />

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6">
              Founded on the belief that a memorable meal is a form of art, Restro combines traditional culinary techniques with progressive gastronomical innovation. Our team transforms hand-picked local ingredients into an unforgettable symphony of flavors, textures, and aromas.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are marking an intimate anniversary, hosting a family milestone, or seeking an inspired weekday evening with friends, our warm ambience and attentive hospitality ensure your visit is nothing short of extraordinary.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-zinc-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Artisanal Craft</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Every dish plated with perfection</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Farm Direct</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">100% organic local produce</p>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              className="font-bold shadow-md shadow-[#FF6B00]/20"
            >
              Reserve a Table Now
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
