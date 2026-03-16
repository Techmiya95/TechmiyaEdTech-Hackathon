import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroFixed';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModalFixed';
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

    switch (hash) {
      case '#register':
        return (
          <div 
            style={{ paddingTop: '160px', paddingBottom: '160px' }}
            className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left Side: Information & Prizes */}
            <div className="flex flex-col gap-12 text-center items-center lg:sticky lg:top-36 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none uppercase tracking-tight">
                  <span className="block">BUILD THE</span>
                  <span className="gradient-text text-[4.5rem] md:text-[6rem] leading-[0.9] mt-2 block">FUTURE</span>
                </h1>
                <p className="text-text-secondary text-xl mt-6 max-w-md leading-relaxed font-medium">
                  Join Techmiya Hackathon 2026. 48 hours of building, solving, and shaping the tech landscape. 
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  { icon: '🚀', title: 'Build Projects', desc: 'Create full features covering modern stacks & AI workflows.' },
                  { icon: '🤝', title: 'Network Hub', desc: 'Connect with core dev nodes & mentors easily.' },
                  { icon: '💡', title: 'Upskill Nodes', desc: 'Accelerate learning loops inside actual hacks.' },
                  { icon: '🍕', title: 'Loaded Setup', desc: 'Swag headers, meals & system backup frames constant.' }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 border-white/10 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                    <span className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Prize highlights structure */}
              <div className="flex flex-col gap-5 w-full">
                <h3 className="text-xl font-black text-white/90 uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(0,242,255,0.6)]"></span>
                  Exciting Prizes
                </h3>
                <div className="flex flex-col gap-3 w-full">
                  {[
                    { icon: '🏆', title: 'Winner', pool: '₹2,00,000', color: 'var(--primary)' },
                    { icon: '🥈', title: 'Runner Up', pool: '₹1,00,000', color: 'var(--secondary)' },
                    { icon: '🥉', title: '2nd Runner', pool: '₹50,000', color: 'var(--accent)' },
                  ].map((prize, i) => (
                    <div key={i} className="glass px-8 py-5 flex items-center justify-between border-white/5 hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full" style={{ background: prize.color }}></div>
                       <div className="flex items-center gap-4">
                         <span className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{prize.icon}</span>
                         <div className="text-lg font-bold text-white/90">{prize.title}</div>
                       </div>
                       <div className="text-xl font-black" style={{ color: prize.color }}>{prize.pool}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full flex justify-center lg:justify-end">
              <RegistrationModal isFullPage={true} onClose={closeModal} />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-32 pb-32">
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
    }
  };

  return (
    <div className="bg-bg-dark text-white min-h-screen flex flex-col">
      <Navbar onRegisterClick={openModal} />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
