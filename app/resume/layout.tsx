'use client'
import React from 'react'


export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-black'>
      {children}
    </div>
  );
}

