import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Create an interval that updates the state every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []); 
  
  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  // Custom date formatting with short month name
  const formatDateWithShortMonth = (date: Date): { day: string; month: string; } => {
    const day = padZero(date.getDate());
    const shortMonths = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = shortMonths[date.getMonth()];

    return {day,month};
  };

  const {scrollYProgress} = useScroll();

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2],
    [0, 30, 60, 90, 120]
  );


  
return (
  <div className="clock">
    <div className="date">
      
        <div className="flex items-center justify-left content-start  h-15 w-15">
          <motion.img
            src="/star.png"
            alt="clock"
            width={40}
            height={40}
            style={{ rotate }}
          />
        </div>
      <span className='text-8xl pl-6'>
        {formatDateWithShortMonth(currentDateTime).day}
      </span>
      <span className='text-4xl '>
        {formatDateWithShortMonth(currentDateTime).month}
      </span>
    </div>
  </div>
);
}
export default Clock;