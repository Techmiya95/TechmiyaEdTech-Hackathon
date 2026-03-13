import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-black gradient-text tracking-tighter mb-6">
            TECHMIYA<span className="text-white">HACK</span>
          </div>
          <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
            Techmiya Hackathon is the flagship event for innovators looking to push the boundaries of technology. 
            Join us for an unforgettable experience.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(social => (
              <a key={social} href="#" className="w-10 h-10 glass flex items-center justify-center hover:border-primary transition-colors text-xs text-text-secondary hover:text-primary">
                {social[0]}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {['About', 'Tracks', 'Prizes', 'Schedule', 'Register'].map(link => (
              <li key={link}>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <p className="text-text-secondary text-sm mb-2">hackathon@techmiya.com</p>
          <p className="text-text-secondary text-sm">Techmiya Hub, Innovation Block</p>
          <p className="text-text-secondary text-sm mt-4">New Delhi, India</p>
        </div>
      </div>
      
      <div className="text-center text-text-secondary text-xs border-t border-white/5 pt-10">
        © 2026 Techmiya Hackathon. All rights reserved. Designed for the bold.
      </div>
    </footer>
  );
};

export default Footer;
