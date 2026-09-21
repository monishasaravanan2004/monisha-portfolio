import React from 'react';
import useTilt from '../../hooks/useTilt';
import profileImg from '../../assets/profile.png';

interface StoryCardProps {
  num: string;
  title: string;
  desc: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ num, title, desc }) => {
  const { elementRef, tiltProps } = useTilt(6, 1.015);
  
  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-7 flex flex-col justify-start items-start gap-3 border-[#D8A7FF]/30 bg-[#0E0C16] relative group tilt-card hover:border-[#D8A7FF]/60 hover:shadow-[0_0_25px_rgba(216,167,255,0.2)] transition-all"
    >
      <span className="text-xs font-mono text-[#D8A7FF] font-bold tracking-wider drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">{num}</span>
      <h3 className="text-lg font-bold font-heading text-[#FFFFFF] group-hover:text-[#FBBF24] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-[#E4DFF0] leading-relaxed font-normal">
        {desc}
      </p>
    </div>
  );
};

export const About: React.FC = () => {
  const { elementRef, tiltProps } = useTilt(4, 1.01);

  return (
    <section id="about" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Dual-Color Heading */}
        <div className="section-header mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-[#FFFFFF]">
            <span>About </span>
            <span className="text-[#D8A7FF] drop-shadow-[0_0_20px_rgba(216,167,255,0.6)]">Me</span>
          </h2>
        </div>

        {/* 2-Column About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Side Profile Image Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div 
              ref={elementRef}
              {...tiltProps}
              className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full p-2 bg-gradient-to-tr from-[#D8A7FF] via-[#FBBF24] to-[#C084FC] border border-white/20 shadow-[0_0_50px_rgba(216,167,255,0.4)] flex items-center justify-center tilt-card"
            >
              <div 
                className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${profileImg})`,
                  backgroundPosition: 'center 15%',
                  backgroundSize: 'cover'
                }}
              />
            </div>
          </div>

          {/* Right Side Bio Text */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            <p className="text-base sm:text-lg text-[#E4DFF0] leading-relaxed font-normal">
              Enthusiastic and self-motivated <strong className="text-[#D8A7FF] font-bold">B.Tech Information Technology graduate</strong> with a strong foundation in <strong className="text-[#D8A7FF] font-bold">Java</strong>, <strong className="text-[#D8A7FF] font-bold">Spring Boot</strong>, <strong className="text-[#D8A7FF] font-bold">MySQL</strong>, and <strong className="text-[#D8A7FF] font-bold">ReactJS</strong>.
            </p>
            <p className="text-base sm:text-lg text-[#E4DFF0] leading-relaxed font-normal">
              Experienced in developing full-stack web applications with REST APIs, database integration, responsive frontend interfaces, and structured backend development.
            </p>
            <p className="text-base sm:text-lg text-[#E4DFF0] leading-relaxed font-normal">
              Currently gaining hands-on experience through Java Full Stack developer training and internships at <strong className="text-[#FBBF24] font-extrabold">bDreams Global Solution</strong> &amp; <strong className="text-[#FBBF24] font-extrabold">Besant Technologies</strong>. Passionate about building practical software solutions and continuously learning modern technologies.
            </p>
          </div>

        </div>
        
        {/* 3 Story Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard 
            num="01" 
            title="Who I Am" 
            desc="Java Full Stack Developer with hands-on expertise across backend servers, databases, microservices, and modern frontend interfaces."
          />
          <StoryCard 
            num="02" 
            title="My Journey &amp; Goals" 
            desc="Building structured software projects focusing on entity relational designs, REST endpoint routing, and state synchronization."
          />
          <StoryCard 
            num="03" 
            title="Career Vision" 
            desc="Striving to excel as a Software Engineer, refining backend system design, microservices, and enterprise application delivery."
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;

