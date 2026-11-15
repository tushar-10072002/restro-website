import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { quickLinks, sitemapLinks } from '../data/data';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="relative bg-zinc-950 text-white pt-20 pb-12 overflow-hidden border-t border-zinc-800">
      
      {/* Big Faded "Restro" Watermark Text in Background */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 select-none pointer-events-none text-zinc-900/40 text-[110px] sm:text-[180px] md:text-[230px] lg:text-[280px] font-black tracking-widest uppercase text-center leading-none z-0"
      >
        RESTRO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white tracking-tight">
                  RESTRO<span className="text-[#FF6B00]">.</span>
                </span>
              </div>
            </a>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Crafting unforgettable dining memories with premium ingredients, artisanal recipes, and authentic hospitality in the heart of New York.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                aria-label="Follow us on X"
              >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="currentColor">
                  <path d="m4.179.5 2.909 3.886.372.497.406-.469L11.255.5h.824L8.104 5.09l-.263.305.241.322 4.919 6.571H9.928L6.695 8.016l-.373-.493-.404.467-3.722 4.298h-.825l4.3-4.967.265-.305-.245-.324L1.005.5zm-2.07 1.032 7.765 10.26.15.198h2.437l-.599-.8L4.184.93l-.15-.2H1.501z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M.866 8.299a14.46 14.46 0 0 1 0-6.463 1.27 1.27 0 0 1 .36-.573c.17-.158.384-.273.618-.332a37.4 37.4 0 0 1 11.313 0c.233.059.446.174.618.332s.295.356.36.573c.487 2.13.487 4.332 0 6.463a1.3 1.3 0 0 1-.36.572 1.4 1.4 0 0 1-.619.333 37.4 37.4 0 0 1-11.312 0 1.4 1.4 0 0 1-.619-.333 1.3 1.3 0 0 1-.36-.572" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m5.5 6.896 4-1.827-4-1.827z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M11 .5H4C2.067.5.5 1.931.5 3.697v6.394c0 1.766 1.567 3.198 3.5 3.198h7c1.933 0 3.5-1.432 3.5-3.198V3.697C14.5 1.931 12.933.5 11 .5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.3 6.542a2.37 2.37 0 0 1-.284 1.553 2.7 2.7 0 0 1-1.227 1.107 3.04 3.04 0 0 1-1.703.24 2.9 2.9 0 0 1-1.535-.716 2.5 2.5 0 0 1-.785-1.403 2.36 2.36 0 0 1 .263-1.556c.265-.48.69-.872 1.212-1.12a3.03 3.03 0 0 1 1.7-.26c.594.08 1.145.333 1.57.722.424.388.701.89.79 1.433" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="font-bold text-sm tracking-wider uppercase text-zinc-200 mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-[#FF6B00] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h5 className="font-bold text-sm tracking-wider uppercase text-zinc-200 mb-4">
              Sitemap
            </h5>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-[#FF6B00] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-zinc-400 hover:text-[#FF6B00] text-sm transition-colors text-left cursor-pointer"
                >
                  Table Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-4">
            <h5 className="font-bold text-sm tracking-wider uppercase text-zinc-200 mb-4">
              Get in Touch
            </h5>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>452 Bistro Royale Blvd, Suite 100, New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B00] shrink-0" />
                <span>+1 (212) 555-8492</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B00] shrink-0" />
                <span>reservations@restrobistro.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Restro Dining Group. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00]" /> for culinary lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
