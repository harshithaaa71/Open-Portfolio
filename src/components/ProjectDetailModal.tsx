import { X, ExternalLink, Github, CheckCircle2, Wrench, Database, HelpCircle, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types.ts';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-detail-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl my-8 bg-[var(--bg-surface-elevated)] border border-[var(--border-card)] rounded-3xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{project.icon}</span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase theme-accent-badge border">
                    FEATURED
                  </span>
                )}
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] font-serif-display">
                {project.title}
              </h2>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overview / Extended description */}
          <div className="mb-6">
            <p className="text-base text-[var(--text-body)] leading-relaxed font-normal">
              {project.extendedDescription || project.description}
            </p>
          </div>

          {/* Structured Sections */}
          <div className="space-y-5">
            {/* Problem Statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-subtle)]">
              <h3 className="text-xs font-bold text-[var(--accent-pastel)] uppercase tracking-wider flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4" />
                Problem
              </h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{project.problem}</p>
            </div>

            {/* Dataset (if available) */}
            {project.dataset && (
              <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold text-[var(--accent-pastel)] uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4" />
                  Dataset
                </h3>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">{project.dataset}</p>
              </div>
            )}

            {/* Features (if available) */}
            {project.features && project.features.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold text-[var(--accent-pastel)] uppercase tracking-wider flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-body)]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-pastel)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools Used */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-subtle)]">
              <h3 className="text-xs font-bold text-[var(--accent-pastel)] uppercase tracking-wider flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4" />
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold theme-accent-badge border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Outcomes / Insights */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--accent-badge-bg)] border border-[var(--accent-badge-border)]">
              <h3 className="text-xs font-bold text-[var(--accent-pastel)] uppercase tracking-wider flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4" />
                Key Outcomes & Insights
              </h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">
                {project.keyOutcomesOrInsights}
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
            <button
              id="modal-back-btn"
              onClick={onClose}
              className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              ← Back to Projects
            </button>

            <a
              id="modal-github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md theme-accent-btn"
            >
              <Github className="w-4 h-4" />
              View Code on GitHub
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
