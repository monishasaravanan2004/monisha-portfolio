import React, { useEffect, useState } from 'react';
import useTilt from '../../hooks/useTilt';
import { Download, ArrowRight, Code } from 'lucide-react';
import profileImg from '../../assets/profile.png';

const AnimatedCounter: React.FC<{ target: number; decimals?: number; duration?: number }> = ({ target, decimals = 0, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * target;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <>{count.toFixed(decimals)}</>;
};

const TypewriterHeadline: React.FC = () => {
  const [text, setText] = useState('');
  const words = [
    'Java Full Stack Developer',
    'Spring Boot Developer',
    'ReactJS Developer',
    'Backend Developer',
    'Software Engineer'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentWord = words[wordIndex];
    
    const handleType = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    };

    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
    } else {
      timer = setTimeout(handleType, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="typing-container text-xl sm:text-2xl md:text-3xl font-heading text-[#D8A7FF] font-extrabold flex items-center min-h-[40px] mt-2 mb-4 drop-shadow-[0_0_15px_rgba(216,167,255,0.5)]">
      <span>{text}</span>
      <span className="typewriter-cursor w-[3px] h-[30px] bg-[#D8A7FF] ml-1.5 animate-pulse shadow-[0_0_10px_#D8A7FF]"></span>
    </div>
  );
};

interface OrbitIconProps {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay: string;
}

const OrbitIcon: React.FC<OrbitIconProps> = ({ icon, label, className, delay }) => {
  return (
    <div 
      className={`absolute p-2.5 md:p-3 rounded-2xl bg-[#08070B]/90 border border-[#D8A7FF]/30 backdrop-blur-md text-[#D8A7FF] hover:border-[#D8A7FF] hover:text-[#F8F7FB] hover:shadow-[0_0_20px_rgba(216,167,255,0.4)] transition-all duration-300 floating-icon-anim select-none z-20 shadow-md ${className}`}
      style={{ animationDelay: delay }}
      title={label}
    >
      {icon}
    </div>
  );
};

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const { elementRef, tiltProps } = useTilt(6, 1.015);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.012;
      const y = (e.clientY - window.innerHeight / 2) * 0.012;
      setMouseOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 px-6 md:px-16 lg:px-24 relative z-10 overflow-hidden bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Side Column - 60% Width */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pr-0 lg:pr-12 xl:pr-16 order-1">
          
          {/* Availability Badge */}
          <div className="hero-tagline bg-[#D8A7FF]/10 border border-[#D8A7FF]/40 text-[#D8A7FF] font-bold text-xs px-4 py-2 rounded-full flex items-center gap-2 mb-6 shadow-[0_0_15px_rgba(216,167,255,0.25)]">
            <span className="hero-tagline-dot w-2.5 h-2.5 rounded-full bg-[#D8A7FF] animate-pulse shadow-[0_0_8px_#D8A7FF]"></span>
            Available for Full-time Developer Roles
          </div>
          
          {/* Large Name Heading */}
          <div className="flex flex-col gap-1 select-none">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#C8C3D0]">Hi, I am</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight leading-none text-[#F8F7FB] py-1">
              <span>Monisha </span>
              <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,167,255,0.6)]">S</span>
            </h1>
          </div>
          
          {/* Role with Typewriter Loop */}
          <TypewriterHeadline />
          
          {/* Short Introduction Description */}
          <p className="text-base sm:text-lg text-[#C8C3D0] leading-relaxed font-normal max-w-[620px] mb-6">
            I'm a B.Tech Information Technology graduate passionate about software engineering. Building scalable backend systems with <span className="text-[#D8A7FF] font-bold">Java</span>, <span className="text-[#D8A7FF] font-bold">Spring Boot</span>, and <span className="text-[#D8A7FF] font-bold">MySQL</span> while creating interactive frontend experiences using <span className="text-[#D8A7FF] font-bold">ReactJS</span>.
          </p>
          
          {/* Social Icons & Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a 
              href="https://linkedin.com/in/monishaaravanan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8A7FF]/30 bg-[#08070B] text-xs font-mono font-bold text-[#F8F7FB] hover:text-[#08070B] hover:bg-[#D8A7FF] hover:border-[#D8A7FF] hover:shadow-[0_0_15px_rgba(216,167,255,0.4)] transition-all"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/monishasaravanan2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8A7FF]/30 bg-[#08070B] text-xs font-mono font-bold text-[#F8F7FB] hover:text-[#08070B] hover:bg-[#D8A7FF] hover:border-[#D8A7FF] hover:shadow-[0_0_15px_rgba(216,167,255,0.4)] transition-all"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
            <a href="#skills" aria-label="Code Skills" className="w-9 h-9 rounded-full border border-[#D8A7FF]/20 bg-[#08070B] flex items-center justify-center text-[#C8C3D0] hover:text-[#F8F7FB] hover:border-[#D8A7FF] hover:bg-[#D8A7FF]/20 hover:shadow-[0_0_15px_rgba(216,167,255,0.4)] transition-all">
              <Code size={16} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions flex flex-wrap gap-4 mb-14 w-full sm:w-auto">
            <a href="#resume" className="btn border-2 border-[#D8A7FF] text-[#D8A7FF] hover:bg-[#D8A7FF] hover:text-[#08070B] font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_0_20px_rgba(216,167,255,0.3)] hover:scale-[1.04] transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              <Download size={16} />
              View Resume
            </a>
            <a href="#contact" className="btn bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(216,167,255,0.45)] hover:scale-[1.04] transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full pt-8 border-t border-[#D8A7FF]/20 text-left">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-[#FFFFFF]">
                <AnimatedCounter target={4} />
              </h3>
              <p className="text-xs text-[#E4DFF0] mt-1 font-bold">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-[#D8A7FF] filter drop-shadow-[0_0_10px_rgba(216,167,255,0.4)]">
                <AnimatedCounter target={12} />
              </h3>
              <p className="text-xs text-[#E4DFF0] mt-1 font-bold">Technologies</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-[#FFFFFF]">
                <AnimatedCounter target={1} />
              </h3>
              <p className="text-xs text-[#E4DFF0] mt-1 font-bold">Internship</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-[#D8A7FF] filter drop-shadow-[0_0_10px_rgba(216,167,255,0.4)]">
                <AnimatedCounter target={8.93} decimals={2} />
              </h3>
              <p className="text-xs text-[#E4DFF0] mt-1 font-bold">Current CGPA</p>
            </div>
          </div>
        </div>
        
        {/* Right Side Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 order-2">
          
          {/* Circular Glassmorphism Frame Wrapper */}
          <div 
            ref={elementRef}
            {...tiltProps}
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
            className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full p-2.5 bg-gradient-to-tr from-[#D8A7FF] via-[#FBBF24] to-[#C084FC] border-2 border-[#D8A7FF] backdrop-blur-xl flex items-center justify-center shadow-[0_0_70px_rgba(216,167,255,0.45)] animate-float duration-[8s] transition-transform duration-200 z-10 tilt-card"
          >
            {/* User Profile Image */}
            <div 
              className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 relative bg-cover"
              style={{ 
                backgroundImage: `url(${profileImg})`,
                backgroundPosition: 'center 15%',
                backgroundSize: 'cover'
              }}
            >
              {/* Soft colorful lighting backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent mix-blend-overlay"></div>
            </div>
          </div>
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
              <OrbitIcon icon={<span className="text-base font-bold">☕</span>} label="Java" className="top-[-5%] left-[22%]" delay="0s" />
              <OrbitIcon icon={<span className="text-base font-bold">🍃</span>} label="Spring Boot" className="top-[30%] left-[-10%]" delay="-1s" />
              <OrbitIcon icon={<span className="text-base font-bold">⚛️</span>} label="ReactJS" className="top-[75%] left-[-5%]" delay="-2s" />
              <OrbitIcon icon={<span className="text-base font-bold">🐬</span>} label="MySQL" className="top-[95%] left-[25%]" delay="-3s" />
              <OrbitIcon icon={<span className="text-base font-bold">🌐</span>} label="HTML5" className="top-[95%] right-[25%]" delay="-4s" />
              <OrbitIcon icon={<span className="text-base font-bold">🎨</span>} label="CSS3" className="top-[75%] right-[-5%]" delay="-1.5s" />
              <OrbitIcon icon={<span className="text-base font-bold">📜</span>} label="JavaScript" className="top-[30%] right-[-10%]" delay="-2.5s" />
              <OrbitIcon icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15V9a4 4 0 0 0-4-4H9M6 9v6"/></svg>
              } label="Git" className="top-[-5%] right-[22%]" delay="-3.5s" />
              <OrbitIcon icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              } label="GitHub" className="top-[50%] left-[-15%]" delay="-0.5s" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
