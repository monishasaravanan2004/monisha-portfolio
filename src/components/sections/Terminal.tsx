import React, { useState, useRef, useEffect, type KeyboardEvent } from 'react';

interface TerminalLine {
  text: string;
  isCmd?: boolean;
  cmdStr?: string;
  isError?: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<TerminalLine[]>([
    { text: "Welcome to Monisha's interactive terminal shell." },
    { text: "Type 'help' to see list of commands, or click suggestions below." },
  ]);

  const windowRef = useRef<HTMLDivElement>(null);

  const commandsList: Record<string, string> = {
    help: "Available commands:\n  help       - Display list of commands\n  about      - Profile info about Monisha\n  skills     - Backend, frontend, & databases stack\n  projects   - Showcase of built applications\n  education  - Academic credentials\n  internship - Internship description\n  resume     - Highlights of curriculum vitae\n  contact    - Contact lines\n  whoami     - Prints current session identity\n  cat about.txt - Prints Headline details\n  tree       - Projects directory tree\n  clear      - Clear log lines",
    about: "Name: Monisha S\nTitle: Java Full Stack Developer\nStatus: B.Tech Information Technology Graduate | Java Full Stack Intern @ Besant Technologies",
    skills: "Technical Stack:\n  Backend: Java Core, Spring Boot, JPA, REST APIs, Hibernate\n  Frontend: ReactJS, JavaScript, HTML5, CSS3\n  Database: MySQL\n  Tools: Git, GitHub, Maven, Postman, Eclipse IDE, VS Code, MySQL Workbench",
    projects: "Featured Works:\n  1. EverBloom (Main Featured) - Event Management System (Java, Spring Boot, MySQL)\n  2. Smart Workforce Analytics Dashboard - ReactJS, JS, LocalStorage\n  3. Laya Bharatanatyam Website - Responsive HTML, CSS, JavaScript",
    education: "Sri Ramanujar Engineering College\n  Degree: B.Tech in IT (Graduated 2026)\n  Grades: 8.93 CGPA",
    internship: "Besant Technologies\n  Role: Java Full Stack Developer Intern & Trainee\n  Details: Building Java Spring Boot REST APIs, MySQL schemas, and ReactJS client interfaces.",
    resume: "Resume Summary:\n  CGPA: 8.93 | Internship: Besant Technologies\n  Check CV download buttons in the Resume section above!",
    contact: "Contact Details:\n  Email: monishamonisaravanan08@gmail.com\n  Phone: +91 63832 49841\n  Base: Bangalore, India",
    whoami: "guest@recruiter.node",
    "cat about.txt": "monisha.s.developer@headline:\n  \"Building scalable backend systems with Java & Spring Boot while creating modern, responsive user experiences using ReactJS.\"",
    tree: "monisha-portfolio/\n├── index.html\n├── src/\n│   ├── assets/projects/\n│   │   ├── everbloom.png\n│   │   ├── workforce_analytics.png\n│   │   └── laya_bharatanatyam.png\n│   └── components/sections/\n│       ├── FeaturedProjects.tsx\n│       ├── CaseStudy.tsx\n│       └── ...\n└── dist/"
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim();
    if (cleanCmd === '') return;

    const lowerCmd = cleanCmd.toLowerCase();
    
    // Add user typed line to logs
    const newLogs = [...logs, { text: cmd, isCmd: true, cmdStr: 'monisha@developer:~$ ' }];

    if (lowerCmd === 'clear') {
      setLogs([
        { text: "Welcome to Monisha's interactive terminal shell." },
        { text: "Type 'help' to see list of commands, or click suggestions below." }
      ]);
      setInputVal('');
      return;
    }

    if (commandsList[lowerCmd]) {
      setLogs([...newLogs, { text: commandsList[lowerCmd] }]);
    } else {
      setLogs([...newLogs, { text: `bash: command not found: ${cleanCmd}. Type 'help' to see suggestions.`, isError: true }]);
    }
    
    setInputVal('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTop = windowRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section id="terminal-section" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)]">
      <div className="max-w-[900px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold mb-2 block">
            Playground
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--text-primary)]">
            Developer <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">terminal console</span>.
          </h2>
        </div>
        
        <div className="glass-card terminal-card rounded-2xl overflow-hidden border-[var(--border-card)] bg-[var(--bg-main)] shadow-2xl flex flex-col">
          <div className="terminal-header bg-[rgba(255,255,255,0.02)] border-b border-[var(--border-card)] px-4 py-3 flex items-center justify-between">
            <div className="browser-dots flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
            <div className="terminal-title text-xs text-[var(--text-secondary)] font-mono">
              monisha@developer-node: ~
            </div>
            <div></div>
          </div>
          
          <div 
            ref={windowRef}
            className="terminal-window p-6 h-[300px] overflow-y-auto font-mono text-xs flex flex-col gap-2 bg-black/40 text-gray-300"
          >
            {logs.map((line, idx) => (
              <div key={idx} className="terminal-line whitespace-pre-wrap">
                {line.isCmd ? (
                  <>
                    <span className="text-[#D8A7FF] font-bold">{line.cmdStr}</span>
                    <span>{line.text}</span>
                  </>
                ) : (
                  <span className={line.isError ? 'text-red-400' : 'text-gray-300'}>
                    {line.text}
                  </span>
                )}
              </div>
            ))}
            
            <div className="terminal-input-row flex items-center gap-2 mt-1">
              <span className="text-[#D8A7FF] font-bold font-mono">monisha@developer:~$</span>
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input bg-transparent border-none outline-none flex-grow text-gray-300 font-mono p-0 focus:ring-0" 
                placeholder="Type a command..."
                autoComplete="off"
              />
            </div>
          </div>
          
          {/* Quick Suggest Buttons */}
          <div className="p-4 bg-[rgba(17,24,39,0.3)] border-t border-[var(--border-card)]">
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {(['help', 'about', 'skills', 'projects', 'internship', 'whoami', 'tree', 'clear'] as const).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="terminal-cmd-btn px-3 py-1 rounded-md bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-all"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Terminal;
