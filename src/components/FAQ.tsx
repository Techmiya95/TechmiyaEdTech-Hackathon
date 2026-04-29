import React, { useState } from 'react';

const faqs = [
  { q: "Who can participate?", a: "Students, professionals, and tech enthusiasts from all backgrounds are welcome!" },
  { q: "What is the team size?", a: "Teams can range from 1 to 4 members." },
  { q: "What should I bring?", a: "Your laptop, charger, and any hardware you need for your hack." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center gap-12">
      <div className="text-center w-full max-w-[800px] flex flex-col items-center gap-4">
         <h2 className="gradient-text !mb-4">FREQUENTLY ASKED QUESTIONS</h2>
         <p className="text-text-secondary text-lg leading-relaxed">
           Everything you need to know to get ready for the hackathon.
         </p>
      </div>
      
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
        {faqs.map((faq, i) => (
          <div key={i} className={`glass overflow-hidden transition-all duration-500 rounded-3xl ${openIndex === i ? 'border-blue-500/30 shadow-[0_0_30px_rgba(56,189,248,0.1)] bg-white/[0.04]' : 'border-white/5 hover:border-white/20'}`}>
            <button 
              className="w-full text-left p-6 md:p-8 flex justify-between items-center transition-colors duration-300 group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className={`text-xl md:text-3xl font-black tracking-tight pr-4 transition-colors duration-300 ${openIndex === i ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600' : 'text-white group-hover:text-cyan-400'}`}>
                {faq.q}
              </span>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 ${openIndex === i ? 'border-blue-500 text-blue-500 rotate-45' : 'border-white/20 text-white group-hover:border-cyan-400 group-hover:text-cyan-400'}`}>
                <span className="text-3xl font-light leading-none -mt-1">+</span>
              </div>
            </button>
            <div className={`transition-all duration-500 ${openIndex === i ? 'max-h-60 p-6 md:p-8 pt-0' : 'max-h-0 overflow-hidden'}`}>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-6"></div>
              <p className="text-text-secondary text-lg md:text-2xl font-medium leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
