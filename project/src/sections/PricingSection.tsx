import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and freelancers',
    features: [
      'AI workflow analysis',
      'Basic automation tools',
      'Personal dashboard',
      '2 workflow templates',
      'Email support'
    ],
    color: 'from-indigo-600/20 to-indigo-800/20',
    borderColor: 'border-indigo-500/30 group-hover:border-indigo-500/60',
    buttonVariant: 'secondary' as const
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for small teams and growing businesses',
    features: [
      'Everything in Starter',
      'Advanced AI optimizations',
      'Custom workflow builder',
      'Unlimited templates',
      'Integration with 20+ tools',
      'Priority support'
    ],
    color: 'from-indigo-600/30 to-violet-600/30',
    borderColor: 'border-indigo-400/40 group-hover:border-indigo-400/70',
    highlight: true,
    buttonVariant: 'primary' as const
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For organizations with complex workflows',
    features: [
      'Everything in Professional',
      'Team collaboration features',
      'Advanced analytics dashboard',
      'Dedicated account manager',
      'Custom integrations',
      'Training sessions',
      'SLA guarantees'
    ],
    color: 'from-violet-600/20 to-purple-800/20',
    borderColor: 'border-violet-500/30 group-hover:border-violet-500/60',
    buttonVariant: 'secondary' as const
  }
];

const PricingSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0,rgba(15,23,42,0)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6"
          >
            <span>Pricing Plans</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            <span className="text-gradient">Invest</span> in Your Productivity
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Need a custom solution for your organization?</p>
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
            Contact our sales team
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: {
    name: string;
    price: number;
    description: string;
    features: string[];
    color: string;
    borderColor: string;
    highlight?: boolean;
    buttonVariant: 'primary' | 'secondary';
  };
  index: number;
  isInView: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index, isInView }) => {
  const delay = 0.3 + index * 0.2;
  const offset = plan.highlight ? 0 : 20;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: offset } : {}}
      transition={{ duration: 0.6, delay }}
      className={`glass-card relative group ${plan.highlight ? 'md:-mt-8 md:mb-8' : ''}`}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${plan.color} opacity-30 rounded-xl transition-opacity duration-300 group-hover:opacity-50`}></div>
      
      {/* Border */}
      <div className={`absolute inset-0 rounded-xl border ${plan.borderColor} transition-colors duration-300`}></div>
      
      {/* Content */}
      <div className="p-6 md:p-8 relative">
        {plan.highlight && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Most Popular
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
        <p className="text-gray-400 mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${plan.price}</span>
          <span className="text-gray-400">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          href="#signup"
          variant={plan.buttonVariant}
          className="w-full justify-center"
          icon={<ArrowRight className="h-5 w-5" />}
        >
          Get Started
        </Button>
      </div>
      
      {/* Highlight glow effect */}
      {plan.highlight && (
        <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
      )}
    </motion.div>
  );
};

export default PricingSection;