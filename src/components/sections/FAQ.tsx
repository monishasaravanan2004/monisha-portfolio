import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-card)] py-4 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-sm font-semibold font-heading text-[var(--text-primary)] py-2 hover:text-[var(--accent)] transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2 pb-2 pl-1 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Who is Monisha?",
      answer: "Monisha S is a dedicated Java Full Stack Developer and B.Tech Information Technology graduate. She specializes in creating Spring Boot backends and building React applications.",
    },
    {
      question: "What technologies do you know?",
      answer: "Her backend knowledge spans Java, Spring Boot, Spring Security, Hibernate ORM, JPA, REST APIs, and Maven. On the frontend, she utilizes ReactJS, JavaScript (ES6), HTML5, CSS3, and Git.",
    },
    {
      question: "What projects have you built?",
      answer: "Monisha's centerpiece project is a Food Delivery Application. She has also built OmniShop (e-commerce microservices) and FinTrack (portfolio dashboard).",
    },
    {
      question: "What is your strongest skill?",
      answer: "Monisha combines solid core backend structures (layered Controller-Service-Repository architectures) with clean database design (MySQL mappings) and clean frontend layouts.",
    },
    {
      question: "Are you open to work?",
      answer: "Yes, she is looking for immediate opportunities as a Software Engineer, Associate Java Developer, or Full Stack trainee in Bangalore or remote.",
    },
    {
      question: "Can I contact you?",
      answer: "Absolutely! Feel free to mail her at monishamonisaravanan08@gmail.com, call +91 63832 49841, or submit a query through the Contact form below.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)]">
      <div className="max-w-[800px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold mb-2 block">
            FAQ Section
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
            Frequently Asked <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">Questions</span>.
          </h2>
        </div>
        
        <div className="glass-card p-6 md:p-8 border-[rgba(255,255,255,0.06)] shadow-2xl">
          {faqData.map((item, idx) => (
            <FaqItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
