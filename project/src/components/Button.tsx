import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  icon,
  iconPosition = 'right',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-lg hover:shadow-indigo-500/20 hover:shadow-xl',
    secondary: 'bg-gray-800 hover:bg-gray-700 border border-indigo-500/30 text-white hover:border-indigo-500/60',
    outline: 'bg-transparent border border-gray-400 hover:border-white text-gray-300 hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
    },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;