import About from "./components/About";
import HeroSection from "./components/Hero";
import PortfolioShowcase from "./components/SelectedWork";


export default function Home() {
  return (
    <main className="text-gray-text max-w-full px-0">
       <div className="">

        <HeroSection/>
        <About/>
        <PortfolioShowcase/>
        </div>
    </main>
  );
}
