import React from 'react';
import useTilt from '../../hooks/useTilt';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface InternshipCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  initials: string;
  highlights: string[];
  gradient: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ 
  company, 
  role, 
  period, 
  location, 
  badge, 
  initials, 
  highlights, 
  gradient 
}) => {
  const { elementRef, tiltProps } = useTilt(3, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-8 md:p-10 border-[#D8A7FF]/20 tilt-card relative overflow-hidden group hover:border-[#D8A7FF]/60 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        
        {/* Company Avatar Badge */}
        <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center text-[#08070B] font-black text-xl font-heading shadow-lg shrink-0`}>
          {initials}
        </div>
        
        {/* Internship Details */}
        <div className="intern-details flex-grow text-left">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-mono text-[#D8A7FF] font-bold uppercase tracking-wider">{company}</span>
                <span className="text-[10px] font-mono text-[#FBBF24] bg-[#FBBF24]/10 border border-[#FBBF24]/30 px-2.5 py-0.5 rounded-full font-bold">
                  {badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#F8F7FB] group-hover:text-[#D8A7FF] transition-colors">
                {role}
              </h3>
            </div>
            
            <div className="flex flex-col sm:items-end gap-1 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F8F7FB] px-3 py-1 rounded-full bg-[#08070B]/80 border border-[#D8A7FF]/30">
                <Calendar size={12} className="text-[#D8A7FF]" /> {period}
              </span>
              <span className="text-[11px] font-mono text-[#928B9E] flex items-center gap-1">
                <MapPin size={12} /> {location}
              </span>
            </div>
          </div>
          
          <ul className="flex flex-col gap-2.5 text-sm text-[#C8C3D0] mt-4 pt-4 border-t border-[var(--border-card)]/60">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#D8A7FF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1100px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Internships &amp; Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Professional <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">Internships &amp; Hands-on Experience</span>.
          </h2>
          <p className="text-sm text-[#E4DFF0] mt-3 max-w-[600px] mx-auto">
            Practical software development experience and verified engineering internships in Java Full Stack and Web Development.
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          
          {/* 1. bDreams Global Solution */}
          <InternshipCard 
            company="bDreams Global Solution"
            role="Java Full Stack Developer Intern"
            period="Present"
            location="Chennai / Remote, India"
            badge="Current Role"
            initials="bD"
            gradient="bg-gradient-to-tr from-[#D8A7FF] to-[#FBBF24]"
            highlights={[
              "Developing scalable full-stack web applications utilizing Java Core, Spring Boot, REST APIs, and ReactJS.",
              "Designing relational database entities and configuring MySQL schemas with Hibernate ORM data mappers.",
              "Building responsive client user interfaces with ReactJS, custom hooks, and Tailwind CSS components.",
              "Collaborating on full-stack web application features and API endpoint integrations."
            ]}
          />

          {/* 2. Besant Technologies */}
          <InternshipCard 
            company="Besant Technologies"
            role="Java Full Stack Trainee & Intern"
            period="2025 - 2026"
            location="Chennai, India"
            badge="Trainee Internship"
            initials="BT"
            gradient="bg-gradient-to-tr from-[#FBBF24] to-[#D8A7FF]"
            highlights={[
              "Completed intensive hands-on Java Full Stack training covering OOPs, Spring Boot, MySQL, and ReactJS.",
              "Engineered RESTful web services with Spring Boot controllers, dependency injection, and JPA repository abstractions.",
              "Constructed interactive frontend interfaces using React components, state management, and modern CSS layout systems.",
              "Utilized Git & GitHub for version control, branch workflows, and code repository management."
            ]}
          />

          {/* 3. NLC India Limited */}
          <InternshipCard 
            company="NLC India Limited"
            role="Web Development Internship (Mines Digitalisation)"
            period="27-08-2024 to 09-09-2024"
            location="Neyveli, India"
            badge="Govt Enterprise Internship"
            initials="NLC"
            gradient="bg-gradient-to-tr from-[#D8A7FF] via-[#FBBF24] to-[#C084FC]"
            highlights={[
              "Successfully completed Internship Training on Mines Digitalisation at Mine-I, Learning & Development Centre, NLC India Limited.",
              "Gained practical exposure to web development standards, enterprise digital reporting systems, and data workflows.",
              "Collaborated with technical teams on web-based information architectures and digital transformation concepts."
            ]}
          />

        </div>
        
      </div>
    </section>
  );
};

export default Experience;
