import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, Heart, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { featuresData } from '../data/data';

const iconMap = {
  ChefHat: ChefHat,
  Leaf: Leaf,
  Heart: Heart,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-zinc-50/70 border-t border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3 Core Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <SectionHeading
              eyebrow="WHAT SETS US APART"
              title="Crafting memorable dining experiences"
              subtitle="From the moment you step through our doors, our priority is providing an unmatched culinary indulgence defined by culinary perfection."
              align="left"
              className="max-w-none mb-10"
            />

            <div className="space-y-6 w-full">
              {featuresData.map((item, index) => {
                const IconComponent = iconMap[item.icon] || ChefHat;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                    className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-950 mb-1.5 group-hover:text-[#FF6B00] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Chef Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/chef.png"
                alt="Executive Chef preparing artisanal dishes at Restro"
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Chef Floating Bio Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-zinc-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-zinc-950 text-base">Chef Marcus Sterling</h5>
                    <p className="text-xs text-[#FF6B00] font-semibold">Executive Chef & Co-founder</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2 italic">
                  "Cooking is an act of love, discipline, and reverence for nature's harvest."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
