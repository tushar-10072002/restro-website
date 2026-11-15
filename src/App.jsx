import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import SignatureDishes from './sections/SignatureDishes';
import WhyUs from './sections/WhyUs';
import Reservation from './sections/Reservation';
import OpeningHours from './sections/OpeningHours';
import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';
import CtaBanner from './sections/CtaBanner';
import Footer from './sections/Footer';
import ReservationModal from './components/ReservationModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOpenBooking = (dish = null) => {
    setSelectedDish(dish);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#FF6B00] selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 3. About Section */}
      <About onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Features Section */}
      <Features />

      {/* 5. Signature Dishes Section */}
      <SignatureDishes onSelectDish={(dish) => handleOpenBooking(dish)} />

      {/* 6. Why Us Section */}
      <WhyUs />

      {/* 7. Reservation Steps Section */}
      <Reservation onOpenBooking={() => handleOpenBooking()} />

      {/* 8. Opening Hours Section */}
      <OpeningHours onOpenBooking={() => handleOpenBooking()} />

      {/* 9. Testimonials Section */}
      <Testimonials />

      {/* 10. FAQ Section */}
      <Faq />

      {/* 11. CTA Banner Section */}
      <CtaBanner onOpenBooking={() => handleOpenBooking()} />

      {/* 12. Footer Section */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Booking Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedDish={selectedDish}
      />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
