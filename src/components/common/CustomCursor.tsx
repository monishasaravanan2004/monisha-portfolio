import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [hoverText, setHoverText] = useState('Explore');
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const textCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable custom cursor on touch devices to ensure clean UX
    const checkTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(checkTouch);
    if (checkTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;

    const updatePosition = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseCoords.current.x}px`;
        dotRef.current.style.top = `${mouseCoords.current.y}px`;
      }

      // Linear interpolation to make the cursor ring float smoothly behind
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * 0.15;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`;
        ringRef.current.style.top = `${ringCoords.current.y}px`;
      }

      // Text follower interpolation
      textCoords.current.x += (mouseCoords.current.x - textCoords.current.x) * 0.15;
      textCoords.current.y += (mouseCoords.current.y - textCoords.current.y) * 0.15;
      if (textRef.current) {
        textRef.current.style.left = `${textCoords.current.x}px`;
        textRef.current.style.top = `${textCoords.current.y}px`;
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    animationId = requestAnimationFrame(updatePosition);

    // Connect event listeners to active hover targets
    const attachHoverHandlers = () => {
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, .tab-btn, .gallery-thumb-btn, .terminal-cmd-btn, .ai-suggest-btn'
      );
      
      hoverables.forEach((element) => {
        const handleMouseEnter = () => {
          document.body.classList.add('cursor-active');
          
          if (element.classList.contains('btn-primary') || element.classList.contains('nav-cta')) {
            setHoverText('Explore');
          } else if (element.classList.contains('gallery-thumb-btn')) {
            setHoverText('View');
          } else if (element.classList.contains('terminal-cmd-btn')) {
            setHoverText('Run');
          } else {
            setHoverText('Click');
          }
        };

        const handleMouseLeave = () => {
          document.body.classList.remove('cursor-active');
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Brief timeout to ensure components are parsed
    const timer = setTimeout(attachHoverHandlers, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div id="custom-cursor-dot" ref={dotRef} className="hidden md:block"></div>
      <div id="custom-cursor-ring" ref={ringRef} className="hidden md:block"></div>
      <span className="cursor-hover-text hidden md:block" ref={textRef} id="cursor-hover-text">
        {hoverText}
      </span>
    </>
  );
};

export default CustomCursor;
