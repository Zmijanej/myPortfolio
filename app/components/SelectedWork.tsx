"use client"
import Image from 'next/image';
import Link from 'next/link';
import {Poppins} from 'next/font/google'
import Button from './ui/button';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})



const PortfolioShowcase = () => {
  return (
    <section className='collection-list bg-black text-gray-text max-w-7xl px-6'>
      <div className='font-pirata'>
        <div className='grid grid-cols-2'>
          <div className='content-center'>
            <h3 className='pirata row-span-2 p-5 text-6xl md:text-7xl lg:text-7xl items-center'>Selected Work</h3>
          </div>
          <div className=''>
            <Image
          src="/snake2.png"
          alt='King Zmija'
          width={500}
          height={300}
          className='content-end items-end top-6'
          /> 
          </div>
        </div>
      </div>

      <div className={poppins.className}>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          <Link 
        href="/selectedwork/explorealb"
        className="hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-cardShadow border-4 border-white rounded md:w-full"
        >
        <Image 
        src="/coming_soon.png"
        alt='hi'
        width={500}
        height={300}
        className='border-t-1 object-cover w-full'
        />
        <div className='p-4'>
          <h3 className="text-2xl font-bold mb-4">ExploreAlb</h3>
        <p>
        Tourism website application for Albania.
        </p>
        </div>
        
          </Link>
          <Link
        href="/mobile-product"
        className=" hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-cardShadow border-4 border-white rounded"
      >
        <Image 
        src="/coming_soon.png"
        alt='hi'
        width={500}
        height={300}
        className='border-t-1 object-cover w-full'

        />
        <div className='p-4'>
        <h3 className="text-2xl font-bold mb-4">Mobile Product Design</h3>
        <p>
          End-to-End product design for a consumer-facing iOS and Android social app.
        </p>
        </div>
        
          </Link>
          <Link
        href="/brand-product"
        className=" hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-cardShadow border-4 border-white rounded"
        >
        <Image 
        src="/coming_soon.png"
        alt='hi'
        width={500}
        height={300}
        className='border-t-1 object-cover w-full'
        />
        <div className='p-4'>
        <h3 className="text-2xl font-bold mb-4">Brand & Product Design</h3>
        <p>
          Comprehensive marketing and product Design for a joint banking platform for newlyweds.
        </p>
        </div>
          </Link>

          <Link href={"/selectedwork"} className=''>
            <Button text='see more'/>
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default PortfolioShowcase;

