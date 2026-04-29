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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1800px] z-[10000] rounded-[2rem] transition-all duration-700 animate-float-y glass-premium neon-glow-cyan ${scrolled || isOpen ? 'py-4' : 'py-6'} ${isOpen ? '' : 'overflow-hidden'}`}>
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
              {['Home', 'About', 'Prizes', 'FAQ', 'Brochure'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Home' ? '#' : item === 'Brochure' ? '/images/techmiya brochure.pdf' : `#${item.toLowerCase()}`}
                  download={item === 'Brochure' ? 'techmiya brochure.pdf' : undefined}
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
      </nav>

      {/* Full-Screen Premium Mobile Menu Overlay - Now independent of the nav capsule's transform */}
      <div className={`fixed inset-0 w-full h-[100dvh] bg-[#020617]/98 backdrop-blur-2xl z-[11000] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {/* Animated Background Particles for Menu */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center gap-8 px-8">
          {/* Close Button Inside Menu */}
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Large Vertical Menu Links */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 w-full">
            {['Home', 'About', 'Prizes', 'FAQ', 'Brochure'].map((item, i) => (
              <a 
                key={item} 
                href={item === 'Home' ? '#' : item === 'Brochure' ? '/images/techmiya brochure.pdf' : `#${item.toLowerCase()}`}
                download={item === 'Brochure' ? 'techmiya brochure.pdf' : undefined}
                onClick={() => setIsOpen(false)}
                className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter hover:text-cyan-400 transition-all duration-300"
              >
                {item}
              </a>
            ))}
            {/* Register Now as a Tab in Mobile Menu */}
            <button 
              onClick={() => { setIsOpen(false); onRegisterClick(); }} 
              className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tighter hover:text-white transition-all duration-300"
            >
              Register Now
            </button>
          </div>

          {/* Branding at Bottom of Menu */}
          <div className="absolute bottom-12 text-center">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Techmiya Solutions Pvt Ltd</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
