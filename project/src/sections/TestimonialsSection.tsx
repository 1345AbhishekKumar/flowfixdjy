import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'CreativeHub',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "FlowFix transformed our marketing team's workflow. We're now saving 15 hours per week on campaign management, and our launch cycles are 30% faster.",
    stars: 5
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Product Manager',
    company: 'TechSolutions Inc.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "I've tried every productivity tool out there, but nothing compares to FlowFix. The AI actually understands my workflow and makes meaningful improvements.",
    stars: 5
  },
  {
    id: 3,
    name: 'Elena Ramirez',
    role: 'Operations Lead',
    company: 'Global Logistics',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "Our operations became 40% more efficient after implementing FlowFix. The automated workflow optimization has eliminated countless bottlenecks.",
    stars: 5
  },
  {
    id: 4,
    name: 'Michael Reynolds',
    role: 'Creative Director',
    company: 'Design Collective',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "FlowFix helped our creative team stay focused on design rather than project management. It's like having an invisible assistant that keeps everything flowing.",
    stars: 5
  },
  {
    id: 5,
    name: 'Jessica Taylor',
    role: 'Freelance Consultant',
    company: 'Self-employed',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "As a solo consultant managing multiple clients, FlowFix has been a game-changer. My productivity has doubled, and I can take on more projects without feeling overwhelmed.",
    stars: 5
  },
  {
    id: 6,
    name: 'Robert Nguyen',
    role: 'Engineering Lead',
    company: 'Innovate Systems',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "The integration capabilities are impressive. FlowFix connected all our development tools into one coherent workflow, reducing deployment time by 35%.",
    stars: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1)_0,rgba(15,23,42,0)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
        
        {/* Star field background */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6"
          >
            <span>Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            Trusted by <span className="text-gradient">Forward-Thinking</span> Teams
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            See how professionals across industries are transforming their workflows with FlowFix.
          </motion.p>
        </div>

        {/* Testimonial Constellation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    stars: number;
  };
  index: number;
  isInView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isInView }) => {
  const delay = 0.2 + index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="glass-card relative group"
    >
      {/* Decorative elements */}
      <div className="absolute -top-3 -right-3 text-indigo-400 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
        <Quote className="w-10 h-10" />
      </div>
      
      <div className="p-6 md:p-8 relative">
        {/* Stars */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-600'}`}
              fill={i < testimonial.stars ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors duration-300">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
      
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl bg-indigo-500/5 animate-pulse-slow"></div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;