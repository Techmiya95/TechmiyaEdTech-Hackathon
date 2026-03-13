import React from 'react';

const Hero: React.FC = () => {
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
          <button className="neon-btn px-10 py-4 text-base">Register Now</button>
          <button className="px-10 py-4 glass border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating stats or badges could go here */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        {[
          { label: 'Prize Pool', value: '₹5,00,000+' },
          { label: 'Participants', value: '500+' },
          { label: 'Tracks', value: '06' },
          { label: 'Hours', value: '48' },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors">{stat.value}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-text-secondary font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
