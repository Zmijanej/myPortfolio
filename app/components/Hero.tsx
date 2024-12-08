'use client'
import { motion} from 'framer-motion';
import Clock from './Clock';
import Link from 'next/link';
import Button from './ui/button';
import DescText from './ui/descTextAnim';



const Hero = () => {
  



  return (
    <section 
      style={{ 
        
      }}
      className="relative px-4 md:px-12 lg:px-14 py-0 md:py-12" 
    >
      
      <div className='flex flex-col md:flex-row w-full  min-h-screen items-center space-y-6 md:space-y-0'>
      <div className='flex sm:hidden mb-4 md:mb-6 justify-center md:justify-start'>
            <Clock/>
          </div>
        {/* Left Column - Title */}
        <div className='w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0'> 
        
          <h3 className='cinzel_deco font-bold leading-loose text-md md:text-xl lg:text-2xl '>
            Come and
          </h3>
          <motion.h1 
          initial={{ opacity: 0, y: 50, rotate:0 }} 
          animate={{ opacity: 1, y: 0, rotate:0, transition: { duration: 0.5, ease: ["easeIn", "easeOut"]} }}
          className='text-6xl md:text-7xl lg:text-8xl uppercase	'>
            <DescText
            className= "text-6xl md:text-7xl lg:text-8xl uppercase justify-center sm:justify-start"
            text = "Explore Albania,"/>
            
            <div className='cinzel_deco font-bold leading-loose text-xl text-[#ebb87f] flex justify-center	'>
              <br /> Your way
            </div>  
          </motion.h1>
        </div>

        {/* Right Column - About & Clock */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          {/* Clock Component */}
          <div className='hidden sm:flex mb-4 md:mb-6 justify-center md:justify-start'>
            <Clock/>
          </div>

          {/* About Text */}
          
          <motion.span
  
        >
         <DescText 
         className='text-md md:text-lg lg:text-xl'
         text = " Discover the best of Albania—hidden gems, epic adventures, and exclusive deals—all in one place.Start exploring with ExploreAlb now."/>
        </motion.span>
        
        

          <motion.div 
          initial={{ opacity: 0, y: 50, rotate: 0 }} 
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotate: 0, 
            transition: { 
              duration: 0.5, 
              delay: 0.5, 
              ease: ["easeIn", "easeOut"]
            } 
          }}
          className='flex py-4 md:py-6 justify-end'>
            <Link href="#About" className="">
              <Button text='Plan your trip'/>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;