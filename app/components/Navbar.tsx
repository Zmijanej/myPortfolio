'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Pirata_One, Poppins } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
})

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

  // Define page-specific routes
  const routes = {
    '/': '/',
    '/selectedwork': '/selectedwork',
    '/resume': '/resume',
  };

  // Determine if the current page requires inverse colors
  const isInversePage = pathname === routes['/selectedwork'];

  // Navigation Links Component (for reusability)
  const NavLinks = ({ mobile = false }) => (
    <>
      {[
        { name: 'Selected Work', route: '/selectedwork' },
        { name: 'Resume', route: '/resume' },
        { name: 'Get in Touch', route: '#Footer' }
      ].map(({ name, route }) => (
        <Link 
          key={name} 
          href={route}
          onClick={() => setIsMenuOpen(false)}
          className={`
            text-sm uppercase tracking-wider 
            transition-all duration-300 
            ${mobile 
              ? 'block py-4 border-b border-opacity-10' 
              : 'hidden md:block'}
            ${isInversePage 
              ? 'text-black/70 hover:text-black' 
              : 'text-white/70 hover:text-white'}
            ${pathname === route 
              ? (isInversePage 
                ? 'text-black font-semibold' 
                : 'text-white font-semibold'
              ) 
              : ''}
          `}
        >
          {name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <nav 
        className={`
          relative max-w-full top-0 flex justify-between
          p-4 transition-colors duration-300 bg-black z-50
          ${isInversePage 
            ? 'bg-white text-black' 
            : 'bg-black text-white'}
        `}
      >
        <Link 
          href="/" 
          className={`
            text-4xl font-bold tracking-tighter z-60 mx-10
            ${isInversePage ? 'text-black' : 'text-white'}
          `}
          style={pirata.style}
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
              ${isInversePage ? 'text-black' : 'text-white'}
            `}
          />
          ) : (
            <Menu 
              size={24} 
              className={`
                ${isInversePage ? 'text-black' : 'text-white'}x x
              `} 
            />
          )}
        </button>
        </div>
      </nav>

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
            absolute top-10 left-0 right-0 
            md:hidden z-40 transition-all duration-300
            ${isInversePage ? 'bg-white' : 'bg-black'}
            pt-6 overflow-hidden h-fit text-left
          `}
          style={poppins.style}
        >
          {/* Close Button */}
          <button 
            className="absolute top-0 right-0 z-60"
            onClick={() => setIsMenuOpen(false)}
          >
            <Menu
              size={24} 
              className={`
                ${isInversePage ? 'text-white' : 'text-black'}
                transition-all duration-300 absolute inset-0
              `} 
            />
          </button>

          <div className="flex flex-col z-60 place-content-start pl-3">
            <NavLinks mobile={true} />
          </div>
        </motion.div>
      )}
      </AnimatePresence>
      
    </>
  )
}

export default ResponsiveNavbar



// (pathname === routes['/selectedwork']) || (pathname === routes['/resume'])