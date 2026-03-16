import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-24 text-center">
      {/* Section 1: Techmiya Ed-Tech */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="gradient-text !mb-4">WHO WE ARE</h2>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Techmiya Ed-Tech: Building the Digital Horizon</h3>
        <p className="text-text-secondary leading-relaxed mb-8">
          Techmiya Ed-Tech is a leading-edge technology innovation hub dedicated to empowering businesses and developers through advanced software ecosystems, AI-driven automation, and secure architectures. We bridge the gap between imagination and execution with premium products.
        </p>
        <div className="flex gap-4 w-full flex-wrap sm:flex-nowrap">
          {[
            { val: '500+', label: 'Projects Deployed' },
            { val: '10K+', label: 'Global Network' },
            { val: '50+', label: 'Top Mentors' }
          ].map((stat, i) => (
            <div key={i} className="glass p-5 flex-1 text-center border-white/5">
              <div className="text-2xl font-black text-primary">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-wider text-text-secondary font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: About Hackathon */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
         <h2 className="gradient-text !mb-4">THE HACKATHON</h2>
         <p className="text-text-secondary text-lg leading-relaxed">
           Techmiya EdTech Hackathon 2026 is our flagship 48-hour build Sprint designed to discover and accelerate Tech innovators. We unite students, professionals, and thought-leaders across shared problem spaces to push standard loops into production deployment loops seamlessly.
         </p>
      </div>

      {/* Section 3: Previous Edition Highlights */}
      <div className="flex flex-col gap-12 w-full">
         <div className="text-center">
           <h2 className="gradient-text !mb-3">PREVIOUS EDITIONS</h2>
           <p className="text-text-secondary text-sm max-w-md mx-auto">Take a glimpse at our historical successes fueling developer-nodes around standard sprints ecosystems.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2024', title: 'AI Forge Hack', stats: '200+ Competitors | 50 Projects', icon: '🤖', color: 'var(--primary)' },
              { year: '2025', title: 'Web3 Nexus Sprint', stats: '300+ Competitors | 80 Projects', icon: '⛓️', color: 'var(--secondary)' },
              { year: '2025', title: 'FinTech Pulse-X', stats: '250+ Competitors | 70 Projects', icon: '💳', color: 'var(--accent)' },
            ].map((past, i) => (
               <div key={i} className="glass p-6 text-center border-white/5 hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: past.color }}></div>
                  <span className="text-4xl inline-block mb-3 filter drop-shadow-[0_4px_8px_rgba(0,242,255,0.1)] group-hover:scale-110 transition-transform duration-300">{past.icon}</span>
                  <span className="text-xs font-bold block mb-1" style={{ color: past.color }}>{past.year}</span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors duration-300">{past.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{past.stats}</p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default About;
