import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  FileText, 
  Users, 
  Search, 
  ShoppingBag, 
  Landmark, 
  Monitor, 
  Lightbulb, 
  Code,
  CheckCircle2,
  Briefcase,
  MapPin,
  Clock,
  Fingerprint,
  X
} from 'lucide-react';

export function Careers() {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState('Content Writer');
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>('');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      // Scroll by roughly the width of the visible area
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for:\nIndustry: ${industry || 'Any'}\nLocation: ${location || 'Any'}\nKeyword: ${keyword || 'None'}`);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-theme-yellow/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Text & Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl lg:text-6xl font-black text-theme-white leading-[1.1] mb-6 tracking-tight">
                The <span className="text-theme-yellow bg-theme-yellow/10 px-2 rounded-xl border border-theme-yellow/20">Easiest Way</span><br />
                to Get Your New Job
              </h1>
              <p className="text-lg text-theme-white/70 leading-relaxed mb-10">
                Each month, more than 3 million job seekers turn to our website in their search for work, making over 140,000 applications every single day.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="bg-theme-black border border-theme-white/10 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center shadow-2xl mb-6">
                {/* Industry */}
                <div className="relative flex items-center gap-2 px-4 py-3 md:py-0 w-full md:w-auto border-b md:border-b-0 md:border-r border-theme-white/10 hover:text-theme-yellow transition-colors shrink-0 group">
                  <Briefcase className="w-5 h-5 text-theme-white/40 group-hover:text-theme-yellow transition-colors" />
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="bg-transparent border-none outline-none text-theme-white/80 text-sm flex-grow appearance-none cursor-pointer pr-6"
                  >
                    <option value="" disabled hidden>Industry</option>
                    <option value="software" className="bg-theme-black text-theme-white">Software</option>
                    <option value="finance" className="bg-theme-black text-theme-white">Finance</option>
                    <option value="marketing" className="bg-theme-black text-theme-white">Marketing</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-theme-white/40 absolute right-4 pointer-events-none group-hover:text-theme-yellow transition-colors" />
                </div>
                {/* Location */}
                <div className="relative flex items-center gap-2 px-4 py-3 md:py-0 w-full md:w-auto border-b md:border-b-0 md:border-r border-theme-white/10 hover:text-theme-yellow transition-colors shrink-0 group">
                  <MapPin className="w-5 h-5 text-theme-white/40 group-hover:text-theme-yellow transition-colors" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent border-none outline-none text-theme-white/80 text-sm flex-grow appearance-none cursor-pointer pr-6"
                  >
                    <option value="" disabled hidden>Location</option>
                    <option value="hosur" className="bg-theme-black text-theme-white">Hosur</option>
                    <option value="bangalore" className="bg-theme-black text-theme-white">Bangalore</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-theme-white/40 absolute right-4 pointer-events-none group-hover:text-theme-yellow transition-colors" />
                </div>
                {/* Keyword */}
                <div className="flex items-center gap-2 px-4 py-3 md:py-0 w-full md:w-auto flex-grow text-theme-white/40">
                  <Search className="w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Keyword" 
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm text-theme-white w-full placeholder:text-theme-white/40" 
                  />
                </div>
                {/* Button */}
                <Button type="submit" className="w-full md:w-auto bg-theme-yellow text-black hover:bg-theme-yellow/90 rounded-xl md:rounded-full px-8 py-3 md:py-2">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </form>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-theme-white/50 font-medium">Popular Searches:</span>
                <a href="#" className="text-theme-white/70 hover:text-theme-yellow underline decoration-theme-white/20 underline-offset-4">Content Writer</a>,
                <a href="#" className="text-theme-white/70 hover:text-theme-yellow underline decoration-theme-white/20 underline-offset-4">Finance</a>,
                <a href="#" className="text-theme-white/70 hover:text-theme-yellow underline decoration-theme-white/20 underline-offset-4">Human Resource</a>,
                <a href="#" className="text-theme-white/70 hover:text-theme-yellow underline decoration-theme-white/20 underline-offset-4">Management</a>
              </div>
            </motion.div>

            {/* Right side: Images layout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-video lg:aspect-square"
            >
              {/* Dotted Pattern Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 text-theme-white/10" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
              {/* Dotted Pattern Bottom Left */}
              <div className="absolute bottom-12 left-0 w-32 h-32 text-theme-white/10" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

              {/* Main Image 1 (Top Left) */}
              <div className="absolute top-8 left-8 w-[65%] aspect-[4/3] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl border-[6px] border-theme-black bg-theme-white/10 overflow-hidden shadow-2xl z-10 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-full object-cover" />
              </div>

              {/* Main Image 2 (Bottom Right) */}
              <div className="absolute bottom-8 right-8 w-[60%] aspect-[4/3] rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl border-[6px] border-theme-black bg-theme-yellow/10 overflow-hidden shadow-2xl z-20 flex items-center justify-center backdrop-blur-sm">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Professional at laptop" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-theme-white/5 py-24 border-y border-theme-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-theme-white">Browse by category</h2>
            <p className="text-theme-white/70 mt-4 font-medium">Find the job that's perfect for you. about 800+ new jobs everyday</p>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-theme-black text-theme-white hover:text-theme-yellow transition-colors shrink-0 cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex gap-6 w-full max-w-6xl overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 -mb-4 scroll-smooth"
            >
              {[
                { icon: FileText, title: 'Content Writer', subtitle: '2 Jobs Available' },
                { icon: Users, title: 'Human Resource', subtitle: '1 Job Available' },
                { icon: Search, title: 'Market Research', subtitle: 'No Job Available' },
                { icon: ShoppingBag, title: 'Retail & Product', subtitle: '2 Jobs Available' },
                { icon: Landmark, title: 'Finance', subtitle: '3 Jobs Available' },
                { icon: Monitor, title: 'Management', subtitle: '2 Jobs Available' },
                { icon: Lightbulb, title: 'Marketing & Sale', subtitle: 'No Job Available' },
                { icon: Code, title: 'Software', subtitle: '1 Job Available' },
              ].map((category, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    setActiveCategory(category.title);
                    // Optionally scroll to jobs section
                    document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex items-center gap-4 p-6 rounded-2xl border transition-all cursor-pointer snap-start ${
                    activeCategory === category.title
                      ? 'bg-theme-yellow/10 border-theme-yellow'
                      : 'bg-theme-black border-theme-white/10 hover:border-theme-yellow/50'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-theme-yellow/10 flex items-center justify-center text-theme-yellow shrink-0">
                    <category.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-theme-white text-base">{category.title}</h3>
                    <p className="text-theme-white/50 text-sm mt-1">{category.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => scrollCarousel('right')}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-theme-black text-theme-white hover:text-theme-yellow transition-colors shrink-0 cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <div className="w-3 h-3 rounded-full bg-theme-yellow"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-theme-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-theme-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-theme-white/20"></div>
          </div>
        </div>
      </section>

      {/* Millions of Jobs Section */}
      <section className="py-24 overflow-hidden border-y border-theme-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Image & Floating Cards */}
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full mt-10 lg:mt-0">
              {/* Main Image Placeholder */}
              <div className="aspect-square sm:aspect-[4/3] rounded-3xl bg-theme-white/5 border border-theme-white/10 flex items-center justify-center relative z-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Job search team" className="w-full h-full object-cover" />
              </div>

              {/* Top Left Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute -top-12 -left-12 z-20 bg-theme-black border border-theme-white/10 rounded-2xl p-5 shadow-2xl hidden md:block w-64"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-theme-yellow"></div>
                  <span className="text-xs font-semibold text-theme-white/70">Market Static</span>
                </div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-bold text-theme-white">Course<br/>overview</span>
                  <span className="font-bold text-theme-yellow">+15%</span>
                </div>
                {/* Fake Chart */}
                <div className="w-full h-12 flex items-end justify-between gap-1 mt-2">
                  {[40, 70, 45, 90, 65, 85, 60].map((h, i) => (
                    <div key={i} className="w-full bg-theme-white/5 rounded-t-sm relative group">
                      <div className="absolute bottom-0 w-full bg-theme-yellow rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-theme-white/40 mt-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </motion.div>

              {/* Bottom Right Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-12 -right-12 z-20 bg-theme-black border border-theme-white/10 rounded-2xl p-6 shadow-2xl hidden md:block w-64"
              >
                <div className="w-12 h-12 rounded-full bg-theme-yellow/10 flex items-center justify-center text-theme-yellow mb-4">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-theme-white mb-2 leading-tight">Control card security in-app with a tap</h4>
                <p className="text-xs text-theme-white/50 mb-6 line-clamp-2">Discover our cards benefits, with one tap.</p>
                <Button className="w-full bg-theme-white/5 text-theme-white hover:bg-theme-yellow hover:text-black hover:border-transparent border border-theme-white/10">
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Right Text Content */}
            <div className="lg:pl-16 text-center lg:text-left">
              <p className="text-theme-white/50 font-bold text-xl mb-4">Millions Of Jobs.</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-theme-white leading-[1.1] mb-6">
                Find The One That's <br className="hidden lg:block"/>
                <span className="text-theme-yellow">Right</span> For You
              </h2>
              <p className="text-theme-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <Button size="lg" className="bg-theme-yellow text-black hover:bg-theme-yellow/90 px-8 py-6 text-lg rounded-xl" onClick={() => console.log("Redirecting to job search page...")}>
                  Search Jobs
                </Button>
                <a href="#" className="font-semibold text-theme-white hover:text-theme-yellow transition-colors border-b border-theme-white hover:border-theme-yellow pb-1">
                  Learn More
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Jobs of the day */}
      <section id="jobs-section" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-theme-white">Jobs of the day</h2>
            <p className="text-theme-white/70 mt-4 font-medium">Search and connect with the right candidates faster</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { name: 'Content Writer', icon: FileText },
              { name: 'Finance', icon: Landmark },
              { name: 'Human Resource', icon: Users },
              { name: 'Management', icon: Monitor },
              { name: 'Market Research', icon: Search },
              { name: 'Marketing & Sale', icon: Lightbulb },
              { name: 'Retail & Products', icon: ShoppingBag },
              { name: 'Software', icon: Code },
            ].map((filter, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(filter.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all ${
                  activeCategory === filter.name 
                    ? 'border-theme-yellow text-theme-yellow bg-transparent' 
                    : 'border-theme-white/10 text-theme-white/70 hover:border-theme-yellow/50 hover:text-theme-white bg-theme-black'
                }`}
              >
                <filter.icon className="w-4 h-4" strokeWidth={2} />
                {filter.name}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {(() => {
              const baseJobs = [
                { category: 'Software', company: 'Car Toys', loc: 'Denmark', title: 'React Native Web Developer', type: 'Full Time', posted: 'Posted 3 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['App', 'React', 'Web'], salary: '$5000/Month' },
                { category: 'Software', company: 'Google', loc: 'Remote', title: 'Senior Frontend Engineer', type: 'Full Time', posted: 'Posted 1 day ago', desc: 'Join our team to build scalable frontend architectures and lead UI/UX implementations.', tags: ['React', 'TypeScript'], salary: '$8000/Month' },
                
                { category: 'Content Writer', company: 'Baseball Savings', loc: 'Germany', title: 'Senior Technical Writer', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Writing', 'Tech', 'Blog'], salary: '$800/Hour' },
                { category: 'Content Writer', company: 'Medium', loc: 'Remote', title: 'Content Strategist', type: 'Contract', posted: 'Posted 2 days ago', desc: 'Help shape our editorial direction and manage a team of freelance writers.', tags: ['Strategy', 'SEO'], salary: '$60/Hour' },
                
                { category: 'Finance', company: 'Baseball Savings', loc: 'Denmark', title: 'Financial Analyst', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Finance', 'Excel', 'Data'], salary: '$500/Hour' },
                { category: 'Finance', company: 'Stripe', loc: 'New York', title: 'Investment Banker', type: 'Full Time', posted: 'Posted 5 days ago', desc: 'We are looking for an experienced investment banker to join our growing team.', tags: ['Banking', 'Finance'], salary: '$120k/Year' },
                
                { category: 'Human Resource', company: 'Bing Search', loc: 'Germany', title: 'HR Manager', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['HR', 'Recruiting', 'People'], salary: '$800/Hour' },
                { category: 'Human Resource', company: 'Amazon', loc: 'Seattle', title: 'Technical Recruiter', type: 'Full Time', posted: 'Posted 1 day ago', desc: 'Source and recruit top technical talent for our engineering teams.', tags: ['Recruiting', 'Tech'], salary: '$90k/Year' },
                
                { category: 'Management', company: 'Exela Movers', loc: 'New York, Germany', title: 'Product Manager', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Product', 'Agile', 'Strategy'], salary: '$800/Hour' },
                { category: 'Management', company: 'Microsoft', loc: 'Redmond', title: 'Engineering Manager', type: 'Full Time', posted: 'Posted 2 days ago', desc: 'Lead a team of engineers building next-generation cloud infrastructure.', tags: ['Leadership', 'Cloud'], salary: '$150k/Year' },
                
                { category: 'Market Research', company: 'Baseball Savings', loc: 'Australia', title: 'Market Research Analyst', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Research', 'Data'], salary: '$500/Hour' },
                { category: 'Market Research', company: 'Nielsen', loc: 'New York', title: 'Data Analyst', type: 'Full Time', posted: 'Posted 2 days ago', desc: 'Analyze market trends and consumer behavior data.', tags: ['Data', 'Analytics'], salary: '$80k/Year' },
                
                { category: 'Marketing & Sale', company: 'Wanderu', loc: 'London', title: 'Sales Executive', type: 'Full Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Sales', 'B2B'], salary: '$800/Hour' },
                { category: 'Marketing & Sale', company: 'HubSpot', loc: 'Remote', title: 'Marketing Manager', type: 'Full Time', posted: 'Posted 1 day ago', desc: 'Lead inbound marketing strategies and campaign execution.', tags: ['Marketing', 'Inbound'], salary: '$95k/Year' },
                
                { category: 'Retail & Products', company: 'Callaway Golf', loc: 'London', title: 'Retail Store Manager', type: 'Part Time', posted: 'Posted 4 days ago', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.', tags: ['Retail', 'Management'], salary: '$250/Hour' },
                { category: 'Retail & Products', company: 'Nike', loc: 'Berlin', title: 'Product Specialist', type: 'Full Time', posted: 'Posted 3 days ago', desc: 'Expert in sports retail products and customer experience.', tags: ['Retail', 'Sports'], salary: '$40k/Year' },
              ];
              const filtered = baseJobs.filter(job => job.category === activeCategory);
              // Ensure we showcase exactly 6 cards by repeating the filtered jobs
              const displayJobs = Array.from({ length: 6 }).map((_, i) => filtered[i % filtered.length] || baseJobs[0]);
              
              return displayJobs.map((job, i) => (
                <div key={i} className="flex flex-col bg-theme-black border border-theme-white/10 rounded-2xl p-6 hover:border-theme-yellow/50 transition-all group cursor-pointer">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-theme-white/5 border border-theme-white/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-theme-white/50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-theme-white text-base">{job.company}</h4>
                    <p className="text-theme-white/50 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {job.loc}
                    </p>
                  </div>
                </div>

                {/* Title & Meta */}
                <h3 className="font-bold text-lg text-theme-white mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-theme-white/50 text-xs mb-4">
                  <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.posted}</span>
                </div>

                {/* Description */}
                <p className="text-theme-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {job.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-theme-white/5 rounded-md text-theme-white/70 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-theme-white/10">
                  <span className="font-bold text-theme-yellow text-lg">{job.salary.split('/')[0]}<span className="text-theme-white/50 text-sm font-normal">/{job.salary.split('/')[1]}</span></span>
                  <Button 
                    size="sm" 
                    className={`border-transparent text-xs px-5 py-2.5 rounded-lg font-semibold ${
                      appliedJobs.includes(activeCategory + '-' + i) 
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                        : 'bg-theme-yellow text-black hover:bg-theme-yellow/90'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      const jobId = activeCategory + '-' + i;
                      if (!appliedJobs.includes(jobId)) {
                        setSelectedJobId(jobId);
                        setSelectedJobTitle(job.title);
                      }
                    }}
                  >
                    {appliedJobs.includes(activeCategory + '-' + i) ? (
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Applied</span>
                    ) : 'Apply Now'}
                  </Button>
                </div>
              </div>
            )); })()}
          </div>
        </div>
      </section>

      {/* Hiring CTA Banner */}
      <section className="py-24 border-t border-theme-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-theme-white/5 border border-theme-white/10 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Left side: WE ARE HIRING */}
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 z-10 text-center md:text-left">
              <div>
                <p className="text-theme-white/60 font-semibold tracking-wider text-sm md:text-base uppercase mb-1">We Are</p>
                <h2 className="text-5xl md:text-6xl font-black text-theme-white tracking-tight">HIRING</h2>
              </div>
              <div className="hidden md:block w-px h-20 bg-theme-white/10"></div>
              <div>
                <p className="text-theme-white/70 text-lg md:text-xl lg:text-2xl font-medium max-w-sm">
                  Let's Work Together & Explore Opportunities
                </p>
              </div>
            </div>

            {/* Right side: Button */}
            <div className="z-10 shrink-0">
              <Button size="lg" className="bg-theme-yellow text-black hover:bg-theme-yellow/90 flex items-center gap-2 px-8 py-6 text-lg rounded-xl cursor-pointer" onClick={() => {
                setSelectedJobId('general-application');
                setSelectedJobTitle('General Application');
              }}>
                <CheckCircle2 className="w-6 h-6" />
                {appliedJobs.includes('general-application') ? 'Applied' : 'Apply Now'}
              </Button>
            </div>

            {/* Background decoration to replace illustrations */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 text-theme-yellow/5 pointer-events-none">
              <Users className="w-64 h-64" />
            </div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 text-theme-white/5 pointer-events-none">
              <Briefcase className="w-64 h-64" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJobId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-theme-black border border-theme-white/10 rounded-2xl p-6 md:p-8 w-full max-w-md relative overflow-hidden shadow-2xl"
          >
            <button onClick={() => setSelectedJobId(null)} className="absolute top-4 right-4 text-theme-white/50 hover:text-theme-white cursor-pointer z-10 p-2">
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold text-theme-white mb-2">Apply for Role</h3>
            <p className="text-theme-white/70 mb-6 text-sm">You are applying for <br/><span className="font-bold text-theme-yellow text-base">{selectedJobTitle}</span></p>
            
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              setAppliedJobs(prev => [...prev, selectedJobId]);
              setSelectedJobId(null);
            }} className="space-y-4 relative z-10">
              <div>
                <label className="block text-theme-white/70 text-sm font-medium mb-1">Full Name</label>
                <input required type="text" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-lg px-4 py-2.5 text-theme-white focus:outline-none focus:border-theme-yellow/50 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-theme-white/70 text-sm font-medium mb-1">Email Address</label>
                <input required type="email" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-lg px-4 py-2.5 text-theme-white focus:outline-none focus:border-theme-yellow/50 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-theme-white/70 text-sm font-medium mb-1">Resume (URL)</label>
                <input required type="url" className="w-full bg-theme-white/5 border border-theme-white/10 rounded-lg px-4 py-2.5 text-theme-white focus:outline-none focus:border-theme-yellow/50 transition-colors" placeholder="https://linkedin.com/in/johndoe" />
              </div>
              <div>
                <label className="block text-theme-white/70 text-sm font-medium mb-1">Cover Letter (Optional)</label>
                <textarea className="w-full bg-theme-white/5 border border-theme-white/10 rounded-lg px-4 py-2.5 text-theme-white focus:outline-none focus:border-theme-yellow/50 transition-colors min-h-[100px]" placeholder="Tell us why you're a good fit..."></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-theme-yellow text-black hover:bg-theme-yellow/90 font-bold py-3 mt-6 cursor-pointer">
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
