import React, { useState, useEffect } from 'react';

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text, className = '' }) => {
  // visibleWords is an array of words that have been "revealed" so far
  // setVisibleWords is a function that updates the state of visibleWords
  const [visibleWords, setVisibleWords] = useState<string[]>([]); // Initialize with an empty array, so no words are visible at first


  useEffect(() => {
    const words = text.split(' ');
    const timers = words.map((word, index) => 
      setTimeout(() => {
        setVisibleWords(prev => [...prev, word]);
      }, index * 200)
    );

    // Cleanup timers to prevent memory leaks
    return () => timers.forEach(clearTimeout);
  }, [text]);

  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split(' ').map((word, index) => (
        <span 
          key={index} 
          className={`
            inline-block 
            mr-2 
            transition-all 
            duration-700 
            ease-out
            ${visibleWords.includes(word) 
              ? 'translate-y-0 opacity-100 rotate-0' 
              : 'translate-y-full opacity-0 rotate-12'}
          `}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default function DescText({text, className}: {text: string, className?: string},) {

  return (
    <div className="">
      <WaveText 
        text={text} 
        className={className}
      />
    </div>
  );
}