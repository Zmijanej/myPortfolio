import Image from 'next/image';
import React from 'react';
import Button from './ui/button';
import Link from 'next/link';
import {Pirata_One,Poppins} from 'next/font/google'

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
})
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


const About = () => {
  return (
      <div className="bg-black min-h-screen text-white p-6 md:p-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column with Image and Illustration */}
            <div className="relative">
            {/* Decorative Crystal Illustration */}
              <div className="absolute -left-4 bottom-0 w-48 h-48 z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                  d="M10 90 L50 10 L90 90 Z"
                  className="stroke-white fill-none stroke-2"
                />
                {/* Add more geometric lines for crystal effect */}
                  <path
                  d="M30 90 L50 30 L70 90"
                  className="stroke-white fill-none stroke-2"
                />
                </svg>
              </div>
            
            {/* Arched Frame */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square rounded-t-full border-2 border-white p-4">
                  <div className="w-full h-full rounded-t-full overflow-hidden">
                    <Image
                    src="/snake.png"
                    alt="Profile"
                    width={400}
                    height={400}                    
                    className="w-full h-full object-cover z-5"
                    />
                  </div>
                </div>
              </div>
            </div>

          {/* Right Column with Text Content */}
            <div className="space-y-6 py-20" style={poppins.style}>
              <h1 className="text-4xl md:text-5xl font-bold" style={pirata.style}>
              Who is Brend?
              </h1>
            
              <p className="text-lg">
              Brend is a front-end developer and WordPress web designer from vibrant Albania. Currently open to freelance clients and full-time opportunities.
              </p>
            
              <p className="text-lg">
            With a passion for creating responsive and dynamic user experiences, Brend brings fresh ideas to every project, from tourism platforms to cutting-edge design systems. They’re always eager to learn new technologies like Next.js, TypeScript, and Tailwind CSS, while staying grounded in the fundamentals of web development.
              </p>
            
              <p className="text-lg">
            Beyond code, Brend enjoys mentoring budding developers and helping businesses thrive with intuitive digital solutions. Say hi if you’re into design, innovation, or community-driven projects!
              </p>
              <div>
                <Link href="#Footer"
                className="">
                  <Button text='get in touch'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;