import { GraduationCap, BarChart3, Target, Compass, Award, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { aboutParagraphs } from '../data/portfolioData.ts';

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      subtitle: 'Computer Science with specialization in AI, ML & Analytical Problem Solving',
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI Stack',
      subtitle: 'Power BI, Tableau, Advanced Excel, SQL, EDA & KPI Dashboards',
    },
    {
      icon: CalendarCheck,
      title: 'Project Management & Agile',
      subtitle: 'Requirements gathering, stakeholder alignment, sprint planning & milestone tracking',
    },
    {
      icon: Compass,
      title: 'Career Trajectory',
      subtitle: 'Data Analyst, Business Analyst & Analytics Project Manager / Delivery Consultant',
    },
  ];

  return (
    <section id="about" className="relative py-20 border-y border-[var(--border-subtle)] bg-[var(--bg-surface-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 theme-accent-badge border">
            Profile & Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight font-serif-display">
            About Me
          </h2>
          <div
            className="w-16 h-1 rounded-full mt-3 mx-auto md:mx-0 opacity-70"
            style={{ backgroundColor: 'var(--accent-pastel)' }}
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Verbatim Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[var(--text-body)] text-base sm:text-lg leading-relaxed">
            {aboutParagraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                id={`about-paragraph-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-xs transition-all duration-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Structured Highlights & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-card)] shadow-md relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: 'var(--accent-glow)' }}
              />

              <h3 className="text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[var(--accent-pastel)]" />
                Key Highlights
              </h3>

              <div className="space-y-3.5">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-subtle)] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="p-2 rounded-lg theme-accent-badge border mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-main)]">{item.title}</h4>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">{item.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quote / Value Note */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <p className="text-sm italic font-medium text-[var(--text-body)] leading-relaxed">
                  &ldquo;I enjoy understanding business requirements and coordinating project milestones before designing analytical solutions that create measurable value.&rdquo;
                </p>
                <span className="block text-xs font-bold text-[var(--accent-pastel)] mt-2 tracking-wide uppercase">
                  — Harshitha Gudivada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
