import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight, BrainCircuit } from 'lucide-react';
import Button from '../components/Button';

const SolutionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-950">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/10 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-radial from-cyan-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 3D Holographic Workflow */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full border border-indigo-500/20 animate-spin-slow"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-cyan-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.path
                      d="M50,20 L75,35 L75,65 L50,80 L25,65 L25,35 Z"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M50,20 L50,80"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.path
                      d="M25,35 L75,65"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    <motion.path
                      d="M75,35 L25,65"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1.4 }}
                    />
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Workflow nodes */}
                  {[
                    { id: 1, x: 50, y: 20, color: 'from-indigo-500 to-violet-500' },
                    { id: 2, x: 75, y: 35, color: 'from-blue-500 to-indigo-500' },
                    { id: 3, x: 75, y: 65, color: 'from-cyan-500 to-blue-500' },
                    { id: 4, x: 50, y: 80, color: 'from-teal-500 to-cyan-500' },
                    { id: 5, x: 25, y: 65, color: 'from-emerald-500 to-teal-500' },
                    { id: 6, x: 25, y: 35, color: 'from-violet-500 to-purple-500' },
                  ].map((node) => (
                    <motion.div
                      key={node.id}
                      className={`absolute w-10 h-10 bg-gradient-to-br ${node.color} rounded-full flex items-center justify-center shadow-lg`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + node.id * 0.15 }}
                      whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' }}
                    >
                      <span className="text-white font-bold">{node.id}</span>
                    </motion.div>
                  ))}
                  
                  {/* Center node with brain icon */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
                  >
                    <BrainCircuit className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
                <span>The Solution</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                Enter the <span className="text-gradient">Flow State</span>
              </h2>
              
              <p className="text-xl text-gray-300">
                FlowFix analyzes your work patterns, identifies bottlenecks, and automatically creates optimized workflows with AI-powered task automation.
              </p>
              
              <div className="space-y-4 mt-8">
                {[
                  "Automated workflow optimization based on your unique patterns",
                  "Smart task prioritization that adapts to your working style",
                  "Seamless integration with your existing tools and platforms",
                  "AI-powered suggestions to eliminate repetitive work"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-200">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              >
                <Button
                  href="#demo"
                  variant="primary"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;