import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-6 md:right-8 flex flex-col gap-6 z-50">
      
      {/* Phone */}
      <a 
        href="tel:+919344067940" 
        className="relative flex items-center justify-center w-14 h-14 bg-theme-yellow rounded-full text-white shadow-xl hover:scale-110 transition-transform group"
        aria-label="Call us"
      >
        <div className="absolute inset-0 rounded-full bg-theme-yellow/20 scale-[1.3] -z-10 group-hover:animate-ping" />
        <Phone className="w-6 h-6" />
      </a>
      
      {/* WhatsApp */}
      <a 
        href="https://wa.me/919344067940?text=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F"
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-theme-yellow rounded-full text-white shadow-xl hover:scale-110 transition-transform group"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-theme-yellow/20 scale-[1.3] -z-10 group-hover:animate-ping" />
        <WhatsappIcon />
      </a>
      
      {/* Mail */}
      <Link 
        to="/contact"
        className="relative flex items-center justify-center w-14 h-14 bg-theme-yellow rounded-full text-white shadow-xl hover:scale-110 transition-transform group"
        aria-label="Email us"
      >
        <div className="absolute inset-0 rounded-full bg-theme-yellow/20 scale-[1.3] -z-10 group-hover:animate-ping" />
        <Mail className="w-6 h-6" />
      </Link>
      
    </div>
  );
}
