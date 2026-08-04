import { motion, useInView } from 'framer-motion';
import { Layers, Gauge, Ruler, Sparkles, Code2, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { Section } from '@/components/Section';
import { aboutHighlights, aboutTimeline } from '@/data/about';

const highlightIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  gauge: Gauge,
  ruler: Ruler,
  sparkles: Sparkles,
};

const PROFILE =
  'https://images.pexels.com/photos/12903271/pexels-photo-12903271.jpeg?auto=compress&cs=tinysrgb&w=800';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Turning ideas into production-ready products"
      subtitle="A developer who cares about the details — from database schema to the last pixel."
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-brand-600/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 shadow-card dark:border-white/10">
            <img
              src={PROFILE}
              alt="Akshay Patel working"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#03060f]/80 to-transparent p-5 text-white">
              <div>
                <p className="font-display text-lg font-bold">Akshay Patel</p>
                <p className="text-sm text-slate-200">MERN Stack Developer</p>
              </div>
              <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold">
                Available
              </span>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <p>
              I&apos;m a <strong className="text-slate-900 dark:text-white">MERN Stack Developer</strong>{' '}
              with 2+ years of experience building web applications that are fast, scalable and a
              pleasure to use. My journey started with a curiosity for how things work on the
              internet and grew into a career shipping products used by thousands.
            </p>
            <p>
              My career objective is simple: build software that creates real value — combining
              clean architecture, thoughtful UX and reliable infrastructure. I thrive in
              cross-functional teams where I can own features end to end, from whiteboard to
              production.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((h, i) => {
              const Icon = highlightIcons[h.icon] ?? Sparkles;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{h.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10">
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white">
              <Code2 className="h-5 w-5 text-brand-600 dark:text-brand-400" /> My Journey
            </h3>
            <ol className="relative border-l border-slate-200 pl-6 dark:border-white/10">
              {aboutTimeline.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="relative mb-6 last:mb-0"
                >
                  <span className="absolute -left-[1.65rem] flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-[10px] font-bold text-brand-600 dark:bg-[#03060f] dark:text-brand-400">
                    <Rocket className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {item.year}
                  </p>
                  <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
