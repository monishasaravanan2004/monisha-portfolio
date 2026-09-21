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
      className="glass-card p-6 border-[rgba(255,255,255,0.06)] flex flex-col justify-between gap-4 tilt-card min-w-[280px] md:min-w-[320px] scroll-snap-align-start"
    >
      <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-3 border-t border-[var(--border-card)] pt-3 mt-1">
        <div className="w-9 h-9 rounded-full bg-[var(--bg-main)] border border-[var(--border-card)] flex items-center justify-center text-sm">{avatar}</div>
        <div>
          <h4 className="text-xs font-bold text-[var(--text-primary)]">{name}</h4>
          <p className="text-[10px] text-[var(--accent)] font-semibold">{role}</p>
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
    <section id="testimonials" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)] overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
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
