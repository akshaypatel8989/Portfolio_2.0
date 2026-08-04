import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, FolderKanban, X, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Section } from '@/components/Section';
import { projects, type Project } from '@/data/projects';

const filters = ['All', 'React', 'Node', 'Full Stack'] as const;
type Filter = (typeof filters)[number];

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group glass-card flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060f]/80 via-[#03060f]/20 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {project.tag}
          </span>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onOpen(project)}
            className="rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/30"
          >
            Case Study
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="chip">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="mt-5 flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-400"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#03060f]/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-white shadow-glow-lg dark:bg-[#0a0f1f] no-scrollbar"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03060f]/80 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {project.tag}
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <h4 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Key Highlights
          </h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                {h}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Tech Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost flex-1"
            >
              <Github className="h-4 w-4" /> View Code
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary flex-1">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter(
            (p) => p.category === filter || (filter === 'Node' && p.tech.includes('Node.js')),
          ),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work I'm proud of"
      subtitle="A selection of products I've designed, built and shipped end to end."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f
                ? 'text-white'
                : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-brand-600 shadow-glow"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <FolderKanban className="h-4 w-4" /> Showing {filtered.length} of {projects.length} projects
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
}
