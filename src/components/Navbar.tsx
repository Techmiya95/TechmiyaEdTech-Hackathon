import React, { useState, useEffect } from 'react';

const Navbar: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black gradient-text tracking-tighter cursor-pointer">
          TECHMIYA<span className="text-white">HACK</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Prizes', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="text-sm font-semibold text-white/70 hover:text-primary transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button onClick={onRegisterClick} className="neon-btn scale-90">Register Now</button>
        </div>

        {/* Mobile menu trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-primary transition-colors cursor-pointer" aria-label="Toggle Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      <div className={`absolute top-full left-0 w-full glass bg-bg-dark/95 border-b border-white/5 flex flex-col items-center gap-4 py-6 md:hidden transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        {['Home', 'About', 'Prizes', 'FAQ'].map((item) => (
          <a 
            key={item} 
            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/80 hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
        <button onClick={() => { setIsOpen(false); onRegisterClick(); }} className="neon-btn mt-2">Register Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
