'use client'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { useScrollContext } from './ScrollContext';

const Background:React.FC = () => {
  const { scrollYProgress } = useScrollContext();
  const scrollYProgressMotionValue = useMotionValue(scrollYProgress);
  const backgroundOpacity = useTransform(
    scrollYProgressMotionValue,
    [0.65, 0.75, 0.80, 0.85, 0.90],
    [0.55, 0.45, 0.35, 0.25, 0]
  );

  return (
    <>
      <motion.div 
        style={{ 
        backgroundColor: "#131313",
        opacity: backgroundOpacity ,
        }}
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('/alb2.jpg')] bg-fixed">
      
      </motion.div>
      <div className='fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed bg-[#131313] -z-10'></div>
    </>
  )
}

export default Background

// ref={ref}
//       style={{ 
//         backgroundColor: "#131313",
//         opacity: backgroundOpacity ,
//         backgroundImage: "url('/alb2.jpg')"
//       }}