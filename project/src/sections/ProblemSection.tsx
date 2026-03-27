import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { AlertTriangle, Clock, Puzzle, XCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0,rgba(255,255,255,0)_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            The <span className="text-red-500">Chaos</span> of Modern Work
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Professionals waste 40% of their time on inefficient workflows, context switching, and repetitive tasks that could be automated.
          </motion.p>
        </motion.div>
        
        <div className="relative mt-20">
          {/* 3D Chaos Cube */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 md:w-64 md:h-64"
          >
            <ChaosFragments />
          </motion.div>
          
          {/* Problem cards */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ProblemCard
              icon={<Clock className="h-8 w-8 text-red-500" />}
              title="Time Waste"
              description="The average professional spends 28 hours per week on administrative tasks that add no value to core work."
              delay={0.1}
              variants={itemVariants}
            />
            
            <div className="hidden md:block">
              {/* Spacer for the 3D cube */}
              <div className="h-full"></div>
            </div>
            
            <ProblemCard
              icon={<XCircle className="h-8 w-8 text-red-500" />}
              title="Context Switching"
              description="Employees switch between an average of 35 applications more than 1,100 times every day, destroying productivity."
              delay={0.2}
              variants={itemVariants}
            />
            
            <ProblemCard
              icon={<Puzzle className="h-8 w-8 text-red-500" />}
              title="Disconnected Tools"
              description="89% of companies have fragmented workflows across departments with incompatible systems and data silos."
              delay={0.3}
              variants={itemVariants}
            />
            
            <div className="block md:hidden">
              {/* Spacer for mobile view */}
              <div className="h-80"></div>
            </div>
            
            <ProblemCard
              icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
              title="Error-Prone Processes"
              description="Manual data entry and repetitive tasks lead to a 42% error rate, causing rework and missed deadlines."
              delay={0.4}
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  variants: any;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description, delay, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="glass-card relative overflow-hidden p-6 md:p-8 backdrop-blur-lg"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/10 opacity-50"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const ChaosFragments: React.FC = () => {
  const fragments = Array.from({ length: 8 }).map((_, i) => {
    const size = 20 + Math.random() * 20;
    const position = i % 2 === 0 ? 1 : -1;
    
    return (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-br from-red-600/80 to-orange-600/80 rounded-md shadow-lg"
        style={{
          width: size,
          height: size,
          left: `calc(50% + ${position * (20 + Math.random() * 60)}px)`,
          top: `calc(50% + ${position * (20 + Math.random() * 60)}px)`,
        }}
        initial={{
          x: position * 100,
          y: position * 100,
          opacity: 0,
          rotate: position * 45,
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 0.8,
          rotate: 0,
          transition: {
            duration: 2,
            delay: 1 + i * 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          },
        }}
      />
    );
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="w-32 h-32 bg-gradient-to-br from-red-600/80 to-orange-600/80 rounded-lg shadow-lg shadow-red-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 3, duration: 1 },
        }}
      />
      {fragments}
    </div>
  );
};

export default ProblemSection;