import React, { useEffect, useState, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CustomCursor from './components/common/CustomCursor';
import MoniAI from './components/sections/MoniAI';
import './App.css';

// Animated Scroll Progress Component
const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

// Aurora Gradient Backlight Tracker
const AuroraGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const glowPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    const animate = () => {
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.08;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.left = `${glowPos.current.x}px`;
        glowRef.current.style.top = `${glowPos.current.y}px`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" id="cursor-glow"></div>;
};

// Visual Loading Preloader
const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 12;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      id="preloader" 
      className="fixed inset-0 bg-[#08070B] z-[99999] flex flex-col items-center justify-center transition-all duration-300 ease-out"
    >
      <div className="preloader-logo text-3xl md:text-5xl font-black font-heading tracking-[6px] text-[#FFFFFF] mb-6">
        <span>MONISHA </span>
        <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">S</span>
      </div>
      <div className="preloader-bar-bg w-52 h-1.5 bg-[#0E0C16] border border-[#D8A7FF]/30 rounded-full overflow-hidden mb-3 shadow-[0_0_15px_rgba(216,167,255,0.2)]">
        <div 
          className="preloader-bar h-full bg-gradient-to-r from-[#D8A7FF] via-[#E8C5FF] to-[#FBBF24] shadow-[0_0_12px_rgba(216,167,255,0.6)] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="preloader-text font-mono text-[11px] text-[#D8A7FF] font-extrabold tracking-wider">
        {progress}%
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <HashRouter>
        {/* Custom Trail Cursor */}
        <CustomCursor />
        
        {/* Noise texture overlay */}
        <div className="noise-overlay"></div>
        
        {/* Scroll progress indicators */}
        <ScrollProgress />
        
        {/* Aurora backlit glow */}
        <AuroraGlow />
        
        {/* Ambient Aurora Orbs */}
        <div className="aurora-bg">
          <div className="aurora-orb orb-1"></div>
          <div className="aurora-orb orb-2"></div>
          <div className="aurora-orb orb-3"></div>
          <div className="aurora-orb orb-4"></div>
        </div>

        <div id="app-root" className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Moni AI Floating Chat widget */}
          <MoniAI />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
