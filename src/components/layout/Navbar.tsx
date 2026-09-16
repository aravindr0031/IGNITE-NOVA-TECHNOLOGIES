import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Clock, Mail, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import AFLogo from '../../assets/AF.png';
import { QuoteModal } from '../ui/QuoteModal';

const links = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CAREERS', path: '/careers' },
  { name: 'CONTACT', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full relative z-50 shadow-md">
      {/* Top Bar - Black Background */}
      <div className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={AFLogo} alt="Ignite Nova Technologies" className="h-12" />
          </Link>

          {/* Contact Info blocks */}
          <div className="flex items-center gap-10">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-theme-yellow mt-0.5 shrink-0" />
              <div className="flex flex-col text-xs text-gray-400 font-medium">
                <span className="text-white">100 Innovation Drive</span>
                <span>Tech City, TC 90210</span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3 border-l border-white/20 pl-10">
              <Clock className="w-5 h-5 text-theme-yellow mt-0.5 shrink-0" />
              <div className="flex flex-col text-xs font-medium">
                <span className="text-white">Mon-Fri 9am-7pm • Sat 10am-6pm</span>
                <span className="text-[#13b169]">24×7 Support Available</span>
              </div>
            </div>

            {/* Email / Phone */}
            <div className="flex items-start gap-3 border-l border-white/20 pl-10">
              <Mail className="w-5 h-5 text-theme-yellow mt-0.5 shrink-0" />
              <div className="flex flex-col text-xs text-gray-400 font-medium">
                <span className="text-white">ignitenova.tech@gmail.com</span>
                <span>+91 93440 67940 / 93617 81079</span>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <input 
              type="text" 
              className="border border-white/20 rounded-sm py-2 px-4 pr-10 text-sm focus:outline-none focus:border-theme-yellow transition-colors w-48 text-white bg-white/10 placeholder-white/50"
              placeholder="Search..."
            />
            <Search className="w-4 h-4 text-white/50 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-theme-yellow" />
          </div>

        </div>
      </div>

      {/* Bottom Bar - Mobile Black / Desktop Yellow */}
      <div className="bg-theme-black lg:bg-theme-yellow w-full relative">
        <div className="max-w-7xl mx-auto flex items-stretch justify-between h-16 lg:h-14">
          
          {/* Mobile Logo & Menu Toggle (Visible only on small screens) */}
          <div className="flex items-center justify-between w-full lg:hidden px-4">
            <Link to="/" className="flex items-center">
              <img src={AFLogo} alt="Ignite Nova Technologies" className="h-10" />
            </Link>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex items-center justify-center gap-6 xl:gap-8 h-full">
              {links.map((link) => (
                <li key={link.path} className="h-full flex items-center">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-[13px] font-bold tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-white' : 'text-black/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex shrink-0">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-black hover:bg-gray-900 text-white font-bold text-[13px] tracking-wide px-8 flex items-center justify-center transition-colors h-full cursor-pointer"
            >
              GET A FREE QUOTE
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-theme-black border-b border-white/10 overflow-hidden"
          >
            <nav className="px-4 py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium transition-colors flex items-center justify-between ${
                        location.pathname === link.path ? 'text-theme-yellow' : 'text-white/80'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsQuoteModalOpen(true);
                  }} 
                  className="w-full bg-theme-yellow text-black hover:bg-theme-yellow/90 font-bold"
                >
                  GET A FREE QUOTE
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </header>
  );
}
