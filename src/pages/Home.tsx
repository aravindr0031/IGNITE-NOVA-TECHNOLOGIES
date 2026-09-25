import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Smartphone, Zap, CheckCircle2, Search, Target, PenTool, ShieldCheck, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

const services = [
  { icon: Code2, title: 'Web Development', desc: 'Build responsive, fast, and modern websites designed for business growth.' },
  { icon: Layers, title: 'Frontend Development', desc: 'Create polished and interactive user interfaces using modern frontend technologies.' },
  { icon: Zap, title: 'Backend Development', desc: 'Develop secure, scalable, and reliable backend systems that power digital products.' },
  { icon: Smartphone, title: 'UI/UX Design', desc: 'Design intuitive and engaging experiences that make products easier and more enjoyable to use.' },
  { icon: Code2, title: 'React Development', desc: 'Build modern, component-based web applications using React.' },
  { icon: Zap, title: 'API Integration', desc: 'Connect applications and services through reliable and efficient API integrations.' },
  { icon: Layers, title: 'E-commerce Development', desc: 'Create user-friendly online stores designed for smooth shopping experiences.' },
  { icon: CheckCircle2, title: 'Website Maintenance', desc: 'Keep your website secure, updated, optimized, and performing reliably.' },
];

const projects = [
  { id: 'gym-hazel', name: 'Gym Website Hazel', category: 'Fitness & Health', desc: 'A high-performance modern web platform for gym and fitness centers with responsive design and class schedules.', tags: ['React', 'Tailwind', 'Vite'], image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', link: 'https://gymwebsite-hazel.vercel.app/' },
  { id: 'silent-disco', name: 'Silent Disco Rentals', category: 'Event Rentals', desc: 'A complete rental booking platform tailored for silent disco headphones and event party equipment.', tags: ['Next.js', 'React', 'Tailwind'], image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', link: 'https://silent-disco-headphone-party-rental.vercel.app/' },
  { id: 'medora', name: 'Medora', category: 'Healthcare Platform', desc: 'A responsive healthcare platform concept designed to simplify digital patient interactions.', tags: ['React', 'PostgreSQL', 'Express'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
  { id: 'flowdesk', name: 'FlowDesk', category: 'SaaS', desc: 'A productivity and workflow management platform concept for modern teams.', tags: ['Next.js', 'Tailwind', 'Prisma'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 'travelnest', name: 'TravelNest', category: 'Travel', desc: 'A modern travel discovery platform concept focused on effortless trip planning.', tags: ['React', 'Mapbox', 'Node.js'], image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800' },
  { id: 'educore', name: 'EduCore', category: 'Education', desc: 'An online learning platform concept designed for engaging digital education.', tags: ['React', 'GraphQL', 'PostgreSQL'], image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800' },
];

const technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'REST APIs', 'Git', 'GitHub', 'Figma'];

export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '01',
    minutes: '18',
    seconds: '00'
  });

  useEffect(() => {
    // 1 hour, 18 minutes from now
    const targetTime = new Date().getTime() + (1 * 60 * 60 * 1000) + (18 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      } else {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Decorative Dots */}
        <div className="absolute right-[10%] bottom-[20%] hidden md:grid grid-cols-4 gap-2 z-10 opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-sm bg-theme-yellow" />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-40 w-full max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6"
          >
            Software Development
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed font-medium"
          >
            With this digital solution you will have everything you need to create a memorable and enchanting online presence. Start building your dream project today with this amazing promotion!
            <br/><br/>
            Offer will expire in :
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 md:gap-12 mb-10"
          >
            {/* Chevrons */}
            <div className="hidden md:flex text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-mr-6"><path d="m9 18 6-6-6-6"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            
            {/* Countdown */}
            <div className="flex gap-8 text-white text-center">
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-bold">{timeLeft.hours}</span>
                <span className="text-xs md:text-sm tracking-wider mt-2 font-medium">Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-bold">{timeLeft.minutes}</span>
                <span className="text-xs md:text-sm tracking-wider mt-2 font-medium">Minutes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-bold">{timeLeft.seconds}</span>
                <span className="text-xs md:text-sm tracking-wider mt-2 font-medium">Seconds</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <Link to="/contact">
              <Button className="bg-theme-yellow hover:bg-theme-yellow/90 text-black font-bold px-10 h-14 text-lg rounded-none transition-transform hover:-translate-y-1">
                Start Project Now
              </Button>
            </Link>
            <p className="text-white/80 mt-4 text-sm font-medium tracking-wide">* Final Price Will be $ 89</p>
          </motion.div>
        </div>

        {/* Bottom Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-black" fill="currentColor">
            <path d="M1200 120L0 120 0 120 1200 0 1200 120z"></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading 
            title="Technology Built Around Your Goals"
            centered
          />
          <p className="text-xl text-theme-white/70 mb-8">
            We combine thoughtful design, modern development practices, and business-focused thinking to create digital experiences that are built for real-world impact.
          </p>
          <Link to="/about">
            <Button variant="secondary">Learn More About Us</Button>
          </Link>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="relative min-h-[90vh] py-32 overflow-hidden my-12 bg-white text-black">
        {/* Top Shape Divider */}
        <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-black rotate-180" fill="currentColor">
            <path d="M1200 120L0 120 0 120 1200 0 1200 120z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="pt-4 pb-8">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">Our Services</h2>
                <p className="text-black/70 text-sm leading-relaxed mb-6 font-medium">
                  We combine thoughtful design, modern development practices, and business-focused thinking to create digital experiences that are built for real-world impact.
                </p>
                <Link to="/services">
                  <Button className="bg-[#ff5a5f] hover:bg-[#ff5a5f]/90 text-white uppercase tracking-widest font-bold text-xs px-8 py-4 rounded-none shadow-md transition-transform hover:-translate-y-1">
                    View All Services <span className="ml-2 font-black">▷</span>
                  </Button>
                </Link>
              </div>
              
              <motion.div 
                whileHover="hover"
                className="relative w-full h-[320px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800')` }}
                  variants={{ hover: { scale: 1.1 } }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-0 right-0 h-14 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">Web Development</h3>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:pt-24">
              <motion.div 
                whileHover="hover"
                className="relative w-full h-[450px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800')` }}
                  variants={{ hover: { scale: 1.1 } }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-0 right-0 h-14 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">UI/UX Design</h3>
                </div>
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <motion.div 
                whileHover="hover"
                className="relative w-full h-[550px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800')` }}
                  variants={{ hover: { scale: 1.1 } }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-0 right-0 h-14 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">App Development</h3>
                </div>
              </motion.div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6 md:pt-12">
              <motion.div 
                whileHover="hover"
                className="relative w-full h-[260px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800')` }}
                  variants={{ hover: { scale: 1.1 } }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-0 right-0 h-14 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">API Integration</h3>
                </div>
              </motion.div>

              <motion.div 
                whileHover="hover"
                className="relative w-full h-[260px] overflow-hidden group cursor-pointer shadow-xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800')` }}
                  variants={{ hover: { scale: 1.1 } }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-0 right-0 h-14 bg-gradient-to-r from-[#ff5a5f]/90 to-[#ffb070]/90 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">Cloud Hosting</h3>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bottom Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-black" fill="currentColor">
            <path d="M1200 120L0 120 0 120 1200 0 1200 120z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 overflow-hidden my-12">
        {/* Top Jagged Shape Divider */}
        <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-black rotate-180" fill="currentColor">
            <path d="M 0 120 L 400 0 L 800 100 L 1200 20 L 1200 120 L 0 120 Z"></path>
          </svg>
        </div>

        {/* Background Image with Golden/Yellow Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Color Overlays to match reference */}
        <div className="absolute inset-0 bg-[#b6883b] mix-blend-color opacity-70" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 md:divide-x divide-white/20">
            {[
              { number: '12', label: 'TEAM MEMBERS' },
              { number: '50', label: 'PROJECTS DELIVERED', suffix: '+' },
              { number: '100', label: 'CLIENT SATISFACTION', suffix: '%' },
              { number: '24/7', label: 'SUPPORT AVAILABLE' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center px-4"
              >
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">{stat.number}</span>
                  {stat.suffix && <span className="text-4xl md:text-6xl font-bold text-white ml-1 drop-shadow-2xl">{stat.suffix}</span>}
                </div>
                <p className="text-white/90 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-center drop-shadow-md">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Jagged Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-black" fill="currentColor">
            <path d="M 0 120 L 400 0 L 800 100 L 1200 20 L 1200 120 L 0 120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-theme-white py-32 text-theme-black relative overflow-hidden">
        {/* Faint wireframe background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-theme-black/50 text-xs font-bold tracking-[0.2em] uppercase mb-4">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-20 tracking-tight">Structured Approach</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-start justify-center">
            {[
              { name: 'DISCOVER', icon: <Search className="w-12 h-12" strokeWidth={1.5} /> },
              { name: 'STRATEGY', icon: <Target className="w-12 h-12" strokeWidth={1.5} /> },
              { name: 'UI/UX DESIGN', icon: <PenTool className="w-12 h-12" strokeWidth={1.5} /> },
              { name: 'DEVELOPMENT', icon: <Code2 className="w-12 h-12" strokeWidth={1.5} /> },
              { name: 'QA TESTING', icon: <ShieldCheck className="w-12 h-12" strokeWidth={1.5} /> },
              { name: 'LAUNCH', icon: <Rocket className="w-12 h-12" strokeWidth={1.5} /> },
            ].map((step, i) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="relative mb-6">
                  {/* Decorative yellow accent */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-theme-yellow rounded -z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  <div className="text-theme-black bg-theme-white p-2">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xs font-bold tracking-widest text-theme-black/70 group-hover:text-theme-black transition-colors">{step.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work (Masonry Layout) */}
      <section className="relative w-full bg-[#f8f8f8] py-32 overflow-hidden">
        {/* Top Jagged Shape Divider */}
        <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-theme-white rotate-180" fill="currentColor">
            <path d="M 0 120 L 400 0 L 800 100 L 1200 20 L 1200 120 L 0 120 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-12">
              {/* Large Image - Gym */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] sm:h-[600px] w-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center shadow-xl"
                  style={{ 
                    backgroundImage: `url('${projects[0].image}')`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto max-w-sm bg-theme-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-theme-yellow font-bold text-xs tracking-widest uppercase mb-1">{projects[0].category}</div>
                  <h3 className="text-xl md:text-2xl font-black text-theme-black mb-3">{projects[0].name}</h3>
                  <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-theme-black font-bold hover:text-theme-yellow transition-colors text-sm">
                    View Live Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:pr-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <PenTool className="w-10 h-10 text-theme-yellow mb-4" strokeWidth={1.5} />
                  <h4 className="font-bold text-lg mb-2 text-theme-black">Premium Experience</h4>
                  <p className="text-theme-black/60 text-sm leading-relaxed">
                    Reliable customer support designed to provide fast and effective solutions.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <ShieldCheck className="w-10 h-10 text-theme-yellow mb-4" strokeWidth={1.5} />
                  <h4 className="font-bold text-lg mb-2 text-theme-black">Trusted Expert Support</h4>
                  <p className="text-theme-black/60 text-sm leading-relaxed">
                    Innovative design services that bring your creative visions to life.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 lg:pt-16">
              {/* Top Row: Text + Vertical Image */}
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <p className="text-theme-black/50 text-xs font-bold tracking-[0.2em] uppercase mb-4">Smart and simple</p>
                  <h2 className="text-5xl md:text-6xl font-black mb-6 text-theme-black leading-tight">Selected<br/>Work</h2>
                  <p className="text-theme-black/60 text-base leading-relaxed mb-8">
                    A showcase of our recent solutions. We believe in creating meaningful experiences through personalized service and attention to detail. Whether you're seeking guidance or practical support, our team is here to help you.
                  </p>
                  <Link to="/projects">
                    <button className="bg-theme-yellow hover:bg-theme-yellow/90 text-theme-black font-bold py-3 px-8 rounded-sm shadow-md transition-transform hover:-translate-y-1">
                      View All Projects
                    </button>
                  </Link>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-full sm:w-40 h-72 relative overflow-hidden rounded-xl shadow-xl shrink-0 hidden sm:block"
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${projects[2].image}')` }} />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap"># Recent Project</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Large Image - Silent Disco */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative h-[400px] sm:h-[500px] w-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center shadow-xl"
                  style={{ 
                    backgroundImage: `url('${projects[1].image}')`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                  }}
                />
                <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-auto max-w-sm bg-theme-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-theme-yellow font-bold text-xs tracking-widest uppercase mb-1">{projects[1].category}</div>
                  <h3 className="text-xl md:text-2xl font-black text-theme-black mb-3">{projects[1].name}</h3>
                  <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-theme-black font-bold hover:text-theme-yellow transition-colors text-sm">
                    View Live Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full">
        {/* Top Strip */}
        <div className="bg-theme-white py-6 overflow-hidden border-y border-theme-black/10 flex">
          <div className="flex w-max animate-marquee gap-8 pr-8">
            {[...['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'], ...['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS']].map((tech, i) => (
              <div key={`${tech}-${i}`} className="flex items-center gap-8 shrink-0">
                <span className="text-3xl md:text-5xl font-bold text-theme-black tracking-tight whitespace-nowrap">{tech}</span>
                <span className="text-theme-yellow text-2xl md:text-4xl font-black">#</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Strip */}
        <div className="bg-theme-black py-4 overflow-hidden border-b border-theme-white/10 flex">
          <div className="flex w-max animate-marquee-reverse gap-8 pr-8">
            {[...['PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Figma', 'MongoDB', 'Redis'], ...['PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Figma', 'MongoDB', 'Redis']].map((tech, i) => (
              <div key={`${tech}-${i}`} className="flex items-center gap-8 shrink-0">
                <span className="text-xl md:text-2xl font-bold text-theme-white whitespace-nowrap">{tech}</span>
                <span className="text-theme-yellow text-xl md:text-2xl font-black">*</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full bg-[#f4f4f4] text-theme-black py-32 md:py-48 overflow-visible mt-24 z-10">
        {/* Top Jagged Shape Divider */}
        <div className="absolute -top-12 md:-top-24 lg:-top-32 left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 lg:h-32 text-[#f4f4f4]" fill="currentColor">
            <path d="M 0 120 L 400 0 L 800 100 L 1200 20 L 1200 120 L 0 120 Z"></path>
          </svg>
        </div>

        {/* Subtle Background Blueprint/Architecture Graphic */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')` }}
        />

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <div className="flex items-end justify-center gap-2 mb-4 text-theme-black">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
              ONLY 54
            </h2>
            <span className="text-3xl md:text-5xl font-black pb-2 md:pb-4">$</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-theme-black/70 mb-12 max-w-2xl">
            Make a difference and choose THE BEST for your business !
          </p>
          
          <Link to="/contact" className="z-40">
            <button className="bg-theme-yellow hover:bg-theme-yellow/90 text-theme-black font-extrabold py-4 px-12 text-sm md:text-base shadow-xl transition-transform hover:-translate-y-1 rounded-sm uppercase tracking-[0.1em]">
              Start a Project
            </button>
          </Link>

          {/* Floating Images (Visible on Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-64 h-48 rounded shadow-2xl overflow-hidden border-4 border-white"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team working" className="w-full h-full object-cover" />
            </motion.div>

            {/* Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-10 right-10 w-56 h-40 rounded shadow-2xl overflow-hidden border-4 border-white"
            >
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" alt="Developer" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 left-12 w-72 h-56 rounded shadow-2xl overflow-hidden border-4 border-white bg-theme-white"
            >
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Planning" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-20 right-24 w-64 h-64 rounded shadow-2xl overflow-hidden border-4 border-white"
            >
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" alt="Code" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Bottom Right Secondary */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-10 right-0 w-24 h-48 rounded shadow-2xl overflow-hidden border-4 border-white z-10"
            >
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" alt="Office" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
