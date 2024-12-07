'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressBar from './ui/progress-bar'


const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

const ResponsiveNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when pathname changes
  useEffect(() => {
  setIsMenuOpen(false);
}, [pathname]);


  // Navigation Links Component (for reusability)
  const NavLinks = ({ mobile = false }) => (
    <>
      {[
        { name: 'Selected Work', route: '/#SelectedWork' },
        { name: 'Resume', route: '/resume' },
        { name: 'Get in Touch', route: '#Footer' }
      ].map(({ name, route }) => (
        <Link 
          key={name} 
          href={route}
          onClick={() => setIsMenuOpen(false)}
          className={`
            text-sm uppercase tracking-wider 
            transition-all duration-300 text-white
            ${mobile 
              ? 'block py-4 border-b border-opacity-10 backdrop-blur-sm' 
              : 'hidden md:block'}
          `}
        >
          {name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <motion.nav 
      initial={{ opacity: 0,y: "-50%" }}
      animate={{
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: {
          delay: 0.7,
          duration: 0.3,
          ease: "easeIn"
        }
      }}
        className={`
          sticky max-w-full top-0 flex justify-between items-center  backdrop-blur-sm
          p-4 transition-colors duration-300 z-[110]
          whitespace-nowrap
        `}
        id='Top'
      >
        <ProgressBar/>

        <Link 
          href="/" 
          className={`
            text-4xl font-bold tracking-tighter z-60 mx-10
            text-[#f4ede5]
          `}
        >
          Brend Zmijanej
        </Link>
        
        <div className='flex items-center gap-7 mx-14'>
        {/* Desktop Links */}
        <NavLinks/>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-60"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Menu 
            size={24} 
            className={`
              text-white
            `}
          />
          ) : (
            <Menu 
              size={24} 
              className={`
                text-white
              `} 
            />
          )}
        </button>

        </div>
      </motion.nav>

      

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
            key="dropdown-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants} 
            className={`
            fixed top-10 w-full left-0 right-0 
            md:hidden z-40 transition-all duration-300
            pt-6 overflow-hidden h-fit text-left
          `}
        >
          {/* Close Button */}
          <button 
            className="absolute top-0 right-0 z-60"
            onClick={() => setIsMenuOpen(false)}
          >
            <Menu
              size={24} 
              className={`
              text-white
                transition-all duration-300 absolute inset-0
              `} 
            />
          </button>

          <div className="flex flex-col z-60 place-content-start">
            <NavLinks mobile={true} />
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}

export default ResponsiveNavbar



