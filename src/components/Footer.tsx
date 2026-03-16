import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04060b] border-t border-white/5 pt-16 pb-12 mt-40 relative overflow-hidden">
      {/* Background Radial Glow depth overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.03),transparent_70%)] pointer-events-none"></div>
      
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-left relative">
        {/* Column 1: Brand Section */}
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-black text-white text-lg shadow-[0_4px_12px_rgba(0,242,255,0.2)]">M</div>
            <div className="text-xl font-bold tracking-tight text-white">
              Techmiya <span className="text-primary head-text">Solutions</span>
            </div>
          </div>
          <p className="text-slate-400 max-w-sm mb-4 leading-relaxed text-sm">
            Pioneering the future with innovative technology solutions. From robotics to VLSI, we engineer excellence for businesses worldwide.
          </p>
          <a 
            href="https://www.techmiyasolutions.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-cyan-300 font-semibold inline-flex items-center gap-1 mb-6 transition-colors duration-200 text-sm"
          >
            www.techmiyasolutions.com
          </a>
          
          <div className="flex gap-2">
            {[
              { label: 'LinkedIn', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.25h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.96h-.01z"/></svg> },
              { label: 'Twitter', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label: 'Instagram', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            ].map(social => (
              <a key={social.label} href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.06] text-slate-400 hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,255,0.1)]" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start md:pl-8">
          <h4 className="text-white text-sm font-bold mb-5 tracking-wider uppercase">Quick Links</h4>
          <ul className="flex flex-col items-start gap-3">
            {['Home', 'About', 'Prizes', 'FAQ', 'Register'].map(link => (
              <li key={link}>
                <a href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col items-start">
          <h4 className="text-white text-sm font-bold mb-5 tracking-wider uppercase">Contact Us</h4>
          <ul className="flex flex-col items-start gap-3 w-full">
            <li className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors duration-200 w-full group">
              <span className="text-primary text-cyan-400 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span className="break-all text-xs font-medium">hackathon@techmiyasolutions.com</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors duration-200 group">
              <span className="text-primary text-cyan-400 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.83 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <span className="text-xs font-medium">Techmiya Hub, Innovation Block</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors duration-200 group">
              <span className="text-primary text-cyan-400 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </span>
              <span className="text-xs font-medium">New Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Stay Updated */}
        <div className="flex flex-col items-start">
          <h4 className="text-white text-sm font-bold mb-5 tracking-wider uppercase">Stay Updated</h4>
          <p className="text-slate-400 text-sm mb-4 max-w-[240px] leading-relaxed">
            Subscribe to get latest announcements and reveal schedules.
          </p>
          <div className="flex w-full gap-2 mt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/[0.03] border border-white/[0.08] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-primary/40 text-white placeholder-slate-500 transition-all"
            />
            <button className="bg-primary hover:bg-secondary text-bg-dark font-black text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02] cursor-pointer shadow-[0_4px_12px_rgba(0,242,255,0.15)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-slate-500 gap-4 border-t border-white/[0.04] pt-8 relative">
        {/* Subtle Bottom Bar gradient top accent divider fading */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="text-slate-300 text-sm font-medium">© 2026 Techmiya Hackathon. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
