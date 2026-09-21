import { useRef, type MouseEvent } from 'react';

export const useTilt = (maxRotate = 8, scale = 1.02) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    // Disable tilt on smaller viewports / touch devices for mobile friendliness
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const el = elementRef.current;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateX = ((height / 2 - mouseY) / (height / 2)) * maxRotate;
    const rotateY = ((mouseX - width / 2) / (width / 2)) * maxRotate;
    
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = () => {
    if (!elementRef.current) return;
    elementRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return {
    elementRef,
    tiltProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave
    }
  };
};
export default useTilt;
