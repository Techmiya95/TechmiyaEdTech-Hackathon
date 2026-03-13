import React from 'react';

const prizes = [
  { title: 'Winner', pool: '₹2,00,000', color: 'var(--primary)', icon: '🏆' },
  { title: 'Runner Up', pool: '₹1,00,000', color: 'var(--secondary)', icon: '🥈' },
  { title: 'Second Runner Up', pool: '₹50,000', color: 'var(--accent)', icon: '🥉' },
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes">
      <h2 className="neon-text">Exciting Prizes</h2>
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 mt-12">
        {prizes.map((prize, i) => (
          <div 
            key={i} 
            className="glass flex-1 w-full p-8 text-center flex flex-col justify-center items-center relative overflow-hidden group"
            style={{ minHeight: i === 0 ? '400px' : '350px' }}
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: prize.color }}></div>
            <div className="text-6xl mb-6 group-hover:animate-bounce">{prize.icon}</div>
            <h3 className="text-2xl font-black mb-2">{prize.title}</h3>
            <div className="text-3xl font-bold mb-4" style={{ color: prize.color }}>{prize.pool}</div>
            <p className="text-text-secondary text-xs uppercase tracking-tighter">Plus Goodies & Swag</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
