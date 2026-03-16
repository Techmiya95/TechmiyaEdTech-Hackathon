import React from 'react';

const Hero: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative z-10 transition-transform duration-700 hover:scale-[1.02]">
        <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
          The Future of Innovation
        </div>
        
        <h1 className="mb-6">
          <span className="block">Techmiya</span>
          <span className="gradient-text text-[4.5rem] md:text-[6rem]">HACKATHON 2026</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-text-secondary text-lg md:text-xl mb-10 leading-relaxed">
          48 hours of building, innovative problem solving, and shaping the tech landscape. 
          Unleash your creativity and win exciting prizes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={onRegisterClick} className="neon-btn px-12 py-4 text-lg font-bold cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,242,255,0.5)]">Register Now</button>
          <button className="px-12 py-4 glass border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating stats */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        {[
          { label: 'Prize Pool', value: '₹5L+' },
          { label: 'Participants', value: '500+' },
          { label: 'Tracks', value: '06' },
          { label: 'Hours', value: '48' },
        ].map((stat, i) => (
          <div key={i} className="group cursor-pointer p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,242,255,0.15)] hover:border-primary/30">
            <div className="text-3xl md:text-5xl font-black text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500 mb-3">{stat.value}</div>
            <div className="text-sm md:text-lg uppercase tracking-widest text-text-secondary font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

