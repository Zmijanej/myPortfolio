'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState,useEffect } from 'react';
import Clock from './Clock';



const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.45, 0.50, 0.55, 0.60], // Scroll progress stages
    [0.90, 0.85, 0.80, 0.75,0.70] // Corresponding opacity values
  );



  return (
    <motion.section 
      ref={ref}
      style={{ 
        opacity: backgroundOpacity 
      }}
      className="relative px-4 md:px-12 lg:px-14 py-0 md:py-12" 
    >
      <div className='flex flex-col md:flex-row w-full  min-h-screen items-center space-y-6 md:space-y-0'>
      <div className='flex sm:hidden mb-4 md:mb-6 justify-center md:justify-start'>
            <Clock/>
          </div>
        {/* Left Column - Title */}
        <div className='w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0'> 
          <h3 className='cinzel_deco font-bold leading-loose text-md md:text-xl lg:text-2xl pb-2 md:pb-4'>
            Junior
          </h3>
          <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight uppercase	'>
            Front-End<br/>Developer
          </h1>
        </div>

        {/* Right Column - About & Clock */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          {/* Clock Component */}
          <div className='hidden sm:flex mb-4 md:mb-6 justify-center md:justify-start'>
            <Clock/>
          </div>

          {/* About Text */}
          <h2 className="text-base md:text-lg lg:text-xl leading-relaxed md:indent-8">
            I am a developer and aspiring entrepreneur based in <span className="text-red-700">Tirana, Albania</span> with a passion for crafting intuitive digital experiences. I love clean, functional design and aim to make technology more accessible. In my free time, you&apos;ll find me immersed in basketball or video games, combining creativity and strategy on and off the court.
          </h2>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;