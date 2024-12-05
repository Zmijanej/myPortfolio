'use client'
import { motion,useScroll, useSpring } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 origin-left z-[100]"
      style={{ 
        scaleX,
        height: '0.25rem',
        background: '#ffffff',
        boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff',
        animation: 'neonPulse 2s infinite alternate'
      }}
    />
  )
}

export default ProgressBar