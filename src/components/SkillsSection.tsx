import { BarChart3, CalendarCheck, LayoutDashboard, Database, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData.ts';

export default function SkillsSection() {
  const categoryIcons = [BarChart3, CalendarCheck, LayoutDashboard, Database];

  return (
    <section id="skills" className="relative py-20 bg-[var(--bg-surface-muted)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 theme-accent-badge border">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight font-serif-display mb-4">
            Analysis, Project Management & Toolkit
          </h2>
          <div
            className="w-16 h-1 rounded-full mb-6 opacity-70"
            style={{ backgroundColor: 'var(--accent-pastel)' }}
          />
          <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-normal">
            A comprehensive overview of data analysis methodologies, project management practices,
            BI dashboards, and analytical tools applied to solve business challenges and streamline delivery.
          </p>
        </div>

        {/* 4 Category Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={cat.title}
                id={`skill-category-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-md transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl theme-accent-badge border">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-main)]">{cat.title}</h3>
                    {cat.description && (
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{cat.description}</p>
                    )}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/[0.03] text-[var(--text-body)] border border-[var(--border-subtle)] text-xs font-semibold transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-[var(--accent-pastel)]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
