// ScrollContext.tsx
'use client';
import React, { createContext, useContext, useRef } from 'react';
import { useScroll } from 'framer-motion';

interface ScrollContextProps {
  scrollYProgress: number;
}

const ScrollContext = createContext<ScrollContextProps>({ scrollYProgress: 0 });

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollYProgressValue = scrollYProgress.get();

  return (
    <ScrollContext.Provider value={{ scrollYProgress:scrollYProgressValue }}>
      <div ref={ref}>{children}</div>
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
