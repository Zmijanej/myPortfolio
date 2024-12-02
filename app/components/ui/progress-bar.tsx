'use client'
import { motion,useScroll } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {scrollYProgress } = useScroll();
  return (
    // <motion.div className="progress-bar bg-white fixed top-0 left-0 right-0 h-2.5 origin-left z-50" style={{ scaleX:scrollYProgress }} />
    <motion.div 
      className="fixed top-0 left-0 right-0 h-2.5 origin-left z-[100]"
      style={{ 
        scaleX: scrollYProgress,
        background: '#48cfcb',
        boxShadow: '0 0 10px #48cfcb, 0 0 20px #48cfcb, 0 0 40px #48cfcb',
        animation: 'neonPulse 2s ease-in-out infinite alternate'
      }}
    />
  )
}

export default ProgressBar