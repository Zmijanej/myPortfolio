'use client'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import React, { RefObject, useRef } from 'react'


interface BackgroundProps {
  footerRef: RefObject<HTMLDivElement>;
}
const Background:React.FC<BackgroundProps> = ({footerRef}) => {
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2],
    [0.45, 0.35, 0.25, 0.15, 0]
  );

  const { scrollYProgress: footerScrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"], // Adjust scroll offsets as needed
  });

  const footerFadeIn = useTransform(
    footerScrollYProgress,
    [1, 0.95, 0.90, 0.85, 0.80],
    [0.45, 0.35, 0.25, 0.15, 0]
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
      
      <motion.div
        style={{
          opacity: footerFadeIn,
          backgroundColor: "#131313",
        }}
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('/alb2.jpg')] bg-fixed"
      > 
      </motion.div>
      <div className='fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed bg-[#131313] -z-10'></div> 
    </>
  )
}

export default Background

