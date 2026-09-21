import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 border border-transparent hover:bg-[rgba(255,255,255,0.03)] hover:border-[var(--border-card)]"
      aria-label="Toggle light or dark theme"
    >
      {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;
