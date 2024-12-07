"use client"
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/button';


const PortfolioShowcase = () => {
  return (
    <section className='relative collection-list  text-gray-text px-4 py-16 md:px-12 lg:px-14 z-[100]' id='SelectedWork'>
        <div className='flex flex-row sm:flex-rows items-center justify-center'>
          <div className='content-center'>
            <h3 className='row-span-2 p-0 text-6xl md:text-7xl lg:text-7xl items-center'>Selected Work</h3>
          </div>
          <div className=''>
            <Image
          src="/snake2.png"
          alt='King Zmija'
          width={550}
          height={400}
          className="content-end items-end top-6  bg-right-bottom	bg-no-repeat bg-[length:165px_200px]"/> 
          </div>
          <div className=''>
            <Image
          src="/hebites.png"
          alt='King Zmija'
          width={300}
          height={300}
          className="content-end items-end top-6"/> 
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full">
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
    </section>
    
  );
};

export default PortfolioShowcase;

