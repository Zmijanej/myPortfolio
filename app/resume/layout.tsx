'use client'
import React, { useRef } from 'react'
import Footer from '../components/Footer';


export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='bg-[#131313] text-white'>
      {children}
      <Footer footerRef={footerRef}/>
    </div>
  );
}

