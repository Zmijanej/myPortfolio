import About from "./components/About";
import Hero from "./components/Hero";
import PortfolioShowcase from "./components/SelectedWork";


export default function Home() {
  return (
    <main className="text-gray-text bg-black max-w-full">
        <Hero/>
        <PortfolioShowcase/>
        <About/>
    </main>
  );
}
