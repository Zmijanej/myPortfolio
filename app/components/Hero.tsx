'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';



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
    className="relative" >

      <div className="flex flex-col items-center z-10 space-y-6">
        <div className="rounded-full border-2 border-gray-text text-[#48cfcb] text-base md:text-2xl lg:text-3xl font-thin px-6 top-6 opacity-100">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa, doloremque quisquam obcaecati, quia sapiente fugit animi voluptates eaque quos impedit nostrum hic ducimus error. Tempora officiis odit iusto officia?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga nisi distinctio quidem, modi placeat, eligendi nam a ea rem eum deleniti, neque repellat dicta facilis quam alias. Quibusdam, vero!</p>
          JUNIOR
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1, y: [100, 0] }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-5xl lg:text-7xl xl:text-8xl [text-shadow:_0_4px_8px_#48cfcb] pb-10"
        >
          FRONT-END DEVELOPER
        </motion.h1>
      </div>
      <div className="min-h-fit px-6 py-36 relative z-10">
        <h2 className="font-bold leading-loose text-lg md:text-xl lg:text-2xl py-12">
          Hi, I&apos;m <span className="text-[#48cfcb]">Brend</span> and I&apos;m a front-end developer
          crafting seamless user experiences, responsive interfaces and scalable web solutions based in
          the lively and ever-evolving{' '}
          <span className="text-red-700">Tirana, Albania</span>.
        </h2>
      </div>

    </motion.section>
  );
};

export default Hero;