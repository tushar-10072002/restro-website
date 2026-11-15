import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Utensils, Award } from 'lucide-react';
import Button from '../components/Button';

export default function Hero({ onOpenBooking }) {
  const avatars = [
    '/assets/user-1.jpeg',
    '/assets/user-2.jpeg',
    '/assets/user-3.jpeg',
    '/assets/user-4.jpeg',
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-orange-50/30 via-white to-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#FF6B00] border border-orange-200/60 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              WHERE FLAVOR MEETS ELEGANCE
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-zinc-950 tracking-tight leading-[1.08]">
              Crafted for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-amber-500">
                unforgettable
              </span>{" "}
              dining moments
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Immerse yourself in an extraordinary culinary journey where seasonal ingredients, master culinary craftsmanship, and warm hospitality come together in perfect harmony.
            </p>

            {/* CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenBooking}
                className="font-bold text-base px-8 py-4 shadow-lg shadow-[#FF6B00]/30 hover:scale-[1.02]"
              >
                Book a table
              </Button>

              <a
                href="#dishes"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 hover:text-[#FF6B00] px-6 py-4 rounded-full border border-zinc-200 hover:border-[#FF6B00]/40 bg-white shadow-sm transition-all"
              >
                <Utensils className="w-4 h-4 text-[#FF6B00]" />
                Explore Menu
              </a>
            </div>

            {/* Avatar Social Proof Group */}
            <div className="mt-10 pt-8 border-t border-zinc-200/80 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Stacked Avatars */}
              <div className="flex -space-x-3 overflow-hidden p-1">
                {avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Customer ${idx + 1}`}
                    className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                ))}
              </div>

              {/* Rating Summary */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-zinc-900 text-sm">4.8 / 5</span>
                </div>
                <span className="text-xs text-zinc-500 mt-0.5">
                  Over <strong className="text-zinc-800 font-semibold">10,000+ reviews</strong> from happy food lovers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Food Plate & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Parallax Floating Herb 1 (Left) */}
            <motion.img
              src="/assets/iconL.png"
              alt="Fresh Herb Garnish"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-6 sm:-left-8 w-14 sm:w-16 h-auto drop-shadow-lg z-20 pointer-events-none"
            />

            {/* Parallax Floating Herb 2 (Right) */}
            <motion.img
              src="/assets/iconR.png"
              alt="Fresh Herb Garnish"
              animate={{
                y: [0, 14, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-6 -right-4 sm:-right-6 w-14 sm:w-16 h-auto drop-shadow-lg z-20 pointer-events-none"
            />

            {/* Main Hero Food Plate Banner */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="relative mx-auto rounded-full p-4">
                <img
                  src="/assets/heroBanner.png"
                  alt="Restro Signature Gourmet Dish"
                  className="w-full h-auto object-contain filter drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  priority="true"
                />
              </div>

              {/* Floating Award / Special Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-4 sm:left-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-950">Michelin Guide NY</p>
                  <p className="text-[11px] text-zinc-500">Recommended 2025</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
