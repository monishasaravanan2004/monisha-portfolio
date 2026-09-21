import React from 'react';
import useTilt from '../../hooks/useTilt';
import { Coffee, Server, Layout, Brain, Compass, Sparkles } from 'lucide-react';

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const StrengthCard: React.FC<StrengthCardProps> = ({ icon, title, desc }) => {
  const { elementRef, tiltProps } = useTilt(5, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-6 border-[#D8A7FF]/30 bg-[#0E0C16] flex flex-col items-start gap-3 tilt-card hover:border-[#D8A7FF]/60 hover:shadow-[0_0_25px_rgba(216,167,255,0.2)] transition-all text-left"
    >
      <div className="text-[#D8A7FF] mb-1">
        {icon}
      </div>
      <h3 className="text-base font-bold font-heading text-[#FFFFFF]">{title}</h3>
      <p className="text-xs text-[#E4DFF0] leading-relaxed font-normal">{desc}</p>
    </div>
  );
};

export const WhyHireMe: React.FC = () => {
  return (
    <section id="why-hire-me" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Key Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Why you should <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">hire me for your team</span>.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StrengthCard 
            icon={<Coffee size={24} />} 
            title="Strong Java Foundation" 
            desc="Clean OOP coding, robust collection usage, memory allocations awareness, and multi-threading basics." 
          />
          <StrengthCard 
            icon={<Server size={24} />} 
            title="Modern Spring Boot Development" 
            desc="Architecting secure controllers, managing JPA/Hibernate mappings, and handling scalable endpoints." 
          />
          <StrengthCard 
            icon={<Layout size={24} />} 
            title="Responsive Frontend Development" 
            desc="Writing responsive user experiences with modular, reactive ReactJS component interfaces." 
          />
          <StrengthCard 
            icon={<Brain size={24} />} 
            title="Problem Solving Ability" 
            desc="Strong algorithmic debugging approach and structuring logical steps to trace system flows." 
          />
          <StrengthCard 
            icon={<Compass size={24} />} 
            title="Quick Learning Mindset" 
            desc="Keen to explore microservices, AWS configurations, Docker, and caching (Redis) structures." 
          />
          <StrengthCard 
            icon={<Sparkles size={24} />} 
            title="Passion for Software Engineering" 
            desc="Highly enthusiastic about compiling neat scripts, writing mock test coverages, and agile cycles." 
          />
        </div>
        
      </div>
    </section>
  );
};

export default WhyHireMe;
