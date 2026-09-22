import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--bg-main)] border-t border-[var(--border-subtle)] text-[var(--text-muted)] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg theme-accent-badge border flex items-center justify-center font-bold text-xs">
            {personalInfo.initials}
          </div>
          <div>
            <p className="text-[var(--text-main)] font-semibold">© 2026 Harshitha Gudivada. All Rights Reserved.</p>
            <p className="text-[var(--text-muted)] text-[11px] mt-0.5">
              Data Analysis • Business Intelligence • Project Management
            </p>
          </div>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              id="footer-github-link"
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[var(--accent-pastel)] hover:opacity-80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${contactInfo.email}`}
              aria-label="Send email"
              className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] text-[var(--text-body)] hover:text-[var(--text-main)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
