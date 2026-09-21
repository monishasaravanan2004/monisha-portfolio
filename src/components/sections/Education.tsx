import React, { useEffect, useState } from 'react';
import useTilt from '../../hooks/useTilt';

const AnimatedCGPA: React.FC<{ target: number; duration?: number }> = ({ target, duration = 1500 }) => {
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

  return <>{count.toFixed(2)}</>;
};

export const Education: React.FC = () => {
  const { elementRef, tiltProps } = useTilt(3, 1.01);

  return (
    <section id="education" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B]">
      <div className="max-w-[1100px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Academics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            Academic <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">pathway &amp; grades</span>.
          </h2>
        </div>
        
        <div 
          ref={elementRef}
          {...tiltProps}
          className="glass-card p-8 md:p-10 border-[#D8A7FF]/30 bg-[#0E0C16] tilt-card relative overflow-hidden shadow-2xl hover:border-[#D8A7FF]/60 hover:shadow-[0_0_35px_rgba(216,167,255,0.25)] transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 flex flex-col items-start gap-4 text-left">
              <span className="grad-icon text-4xl">🎓</span>
              <div>
                <h3 className="text-2xl font-extrabold font-heading text-[#FFFFFF]">Sri Ramanujar Engineering College</h3>
                <p className="text-base text-[#D8A7FF] font-bold mt-1">Bachelor of Technology — Information Technology</p>
              </div>
              
              <p className="text-sm text-[#E4DFF0] leading-relaxed max-w-[650px] font-normal">
                Graduated with a Bachelor of Technology degree in Information Technology, focusing on object-oriented programming, databases, data structures, network security, operating systems, and web application development.
              </p>
              
              <p className="text-xs text-[#B6AECA] font-semibold mt-2 font-mono">
                Timeline: 2022 – 2026 (Graduated)
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-center items-center">
              <div className="cgpa-circle w-36 h-36 rounded-full border-4 border-transparent bg-gradient-to-tr from-[#D8A7FF] via-[#FBBF24] to-[#C084FC] p-[3px] shadow-[0_0_30px_rgba(216,167,255,0.35)] hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#08070B] flex flex-col items-center justify-center">
                  <span className="cgpa-num text-3xl font-black font-heading bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">
                    <AnimatedCGPA target={8.93} />
                  </span>
                  <span className="cgpa-label text-[10px] text-[#D8A7FF] font-bold uppercase tracking-widest mt-1">Overall CGPA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
