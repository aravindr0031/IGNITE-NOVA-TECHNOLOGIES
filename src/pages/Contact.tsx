import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, MessageSquare, Sparkles, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FAQSection } from '../components/ui/ContactAdditions';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeField, setActiveField] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    const requiredFields = ['fullName', 'email', 'service', 'budget', 'timeline', 'details'];
    requiredFields.forEach(field => {
      if (!formData.get(field)) {
        newErrors[field] = 'Required';
      }
    });

    const email = formData.get('email') as string;
    if (email && !validateEmail(email)) {
      newErrors['email'] = 'Invalid email';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/ignitenova.tech@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: formData.get('fullName'),
            Email: formData.get('email'),
            Company: formData.get('company') || 'Not provided',
            Service: formData.get('service'),
            Budget: formData.get('budget'),
            Timeline: formData.get('timeline'),
            Details: formData.get('details'),
            _subject: `New Project Inquiry from ${formData.get('fullName')}`
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus('error');
    }
  };

  const inputClasses = (name: string) => `
    w-full bg-theme-black/50 border-b-2 px-0 py-3 text-theme-white focus:outline-none transition-all placeholder-theme-white/30
    ${errors[name] ? 'border-red-500' : activeField === name ? 'border-theme-yellow' : 'border-theme-white/20 hover:border-theme-white/40'}
  `;

  const labelClasses = "block text-xs font-bold text-theme-white/60 uppercase tracking-wider mb-1";

  return (
    <div className="flex flex-col min-h-screen bg-theme-black overflow-hidden pb-24">
      {/* Hero Background Image & Glows */}
      <div className="absolute top-0 left-0 w-full h-[650px] overflow-hidden z-0 pointer-events-none">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop')" }}
        />
        {/* Gradient fade to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-theme-black/40 via-theme-black/80 to-theme-black" />
        
        {/* Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-theme-yellow/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-theme-yellow/10 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-white/5 border border-theme-white/10 text-theme-yellow text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>We're excited to hear from you</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-theme-white mb-6 tracking-tight leading-tight">
              Let's Create Something <br />
              <span className="text-theme-yellow relative inline-block mt-2">
                Extraordinary.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-theme-yellow/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-theme-white/60 leading-relaxed max-w-2xl mx-auto mt-8">
              Whether you have a wild idea or a detailed RFP, we're ready to bring your vision to life. Reach out and let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Mail, title: 'Chat with us', desc: 'Our friendly team is here to help.', value: 'ignitenova.tech@gmail.com' },
            { icon: MapPin, title: 'Visit us', desc: 'Come say hello at our office HQ.', value: '100 Innovation Dr, Tech City' },
            { icon: Phone, title: 'Call us', desc: 'We are ready to answer your call.', value: '+91 93440 67940\n+91 93617 81079' },
            { 
              icon: Clock, 
              title: 'Business Hours', 
              desc: 'We are here when you need us.', 
              value: (
                <div className="flex flex-col gap-2 mt-4 text-sm font-medium">
                  <div className="flex justify-between items-center text-theme-white">
                    <span className="text-theme-white/60">Mon - Fri</span>
                    <span>9 AM - 7 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-theme-white">
                    <span className="text-theme-white/60">Saturday</span>
                    <span>10 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-[#13b169]">
                    <span className="text-[#13b169]/80">Sunday</span>
                    <span>24×7 Support</span>
                  </div>
                </div>
              ) 
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              className="bg-theme-black border border-theme-white/10 rounded-3xl p-8 hover:border-theme-yellow/50 hover:bg-theme-white/[0.02] transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-theme-yellow/5 rounded-full blur-3xl group-hover:bg-theme-yellow/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-theme-yellow/10 flex items-center justify-center mb-6 text-theme-yellow group-hover:scale-110 transition-transform shadow-lg shadow-theme-yellow/5">
                <card.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-theme-white mb-2">{card.title}</h3>
              <p className="text-theme-white/50 text-sm mb-4">{card.desc}</p>
              <div className="font-semibold text-theme-white group-hover:text-theme-yellow transition-colors whitespace-pre-line">
                {card.value}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a] border border-theme-white/10 rounded-[2.5rem] overflow-hidden grid lg:grid-cols-5 shadow-2xl relative"
        >
          
          {/* Left Side: Visual/Context */}
          <div className="lg:col-span-2 bg-gradient-to-br from-theme-black to-[#050505] p-10 lg:p-14 relative border-r border-theme-white/5 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-theme-yellow/15 via-transparent to-transparent opacity-60" />
            
            <div className="relative z-10">
              <MessageSquare className="w-12 h-12 text-theme-yellow mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl lg:text-4xl font-bold text-theme-white mb-6 leading-tight">
                Got a project in mind?<br/>Let's talk details.
              </h2>
              <p className="text-theme-white/60 mb-12 text-lg">
                Fill out the form and our team will get back to you within 24 hours to schedule a discovery call.
              </p>

              <div className="space-y-6">
                {[
                  'Free 30-minute consultation',
                  'Detailed project proposal',
                  'No commitment required',
                  'Strict NDA protection'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-theme-white/80">
                    <div className="w-6 h-6 rounded-full bg-theme-yellow/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-theme-yellow" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-theme-white/10">
              <div className="w-full h-32 mb-5 rounded-2xl overflow-hidden relative border border-theme-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                  alt="Global Network" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-theme-white font-bold text-lg">Global Reach</div>
                  <div className="text-theme-white/60 text-sm">Working with clients worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-10 lg:p-14 relative bg-[#0a0a0a]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-theme-yellow/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-theme-yellow" />
                  </div>
                  <h3 className="text-4xl font-black mb-4 text-theme-white">Message Sent!</h3>
                  <p className="text-theme-white/60 text-lg max-w-md mx-auto mb-10">
                    Thank you for reaching out. We have received your project details and will get back to you shortly.
                  </p>
                  <Button size="lg" className="bg-theme-white/10 hover:bg-theme-white/20 text-theme-white" onClick={() => setStatus('idle')}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="relative">
                      <label className={labelClasses}>Full Name <span className="text-theme-yellow">*</span></label>
                      <input 
                        name="fullName" 
                        type="text" 
                        onFocus={() => setActiveField('fullName')}
                        onBlur={() => setActiveField(null)}
                        className={inputClasses('fullName')} 
                        placeholder="John Doe" 
                      />
                      {errors.fullName && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.fullName}</div>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className={labelClasses}>Email Address <span className="text-theme-yellow">*</span></label>
                      <input 
                        name="email" 
                        type="email" 
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className={inputClasses('email')} 
                        placeholder="john@example.com" 
                      />
                      {errors.email && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</div>}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className={labelClasses}>Phone Number</label>
                      <input 
                        name="phone" 
                        type="tel" 
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        className={inputClasses('phone')} 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <label className={labelClasses}>Company Name</label>
                      <input 
                        name="company" 
                        type="text" 
                        onFocus={() => setActiveField('company')}
                        onBlur={() => setActiveField(null)}
                        className={inputClasses('company')} 
                        placeholder="Your Company Ltd." 
                      />
                    </div>
                    
                    {/* Service */}
                    <div className="md:col-span-2 relative">
                      <label className={labelClasses}>Service Required <span className="text-theme-yellow">*</span></label>
                      <select 
                        name="service" 
                        defaultValue=""
                        onFocus={() => setActiveField('service')}
                        onBlur={() => setActiveField(null)}
                        className={`${inputClasses('service')} appearance-none cursor-pointer bg-transparent`}
                      >
                        <option value="" disabled className="bg-theme-black">Select a service...</option>
                        <option value="Web Development" className="bg-theme-black">Web Development</option>
                        <option value="Frontend Development" className="bg-theme-black">Frontend Development</option>
                        <option value="Backend Development" className="bg-theme-black">Backend Development</option>
                        <option value="UI/UX Design" className="bg-theme-black">UI/UX Design</option>
                        <option value="React Development" className="bg-theme-black">React Development</option>
                        <option value="Other" className="bg-theme-black">Other</option>
                      </select>
                      {errors.service && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.service}</div>}
                    </div>

                    {/* Budget */}
                    <div className="relative">
                      <label className={labelClasses}>Project Budget <span className="text-theme-yellow">*</span></label>
                      <select 
                        name="budget" 
                        defaultValue=""
                        onFocus={() => setActiveField('budget')}
                        onBlur={() => setActiveField(null)}
                        className={`${inputClasses('budget')} appearance-none cursor-pointer bg-transparent`}
                      >
                        <option value="" disabled className="bg-theme-black">Select budget range...</option>
                        <option value="Under $5,000" className="bg-theme-black">Under $5,000</option>
                        <option value="$5,000 - $15,000" className="bg-theme-black">$5,000 - $15,000</option>
                        <option value="$15,000 - $50,000" className="bg-theme-black">$15,000 - $50,000</option>
                        <option value="$50,000+" className="bg-theme-black">$50,000+</option>
                      </select>
                      {errors.budget && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.budget}</div>}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      <label className={labelClasses}>Project Timeline <span className="text-theme-yellow">*</span></label>
                      <select 
                        name="timeline" 
                        defaultValue=""
                        onFocus={() => setActiveField('timeline')}
                        onBlur={() => setActiveField(null)}
                        className={`${inputClasses('timeline')} appearance-none cursor-pointer bg-transparent`}
                      >
                        <option value="" disabled className="bg-theme-black">Select timeline...</option>
                        <option value="ASAP" className="bg-theme-black">ASAP</option>
                        <option value="1–2 Months" className="bg-theme-black">1–2 Months</option>
                        <option value="Flexible" className="bg-theme-black">Flexible</option>
                      </select>
                      {errors.timeline && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.timeline}</div>}
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 relative">
                      <label className={labelClasses}>Project Details <span className="text-theme-yellow">*</span></label>
                      <textarea 
                        name="details" 
                        rows={3} 
                        onFocus={() => setActiveField('details')}
                        onBlur={() => setActiveField(null)}
                        className={`${inputClasses('details')} resize-none bg-transparent`} 
                        placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                      ></textarea>
                      {errors.details && <div className="absolute -bottom-5 left-0 text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.details}</div>}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    {status === 'error' ? (
                      <div className="text-red-500 text-sm font-medium">Please fix the errors above.</div>
                    ) : (
                      <div className="text-theme-white/40 text-xs">Your data is secure and encrypted.</div>
                    )}
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-theme-yellow text-black hover:bg-theme-yellow/90 gap-2 px-10 py-6 rounded-full font-bold text-lg overflow-hidden group" 
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message 
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <div className="relative mt-20">
        <FAQSection />
      </div>

    </div>
  );
}
