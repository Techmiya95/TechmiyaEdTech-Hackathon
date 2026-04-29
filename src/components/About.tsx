import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full px-6 flex flex-col items-center gap-24 text-center">
      {/* Section 1: Techmiya Ed-Tech */}
      <div className="flex flex-col items-center text-center w-full max-w-[1600px] mx-auto px-4 md:px-12">
        <h2 className="gradient-text !mb-6 text-4xl md:text-6xl">WHO WE ARE</h2>
        <h3 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tight">Techmiya Ed-Tech: Building the Digital Horizon</h3>
        <p className="text-text-secondary text-lg md:text-2xl leading-relaxed mb-12 max-w-5xl">
          Techmiya Ed-Tech is a leading-edge technology innovation hub dedicated to empowering businesses and developers through advanced software ecosystems, AI-driven automation, and secure architectures. We bridge the gap between imagination and execution with premium products.
        </p>
        <div className="flex gap-6 w-full flex-wrap sm:flex-nowrap">
          {[
            { val: '500+', label: 'Projects Deployed' },
            { val: '10K+', label: 'Global Network' },
            { val: '50+', label: 'Top Mentors' }
          ].map((stat, i) => (
            <div key={i} className="glass p-8 flex-1 text-center border-white/10 hover:border-primary/30 transition-colors group">
              <div className="text-4xl md:text-5xl font-black text-primary group-hover:scale-110 transition-transform">{stat.val}</div>
              <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-text-secondary font-black mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: The Events Overview */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12 flex flex-col items-center gap-16">
        <div className="text-center w-full max-w-[1200px] mx-auto flex flex-col items-center gap-6">
           <h2 className="gradient-text !mb-4 text-4xl md:text-7xl">THE EVENTS</h2>
           <p className="text-text-secondary text-xl md:text-3xl leading-relaxed font-medium">
             Our flagship innovation series is divided into two major tracks to discover and accelerate tech innovators. Whether you are a master coder or a visionary strategist, there is a path for you to build the future.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Hackathon Card */}
          <div className="glass p-10 md:p-16 border-primary/20 hover:border-primary/50 transition-colors duration-500 flex flex-col items-center text-center relative overflow-hidden group rounded-[3rem]">
            <div className="absolute top-0 right-0 p-12 opacity-10 text-primary group-hover:scale-110 transition-transform duration-700">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M9.71 6.86L11.13 8.28L6.83 12.58L11.13 16.88L9.71 18.3L4 12.58L9.71 6.86ZM14.29 6.86L20 12.58L14.29 18.3L12.87 16.88L17.17 12.58L12.87 8.28L14.29 6.86Z"/></svg>
            </div>
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-black uppercase tracking-[0.3em] mb-10">Development Track</div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Techmiya <span className="text-primary">NextGen 1.0</span></h3>
            <p className="text-text-secondary text-xl md:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              An intense, 24-hour international level hackathon demanding raw technical skills. Teams will race against the clock to build functional software solutions from scratch, addressing complex real-world problems.
            </p>
            <ul className="flex flex-col gap-6 relative z-10 text-left w-fit mx-auto">
              {['24-Hour Non-Stop Coding Marathon', 'Focus on Code Quality & Architecture', 'Working Prototype Delivery Required', 'Tech Stack Agnostic (Web, App, AI, Web3)'].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-slate-200 text-lg md:text-xl font-bold">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-base border border-primary/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideathon Card */}
          <div className="glass p-10 md:p-16 border-secondary/20 hover:border-secondary/50 transition-colors duration-500 flex flex-col items-center text-center relative overflow-hidden group rounded-[3rem]">
            <div className="absolute top-0 right-0 p-12 opacity-10 text-secondary group-hover:scale-110 transition-transform duration-700">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <div className="px-6 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-black uppercase tracking-[0.3em] mb-10">Business & Strategy Track</div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Techmiya <span className="text-secondary">PitchFest 1.0</span></h3>
            <p className="text-text-secondary text-xl md:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              A high-stakes national level ideathon focused on business viability, disruptive concepts, and product strategy. Perfect for visionaries aiming to pitch scalable startup models.
            </p>
            <ul className="flex flex-col gap-6 relative z-10 text-left w-fit mx-auto">
              {['In-depth Business Model Canvas', 'Market Research & Feasibility Analysis', 'High-Fidelity UI/UX Prototyping (Optional)', 'Expert Pitch Deck Presentation'].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-slate-200 text-lg md:text-xl font-bold">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-base border border-secondary/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;
