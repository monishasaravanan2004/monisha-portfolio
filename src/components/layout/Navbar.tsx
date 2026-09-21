import React, { useEffect, useState } from 'react';
import ThemeToggle from '../common/ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky background state
      setIsScrolled(window.scrollY > 40);

      // 2. Active section highlights
      let current = 'hero';
      for (const link of navLinks) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header 
      id="header"
      className={`fixed top-[3px] left-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-500 border-b border-[var(--border-card)] backdrop-blur-md ${
        isScrolled ? 'py-4 bg-[var(--bg-main)]/85 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <a 
        href="#hero" 
        onClick={(e) => scrollToSection(e, '#hero')}
        className="logo text-xl font-extrabold font-heading tracking-wider flex items-center gap-1"
      >
        <span className="bg-gradient-to-r from-[#D8A7FF] via-[#E8C5FF] to-[#FBBF24] bg-clip-text text-transparent">MONISHA</span>
        <span className="logo-dot"></span>
      </a>

      {/* Mobile / Tablet Toggle Button */}
      <button 
        className="menu-toggle lg:hidden text-[#F8F7FB] p-2 rounded-xl bg-[#0E0C16] border border-[#D8A7FF]/30 hover:border-[#D8A7FF] transition-all"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Navigation Menu */}
      <nav 
        id="nav-menu"
        className={`flex items-center gap-3 xl:gap-5 ${
          mobileMenuOpen 
            ? 'open fixed inset-0 w-full h-screen bg-[#08070B]/98 border-l border-[#D8A7FF]/30 flex flex-col justify-center items-center gap-4 p-8 transition-all duration-300 backdrop-blur-2xl z-[1000] overflow-y-auto' 
            : 'hidden lg:flex'
        }`}
      >
        {/* Mobile menu close button inside menu */}
        {mobileMenuOpen && (
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-xl bg-[#0E0C16] border border-[#D8A7FF]/40 text-[#F8F7FB] hover:text-[#D8A7FF]"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        )}

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className={`nav-link text-[11px] xl:text-xs font-semibold tracking-wide transition-all relative py-1 ${
              activeSection === link.href.slice(1)
                ? 'text-[#D8A7FF] font-extrabold active-link drop-shadow-[0_0_8px_rgba(216,167,255,0.4)]'
                : 'text-[#E4DFF0] hover:text-[#D8A7FF]'
            } ${mobileMenuOpen ? 'text-base py-2 font-bold' : ''}`}
          >
            {link.label}
          </a>
        ))}

        <div className={`flex items-center gap-4 ${mobileMenuOpen ? 'mt-6' : 'ml-2'}`}>
          <ThemeToggle />
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="nav-cta bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] px-4 py-2 rounded-xl text-xs font-extrabold shadow-[0_0_15px_rgba(216,167,255,0.3)] hover:scale-105 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
