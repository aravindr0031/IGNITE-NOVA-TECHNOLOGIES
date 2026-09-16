import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Smartphone, Zap, CheckCircle2, Globe, Database, Server, ArrowRight, Terminal, Cpu, MonitorPlay, Rocket, Search, LayoutGrid, Cloud } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Build responsive, fast, and modern websites designed for business growth.',
    features: ['Custom Layouts', 'SEO Optimization', 'CMS Integration']
  },
  {
    icon: Layers,
    title: 'Frontend Development',
    desc: 'Create polished and interactive user interfaces using modern frontend technologies.',
    features: ['React & Vue.js', 'State Management', 'Framer Motion Animations']
  },
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'Develop secure, scalable, and reliable backend systems that power digital products.',
    features: ['Node.js & Python', 'Microservices', 'Cloud Infrastructure']
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    desc: 'Design intuitive and engaging experiences that make products easier and more enjoyable to use.',
    features: ['Wireframing', 'Prototyping', 'User Testing']
  },
  {
    icon: Code2,
    title: 'React Development',
    desc: 'Build modern, component-based web applications using React.',
    features: ['Next.js', 'TypeScript', 'Server-Side Rendering']
  },
  {
    icon: Zap,
    title: 'API Integration',
    desc: 'Connect applications and services through reliable and efficient API integrations.',
    features: ['RESTful APIs', 'GraphQL', 'Third-Party Services']
  },
  {
    icon: Database,
    title: 'E-commerce Development',
    desc: 'Create user-friendly online stores designed for smooth shopping experiences.',
    features: ['Shopify & WooCommerce', 'Payment Gateways', 'Inventory Management']
  },
  {
    icon: CheckCircle2,
    title: 'Website Maintenance',
    desc: 'Keep your website secure, updated, optimized, and performing reliably.',
    features: ['Security Updates', 'Performance Tuning', 'Regular Backups']
  }
];

const heights = [
  'h-[400px]', 'h-[500px]', 'h-[350px]', 'h-[450px]', 
  'h-[450px]', 'h-[350px]', 'h-[500px]', 'h-[400px]'
];

const images = [
  'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
];

const industries = [
  { name: 'Startups', letter: 'S' },
  { name: 'Enterprises', letter: 'E' },
  { name: 'FinTech', letter: 'F' },
  { name: 'Healthcare', letter: 'H' },
  { name: 'Education', letter: 'E' },
  { name: 'Retail', letter: 'R' },
  { name: 'Logistics', letter: 'L' },
  { name: 'Manufacturing', letter: 'M' },
  { name: 'Hospitality', letter: 'H' },
  { name: 'Real Estate', letter: 'R' },
  { name: 'E-Commerce', letter: 'E' },
  { name: 'SaaS', letter: 'S' },
];

