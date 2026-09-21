import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatBubble {
  sender: 'bot' | 'user';
  text: string;
  isTyping?: boolean;
}

export const MoniAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [chatLogs, setChatLogs] = useState<ChatBubble[]>([
    { sender: 'bot', text: "Hi there! I am Moni AI, Monisha's digital assistant. How can I help you learn about her achievements today?" },
  ]);

  const logsEndRef = useRef<HTMLDivElement>(null);

  const aiReplies: Record<string, string> = {
    "Who is Monisha?": "Monisha S is an enterprise-oriented Java Full Stack Developer. She is a B.Tech Information Technology graduate with experience building web platforms utilizing Spring Boot servers, MySQL databases, and React components.",
    "What technologies does she know?": "Her core technology stack covers:\n- Backend: Java, Spring Boot, Spring Security, Hibernate, Data JPA\n- Frontend: ReactJS, ES6 JavaScript, CSS3, HTML5\n- Relational DB: MySQL\n- Build Tools: Maven, Postman, Git/GitHub, Eclipse IDE, VS Code, MySQL Workbench",
    "Explain Featured Projects.": "Her featured projects include:\n1. EverBloom – Event Management System (Main Featured): Java, Spring Boot, MySQL, HTML, CSS with Customer, Vendor, and Admin workflows.\n2. Smart Workforce Analytics Dashboard: ReactJS, JavaScript, LocalStorage interactive analytics.\n3. Laya Bharatanatyam Website: Responsive HTML, CSS, JS cultural arts platform.",
    "Explain the Food Delivery Application.": "Her centerpiece Food Delivery Application is a layered MVC full stack system built with Spring Boot backend REST APIs and a React client storefront. Mapped across 15+ MySQL tables, it handles separate dashboards for customers, restaurant owners, admins, and delivery partners under JWT token authorizations.",
    "Why should I hire her?": "Monisha combines solid OOP Java structures with modern React layouts. She has practical hands-on experience from her training and internship at Besant Technologies, is a quick learner, and focuses on code cleanliness and database optimizations.",
    "Show internship.": "Monisha is currently gaining hands-on experience through Java Full Stack training and internship at Besant Technologies. Her duties include building REST APIs with Spring Boot, managing MySQL entity mappings, and crafting responsive React interfaces.",
    "Show education.": "She completed her Bachelor of Technology in Information Technology at Sri Ramanujar Engineering College (2022 - 2026) with an outstanding grade score of 8.93 CGPA."
  };

  const handleQuery = (query: string) => {
    if (chatLogs[chatLogs.length - 1]?.isTyping) return; // Prevent multiple clicks during typing

    // 1. Add User message
    const withUser = [...chatLogs, { sender: 'user', text: query } as ChatBubble];
    setChatLogs(withUser);

    // 2. Add Typing bubble
    const withTyping = [...withUser, { sender: 'bot', text: '', isTyping: true } as ChatBubble];
    setTimeout(() => {
      setChatLogs(withTyping);
    }, 300);

    // 3. Resolve Answer with Typewriter loop
    setTimeout(() => {
      const responseText = aiReplies[query] || "I'm sorry, I don't have that information. Click the options below to explore!";
      
      // Remove typing bubble and set empty bot bubble
      const baseLogs = withUser;
      let typedText = '';
      let charIdx = 0;

      const typingTimer = setInterval(() => {
        typedText += responseText.charAt(charIdx);
        setChatLogs([...baseLogs, { sender: 'bot', text: typedText }]);
        charIdx++;
        if (charIdx >= responseText.length) {
          clearInterval(typingTimer);
        }
      }, 12);

    }, 1300);
  };

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLogs]);

  return (
    <div id="moni-ai-widget" className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Floating Action Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        id="moni-ai-toggle"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#D8A7FF] to-[#FBBF24] hover:scale-110 shadow-[0_0_25px_rgba(216,167,255,0.4)] flex items-center justify-center text-[#08070B] font-bold relative transition-all duration-300"
        aria-label="Open Moni AI Chat"
      >
        <MessageSquare size={24} />
        {showBadge && (
          <span className="ai-toggle-badge absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#D8A7FF] border-2 border-[#08070B] rounded-full animate-bounce shadow-[0_0_8px_#D8A7FF]"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          id="moni-ai-chat" 
          className="absolute bottom-16 right-0 w-[340px] max-w-[calc(100vw-2rem)] h-[440px] bg-[var(--bg-card)] border border-[#D8A7FF]/30 backdrop-blur-xl rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
        >
          <div className="ai-header bg-gradient-to-r from-[#D8A7FF]/10 via-[#FBBF24]/10 to-[#D8A7FF]/10 border-b border-[var(--border-card)] p-4 flex items-center justify-between">
            <div className="ai-header-profile flex items-center gap-3">
              <div className="ai-avatar w-8 h-8 rounded-full bg-gradient-to-tr from-[#D8A7FF] to-[#FBBF24] p-0.5 flex items-center justify-center text-sm text-[#08070B] font-bold shadow-md">🤖</div>
              <div className="ai-info">
                <h4 className="text-xs font-bold text-[var(--text-primary)]">Moni AI</h4>
                <p className="text-[9px] text-[#D8A7FF] font-medium">🟢 Online Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="ai-close text-[var(--text-secondary)] hover:text-[var(--text-primary)]" 
              aria-label="Close Chat"
            >
              <X size={16} />
            </button>
          </div>

          <div 
            id="moni-ai-logs" 
            className="ai-logs flex-grow p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin text-xs"
          >
            {chatLogs.map((bubble, idx) => (
              <div 
                key={idx} 
                className={`flex max-w-[80%] rounded-2xl p-3 leading-relaxed whitespace-pre-wrap ${
                  bubble.sender === 'user'
                    ? 'self-end bg-[#D8A7FF] text-[#08070B] font-semibold'
                    : 'self-start bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] text-[var(--text-primary)]'
                }`}
              >
                {bubble.isTyping ? (
                  <div className="ai-typing-indicator flex gap-1 items-center py-1">
                    <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                ) : (
                  bubble.text
                )}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>

          {/* Quick Query Suggestion Panel */}
          <div className="ai-suggestions-panel p-3 border-t border-[var(--border-card)] bg-[rgba(17,24,39,0.3)]">
            <div className="ai-suggestions-title text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Quick Queries</div>
            <div className="ai-suggestions-grid grid grid-cols-2 gap-1.5">
              {[
                "Who is Monisha?", "What tech does she know?",
                "Explain Food App", "Why hire her?",
                "Show internship.", "Show education."
              ].map((text) => {
                // Map display text to actual query keys
                const mapQuery = () => {
                  if (text === "What tech does she know?") return "What technologies does she know?";
                  if (text === "Explain Food App") return "Explain the Food Delivery Application.";
                  return text;
                };
                return (
                  <button
                    key={text}
                    onClick={() => handleQuery(mapQuery())}
                    className="ai-suggest-btn px-2.5 py-1.5 text-left border border-[var(--border-card)] bg-[rgba(255,255,255,0.01)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg text-[10px] truncate"
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MoniAI;
