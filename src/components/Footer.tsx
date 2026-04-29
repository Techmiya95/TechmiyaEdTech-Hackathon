import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-36 pb-12 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="w-full mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-20 relative z-10">
        
        {/* Contact Us - Now First */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h4 className="text-2xl font-black tracking-[0.2em] uppercase relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Contact Us</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"></span>
          </h4>
          <ul className="flex flex-col items-center gap-6 mt-2 w-full">
            <li className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-secondary hover:text-primary transition-colors duration-300 w-full group cursor-pointer">
              <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span className="text-lg font-semibold">hr@techmiyaedtech.com</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-secondary hover:text-primary transition-colors duration-300 group cursor-pointer">
              <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.93 3.19a1 1 0 01-.24 1.06l-1.97 1.97a7.48 7.48 0 003.11 3.11l1.97-1.97a1 1 0 011.06-.24l3.19.93a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <span className="text-lg font-semibold">+91 6363760275</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-secondary hover:text-primary transition-colors duration-300 group cursor-pointer">
              <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.83 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <span className="text-lg font-semibold leading-relaxed">Techmiya Ed-Tech, 28th Main Rd,<br />S & C Cross A Road, Jayanagar 9th Block,<br />Bengaluru, Karnataka 560069</span>
            </li>
          </ul>
        </div>

        {/* Brand Section - Now Centered */}
        <div className="flex flex-col items-center gap-8 justify-center text-center mt-4">
          <a href="#" className="flex flex-col items-center gap-4 cursor-pointer group">
            <img src="/images/techmiyaedtech_new_logo.png" alt="Techmiya Logo" className="h-24 w-auto object-contain drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] group-hover:scale-105 transition-transform duration-500" />
            <div className="flex flex-col text-center -gap-1">
              <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                TECHMIYA<span className="gradient-text">NEXTGEN</span>
              </span>
            </div>
          </a>
          <p className="text-text-secondary text-lg leading-relaxed max-w-sm text-center">
            Driving innovation at the intersection of hardware and software, we build intelligent solutions that power the future.
          </p>

          <div className="flex gap-4 justify-center">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/techmiyaedtech', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0-3.668-.014-4.948-.072-4.354-.2-6.782-2.618-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
              { label: 'YouTube', href: 'https://www.youtube.com/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.385 2.303-4.385 6.403 0 3.957.491 6.134 4.385 6.403 3.6.245 11.626.246 15.23 0 3.897-.266 4.385-2.303 4.385-6.403 0-3.958-.491-6.134-4.385-6.403zm-11.615 9.816v-6l6 3-6 3z" /></svg> },
              { label: 'Facebook', href: 'https://www.facebook.com/techmiyaedtech', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg> },
              { label: 'LinkedIn', href: 'https://in.linkedin.com/company/techmiya-solutions', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.25h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.96h-.01z" /></svg> },
            ].map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.06] text-slate-400 hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,255,0.15)]" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stay Updated */}
        <div className="flex flex-col items-center gap-6 text-center mt-4">
          <h4 className="text-2xl font-black tracking-[0.2em] uppercase relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Stay Updated</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"></span>
          </h4>
          <p className="text-text-secondary text-lg leading-relaxed mt-2 w-full text-center max-w-[320px] mx-auto">
            Join our official WhatsApp community to get the latest announcements and event schedules directly.
          </p>
          <a href="https://chat.whatsapp.com/GPaThC9U3ouBGmXP8TkJ4g" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full max-w-[320px] mx-auto mt-4 px-6 py-4 rounded-xl bg-white/[0.03] border border-green-500/30 text-white font-bold text-lg hover:bg-green-500/10 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 group">
            <svg className="w-7 h-7 text-green-500 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Join WhatsApp Group
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center text-slate-500 gap-4 border-t border-white/[0.04] pt-8 relative">
        {/* Subtle Bottom Bar gradient top accent divider fading */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="text-slate-300 text-sm font-medium text-center">© 2026 Techmiya Ed-Tech Hackathon. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
