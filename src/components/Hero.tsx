import { ArrowRight, Download, Github, Linkedin, Sparkles, BarChart3, Target, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, contactInfo } from '../data/portfolioData.ts';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const quickSkills = [
    { label: 'Data Analysis & Business Insights', icon: BarChart3 },
    { label: 'BI Dashboards & KPI Tracking', icon: Target },
    { label: 'Project Management & Agile Delivery', icon: CalendarCheck },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient background glow accents adapted to selected pastel accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[340px] rounded-full blur-[130px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: 'var(--accent-glow)' }}
      />
      <div
        className="absolute top-1/3 right-10 w-[340px] h-[300px] rounded-full blur-[110px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: 'var(--accent-glow-subtle)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-8 transition-colors duration-300 theme-accent-badge"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <Sparkles className="w-3.5 h-3.5" />
          <span>{personalInfo.currentFocus}</span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          id="hero-name-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-main)] mb-6 font-serif-display"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Roles Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <h2
            id="hero-subtitle"
            className="text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-[var(--accent-pastel)]"
          >
            {personalInfo.title}
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mt-3 rounded-full opacity-60"
            style={{ backgroundColor: 'var(--accent-pastel)' }}
          />
        </motion.div>

        {/* Exact Bio text */}
        <motion.p
          id="hero-bio"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-[var(--text-body)] leading-relaxed font-normal mb-10 text-balance"
        >
          {personalInfo.heroBio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <a
            id="hero-resume-download-btn"
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] theme-accent-btn"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <a
            id="hero-linkedin-btn"
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] text-[var(--text-main)] font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <Linkedin className="w-4 h-4 text-[var(--accent-pastel)]" />
            LinkedIn
          </a>

          <a
            id="hero-github-btn"
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] text-[var(--text-main)] font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <Github className="w-4 h-4 text-[var(--text-muted)]" />
            GitHub
          </a>

          <button
            id="hero-view-projects-btn"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 dark:bg-white/[0.02] hover:bg-black/10 dark:hover:bg-white/[0.06] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-[var(--text-main)] font-medium text-sm transition-all duration-200 cursor-pointer"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 text-[var(--accent-pastel)]" />
          </button>
        </motion.div>

        {/* Quick Skills Pill Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-[var(--border-subtle)]"
        >
          {quickSkills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/[0.02] border border-[var(--border-subtle)] text-[var(--text-body)] text-xs font-semibold"
              >
                <Icon className="w-4 h-4 text-[var(--accent-pastel)]" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
