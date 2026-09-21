import React from 'react';
import useTilt from '../../hooks/useTilt';
import { ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import everbloomImg from '../../assets/projects/everbloom.png';
import workforceImg from '../../assets/projects/workforce_analytics.png';
import layaImg from '../../assets/projects/laya_bharatanatyam.png';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const FeaturedProjects: React.FC = () => {
  const { elementRef: featuredRef, tiltProps: featuredProps } = useTilt(3, 1.01);
  const { elementRef: proj2Ref, tiltProps: proj2Props } = useTilt(4, 1.015);
  const { elementRef: proj3Ref, tiltProps: proj3Props } = useTilt(4, 1.015);

  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)] bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="section-header mb-16 text-center md:text-left">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Software Applications
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight text-[#FFFFFF]">
            Projects.
          </h2>
          <p className="text-sm text-[#E4DFF0] mt-3 max-w-[650px]">
            Explore software applications and web platforms built using Java, Spring Boot, MySQL, ReactJS, and web technologies.
          </p>
        </div>
        
        <div className="flex flex-col gap-10">
          
          {/* 1. EverBloom Event Management System */}
          <div 
            ref={featuredRef}
            {...featuredProps}
            className="glass-card rounded-3xl border-2 border-[#D8A7FF]/40 bg-[#0E0C16] shadow-[0_0_50px_rgba(216,167,255,0.2)] overflow-hidden tilt-card group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Image Mockup Banner */}
              <div className="lg:col-span-7 relative overflow-hidden bg-[#08070B] border-b lg:border-b-0 lg:border-r border-[var(--border-card)] min-h-[280px] sm:min-h-[360px] flex flex-col">
                
                {/* Browser Mockup Top Bar */}
                <div className="bg-[#121018] px-4 py-3 border-b border-[var(--border-card)] flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-[#928B9E] bg-[#08070B] border border-[var(--border-card)] px-3 py-1 rounded-lg text-center truncate max-w-[260px]">
                    https://everbloom-events.local
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-[#D8A7FF] font-mono font-bold bg-[#D8A7FF]/10 px-2 py-0.5 rounded border border-[#D8A7FF]/20">
                    <CheckCircle2 size={12} /> Spring Boot API
                  </div>
                </div>

                {/* Screenshot Image Container */}
                <div className="relative flex-grow overflow-hidden group">
                  <img 
                    src={everbloomImg} 
                    alt="EverBloom Event Management System Preview" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>
              </div>

              {/* Right Content Details */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between gap-6 text-left">
                
                <div className="flex flex-col gap-4">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D8A7FF]/20 to-[#FBBF24]/20 border border-[#D8A7FF]/40 text-[#D8A7FF] shadow-sm">
                      <Sparkles size={13} className="text-[#FBBF24]" /> Full Stack Java Platform
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#F8F7FB] tracking-tight group-hover:text-[#D8A7FF] transition-colors">
                    EverBloom – Event Management System
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#C8C3D0] leading-relaxed">
                    A smart event management platform with Customer, Vendor, and Admin workflows. Built with Spring Boot APIs and database integration.
                  </p>

                  {/* Key Workflow Highlights */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] font-semibold text-[#D8A7FF] bg-[#D8A7FF]/10 border border-[#D8A7FF]/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Layers size={12} /> Customer Portal
                    </span>
                    <span className="text-[11px] font-semibold text-[#FBBF24] bg-[#FBBF24]/10 border border-[#FBBF24]/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Layers size={12} /> Vendor Booking
                    </span>
                    <span className="text-[11px] font-semibold text-[#F8F7FB] bg-[#F8F7FB]/10 border border-[#F8F7FB]/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Layers size={12} /> Admin Dashboard
                    </span>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS'].map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] font-mono font-bold px-3 py-1 rounded-md bg-[#08070B] border border-[#D8A7FF]/25 text-[#D8A7FF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#D8A7FF]/20 w-full">
                  <a 
                    href="#contact" 
                    className="btn bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/monishasaravanan2004" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn border border-[#D8A7FF]/40 bg-[#08070B] text-[#FFFFFF] hover:text-[#D8A7FF] hover:border-[#D8A7FF] font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <GithubIcon size={15} />
                    GitHub
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* 2-COLUMN GRID FOR SECONDARY PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 2. Smart Workforce Analytics Dashboard */}
            <div 
              ref={proj2Ref}
              {...proj2Props}
              className="glass-card rounded-2xl border border-[#D8A7FF]/30 bg-[#0E0C16] flex flex-col justify-between tilt-card overflow-hidden group hover:border-[#D8A7FF]/60 transition-all duration-300"
            >
              <div>
                {/* Image Screenshot Header */}
                <div className="relative overflow-hidden bg-[#08070B] border-b border-[#D8A7FF]/20 h-[220px]">
                  <div className="bg-[#121018] px-3 py-2 border-b border-[#D8A7FF]/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8A7FF] truncate">
                      workforce-analytics.local
                    </span>
                  </div>
                  <img 
                    src={workforceImg} 
                    alt="Smart Workforce Analytics Dashboard Preview" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-3 text-left">
                  <div className="flex flex-wrap gap-1.5">
                    {['ReactJS', 'JavaScript', 'HTML', 'CSS', 'LocalStorage'].map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#08070B] border border-[#D8A7FF]/25 text-[#D8A7FF]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-[#FFFFFF] mt-1 group-hover:text-[#FBBF24] transition-colors">
                    Smart Workforce Analytics Dashboard
                  </h3>
                  
                  <p className="text-xs text-[#E4DFF0] leading-relaxed font-normal">
                    A responsive workforce analytics dashboard that presents employee and workforce data through interactive dashboard components and visual analytics.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap sm:flex-nowrap gap-3 border-t border-[#D8A7FF]/20 mt-4 text-xs font-semibold">
                <a 
                  href="#contact" 
                  className="btn bg-[#D8A7FF]/15 border border-[#D8A7FF]/40 text-[#D8A7FF] hover:bg-[#D8A7FF] hover:text-[#08070B] font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 flex-1 justify-center w-full sm:w-auto"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a 
                  href="https://github.com/monishasaravanan2004" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn border border-[#D8A7FF]/30 bg-[#08070B] text-[#E4DFF0] hover:text-[#FFFFFF] hover:border-[#D8A7FF] text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 flex-1 justify-center w-full sm:w-auto"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>

            {/* 3. Laya Bharatanatyam Website */}
            <div 
              ref={proj3Ref}
              {...proj3Props}
              className="glass-card rounded-2xl border border-[#D8A7FF]/30 bg-[#0E0C16] flex flex-col justify-between tilt-card overflow-hidden group hover:border-[#D8A7FF]/60 transition-all duration-300"
            >
              <div>
                {/* Image Screenshot Header */}
                <div className="relative overflow-hidden bg-[#08070B] border-b border-[#D8A7FF]/20 h-[220px]">
                  <div className="bg-[#121018] px-3 py-2 border-b border-[#D8A7FF]/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8A7FF] truncate">
                      laya-bharatanatyam.local
                    </span>
                  </div>
                  <img 
                    src={layaImg} 
                    alt="Laya Bharatanatyam Website Preview" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-3 text-left">
                  <div className="flex flex-wrap gap-1.5">
                    {['HTML', 'CSS', 'JavaScript'].map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#08070B] border border-[#D8A7FF]/25 text-[#D8A7FF]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-[#FFFFFF] mt-1 group-hover:text-[#FBBF24] transition-colors">
                    Laya Bharatanatyam Website
                  </h3>
                  
                  <p className="text-xs text-[#E4DFF0] leading-relaxed font-normal">
                    A modern and elegant responsive website designed to showcase Bharatanatyam classes, performances, events, and related information.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap sm:flex-nowrap gap-3 border-t border-[#D8A7FF]/20 mt-4 text-xs font-semibold">
                <a 
                  href="#contact" 
                  className="btn bg-[#D8A7FF]/15 border border-[#D8A7FF]/40 text-[#D8A7FF] hover:bg-[#D8A7FF] hover:text-[#08070B] font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 flex-1 justify-center w-full sm:w-auto"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a 
                  href="https://github.com/monishasaravanan2004" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn border border-[#D8A7FF]/30 bg-[#08070B] text-[#E4DFF0] hover:text-[#FFFFFF] hover:border-[#D8A7FF] text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 flex-1 justify-center w-full sm:w-auto"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
