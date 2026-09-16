import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/ignitenova.tech@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: formData.get('name'),
            Email: formData.get('email'),
            Phone: formData.get('phone') || 'Not provided',
            Service: formData.get('service'),
            Budget: formData.get('budget'),
            Details: formData.get('details'),
            _subject: `New Free Quote Request from ${formData.get('name')}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Failed to send quote request:", error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-theme-black border border-theme-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-theme-white/5 hover:bg-theme-white/10 rounded-full text-theme-white/60 hover:text-theme-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-theme-white/5 p-8 border-b border-theme-white/10">
              <h2 className="text-3xl font-bold text-theme-white mb-2">Get a Free Quote</h2>
              <p className="text-theme-white/60">Fill out the form below and we'll get back to you with a custom estimate.</p>
            </div>

            {/* Form */}
            {status === 'success' ? (
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-theme-white mb-2">Request Sent Successfully!</h3>
                <p className="text-theme-white/60 mb-8">We will review your details and get back to you shortly.</p>
                <button
                  onClick={onClose}
                  className="bg-theme-yellow text-theme-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Full Name *</label>
                    <input required name="name" type="text" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Email Address *</label>
                    <input required name="email" type="email" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Phone Number</label>
                    <input name="phone" type="tel" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Service Needed *</label>
                    <select required name="service" defaultValue="" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors appearance-none">
                      <option value="" disabled className="text-black">Select a service</option>
                      <option value="Web Development" className="text-black">Web Development</option>
                      <option value="App Development" className="text-black">App Development</option>
                      <option value="UI/UX Design" className="text-black">UI/UX Design</option>
                      <option value="Digital Marketing" className="text-black">Digital Marketing</option>
                      <option value="Other" className="text-black">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Budget *</label>
                  <select required name="budget" defaultValue="" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors appearance-none">
                    <option value="" disabled className="text-black">Select your budget</option>
                    <option value="Under $5,000" className="text-black">Under $5,000</option>
                    <option value="$5,000 - $15,000" className="text-black">$5,000 - $15,000</option>
                    <option value="$15,000 - $50,000" className="text-black">$15,000 - $50,000</option>
                    <option value="$50,000+" className="text-black">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-2">Project Details *</label>
                  <textarea required name="details" rows={4} className="w-full bg-theme-white/5 border border-theme-white/10 rounded-xl px-4 py-3 text-theme-white focus:outline-none focus:border-theme-yellow transition-colors resize-none" placeholder="Tell us about your project requirements..." />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-theme-yellow text-theme-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-theme-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get My Free Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
