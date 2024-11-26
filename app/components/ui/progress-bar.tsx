'use client'
import { motion,useScroll } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {scrollYProgress } = useScroll();
  return (
    <motion.div className="progress-bar bg-white fixed top-0 left-0 right-0 h-2.5 origin-left z-1000" style={{ scaleX:scrollYProgress }} />

  )
}

export default ProgressBar