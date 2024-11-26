'use client'
import { motion,useScroll } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {scrollYProgress } = useScroll();
  return (
    // <motion.div className="progress-bar bg-white fixed top-0 left-0 right-0 h-2.5 origin-left z-50" style={{ scaleX:scrollYProgress }} />
    <motion.div 
      className="fixed top-0 left-0 right-0 h-2.5 origin-left z-50"
      style={{ 
        scaleX: scrollYProgress,
        background: '#ffffff',
        boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff',
        animation: 'neonPulse 2s ease-in-out infinite alternate'
      }}
    />
  )
}

export default ProgressBar