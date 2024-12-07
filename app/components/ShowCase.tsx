'use client'
import { motion } from 'framer-motion';
import React from 'react'

const ShowCase = () => {
 
  return (
    <motion.div 
  className="flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }}
>
  <div className="w-24 h-24 bg-red-400 rounded-full"></div>
</motion.div>
    
  )
}

export default ShowCase