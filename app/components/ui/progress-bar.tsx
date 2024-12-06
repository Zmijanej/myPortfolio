'use client'
import { motion,useScroll, useSpring } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });
  return (
    <motion.div 
      className="absolute bottom-0 left-6 right-6 origin-left z-[100]"
      
      style={{ 
        scaleX,
        height: '1px',
        background: '#ffffff',
        boxShadow: '0 0 2px #ffffff',
        animation: 'neonPulse 1s infinite',
      }}
    />
  )
}

export default ProgressBar