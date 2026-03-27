import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrainCog, LineChart, Zap, Sparkles, LayoutGrid, RefreshCw, Workflow, GitMerge } from 'lucide-react';

const features = [
  {
    icon: <BrainCog />,
    title: 'AI Pattern Recognition',
    description: 'Our AI engine identifies your unique work patterns and suggests optimizations tailored to your style.'
  },
  {
    icon: <LineChart />,
    title: 'Productivity Analytics',
    description: 'Gain insights into your work habits with detailed analytics that pinpoint inefficiencies and bottlenecks.'
  },
  {
    icon: <Zap />,
    title: 'Smart Automation',
    description: 'Eliminate repetitive tasks with intelligent automation that learns and adapts to your workflow needs.'
  },
  {
    icon: <Sparkles />,
    title: 'Contextual Suggestions',
    description: 'Receive real-time recommendations for workflow improvements based on your current activities.'
  },
  {
    icon: <LayoutGrid />,
    title: 'Unified Workspace',
    description: 'Connect all your tools and applications in one seamless environment to eliminate context switching.'
  },
  {
    icon: <RefreshCw />,
    title: 'Continuous Optimization',
    description: 'Your workflows automatically evolve and improve as the AI learns from your interactions and feedback.'
  },
  {
    icon: <Workflow />,
    title: 'Custom Workflow Templates',
    description: 'Create and share optimized workflow templates with your team to standardize best practices.'
  },
  {
    icon: <GitMerge />,
    title: 'Team Synchronization',
    description: 'Coordinate workflows across teams with smart handoffs and dependency management to eliminate delays.'
  }
];

const FeaturesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-950 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0,rgba(15,23,42,0)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-indigo-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6"
          >
            <span>Powerful Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            Everything You Need to <span className="text-gradient">Optimize Your Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            FlowFix combines advanced AI with intuitive design to transform how you work.
          </motion.p>
        </div>

        {/* 3D Feature Pods */}
        <div className="relative py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="glass-card relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative p-6 md:p-8">
        {/* Icon with glow effect */}
        <div className="w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
          >
            {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
          </motion.div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors duration-300"></div>
    </motion.div>
  );
};

export default FeaturesSection;