import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe2, Building2, Headphones, Briefcase, ChevronRight, Zap } from 'lucide-react';

const offices = [
  { city: 'San Francisco', country: 'United States', address: '100 Innovation Dr, Tech City', time: 'PST (UTC-8)', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop' },
  { city: 'London', country: 'United Kingdom', address: 'Silicon Roundabout, EC1V', time: 'GMT (UTC+0)', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' },
  { city: 'Dubai', country: 'United Arab Emirates', address: 'Dubai Silicon Oasis', time: 'GST (UTC+4)', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop' }
];

const departments = [
  { icon: Building2, name: 'Enterprise Sales', email: 'sales@ignitenova.tech', desc: 'For large scale custom software and enterprise solutions.' },
  { icon: Headphones, name: 'Technical Support', email: 'support@ignitenova.tech', desc: '24/7 technical assistance for our existing clients.' },
  { icon: Briefcase, name: 'Partnerships', email: 'partners@ignitenova.tech', desc: 'For agency collaborations and strategic partnerships.' }
];

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the complexity, most web applications take between 4 to 8 weeks from initial strategy to final launch. We provide a detailed timeline during the proposal phase." },
  { q: "Do you offer post-launch support and maintenance?", a: "Absolutely. We offer 24x7 support packages, performance monitoring, and ongoing feature development to ensure your product scales seamlessly." },
  { q: "Can we sign an NDA before discussing our idea?", a: "Yes, we prioritize your intellectual property. We are happy to sign a Non-Disclosure Agreement before any initial discovery calls." },
  { q: "How do you handle project pricing?", a: "We offer both fixed-price contracts for clearly defined scopes and flexible retainer models for ongoing, agile development. Get a free quote to learn more." }
];

export function GlobalOffices() {
  return (
    <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-full bg-theme-yellow/10 flex items-center justify-center">
          <Globe2 className="w-6 h-6 text-theme-yellow" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-theme-white">Global Presence</h2>
          <p className="text-theme-white/50 mt-1">Visit us at our international hubs</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map((office, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-3xl overflow-hidden border border-theme-white/10 bg-theme-black"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-theme-black to-transparent z-10" />
              <img src={office.image} alt={office.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                {office.time}
              </div>
            </div>
            <div className="p-8 relative z-20 -mt-10">
              <h3 className="text-2xl font-bold text-theme-white mb-1">{office.city}</h3>
              <p className="text-theme-yellow text-sm font-medium mb-4">{office.country}</p>
              <p className="text-theme-white/60 text-sm">{office.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Departments() {
  return (
    <section className="py-24 relative z-10 bg-[#050505] border-y border-theme-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-theme-white">Direct Channels</h2>
          <p className="text-theme-white/50 mt-1">Reach out to the specific department you need.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-theme-black border border-theme-white/10 rounded-[2rem] p-8 hover:border-theme-yellow/30 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-theme-white/5 flex items-center justify-center mb-6 group-hover:bg-theme-yellow/10 transition-colors">
                <dept.icon className="w-7 h-7 text-theme-white group-hover:text-theme-yellow transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-theme-white mb-2">{dept.name}</h3>
              <p className="text-theme-white/50 text-sm mb-6 h-10">{dept.desc}</p>
              <div className="flex items-center gap-2 text-theme-yellow font-medium text-sm group-hover:translate-x-2 transition-transform">
                {dept.email} <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-theme-yellow/10 mb-6">
          <Zap className="w-8 h-8 text-theme-yellow" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-theme-white mb-4">Frequently Asked Questions</h2>
        <p className="text-theme-white/60 text-lg">Everything you need to know before we get started.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-theme-yellow/50 shadow-lg shadow-theme-yellow/5' : 'border-theme-white/10 hover:border-theme-white/20'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === i ? 'text-theme-yellow' : 'text-theme-white'}`}>
                {faq.q}
              </span>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-theme-yellow text-black' : 'bg-theme-white/5 text-theme-white'}`}>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-6 text-theme-white/60 leading-relaxed border-t border-theme-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
