import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've made an impact"
      subtitle="Two years of shipping production software across real-estate, e-commerce, HR and SaaS."
    >
      <ol className="relative mx-auto max-w-3xl border-l-2 border-slate-200 pl-8 dark:border-white/10">
        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span
              className={`absolute -left-[2.6rem] flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white shadow-card dark:bg-[#03060f] ${
                exp.current
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400'
                  : 'border-slate-300 text-slate-500 dark:border-white/15 dark:text-slate-400'
              }`}
            >
              <Briefcase className="h-5 w-5" />
            </span>
            {exp.current && (
              <span className="absolute -left-[3.25rem] top-0 h-12 w-12 animate-pulse-ring rounded-full border-2 border-brand-600" />
            )}

            <div className="glass-card overflow-hidden p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="chip">{exp.period}</span>
                  <p className="mt-1.5 flex items-center justify-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" /> {exp.location}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{exp.summary}</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Responsibilities
                  </p>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Award className="h-3.5 w-3.5" /> Achievements
                  </p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200/70 pt-4 dark:border-white/10">
                {exp.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
