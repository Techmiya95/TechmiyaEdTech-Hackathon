import React from 'react';

const tracks = [
  { title: 'Artificial Intelligence', desc: 'Build local LLMs, AI agents, or futuristic computer vision apps.', icon: '🤖' },
  { title: 'Web3 & Blockchain', desc: 'Develop decentralized apps, NFTs, or DeFi solutions.', icon: '⛓️' },
  { title: 'FinTech Innovation', desc: 'Secure payments, banking apps, and financial dashboards.', icon: '💳' },
  { title: 'EdTech Solutions', desc: 'Transforming how we learn with interactive platforms.', icon: '🎓' },
  { title: 'Health & Wellness', desc: 'AI-driven diagnostics or fitness tracking ecosystems.', icon: '🏥' },
  { title: 'Open Innovation', desc: 'Got a wild idea? Bring it to life in our open track.', icon: '🚀' },
];

const Tracks: React.FC = () => {
  return (
    <section id="tracks">
      <h2 className="gradient-text">Hackathon Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <div key={i} className="glass p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-primary/50">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{track.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{track.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
