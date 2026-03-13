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
    <section id="schedule">
      <h2 className="gradient-text">Event Schedule</h2>
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:max-w-3xl md:mx-auto">
        {schedule.map((item, i) => (
          <div key={i} className="mb-10 ml-8 relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg-dark shadow-[0_0_10px_var(--primary)]"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span className="text-primary font-bold text-sm whitespace-nowrap">{item.time}</span>
              <div className="glass px-6 py-4 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold block mb-1">{item.date}</span>
                <h4 className="text-lg font-bold text-white">{item.event}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
