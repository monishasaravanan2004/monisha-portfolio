import React from 'react';
import useTilt from '../../hooks/useTilt';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, avatar }) => {
  const { elementRef, tiltProps } = useTilt(5, 1.015);

  return (
    <div 
      ref={elementRef}
      {...tiltProps}
      className="glass-card p-6 border-[#D8A7FF]/30 bg-[#0E0C16] flex flex-col justify-between gap-4 tilt-card min-w-[280px] md:min-w-[320px] scroll-snap-align-start hover:border-[#D8A7FF]/60 hover:shadow-[0_0_25px_rgba(216,167,255,0.2)] transition-all text-left"
    >
      <p className="text-xs text-[#E4DFF0] italic leading-relaxed font-normal">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-3 border-t border-[#D8A7FF]/20 pt-3 mt-1">
        <div className="w-10 h-10 rounded-full bg-[#08070B] border border-[#D8A7FF]/40 flex items-center justify-center text-base shadow-sm shrink-0">
          {avatar}
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#FFFFFF] font-heading">{name}</h4>
          <p className="text-[11px] text-[#D8A7FF] font-semibold font-mono mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      name: "Suresh Kumar",
      role: "Senior Engineering Lead",
      quote: "Worked with Monisha on multiple projects. Her ability to trace entity mapping models and build robust Spring Boot APIs is commendable.",
      avatar: "👨‍💻"
    },
    {
      name: "Anjali Sharma",
      role: "Product Coordinator",
      quote: "Monisha quickly grasps backend architectures. Her dedication to clean code standards and responsive layout modules was highly beneficial.",
      avatar: "👩‍💻"
    },
    {
      name: "David Miller",
      role: "Technical Lead Recruiter",
      quote: "Impressive end-to-end full stack application showcasing proper Java spring controllers and decoupled React components.",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-16 relative z-10 border-b border-[#D8A7FF]/20 bg-[#08070B] overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-extrabold mb-2 block drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#FFFFFF]">
            What professionals <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">say about my work</span>.
          </h2>
        </div>
        
        {/* Horizontal scroll container with snap */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-snap-type-x mandatory scrollbar-thin max-w-full">
          {testimonialsData.map((item, idx) => (
            <TestimonialCard 
              key={idx} 
              name={item.name} 
              role={item.role} 
              quote={item.quote} 
              avatar={item.avatar} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
