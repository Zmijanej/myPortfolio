"use client"
import Image from 'next/image';
import Link from 'next/link';
import {Pirata_One,Poppins} from 'next/font/google'
import Button from './ui/button';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})
const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
})


const PortfolioShowcase = () => {
  return (
    <section className='collection-list bg-black text-gray-text max-w-7xl mx-auto py-20'>
      <div className={pirata.className}>
        <div className='grid grid-cols-2'>
          <div className='content-center'>
            <h3 className='row-span-2 p-5 text-6xl md:text-7xl lg:text-7xl items-center'>Selected Work</h3>
          </div>
          <div className=''>
            <Image
          src="/snake.png"
          alt='King Zmija'
          width={600}
          height={600}
          className='content-end items-end'
          /> 
          </div>
        </div>
      </div>

      <div className={poppins.className}>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          <Link 
        href="/design-systems"
        className="hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-cardShadow border-4 border-white rounded md:w-full"
        >
        <Image 
        src="/sc.png"
        alt='hi'
        width={500}
        height={500}
        className='border-t-1 object-cover w-full'
        />
        <div className='p-4'>
          <h3 className="text-2xl font-bold mb-4">Design Systems & UX</h3>
        <p>
          Comprehensive web design system for a 50+ page b2b SaaS marketing website.
        </p>
        </div>
        
          </Link>
          <Link
        href="/mobile-product"
        className=" hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-cardShadow border-4 border-white rounded"
      >
        <Image 
        src="/sc.png"
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
        className=" hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-red-600 border-4 border-white rounded"
        >
        <Image 
        src="/sc.png"
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

          <Link href={"#"} className=''>
            <Button text='see more'/>
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default PortfolioShowcase;

