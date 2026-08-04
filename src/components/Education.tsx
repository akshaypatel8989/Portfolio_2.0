import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { Section } from '@/components/Section';
import { education, certifications } from '@/data/education';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title="Foundations and lifelong learning"
      subtitle="Formal degrees that built my foundation, plus certifications that keep me current."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
            <GraduationCap className="h-6 w-6 text-brand-600 dark:text-brand-400" /> Education
          </h3>
          <ol className="relative border-l-2 border-slate-200 pl-8 dark:border-white/10">
            {education.map((e, i) => (
              <motion.li
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[2.6rem] flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-brand-600 dark:bg-[#03060f] dark:text-brand-400">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {e.degree}
                    </h4>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        e.status === 'Pursuing'
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                          : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {e.institution}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{e.period}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{e.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
            <Award className="h-6 w-6 text-brand-600 dark:text-brand-400" /> Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass-card flex flex-col p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400" />
                </div>
                <h4 className="font-display text-sm font-bold leading-snug text-slate-900 dark:text-white">
                  {c.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{c.issuer}</p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-200/70 pt-3 dark:border-white/10">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{c.year}</span>
                  <span className="font-mono text-[10px] text-slate-400">{c.credentialId}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
