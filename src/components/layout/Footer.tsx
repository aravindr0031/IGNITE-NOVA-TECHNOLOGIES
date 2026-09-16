import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import AFLogo from '../../assets/AF.png';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-theme-black text-theme-white mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Newsletter Overlapping Card */}
        <div className="relative -top-24 bg-theme-yellow rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-theme-black">
          {/* Left Graphic */}
          <div className="hidden md:flex w-48 h-48 bg-theme-white rounded-2xl items-center justify-center shrink-0 shadow-inner">
            <Mail className="w-24 h-24 text-theme-black/20" strokeWidth={1} />
          </div>
          
          {/* Right Content */}
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">Subscribe to our newsletter for the<br/>latest updates and insights.</h3>
            
            <form className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="relative flex-grow">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-theme-black/50 font-bold">@</span>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-theme-black/10 border-2 border-transparent text-theme-black placeholder:text-theme-black/60 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-theme-black font-semibold transition-colors"
                />
              </div>
              <button type="submit" className="bg-theme-white text-theme-black hover:bg-theme-white/90 font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                Subscribe
              </button>
            </form>
            
            <p className="text-theme-black/70 text-sm mt-4 font-medium">
              Stay ahead with the latest updates, insights, and events from Ignite Nova Technologies.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 pt-4">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 md:pr-12">
            <Link to="/" className="flex items-center gap-2 text-theme-white mb-6">
              <img src={AFLogo} alt="Ignite Nova Technologies" className="h-12" />
            </Link>
            <p className="text-theme-white/60 text-sm leading-relaxed mb-8">
              Ignite Nova Technologies is a thriving community where innovators, professionals, and enthusiasts come together to share knowledge, collaborate, and grow.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/ignitenova.tech?stkn=MW44MTRvcXM5dHcyYg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-theme-white/5 rounded-full flex items-center justify-center hover:bg-theme-yellow hover:text-theme-black transition-colors text-theme-white/80 hover:scale-110"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/ignite-nova" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-theme-white/5 rounded-full flex items-center justify-center hover:bg-theme-yellow hover:text-theme-black transition-colors text-theme-white/80 hover:scale-110"><LinkedinIcon /></a>
              <a href="mailto:ignitenova.tech@gmail.com" className="w-10 h-10 bg-theme-white/5 rounded-full flex items-center justify-center hover:bg-theme-yellow hover:text-theme-black transition-colors text-theme-white/80 hover:scale-110"><Mail className="w-4 h-4" /></a>
              <a href="https://wa.me/919344067940" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-theme-white/5 rounded-full flex items-center justify-center hover:bg-theme-yellow hover:text-theme-black transition-colors text-theme-white/80 hover:scale-110"><WhatsappIcon /></a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-theme-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-theme-white/60 hover:text-theme-yellow transition-colors">About us</Link></li>
              <li><Link to="/services" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Services</Link></li>
              <li><Link to="/community" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Community</Link></li>
              <li><Link to="/testimonial" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Testimonial</Link></li>
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h3 className="font-bold text-theme-white mb-6">Developers</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="#" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Web Technologies</Link></li>
              <li><Link to="#" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Learn Web Development</Link></li>
              <li><Link to="#" className="text-theme-white/60 hover:text-theme-yellow transition-colors">AL Plus</Link></li>
              <li><Link to="#" className="text-theme-white/60 hover:text-theme-yellow transition-colors">Hacks Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Communities */}
          <div>
            <h3 className="font-bold text-theme-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+919344067940" className="flex items-center gap-3 text-theme-white/60 hover:text-theme-yellow transition-colors">
                  <Phone className="w-4 h-4 text-theme-yellow" />
                  <div className="flex flex-col">
                    <span>+91 93440 67940</span>
                    <span>+91 93617 81079</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:ignitenova.tech@gmail.com" className="flex items-center gap-3 text-theme-white/60 hover:text-theme-yellow transition-colors mt-2">
                  <span className="text-theme-yellow font-bold text-lg leading-none">@</span>
                  ignitenova.tech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-theme-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-theme-white/50">
            © 2026 Ignite Nova Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-theme-white/60">
            <Link to="/privacy" className="hover:text-theme-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-theme-white transition-colors">Terms of Use</Link>
            <Link to="/legal" className="hover:text-theme-white transition-colors">Legal</Link>
            <Link to="/sitemap" className="hover:text-theme-white transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
