import About from "./components/About";
import Hero from "./components/Hero";
import PortfolioShowcase from "./components/SelectedWork";


export default function Home() {
  return (
    <main className="text-gray-text bg-black max-w-full px-6">
        <Hero/>
        <PortfolioShowcase/>
        <About/>
    </main>
  );
}
