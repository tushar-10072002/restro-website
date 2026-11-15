import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, User, Phone, Mail, CheckCircle, Utensils } from 'lucide-react';
import Button from './Button';

export default function ReservationModal({ isOpen, onClose, preselectedDish = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Please choose a dining date';
    if (!formData.time) newErrors.time = 'Please choose a dining time';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setConfirmationCode('RES-' + Math.floor(100000 + Math.random() * 900000));
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '19:00',
      guests: '2',
      specialRequests: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden border border-zinc-100"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-[#FF6B00] mb-2">
                  <Utensils className="w-3.5 h-3.5" />
                  Table Reservation
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-950">
                  Book Your Dining Experience
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  {preselectedDish
                    ? `Reserve a table to savor ${preselectedDish.title}`
                    : "Fill in your details below to confirm instant seating."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full pl-10 pr-4 py-2.5 bg-zinc-50 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-zinc-200'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className={`w-full pl-10 pr-4 py-2.5 bg-zinc-50 border rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-zinc-200'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                      Email (optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 bg-zinc-50 border rounded-xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition ${
                          errors.date ? 'border-red-400 bg-red-50/20' : 'border-zinc-200'
                        }`}
                      />
                    </div>
                    {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:00">01:00 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Lunch)</option>
                        <option value="17:30">05:30 PM (Dinner)</option>
                        <option value="18:30">06:30 PM (Dinner)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Dinner)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                    Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition"
                    >
                      <option value="1">1 Person (Solo Dining)</option>
                      <option value="2">2 Persons (Table for Two)</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons (Family Table)</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6+ Persons (Party Celebration)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-600 mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="2"
                    placeholder="E.g. anniversary table, quiet corner, dietary allergies..."
                    className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-base font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Confirming Table...' : 'Confirm Table Reservation'}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 mb-1">
                Reservation Confirmed!
              </h3>
              <p className="text-sm text-zinc-600 mb-6">
                Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. Your table is ready for you!
              </p>

              <div className="bg-orange-50/70 border border-orange-200/60 rounded-2xl p-4 text-left mb-6 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-orange-100">
                  <span className="text-zinc-500">Booking Code:</span>
                  <span className="font-mono font-bold text-[#FF6B00]">{confirmationCode}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-orange-100">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="font-semibold text-zinc-800">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-orange-100">
                  <span className="text-zinc-500">Party Size:</span>
                  <span className="font-semibold text-zinc-800">{formData.guests} Guest(s)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Contact:</span>
                  <span className="font-semibold text-zinc-800">{formData.phone}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={handleReset}
              >
                Done
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
