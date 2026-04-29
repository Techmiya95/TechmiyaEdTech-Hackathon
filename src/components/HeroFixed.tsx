import React from 'react';

const Hero: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-32 pb-10 px-6">
      {/* Background & UI Enhancements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Futuristic Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Leaves Animation */}
        <div className="absolute top-20 left-[10%] w-8 h-8 opacity-20 animate-float-leaf">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.12,20C11,20 14.27,15.5 17,13C18.27,11.82 20.27,10.64 22,10.5C22,10.5 16,11 14,10C12,9 11,3 11,3C11,3 11,8 17,8Z" /></svg>
        </div>
        <div className="absolute top-40 right-[15%] w-10 h-10 opacity-15 animate-float-leaf" style={{ animationDelay: '5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.12,20C11,20 14.27,15.5 17,13C18.27,11.82 20.27,10.64 22,10.5C22,10.5 16,11 14,10C12,9 11,3 11,3C11,3 11,8 17,8Z" /></svg>
        </div>
        <div className="absolute bottom-40 left-[20%] w-6 h-6 opacity-10 animate-float-leaf" style={{ animationDelay: '8s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.12,20C11,20 14.27,15.5 17,13C18.27,11.82 20.27,10.64 22,10.5C22,10.5 16,11 14,10C12,9 11,3 11,3C11,3 11,8 17,8Z" /></svg>
        </div>

        {/* Tree made of circuits (SVG) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M400 600V400M400 400L300 300M400 400L500 300M300 300L250 200M300 300L350 200M500 300L450 200M500 300L550 200" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary animate-glow-pulse" />
            <circle cx="400" cy="400" r="8" fill="currentColor" className="text-primary" />
            <circle cx="300" cy="300" r="6" fill="currentColor" className="text-primary" />
            <circle cx="500" cy="300" r="6" fill="currentColor" className="text-primary" />
            <circle cx="250" cy="200" r="4" fill="currentColor" className="text-primary" />
            <circle cx="350" cy="200" r="4" fill="currentColor" className="text-primary" />
            <circle cx="450" cy="200" r="4" fill="currentColor" className="text-primary" />
            <circle cx="550" cy="200" r="4" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 animate-fadeIn w-full px-6">
          <span className="text-primary font-black uppercase tracking-[0.6em] text-sm md:text-lg animate-pulse">Tech for People</span>
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter !mb-0 leading-tight uppercase">
              TECHMIYA SOLUTIONS PVT. LTD.
            </h1>
            <p className="text-text-secondary text-base md:text-2xl font-bold uppercase tracking-[0.3em] opacity-80 max-w-4xl mx-auto border-y border-white/10 py-4">
              Innovation challenges series under the department of Techmiya Ed-Tech
            </p>
          </div>
        </div>

        {/* Main Event Section (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1400px] px-6 animate-slideUp">
          {/* Hackathon Side */}
          <div className="glass p-12 md:p-24 border-primary/20 group hover:border-primary/50 transition-all duration-700 relative overflow-hidden flex flex-col items-center justify-center text-center bg-primary/5">
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
              <div className="px-6 py-2 md:px-10 md:py-3 rounded-full bg-primary/20 border-2 border-primary/40 text-primary text-xs md:text-base font-black uppercase tracking-[0.5em]">HACKATHON</div>
              <h3 className="text-3xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                TECHMIYA <br /><span className="gradient-text">NEXTGEN 1.0</span>
              </h3>
              <p className="text-text-secondary text-base md:text-2xl font-medium tracking-wide max-w-lg">
                An International Level 24-hours Hackathon
              </p>
            </div>
          </div>

          {/* Ideathon Side */}
          <div className="glass p-12 md:p-24 border-secondary/20 group hover:border-secondary/50 transition-all duration-700 relative overflow-hidden flex flex-col items-center justify-center text-center bg-secondary/5">
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
              <div className="px-6 py-2 md:px-10 md:py-3 rounded-full bg-secondary/20 border-2 border-secondary/40 text-secondary text-xs md:text-base font-black uppercase tracking-[0.5em]">IDEATHON</div>
              <h3 className="text-3xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                TECHMIYA <br /><span className="gradient-text">PITCHFEST 1.0</span>
              </h3>
              <p className="text-text-secondary text-base md:text-2xl font-medium tracking-wide max-w-lg">
                A National Level Ideathon
              </p>
            </div>
          </div>
        </div>

        {/* Content Wrapper for tighter spacing between Date and Features */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full z-10 -mt-2 md:-mt-6">
          {/* Date Highlight */}
          <div className="text-center w-full px-6 animate-scaleIn">
            <div className="inline-block px-12 py-8 glass bg-white/[0.03] border-white/20 relative overflow-hidden group rounded-3xl shadow-[0_0_50px_rgba(74,222,128,0.05)]">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
               <h4 className="font-black text-white tracking-tighter uppercase leading-none flex flex-col items-center gap-4">
                  <span className="opacity-50 text-lg md:text-2xl tracking-[0.3em]">JUNE 5th – 6th</span>
                  <span className="text-4xl md:text-7xl text-primary animate-glow-pulse drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]">2026</span>
               </h4>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-[1700px] px-10 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: '🏆', title: '1 Lakh Prize Bounty', desc: 'Rewarding elite innovation' },
            { icon: '💻', title: '24/7 Non Stop Coding', desc: 'Pure building adrenaline' },
            { icon: '🧠', title: 'Innovation Solutions', desc: 'Solving real-world challenges' },
            { icon: '🚀', title: 'Incubation Opportunities', desc: 'Level up your startup idea' }
          ].map((feature, i) => (
            <div key={i} className="glass p-10 group hover:-translate-y-4 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.06] flex flex-col items-center text-center">
              <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500">{feature.icon}</div>
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">{feature.title}</h4>
              <div className="w-12 h-1 bg-primary/20 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-sm text-text-secondary font-bold tracking-widest uppercase opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
        </div>

        {/* CTA Buttons */}
        <div className="w-full flex justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onRegisterClick}
            className="neon-btn px-24 py-10 text-3xl font-black shadow-[0_0_50px_rgba(74,222,128,0.3)] hover:shadow-[0_0_80px_rgba(74,222,128,0.6)] flex items-center justify-center leading-none min-w-[400px] rounded-full border-4 transition-all hover:scale-110 active:scale-95"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
