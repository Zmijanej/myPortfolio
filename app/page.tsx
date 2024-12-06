'use client'
import { useRef } from "react";
import About from "./components/About";
import HeroSection from "./components/Hero";
import PortfolioShowcase from "./components/SelectedWork";
import Background from "./components/background";
import Footer from "./components/Footer";


export default function Home() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  return (

    <main className="text-[#f4ede5] max-w-full px-0">
       <div className="">
        <Background footerRef={footerRef}/>
        <HeroSection/>
        <About/>
        <PortfolioShowcase/>
        <Footer footerRef={footerRef}/>

        </div>
    </main>
  );
}
