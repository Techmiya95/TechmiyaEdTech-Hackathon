import React from 'react';

const schedule = [
  { time: '10:00 AM', event: 'Opening Ceremony', date: 'Day 1' },
  { time: '12:00 PM', event: 'Hacking Begins', date: 'Day 1' },
  { time: '04:00 PM', event: 'Workshop: AI Agents', date: 'Day 1' },
  { time: '09:00 PM', event: 'Mentor Sync-up', date: 'Day 1' },
  { time: '09:00 AM', event: 'Progress Review', date: 'Day 2' },
  { time: '02:00 PM', event: 'Hacking Ends', date: 'Day 2' },
  { time: '04:00 PM', event: 'Demo Presentations', date: 'Day 2' },
  { time: '07:00 PM', event: 'Awards Night', date: 'Day 2' },
];

const Timeline: React.FC = () => {
  return (
    <section id="schedule" className="w-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center gap-12">
      <div className="text-center w-full max-w-[800px] flex flex-col items-center gap-4">
         <h2 className="gradient-text !mb-4">EVENT SCHEDULE</h2>
         <p className="text-text-secondary text-lg leading-relaxed">
           A comprehensive timeline of our 48-hour innovation marathon.
         </p>
      </div>

      <div className="w-full max-w-5xl mx-auto relative flex flex-col gap-6 md:gap-10">
        {/* The Vertical Line */}
        <div className="absolute left-[15px] md:left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400/10 via-blue-500/30 to-blue-600/10"></div>
        
        {schedule.map((item, i) => (
          <div key={i} className="flex relative group">
            {/* Timeline Dot */}
            <div className="w-[32px] md:w-[48px] flex-shrink-0 flex justify-center items-center z-10">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 border-4 border-bg-dark shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-150 group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
            </div>
            
            {/* Card Content */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-1 pl-4 md:pl-8">
              <span className="text-cyan-400 font-black text-xl md:text-3xl whitespace-nowrap min-w-[160px] tracking-tight group-hover:text-white transition-colors duration-300">
                {item.time}
              </span>
              <div className="glass p-6 md:p-8 flex-1 rounded-3xl border-white/5 group-hover:border-cyan-400/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] bg-white/[0.02] group-hover:bg-white/[0.04]">
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-400 font-bold block mb-2">{item.date}</span>
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight">{item.event}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
