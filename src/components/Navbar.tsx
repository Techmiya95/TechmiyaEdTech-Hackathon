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
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1800px] z-[10000] rounded-[2rem] transition-all duration-700 animate-float-y glass-premium neon-glow-cyan overflow-hidden ${scrolled || isOpen ? 'py-4' : 'py-6'}`}>
      {/* Animated Light Trail Pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-100%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[light-trail_4s_linear_infinite]"></div>
      </div>
      <div className="w-full mx-auto px-12 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-5 cursor-pointer group">
          <div className="relative">
            <img src="/images/techmiyaedtech_new_logo.png" alt="Techmiya Logo" className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.4)] group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">
              TECHMIYA<span className="gradient-text">NEXTGEN</span>
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.25em] leading-none">Solutions Pvt Ltd</span>
              <span className="h-3 w-[1px] bg-white/20"></span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.15em] leading-none">Tech for People</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {['Home', 'About', 'Prizes', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-sm font-bold text-white/70 hover:text-primary uppercase tracking-[0.2em] transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <button 
            onClick={onRegisterClick} 
            className="neon-btn px-8 py-3 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(74,222_128,0.2)] hover:shadow-[0_0_35px_rgba(74,222,128,0.4)] rounded-full border-2 transition-all hover:scale-105 active:scale-95"
          >
            Register Now
          </button>
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
      <div className={`absolute top-[calc(100%+4rem)] md:top-[calc(100%+5rem)] left-0 w-full glass bg-bg-dark/95 border-b border-white/5 flex flex-col items-center gap-4 py-6 md:hidden transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
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
