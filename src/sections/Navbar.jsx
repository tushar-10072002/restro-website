import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UtensilsCrossed } from 'lucide-react';
import Button from '../components/Button';
import { navLinks } from '../data/data';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/assets/logo.svg"
              alt="Restro Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-700 hover:text-[#FF6B00] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              className="hidden sm:inline-flex font-semibold shadow-sm"
              onClick={onOpenBooking}
              icon={ArrowRight}
            >
              Book a table
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-zinc-200 px-6 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-800 hover:text-[#FF6B00] py-2 px-3 rounded-lg hover:bg-orange-50/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-100 mt-1">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center font-bold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                Book a table
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
