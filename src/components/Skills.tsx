import { motion, useInView } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { useRef } from 'react';
import { Section } from '@/components/Section';
import { skillCategories, type Skill } from '@/data/skills';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

function CircularSkill({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col items-center gap-3"
    >
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            strokeWidth="6"
            className="stroke-slate-200 dark:stroke-white/10"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
            className="text-brand-600 dark:text-brand-400"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <skill.icon
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-125"
            style={{ color: skill.color }}
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{skill.name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit honed over 2+ years"
      subtitle="From crafting pixel-perfect UIs to architecting scalable APIs and databases."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((cat, ci) => {
          const Icon = categoryIcons[cat.icon] ?? Code2;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: ci * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cat.blurb}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                {cat.skills.map((s, i) => (
                  <CircularSkill key={s.name} skill={s} index={i} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
