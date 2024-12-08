import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = '' }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="animate-marquee whitespace-nowrap inline-block">
        {text}
      </div>
    </div>
  );
};

export default Marquee;