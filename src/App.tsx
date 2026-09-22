/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';

function MainPortfolioContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] flex flex-col transition-colors duration-300 selection:bg-pink-300 selection:text-pink-950">
      {/* Top Navbar with Theme & Pastel Palette Switcher */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainPortfolioContent />
    </ThemeProvider>
  );
}
