import React from 'react';

const prizes = [
  { title: 'Price Bounty', pool: '₹1,00,000', color: 'var(--primary)', icon: '🏆' },
  { title: 'Innovation Prize', pool: 'Special Rewards', color: 'var(--secondary)', icon: '🥈' },
  { title: 'Best Pitch', pool: 'Incubation', color: 'var(--accent)', icon: '🥉' },
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes">
      <h2 className="gradient-text">Exciting Prizes</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:items-end gap-6 mt-12 px-4 w-full">
        {prizes.map((prize, i) => (
          <div 
            key={i} 
            className={`glass flex-1 w-full p-8 text-center flex flex-col justify-center items-center relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
              i === 0 
                ? 'md:scale-105 border-primary/40 z-10 shadow-[0_20px_50px_rgba(0,242,255,0.1)] bg-gradient-to-br from-primary/10 via-white/5 to-transparent md:order-2' 
                : 'hover:border-primary/20 hover:shadow-[0_10px_30px_rgba(0,242,255,0.05)] ' + (i === 1 ? 'md:order-1' : 'md:order-3')
            }`}
            style={{ minHeight: i === 0 ? '400px' : '360px' }}
          >
            {/* Top color bar with glow */}
            <div className="absolute top-0 left-0 w-full h-1 shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ background: prize.color }}></div>
            
            <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{prize.icon}</div>
            <h3 className="text-2xl font-black mb-2 text-white group-hover:gradient-text transition-colors duration-500">{prize.title}</h3>
            <div className="text-4xl font-black mb-4 tracking-tighter" style={{ color: prize.color }}>{prize.pool}</div>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">Plus Goodies & Swag</p>
            
            {/* Inner hover flash element */}
            <div className="absolute top-0 -left-full h-full w-1/2 z-5 opacity-20 transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent group-hover:left-[150%] transition-all duration-1000"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
