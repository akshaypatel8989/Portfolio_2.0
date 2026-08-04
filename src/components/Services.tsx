import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Layers3,
  Plug,
  Database,
  Gauge,
  Rocket,
} from 'lucide-react';
import { Section } from '@/components/Section';
import { services } from '@/data/services';
import { CheckCircle2 } from 'lucide-react';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  fullstack: Layers3,
  api: Plug,
  database: Database,
  performance: Gauge,
  deploy: Rocket,
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can do for you"
      subtitle="End-to-end development services — from a single landing page to a full product."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon] ?? Code2;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card overflow-hidden p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-600/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-500/15 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
