import React, { useState } from 'react';

const faqs = [
  { q: "Who can participate?", a: "Students, professionals, and tech enthusiasts from all backgrounds are welcome!" },
  { q: "What is the team size?", a: "Teams can range from 1 to 4 members." },
  { q: "Is there a registration fee?", a: "Participation is completely free of charge." },
  { q: "Will there be food and accommodation?", a: "Yes, we provide meals, snacks, and resting areas for all 48 hours." },
  { q: "What should I bring?", a: "Your laptop, charger, and any hardware you need for your hack." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <h2 className="neon-text">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass overflow-hidden">
            <button 
              className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-bold text-white pr-4">{faq.q}</span>
              <span className={`text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-40 p-6 pt-0 border-t border-white/5' : 'max-h-0'}`}>
              <p className="text-text-secondary text-sm">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
