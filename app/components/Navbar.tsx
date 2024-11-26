'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const ResponsiveNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define page-specific routes
  const routes = {
    '/': '/',
    '/selectedwork': '/selectedwork',
    '/resume': '/resume',
    '/get-in-touch': '/get-in-touch'
  };

  // Determine if the current page requires inverse colors
  const isInversePage = (pathname === routes['/selectedwork']) || (pathname === routes['/resume']);

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
              ? 'block py-4 border-b border-opacity-10 text-center' 
              : 'hidden md:block'}
            ${isInversePage 
              ? 'text-black/70 hover:text-black' 
              : 'text-white/70 hover:text-white'}
            ${pathname === route 
              ? (isInversePage 
                ? 'text-black font-semibold' 
                : 'text-white font-semibold') 
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
          top-0 flex justify-around items-center 
          p-6 transition-colors duration-300
          ${isInversePage 
            ? 'bg-white text-black' 
            : 'bg-black text-white'}
        `}
      >
        <Link 
          href="/" 
          className={`
            text-2xl font-bold tracking-tighter z-60
            ${isInversePage ? 'text-black' : 'text-white'}
          `}
        >
          Brend
        </Link>

        {/* Desktop Links */}
        <NavLinks />

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen 
            ? <X size={24} className={isInversePage ? 'text-black' : 'text-black'} /> 
            : <Menu size={24} className={isInversePage ? 'text-white' : 'text-white'} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div 
          className={`
            fixed top-0 left-0 right-0 bottom-0 z-50 
            md:hidden
            ${isInversePage ? 'bg-white' : 'bg-black'}
            pt-6 
          `}
        >
          <div className="flex flex-col">
            <NavLinks mobile={true} />
          </div>
        </div>
      )}
    </>
  )
}

export default ResponsiveNavbar



// (pathname === routes['/selectedwork']) || (pathname === routes['/resume'])