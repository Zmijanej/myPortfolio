import {Pirata_One} from 'next/font/google'
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
}

)
const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <section>
    <div className="bg-black min-h-fit px-6 py-36">
      <div className='max-w-7xl mx-auto'>
        <div className={pirata.className}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl my-6 ">
            Brend Zmijanej
          </h1>
        </div>
      <div className={poppins.className}>
          <p className=" text-xl md:text-2xl max-w-3xl leading-relaxed font-poppins ">
          Front-End Developer crafting seamless user experiences, 
          <br />
          responsive interfaces and scalable web solutions based in
          <br />
          the lively and ever-evolving Tirana, Albania.
        </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;