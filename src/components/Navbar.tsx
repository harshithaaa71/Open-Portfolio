import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData.ts';
import ThemePalettePicker from './ThemePalettePicker.tsx';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          id="navbar-brand-btn"
          onClick={() => handleLinkClick('hero')}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)] flex items-center justify-center text-[var(--accent-pastel)] font-bold text-base tracking-wider transition-all duration-300 group-hover:scale-105 shadow-inner">
            {personalInfo.initials}
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold text-[var(--text-main)] tracking-wide group-hover:text-[var(--accent-pastel)] transition-colors">
              {personalInfo.name}
            </span>
            <span className="block text-[11px] text-[var(--text-muted)] font-medium tracking-tight">
              Data Analysis & Project Management
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-pink-100/60 dark:bg-pink-950/40 border border-pink-200/60 dark:border-pink-900/50 rounded-full px-2 py-1.5 backdrop-blur-sm"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-badge-bg)] text-[var(--accent-badge-text)] border border-[var(--accent-badge-border)] font-semibold shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick Actions & Theme Palette Switcher */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Pastel Theme & Palette Picker */}
          <ThemePalettePicker />

          <a
            id="nav-resume-btn"
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-main)] bg-black/5 dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[var(--accent-pastel)]" />
            Resume
          </a>

          <a
            id="nav-github-btn"
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/[0.03] hover:bg-black/10 dark:hover:bg-white/[0.08] border border-[var(--border-subtle)] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-btn"
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/[0.03] hover:bg-black/10 dark:hover:bg-white/[0.08] border border-[var(--border-subtle)] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[var(--accent-pastel)]" />
          </a>

          <button
            id="nav-hire-btn"
            onClick={() => handleLinkClick('contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer theme-accent-btn hover:opacity-90"
          >
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quick Palette Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemePalettePicker />
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg text-[var(--text-main)] bg-black/5 dark:bg-white/[0.05] border border-[var(--border-subtle)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-card)] backdrop-blur-xl shadow-2xl flex flex-col gap-3"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--accent-badge-bg)] text-[var(--accent-badge-text)] border border-[var(--accent-badge-border)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <a
              id="mobile-resume-link"
              href={contactInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[var(--text-main)] bg-black/5 dark:bg-white/[0.06] border border-[var(--border-subtle)]"
            >
              <Download className="w-4 h-4 text-[var(--accent-pastel)]" />
              Download Resume (PDF)
            </a>
            <div className="flex gap-2">
              <a
                id="mobile-github-link"
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium text-[var(--text-main)] bg-black/5 dark:bg-white/[0.04] border border-[var(--border-subtle)]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                id="mobile-linkedin-link"
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium text-[var(--text-main)] bg-black/5 dark:bg-white/[0.04] border border-[var(--border-subtle)]"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-pastel)]" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
