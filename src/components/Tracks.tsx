import React from 'react';

const tracks = [
  { 
    title: 'Artificial Intelligence', 
    desc: 'Build local LLMs, AI agents, or futuristic computer vision apps.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 7v4" />
      </svg>
    )
  },
  { 
    title: 'Web3 & Blockchain', 
    desc: 'Develop decentralized apps, NFTs, or DeFi solutions.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    )
  },
  { 
    title: 'FinTech Innovation', 
    desc: 'Secure payments, banking apps, and financial dashboards.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    title: 'EdTech Solutions', 
    desc: 'Transforming how we learn with interactive platforms.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3-3v3m6-3v3" />
      </svg>
    )
  },
  { 
    title: 'Health & Wellness', 
    desc: 'AI-driven diagnostics or fitness tracking ecosystems.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    title: 'Open Innovation', 
    desc: 'Got a wild idea? Bring it to life in our open track.', 
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 001 1h1a2 2 0 110 4h-1a1 1 0 00-1 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
];

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="w-full px-6">
      <h2 className="gradient-text !mb-12">Hackathon Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <div key={i} className="glass p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,242,255,0.1)] relative overflow-hidden cursor-pointer">
            {/* Hover Bottom Glow Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 filter drop-shadow-[0_4px_12px_rgba(0,242,255,0.2)]">
                {track.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">{track.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed duration-500 group-hover:text-white/80">{track.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
