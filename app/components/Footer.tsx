
export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-wide">Your Brand</h1>
            <p className="mt-2 text-sm opacity-75">
              Inspiring excellence through creativity and dedication.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col lg:flex-row gap-4 text-sm items-center">
            <a href="#" className="hover:opacity-75 transition-opacity">
              Home
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              About
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              Services
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </div>


      
    </footer>
  );
}
