import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, CheckCircle2, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const features = [
  { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', title: 'Innovation', desc: 'Constantly exploring new technologies and modern development practices.' },
  { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', title: 'Transparency', desc: 'Clear communication and honest feedback throughout the entire project.' },
  { image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', title: 'Quality', desc: 'Writing clean code and building reliable, scalable, and secure systems.' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', title: 'Collaboration', desc: 'Working closely with our clients to ensure their vision becomes reality.' },
  { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', title: 'Continuous Learning', desc: 'Adapting to the ever-changing digital landscape with ongoing education.' },
  { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', title: 'Customer Success', desc: 'Measuring our success by the growth and achievements of our clients.' },
];

export function About() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="relative pt-40 pb-48 md:pt-48 md:pb-64 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4">About</h1>
            <p className="text-xl md:text-2xl text-white font-medium">Software Development</p>
          </motion.div>
        </div>

        {/* Bottom Asymmetrical Jagged Shape Divider */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-20 overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-32 text-white" fill="currentColor">
            <path d="M0,80 L300,100 L900,20 L1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
        

      </section>

      {/* Our Story */}
      <section className="w-full bg-white text-theme-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column (Text) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <span className="text-theme-black/60 font-medium mb-4 uppercase tracking-widest text-xs">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-theme-black">
                Building Technology With Purpose
              </h2>
              <div className="space-y-4 text-theme-black/70 text-lg leading-relaxed mb-10 text-justify">
                <p>
                  Ignite Nova Technologies started with a simple belief: businesses need reliable, high-quality technology partners to navigate the complex digital landscape. We saw that many startups and growing companies struggled to find development teams that truly understood both clean code and business goals.
                </p>
                <p>
                  By focusing strictly on modern development practices, user-centered design, and scalable architectures, we set out to bridge the gap between creative ideas and technical execution.
                </p>
                <p>
                  Today, we continue to build scalable digital products, helping brands transform their initial concepts into powerful, working software solutions.
                </p>
              </div>
              

              <Link to="/contact">
                <button className="bg-theme-yellow hover:bg-theme-yellow/90 text-black font-bold py-4 px-8 text-sm transition-colors">
                  Learn More
                </button>
              </Link>
            </motion.div>
            
            {/* Right Column (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] md:h-[600px] w-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80')` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f8f8f8] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-12 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 pl-4 border-l-[3px] border-theme-yellow text-theme-black">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-justify">
                To help businesses transform ideas into useful, reliable, and impactful digital products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-100 p-12 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 pl-4 border-l-[3px] border-theme-yellow text-theme-black">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-justify">
                To become a trusted technology partner for businesses building the future of digital experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-100 p-12 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 pl-4 border-l-[3px] border-theme-yellow text-theme-black">Our Goal</h3>
              <p className="text-gray-500 leading-relaxed text-justify">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-gray-100 p-12 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 pl-4 border-l-[3px] border-theme-yellow text-theme-black">Our Strategy</h3>
              <p className="text-gray-500 leading-relaxed text-justify">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Features */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Subtle diagonal background lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 100px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Our Values" centered className="mb-16 text-theme-black" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className="w-full aspect-[4/3] rounded-lg bg-cover bg-center mb-6 shadow-md overflow-hidden"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theme-black">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm px-4">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col justify-center items-center relative h-32">
            <div className="absolute left-0 bottom-0 flex flex-col items-center text-theme-yellow -space-y-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-12 h-12"><polyline points="4 8 12 16 20 8"></polyline></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-12 h-12"><polyline points="4 8 12 16 20 8"></polyline></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-12 h-12"><polyline points="4 8 12 16 20 8"></polyline></svg>
            </div>
            
            <button className="bg-theme-yellow hover:bg-theme-yellow/90 text-white font-bold py-3 px-8 text-sm transition-colors absolute bottom-0 shadow-lg">
              All Features
            </button>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <SectionHeading title="What Makes Us Different" centered />
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {['Clear communication', 'Modern technology', 'Clean design', 'Scalable development', 'Business-focused solutions', 'Long-term relationships'].map((item) => (
            <span key={item} className="px-6 py-3 bg-theme-white/5 rounded-full border border-theme-white/10 text-theme-white/80 font-medium">
              {item}
            </span>
          ))}
        </div>
        <Link to="/contact">
          <Button size="lg" className="px-12">Work With Us</Button>
        </Link>
      </section>
    </div>
  );
}
