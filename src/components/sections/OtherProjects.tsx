import React from 'react';
import useTilt from '../../hooks/useTilt';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tags: string[];
  desc: string;
  githubUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, desc, githubUrl, previewUrl }) => {
  const { elementRef, tiltProps } = useTilt(6, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card flex flex-col justify-between border-[rgba(255,255,255,0.06)] tilt-card overflow-hidden"
    >
      <div className="project-media p-6 bg-[rgba(255,255,255,0.01)] border-b border-[var(--border-card)] flex flex-col gap-2">
        <div className="preview-bar flex gap-1 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60"></span>
        </div>
        <div className="h-2 w-3/4 bg-[var(--accent)]/20 rounded"></div>
        <div className="h-2 w-1/2 bg-[var(--text-muted)]/20 rounded"></div>
        <div className="h-2 w-1/3 bg-[var(--text-muted)]/20 rounded"></div>
      </div>
      
      <div className="project-info p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="project-tags flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <span key={idx} className="proj-tag text-[9px] font-bold font-mono px-2 py-0.5 rounded-md bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="project-title text-lg font-bold font-heading text-[var(--text-primary)] mt-1">{title}</h3>
          <p className="project-desc text-xs text-[var(--text-secondary)] leading-relaxed">{desc}</p>
        </div>

        <div className="project-links flex gap-4 pt-4 border-t border-[var(--border-card)] text-xs font-semibold">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Source Code
          </a>
          <a 
            href={previewUrl} 
            className="project-link flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <ExternalLink size={14} /> Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export const OtherProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative z-10">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center md:text-left">
          <span className="section-label text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold mb-2 block">
            Other Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
            Additional projects <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">mapping my development skills</span>.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="OmniShop: E-Commerce Microservices"
            tags={['Java', 'Spring Boot', 'MySQL', 'ReactJS', 'Microservices']}
            desc="A high-availability e-commerce platform built using a microservices architecture. Designed product catalogues and ordering REST APIs using Spring Boot, integrated with MySQL and Hibernate ORM. Leveraged Spring Cloud for discovery patterns and compiled a modular storefront in ReactJS."
            githubUrl="https://github.com"
            previewUrl="#"
          />
          <ProjectCard 
            title="FinTrack: FinTech Dashboard"
            tags={['Java Core', 'Spring Boot', 'MySQL', 'ReactJS']}
            desc="A secure portfolio tracker mapping transaction histories. Created optimized relational MySQL database tables and engineered Spring Boot REST endpoints supplying metrics data points. Frontend utilizes React with interactive charts."
            githubUrl="https://github.com"
            previewUrl="#"
          />
        </div>
        
      </div>
    </section>
  );
};

export default OtherProjects;