export function Services() {
  return (
    <div className="flex flex-col pb-24">
      {/* Hero */}
      <section className="relative pt-40 pb-48 md:pt-48 md:pb-64 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium">
              Construction WordPress Theme
            </p>
          </motion.div>
        </div>

        {/* Bottom Asymmetrical Jagged Shape Divider */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-32 text-theme-black" fill="currentColor">
            <path d="M0,80 L300,100 L900,20 L1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="bg-theme-black py-16 flex flex-col items-center overflow-hidden">
        <h3 className="text-theme-white/50 uppercase tracking-widest text-sm font-bold mb-10">Trusted by businesses across industries</h3>
        <div className="w-full relative flex overflow-x-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
            {[...industries, ...industries, ...industries, ...industries].map((ind, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-theme-white/10 flex items-center justify-center text-theme-yellow font-bold">
                  {ind.letter}
                </div>
                <span className="text-theme-white text-lg font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="w-full bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-theme-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {[0, 4].map((i) => {
              const service = services[i];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className={`relative w-full overflow-hidden group shadow-xl rounded-sm ${heights[i]}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${images[i]}')` }}
                    variants={{ hover: { scale: 1.1 } }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/90 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-10 h-10 text-[#ff5a5f] mb-4" />
                    <h3 className="text-white font-black text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#ffb070] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-auto block">
                      <Button className="w-full bg-[#ff5a5f] hover:bg-[#ff5a5f]/90 text-white uppercase tracking-widest text-sm py-4 rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:opacity-0 group-hover:translate-y-4">
                    <h3 className="text-white font-black text-sm tracking-widest uppercase">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:pt-12">
            {[1, 5].map((i) => {
              const service = services[i];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className={`relative w-full overflow-hidden group shadow-xl rounded-sm ${heights[i]}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${images[i]}')` }}
                    variants={{ hover: { scale: 1.1 } }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/90 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-10 h-10 text-[#ff5a5f] mb-4" />
                    <h3 className="text-white font-black text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#ffb070] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-auto block">
                      <Button className="w-full bg-[#ff5a5f] hover:bg-[#ff5a5f]/90 text-white uppercase tracking-widest text-sm py-4 rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:opacity-0 group-hover:translate-y-4">
                    <h3 className="text-white font-black text-sm tracking-widest uppercase">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {[2, 6].map((i) => {
              const service = services[i];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className={`relative w-full overflow-hidden group shadow-xl rounded-sm ${heights[i]}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${images[i]}')` }}
                    variants={{ hover: { scale: 1.1 } }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/90 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-10 h-10 text-[#ff5a5f] mb-4" />
                    <h3 className="text-white font-black text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#ffb070] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-auto block">
                      <Button className="w-full bg-[#ff5a5f] hover:bg-[#ff5a5f]/90 text-white uppercase tracking-widest text-sm py-4 rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:opacity-0 group-hover:translate-y-4">
                    <h3 className="text-white font-black text-sm tracking-widest uppercase">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6 md:pt-12">
            {[3, 7].map((i) => {
              const service = services[i];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className={`relative w-full overflow-hidden group shadow-xl rounded-sm ${heights[i]}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url('${images[i]}')` }}
                    variants={{ hover: { scale: 1.1 } }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/90 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-10 h-10 text-[#ff5a5f] mb-4" />
                    <h3 className="text-white font-black text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#ffb070] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-auto block">
                      <Button className="w-full bg-[#ff5a5f] hover:bg-[#ff5a5f]/90 text-white uppercase tracking-widest text-sm py-4 rounded-none transition-transform hover:-translate-y-1 shadow-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:opacity-0 group-hover:translate-y-4">
                    <h3 className="text-white font-black text-sm tracking-widest uppercase">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
        </section>
      </div>

      {/* Why Choose Our Services */}
      <section className="bg-theme-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Our Services" centered />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Responsive development',
              'Clean code',
              'Modern technologies',
              'Performance optimization',
              'SEO-friendly structure',
              'Scalable architecture'
            ].map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-theme-black border border-theme-white/10 p-4 rounded-xl flex items-center gap-3 text-lg font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-theme-yellow" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: Our Process */}
      <section className="py-32 relative overflow-hidden bg-theme-black">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-theme-yellow/5 blur-[150px] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="How We Work" subtitle="Our proven methodology for delivering exceptional digital products." centered />
          
          <div className="grid md:grid-cols-4 gap-8 relative mt-16">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-theme-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: '01', title: 'Discovery', icon: Search, desc: 'Deep dive into your goals, audience, and market landscape.' },
              { step: '02', title: 'Strategy', icon: Layers, desc: 'Planning the architecture and intuitive user experience.' },
              { step: '03', title: 'Build', icon: Code2, desc: 'Developing with cutting-edge modern technologies.' },
              { step: '04', title: 'Launch', icon: Rocket, desc: 'Testing, deploying, and scaling your digital product.' }
            ].map((process, i) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-theme-black border-2 border-theme-white/10 flex flex-col items-center justify-center mb-6 relative group-hover:border-theme-yellow transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <span className="text-theme-yellow/50 text-xs font-black tracking-widest mb-1">{process.step}</span>
                  <process.icon className="w-6 h-6 text-theme-white group-hover:text-theme-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-theme-white mb-3">{process.title}</h3>
                <p className="text-theme-white/60 text-sm leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Tech Stack (Horizontal Card) */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 flex flex-col xl:flex-row gap-12 xl:gap-8"
          >
            {/* Title Column */}
            <div className="xl:w-1/4 shrink-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology Stack</h2>
              <p className="text-gray-500 font-medium">Proven, modern tools chosen for reliability, security and scale.</p>
            </div>

            {/* Grid Columns */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Frontend */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <LayoutGrid className="w-5 h-5 text-theme-yellow" />
                  <h3 className="font-bold text-sm tracking-wide uppercase text-gray-900">FRONTEND</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue'].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-5 h-5 text-theme-yellow" />
                  <h3 className="font-bold text-sm tracking-wide uppercase text-gray-900">BACKEND</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'NestJS', 'Python', 'Go', 'Java'].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Database & Data */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Database className="w-5 h-5 text-theme-yellow" />
                  <h3 className="font-bold text-sm tracking-wide uppercase text-gray-900">DATABASE & DATA</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'BigQuery'].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Cloud className="w-5 h-5 text-theme-yellow" />
                  <h3 className="font-bold text-sm tracking-wide uppercase text-gray-900">CLOUD & DEVOPS</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600 font-medium">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Cinematic CTA */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-theme-white/5 border border-theme-white/10 p-12 md:p-16 rounded-[3rem] backdrop-blur-md shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's Transform Your Vision Into Reality.</h2>
            <p className="text-xl text-theme-white/70 mb-10 max-w-2xl mx-auto">
              Join the hundreds of businesses that have scaled their operations and increased revenue with our tailored digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-theme-yellow text-black hover:bg-theme-yellow/90 font-bold px-10 py-5 text-lg w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 font-bold px-10 py-5 text-lg w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
