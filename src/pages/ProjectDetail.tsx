import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mock data to replace backend fetch for demo
const projectData: Record<string, any> = {
  'novacart': { name: 'NovaCart', category: 'E-commerce', tags: ['React', 'Tailwind', 'Node.js'] },
  'finova': { name: 'Finova', category: 'Dashboard', tags: ['TypeScript', 'React', 'D3.js'] },
  'medora': { name: 'Medora', category: 'Healthcare', tags: ['React', 'PostgreSQL', 'Express'] },
  'flowdesk': { name: 'FlowDesk', category: 'SaaS', tags: ['Next.js', 'Tailwind', 'Prisma'] },
  'travelnest': { name: 'TravelNest', category: 'Travel', tags: ['React', 'Mapbox', 'Node.js'] },
  'educore': { name: 'EduCore', category: 'Education', tags: ['React', 'GraphQL', 'PostgreSQL'] },
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects"><Button>Back to Projects</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link to="/projects" className="inline-flex items-center gap-2 text-theme-white/60 hover:text-theme-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-block px-3 py-1 bg-theme-white/10 rounded-full text-xs font-medium border border-theme-white/20 mb-4 text-theme-yellow">
              {project.category} Concept
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.name}</h1>
          </div>
          <Button className="gap-2 shrink-0" variant="outline">
            View Live Demo <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="w-full aspect-video bg-theme-white/5 rounded-2xl mb-16 border border-theme-white/10 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 flex items-center justify-center text-theme-white/10 font-bold text-9xl tracking-tighter">
              {project.name.substring(0, 2).toUpperCase()}
           </div>
           <span className="absolute bottom-4 right-4 text-theme-white/30 text-sm">Concept Mockup</span>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-theme-white/70 text-lg leading-relaxed">
                This project represents a fictional concept developed by Ignite Nova Technologies to demonstrate modern UI/UX principles and robust engineering architecture. It highlights our ability to build scalable, secure, and intuitive digital products.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-theme-white/70 text-lg leading-relaxed">
                The primary challenge was to design a platform that balances a rich feature set with an uncluttered, straightforward user interface. We aimed to ensure high performance while maintaining an aesthetically premium feel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-3">
                {['Responsive fluid layout', 'Dark mode integration', 'Real-time data synchronization', 'Secure authentication flow'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-theme-white/80">
                    <CheckCircle2 className="w-5 h-5 text-theme-yellow" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="bg-theme-black border border-theme-white/10 p-6 rounded-2xl sticky top-28">
              <h3 className="font-bold text-lg mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1.5 bg-theme-white/5 rounded-lg text-sm text-theme-white border border-theme-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-bold text-lg mb-4">Expected Outcome</h3>
              <p className="text-theme-white/70 text-sm leading-relaxed mb-6">
                A highly performant architecture designed to support a growing user base, with zero compromise on user experience.
              </p>
              
              <div className="text-xs text-theme-white/40 italic p-3 bg-theme-white/5 rounded">
                Note: This is a demo project to showcase Ignite Nova Technologies capabilities. No real client data is represented.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
