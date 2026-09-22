import { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, Layers, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import ProjectDetailModal from './ProjectDetailModal.tsx';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Analytics & ML', 'Business Intelligence', 'Healthcare & NLP'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 theme-accent-badge border">
            <Layers className="w-3.5 h-3.5" />
            Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight font-serif-display mb-4">
            Projects
          </h2>
          <div
            className="w-16 h-1 rounded-full mb-6 opacity-70"
            style={{ backgroundColor: 'var(--accent-pastel)' }}
          />
          <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-normal">
            A collection of projects that demonstrate my ability to analyze data, build interactive dashboards,
            develop analytical solutions, and transform complex datasets into meaningful business insights using
            Python, SQL, Power BI, and machine learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-[var(--border-subtle)]">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'theme-accent-btn shadow-sm'
                  : 'bg-black/5 dark:bg-white/[0.03] text-[var(--text-body)] hover:text-[var(--text-main)] hover:bg-black/10 dark:hover:bg-white/[0.08] border border-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border transition-all duration-300 shadow-md ${
                  project.featured
                    ? 'border-[var(--accent-badge-border)] shadow-lg'
                    : 'border-[var(--border-card)] hover:border-[var(--accent-badge-border)]'
                }`}
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2.5 rounded-2xl bg-black/5 dark:bg-white/[0.04] border border-[var(--border-subtle)] group-hover:scale-110 transition-transform">
                        {project.icon}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase theme-accent-badge border">
                          <Sparkles className="w-3 h-3" />
                          FEATURED
                        </span>
                      )}
                    </div>

                    <button
                      id={`card-view-btn-${project.id}`}
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-body)] hover:text-[var(--text-main)] transition-all cursor-pointer"
                      title="View full project details"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[var(--accent-pastel)]" />
                      Details
                    </button>
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-xl sm:text-2xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-pastel)] transition-colors font-serif-display cursor-pointer mb-3"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[var(--text-body)] text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/5 dark:bg-white/[0.03] text-[var(--text-body)] border border-[var(--border-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4 mt-2">
                  <button
                    id={`open-study-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent-pastel)] hover:underline cursor-pointer"
                  >
                    Read Full Case Study
                    <ArrowUpRight className="w-4 h-4 ml-0.5" />
                  </button>

                  <a
                    id={`github-link-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/[0.08] text-xs font-semibold text-[var(--text-main)] border border-[var(--border-subtle)] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for In-depth Case Studies */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
