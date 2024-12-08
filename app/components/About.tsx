'use client'
import Image from 'next/image';


const About = () => {  
  
  return (
      <section 
      id='About'
      className="relative" >
      <div className="max-w-6xl mx-auto relative z-10">
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
                <path
                  d="M30 90 L50 30 L70 90"
                  className="stroke-white fill-none stroke-2"
                />
              </svg>
            </div>
            
            {/* Arched Frame */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-t-full border-2 border-white p-4">
                <div className="w-full h-full rounded-t-full overflow-hidden z-0">
                  <Image
                    src="/snake2.png"
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
          <div className="space-y-6 py-20">
            <h1 className="pirata text-4xl md:text-5xl font-bold">
              Who is Brend?
            </h1>
            
            <p className="text-lg">
              Brend is a front-end developer and WordPress web designer from vibrant Albania. Currently open to freelance clients and full-time opportunities.
            </p>
            
            <p className="text-lg">
              With a passion for creating responsive and dynamic user experiences, Brend brings fresh ideas to every project, from tourism platforms to cutting-edge design systems. They&apos;are always eager to learn new technologies like Next.js, TypeScript, and Tailwind CSS, while staying grounded in the fundamentals of web development.
            </p>
            
            <p className="text-lg">
              Beyond code, Brend enjoys mentoring budding developers and helping businesses thrive with intuitive digital solutions. Say hi if you&apos;re into design, innovation, or community-driven projects!
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;