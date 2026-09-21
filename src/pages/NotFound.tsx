import React from 'react';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="glass-card max-w-[450px] p-8 border-[rgba(255,255,255,0.06)] text-center flex flex-col items-center gap-6 shadow-2xl tilt-card">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-3xl font-heading font-black">
          404
        </div>
        
        <div>
          <h1 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Page Not Found</h1>
          <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
        </div>
        
        <a 
          href="/"
          className="btn btn-primary bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-xs px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.03] transition-all"
        >
          <Home size={14} /> Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
