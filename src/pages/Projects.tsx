import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const categories = ['All', 'Service', 'E-commerce', 'Health & Wellness', 'Entertainment', 'Art & Design', 'Automotive', 'Education', 'Technology'];

type Project = {
  id: string;
  name: string;
  category: string;
  desc: string;
  tags: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  { id: '1', name: 'Personal Stylist', category: 'Service', desc: 'A sleek portfolio and booking platform for personal styling services.', tags: ['Styling', 'Portfolio', 'Booking'], link: 'https://personal-stylist-five.vercel.app/', image: 'https://picsum.photos/seed/stylist/800/600' },
  { id: '2', name: 'Therapeutic Massage', category: 'Health & Wellness', desc: 'A serene platform for a therapeutic massage and bodywork center.', tags: ['Wellness', 'Booking', 'Services'], link: 'https://therapeutic-massage-bodywork-center.vercel.app/', image: 'https://picsum.photos/seed/massage/800/600' },
  { id: '3', name: 'Construction Materials', category: 'E-commerce', desc: 'Online supplier for building materials and construction tools.', tags: ['B2B', 'Store', 'Materials'], link: 'https://building-materials-construction-sup.vercel.app/', image: 'https://picsum.photos/seed/construction/800/600' },
  { id: '4', name: 'Hazel Gym', category: 'Health & Wellness', desc: 'A high-energy website for a modern fitness center.', tags: ['Fitness', 'Memberships', 'Classes'], link: 'https://gymwebsite-hazel.vercel.app/', image: 'https://picsum.photos/seed/gym/800/600' },
  { id: '5', name: 'Silent Disco Rentals', category: 'Entertainment', desc: 'A rental platform for silent disco headphone parties.', tags: ['Events', 'Rentals', 'Party'], link: 'https://silent-disco-headphone-party-rental.vercel.app/', image: 'https://picsum.photos/seed/disco/800/600' },
  { id: '6', name: 'Rug Weaving Atelier', category: 'Art & Design', desc: 'Showcase and store for custom, handcrafted rugs and carpets.', tags: ['Crafts', 'Atelier', 'Store'], link: 'https://custom-rug-carpet-weaving-atelier.vercel.app/', image: 'https://picsum.photos/seed/rug/800/600' },
  { id: '7', name: 'Pipe & Tobacco', category: 'E-commerce', desc: 'An artisanal shop for handcrafted pipes and tobacco accessories.', tags: ['Artisanal', 'Shop', 'Craft'], link: 'https://handcrafted-pipe-tobacco-accessory.vercel.app/', image: 'https://picsum.photos/seed/pipe/800/600' },
  { id: '8', name: 'Diesel Truck Repair', category: 'Automotive', desc: 'Service site for mobile diesel truck repair and fleet maintenance.', tags: ['Mechanic', 'Fleet', 'Service'], link: 'https://mobile-diesel-truck-repair-fleet-se.vercel.app/', image: 'https://picsum.photos/seed/truck/800/600' },
  { id: '9', name: 'Candle Making Workshop', category: 'Education', desc: 'Registration platform for hand-poured candle making classes.', tags: ['Workshop', 'Crafts', 'Events'], link: 'https://hand-poured-candle-making-workshop.vercel.app/', image: 'https://picsum.photos/seed/candle/800/600' },
  { id: '10', name: 'Online Coaching Platform', category: 'Education', desc: 'Digital platform for competitive online coaching.', tags: ['Coaching', 'LMS', 'Video'], link: 'https://online-coaching-platform-for-compet.vercel.app/', image: 'https://picsum.photos/seed/coach/800/600' },
  { id: '11', name: 'Health Clinic', category: 'Health & Wellness', desc: 'Professional website for a local health clinic.', tags: ['Medical', 'Care', 'Appointments'], link: 'https://health-clinic-website-ten.vercel.app/', image: 'https://picsum.photos/seed/clinic/800/600' },
  { id: '12', name: 'Mobile Auto Detailing', category: 'Automotive', desc: 'Service platform for premium mobile auto detailing and ceramic coating.', tags: ['Detailing', 'Cars', 'Service'], link: 'https://mobile-auto-detailing-ceramic-coati.vercel.app/', image: 'https://picsum.photos/seed/auto/800/600' },
  { id: '13', name: 'Poetry Workshop', category: 'Education', desc: 'Creative writing and poetry workshop platform.', tags: ['Writing', 'Classes', 'Literature'], link: 'https://creative-writing-poetry-workshop-pl.vercel.app/', image: 'https://picsum.photos/seed/poetry/800/600' },
  { id: '14', name: 'Kids Coding Robotics', category: 'Education', desc: 'Educational site for kids coding and robotics workshops.', tags: ['STEM', 'Kids', 'Robotics'], link: 'https://kids-coding-robotics-workshop.vercel.app/', image: 'https://picsum.photos/seed/robotics/800/600' },
  { id: '15', name: 'Art Gallery', category: 'Art & Design', desc: 'An elegant digital gallery space for contemporary art.', tags: ['Gallery', 'Exhibitions', 'Art'], link: 'https://art-gallery-six-pi.vercel.app/', image: 'https://picsum.photos/seed/gallery/800/600' },
  { id: '16', name: 'Wedding Invitations', category: 'Art & Design', desc: 'Design studio offering bespoke wedding invitations.', tags: ['Weddings', 'Design', 'Print'], link: 'https://wedding-invitation-design-studio.vercel.app/', image: 'https://picsum.photos/seed/wedding/800/600' },
  { id: '17', name: 'Therapeutic Cuddlist', category: 'Health & Wellness', desc: 'Professional services for therapeutic touch and cuddling.', tags: ['Therapy', 'Wellness', 'Care'], link: 'https://professional-cuddlist-therapeutic-t.vercel.app/', image: 'https://picsum.photos/seed/therapy/800/600' },
  { id: '18', name: 'Groww Creator', category: 'Technology', desc: 'Platform for creators to grow and manage their audience.', tags: ['Creators', 'Tools', 'Growth'], link: 'https://groww-creator.vercel.app/', image: 'https://picsum.photos/seed/creator/800/600' },
  { id: '19', name: 'Bookshop & Stationery', category: 'E-commerce', desc: 'An inviting online bookstore and stationery shop.', tags: ['Books', 'Stationery', 'Retail'], link: 'https://bookshop-stationery-store.vercel.app/', image: 'https://picsum.photos/seed/books/800/600' },
  { id: '20', name: 'Smart Home Solutions', category: 'Technology', desc: 'Modern smart home automation services and products.', tags: ['Smart Home', 'IoT', 'Automation'], link: 'https://smart-home-gules-seven.vercel.app/', image: 'https://picsum.photos/seed/smarthome/800/600' },
  { id: '21', name: 'B2B Sowniya Project', category: 'Technology', desc: 'B2B platform for seamless business operations and connectivity.', tags: ['B2B', 'Platform', 'Enterprise'], link: 'https://b2-b-sowniya-project.vercel.app/', image: 'https://picsum.photos/seed/b2b/800/600' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-theme-black/40 via-theme-black/80 to-theme-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Our Work" 
              subtitle="Explore our collection of concept projects and digital product experiments." 
              centered 
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
          <div className="flex items-center gap-2 shrink-0 mr-4 text-theme-white/50">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-theme-yellow text-theme-white'
                  : 'bg-theme-white/5 text-theme-white/70 hover:bg-theme-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Card className="h-full flex flex-col p-0 overflow-hidden group">
                  <div className="h-56 bg-theme-white/5 relative overflow-hidden group">
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-theme-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-theme-white/10 text-white z-10">
                      Live Project
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-theme-yellow text-sm mb-2 font-medium">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                    <p className="text-theme-white/60 text-sm mb-6 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-theme-white/5 rounded text-xs text-theme-white/80 border border-theme-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                      <Button variant="outline" className="w-full group-hover:bg-theme-white/10 transition-colors">
                        View Live Site
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-theme-white/50">
            No projects found in this category.
          </div>
        )}
      </section>
    </div>
  );
}
