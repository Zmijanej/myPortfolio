import { motion, useSpring } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const padZero = (num: number): string => {
  return num.toString().padStart(2, '0');
};

const Clock: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Short months array
  const shortMonths = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Date spring animation
  const springDateCount = useSpring(0, { 
    bounce: 0,
    duration: 4000,
  });

  const [displayDate, setDisplayDate] = useState(padZero(currentDateTime.getDate()));

  springDateCount.on('change', (value) => {
    setDisplayDate(padZero(Math.round(value)));
  });

  // Month spring animation
  const springMonthProgress = useSpring(0, {
    bounce: 0,
    duration: 4000,
  });

  const [displayMonth, setDisplayMonth] = useState(shortMonths[currentDateTime.getMonth()]);

  springMonthProgress.on('change', (value) => {
    setDisplayMonth(shortMonths[Math.round(value)]);
  });

  // Effects to set initial and update values
  useEffect(() => {
    // Set initial date
    springDateCount.set(parseInt(displayDate, 10));
    
    // Set initial month
    springMonthProgress.set(currentDateTime.getMonth());

    // Create an interval that updates the state every second
    const timer = setInterval(() => {
      const newDateTime = new Date();
      setCurrentDateTime(newDateTime);
      
      // Update date and month springs
      springDateCount.set(newDateTime.getDate());
      springMonthProgress.set(newDateTime.getMonth());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []); 

  return (
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
      className="clock"
    >
      <div className="date">
        <motion.img
          src="/star.png"
          alt="clock"
          width={40}
          height={40}
        />
        <span className='text-8xl pl-6'>
          {displayDate}
        </span>
        <span className='text-4xl'> 
          {displayMonth}
        </span>
      </div>
    </motion.div>
  );
}

export default Clock;