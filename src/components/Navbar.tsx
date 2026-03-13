import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505cc] backdrop-blur-lg border-b border-[#ffffff1a] py-4' : 'bg-transparent py-6'}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black gradient-text tracking-tighter">
          TECHMIYA<span className="text-white">HACK</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Tracks', 'Prizes', 'Schedule', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="neon-btn text-xs scale-90">Register Now</button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
