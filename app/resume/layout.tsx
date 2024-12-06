'use client'
import React, { useRef } from 'react'
import Footer from '../components/Footer';
import Background from '../components/background';


export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='bg-[#131313] text-white'>
      {children}
      <Footer footerRef={footerRef}/>
    </div>
  );
}

