import React from 'react';
import useTilt from '../../hooks/useTilt';
import { Code2, Database, Layout, Server, Cpu, GitBranch } from 'lucide-react';

interface DetailedSkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const DetailedSkillCard: React.FC<DetailedSkillCardProps> = ({ icon, name, description }) => {
  const { elementRef, tiltProps } = useTilt(5, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-7 flex flex-col gap-4 border-[#D8A7FF]/30 bg-[#0E0C16] hover:border-[#D8A7FF]/70 hover:shadow-[0_0_30px_rgba(216,167,255,0.25)] shadow-2xl tilt-card relative overflow-hidden group transition-all duration-300 text-left"
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#D8A7FF]/15 text-[#D8A7FF] border border-[#D8A7FF]/35 shadow-md group-hover:scale-110 group-hover:bg-[#D8A7FF]/25 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-black font-heading text-[#FFFFFF] group-hover:text-[#FBBF24] transition-colors">
          {name}
        </h3>
      </div>
      <p className="text-sm text-[#E4DFF0] leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
};

export const Skills: React.FC = () => {
  const row1Skills = [
    { icon: '☕', name: 'Java' },
    { icon: '🍃', name: 'Spring Boot' },
    { icon: '🐬', name: 'MySQL' },
    { icon: '⚛️', name: 'ReactJS' },
    { icon: '🚀', name: 'REST APIs' },
    { icon: '📜', name: 'JavaScript' },
  ];

  const row2Skills = [
    { icon: '🌐', name: 'HTML5' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '🌳', name: 'Git' },
    { icon: '🐙', name: 'GitHub' },
    { icon: '📦', name: 'Maven' },
    { icon: '🎯', name: 'Postman' },
  ];

  const detailedSkills = [
    {
      icon: <Code2 size={24} className="text-[#D8A7FF]" />,
      name: 'Java',
      description: 'Writing robust object-oriented programs, core data structures, exception handling, and enterprise backend logic efficiently.',
    },
    {
      icon: <Server size={24} className="text-[#D8A7FF]" />,
      name: 'Spring Boot',
      description: 'Building scalable microservices, Spring Security JWT authentication, MVC web controllers, and Spring Data JPA repositories.',
    },
    {
      icon: <Database size={24} className="text-[#D8A7FF]" />,
      name: 'MySQL',
      description: 'Designing relational database schemas, writing complex JOIN queries, entity mapping, indexing, and optimizing query execution.',
    },
    {
      icon: <Layout size={24} className="text-[#D8A7FF]" />,
      name: 'ReactJS',
      description: 'Developing interactive, modern single-page applications, custom React hooks, component states, and responsive glassmorphism layouts.',
    },
    {
      icon: <Cpu size={24} className="text-[#D8A7FF]" />,
      name: 'REST APIs & Microservices',
      description: 'Designing scalable HTTP REST endpoints, JSON request/response DTOs, API routing, and Postman endpoint testing.',
    },
    {
      icon: <GitBranch size={24} className="text-[#D8A7FF]" />,
      name: 'Git & GitHub',
      description: 'Managing version control pipelines, repository synchronization, branch management, pull requests, and collaborative code reviews.',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="section-header mb-12 text-center md:text-left">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight text-[#FFFFFF]">
            My <span className="text-[#D8A7FF]">Skills &amp; Technologies</span>.
          </h2>
          <p className="text-sm text-[#E4DFF0] mt-2">
            Hands-on experience in building full-stack web applications, database systems, and backend services.
          </p>
        </div>
        
        {/* DYNAMICALLY RUNNING INFINITE MARQUEE TICKER (2 ROWS) */}
        <div className="marquee-container flex flex-col gap-4 mb-16 overflow-hidden py-4 border-y border-[#D8A7FF]/20 bg-[#121018]/50 rounded-3xl relative">
          
          {/* Subtle Side Fades for Marquee */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#08070B] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#08070B] to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 Running Left */}
          <div className="animate-marquee flex gap-4">
            {[...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[#08070B]/90 border border-[#D8A7FF]/20 px-5 py-3 rounded-2xl text-sm font-bold text-[#F8F7FB] hover:border-[#D8A7FF] hover:bg-[#D8A7FF]/15 hover:text-[#D8A7FF] hover:shadow-[0_0_20px_rgba(216,167,255,0.4)] transition-all cursor-default select-none shrink-0"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 Running Right (Reverse) */}
          <div className="animate-marquee-reverse flex gap-4">
            {[...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[#08070B]/90 border border-[#D8A7FF]/20 px-5 py-3 rounded-2xl text-sm font-bold text-[#F8F7FB] hover:border-[#D8A7FF] hover:bg-[#D8A7FF]/15 hover:text-[#D8A7FF] hover:shadow-[0_0_20px_rgba(216,167,255,0.4)] transition-all cursor-default select-none shrink-0"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Detailed Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedSkills.map((skill, index) => (
            <DetailedSkillCard 
              key={index}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;


