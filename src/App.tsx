import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroFixed';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import './index.css';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash && hash !== '#register') {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash !== '#register') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openModal = () => {
    window.location.hash = '#register';
  };
  const closeModal = () => {
    window.location.hash = '#';
  };

  const renderContent = () => {
    const hash = currentHash || '#';

    if (hash === '#register') {
      return (
        <section id="register" className="min-h-screen bg-black flex flex-col items-center pt-[550px] pb-24 px-6 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-24 items-center relative z-10">
            
            {/* Top: Premium Registration Form */}
            <div className="w-full animate-fadeIn">
              <RegistrationModal isFullPage={true} onClose={closeModal} />
            </div>

            {/* Bottom: Hero Information */}
            <div className="w-full space-y-20 animate-slideInUp pb-24 mt-12 relative z-10">
              <div className="space-y-6 text-center px-4 md:px-0">
                <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                  TECHMIYA <br />
                  <span className="gradient-text">NEXTGEN 1.0</span>
                </h1>
                <p className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl mx-auto">
                  Join the Innovation Challenges Series. An International Level 24-Hours Hackathon & National Level Ideathon shaping the tech landscape with elite minds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Build Projects', icon: '🚀', desc: 'Full-stack AI workflows' },
                  { label: 'Network Hub', icon: '🤝', desc: 'Elite dev nodes' },
                  { label: 'Upskill Nodes', icon: '💡', desc: 'Real-world hacks' },
                  { label: 'Loaded Setup', icon: '🍕', desc: 'Swag & systems' }
                ].map((item, i) => (
                  <div key={i} className="glass p-10 rounded-[32px] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 group text-center flex flex-col items-center border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 relative z-10">{item.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-wide relative z-10">{item.label}</h3>
                    <p className="text-base text-white/50 font-medium relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-16 mt-16 relative">
                {/* Decorative glowing line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                
                <h3 className="text-center text-sm font-black text-white/30 uppercase tracking-[0.4em] mb-12">Incentive Pool</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 relative z-10">
                  <div className="flex flex-col items-center gap-4 group">
                    <span className="text-sm font-black text-cyan-400/70 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">Prize Bounty</span>
                    <span className="text-6xl md:text-7xl font-black text-white group-hover:gradient-text transition-all duration-500 tracking-tighter">₹1,00,000</span>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                  <div className="flex flex-col items-center gap-4 group">
                    <span className="text-sm font-black text-blue-400/70 group-hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">Rewards</span>
                    <span className="text-5xl md:text-6xl font-black text-white group-hover:text-white/80 transition-all duration-500 tracking-tighter">Swag & Goodies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <div className="flex flex-col gap-16 pb-32">
        <Hero onRegisterClick={openModal} />
        <About />
        <div className="border-t border-white/[0.03] w-full"></div>
        <Tracks />
        <div className="border-t border-white/[0.03] w-full"></div>
        <Timeline />
        <div className="border-t border-white/[0.03] w-full"></div>
        <Prizes />
        <div className="border-t border-white/[0.03] w-full"></div>
        <FAQ />
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative">
      {/* Global Particle & Light Streak Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light Streaks */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={`streak-${i}`} 
            className="light-streak opacity-20" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          ></div>
        ))}
        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle animate-float-particle" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      <Navbar onRegisterClick={openModal} />

      <main className="flex-grow pt-[350px] md:pt-[450px] relative z-10">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
