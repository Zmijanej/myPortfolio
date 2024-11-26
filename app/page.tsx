import About from "./components/About";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import PortfolioShowcase from "./components/SelectedWork";


export default function Home() {
  return (
    <main className="text-gray-text bg-black max-w-full">
      <div className="">
       <Hero/>
       <PortfolioShowcase/>
       <About/>
       {/* <Marquee/> */}
      </div> 
    </main>
  );
}
