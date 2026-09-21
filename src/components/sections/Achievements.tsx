import React from 'react';
import useTilt from '../../hooks/useTilt';
import { Award, Zap, Code } from 'lucide-react';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, desc }) => {
  const { elementRef, tiltProps } = useTilt(6, 1.02);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-6 border-[rgba(255,255,255,0.06)] flex flex-col items-start gap-4 tilt-card"
    >
      <div className="w-10 h-10 rounded-lg bg-[rgba(216,167,255,0.1)] border border-[rgba(216,167,255,0.2)] flex items-center justify-center text-[#D8A7FF]">
        {icon}
      </div>
      <h3 className="text-base font-bold font-heading text-[var(--text-primary)] mt-1">{title}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center md:text-left">
          <span className="section-label text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold mb-2 block">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
            Notable <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">landmarks &amp; accomplishments</span>.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AchievementCard 
            icon={<Award size={18} />} 
            title="Academic Excellence" 
            desc="Maintained an outstanding academic record of 8.93 CGPA in B.Tech IT at Sri Ramanujar Engineering College." 
          />
          <AchievementCard 
            icon={<Zap size={18} />} 
            title="Java Full Stack Intern" 
            desc="Gained hands-on experience through Java Full Stack training and internship at Besant Technologies." 
          />
          <AchievementCard 
            icon={<Code size={18} />} 
            title="Software Engineering Trainee" 
            desc="Built responsive frontend modules and REST-compatible Java backend endpoints with MySQL DB integration." 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
