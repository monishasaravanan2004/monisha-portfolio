import React from 'react';

interface TimelineItemProps {
  role: string;
  date: string;
  desc: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ role, date, desc }) => {
  return (
    <div className="timeline-item relative pl-12 pb-12 group last:pb-0">
      {/* Visual Dot indicator */}
      <div className="timeline-dot absolute left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#08070B] border-2 border-[#D8A7FF] group-hover:scale-125 transition-transform duration-300 z-10 shadow-[0_0_12px_#D8A7FF]"></div>
      
      <div className="timeline-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
        <h3 className="timeline-role text-lg font-bold font-heading text-[#FFFFFF] group-hover:text-[#FBBF24] transition-colors duration-300">
          {role}
        </h3>
        <span className="timeline-date text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0E0C16] border border-[#D8A7FF]/30 text-[#D8A7FF]">
          {date}
        </span>
      </div>
      
      <div className="timeline-desc text-sm text-[#E4DFF0] leading-relaxed">
        {desc}
      </div>
    </div>
  );
};

export const Journey: React.FC = () => {
  const milestones = [
    {
      role: 'Started B.Tech in IT',
      date: '2022',
      desc: 'Started Bachelor of Technology in Information Technology at Sri Ramanujar Engineering College, establishing core foundations in OOPs, DBMS, and algorithms.',
    },
    {
      role: 'Built Responsive Frontend Projects',
      date: '2023 - 2024',
      desc: 'Coded custom styling architectures using HTML5, CSS3, ES6 Javascript, and modular layouts, refining attention to UX designs and responsiveness.',
    },
    {
      role: 'Java Full Stack Intern @ bDreams Global Solution',
      date: 'Present',
      desc: 'Gaining hands-on experience in Java Full Stack development, Spring Boot, MySQL, REST APIs, and ReactJS frontend applications.',
    },
    {
      role: 'Smart Workforce Analytics Dashboard',
      date: '2025',
      desc: 'Designed a centralized analytics interface parsing team data points and showing visual reports using React and database integrations.',
    },
    {
      role: 'Developed Service Hub Application',
      date: '2025',
      desc: 'Constructed a service catalog platform linking consumer requests with operational metrics using modular layouts and secure JWT tokens.',
    },
    {
      role: 'Food Delivery Application',
      date: 'Active',
      desc: 'Currently developing a full stack food delivery application leveraging a Java Spring Boot backend for cart/order transactions and a ReactJS storefront layout.',
    },
    {
      role: 'Preparing for Software Engineer Opportunities',
      date: 'Present',
      desc: 'Consolidating core database designs, practicing algorithmic problem solving, and preparing to build high-scale enterprise binaries.',
    },
  ];

  return (
    <section id="journey" className="py-24 px-6 md:px-16 relative z-10 bg-[#08070B] border-b border-[#D8A7FF]/15">
      <div className="max-w-[1000px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-bold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            My Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Milestones of my <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">academic &amp; developer journey</span>.
          </h2>
        </div>
        
        <div className="timeline-line relative">
          {milestones.map((item, index) => (
            <TimelineItem 
              key={index} 
              role={item.role} 
              date={item.date} 
              desc={item.desc} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Journey;
