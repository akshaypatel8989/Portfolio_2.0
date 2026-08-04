import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRef } from 'react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Counter } from '@/components/Counter';
import { Particles } from '@/components/Particles';
import { stats } from '@/data/about';

const AVATAR =
  'https://images.pexels.com/photos/5483147/pexels-photo-5483147.jpeg?auto=compress&cs=tinysrgb&w=900';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const typed = useTypingEffect([
    'modern, scalable web applications.',
    'high-performance React interfaces.',
    'secure REST APIs with Node.js.',
    'full-stack products end to end.',
  ]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-grid-32 dark:bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <Particles className="absolute inset-0 -z-10 h-full w-full opacity-70" count={44} />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" /> Available for work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I&apos;m <span className="text-gradient">Akshay Patel</span>
            <br />
            <span className="text-gradient-light">MERN Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            2+ Years Experience. I build{' '}
            <span className="font-semibold text-brand-600 dark:text-brand-400">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-brand-600 align-middle dark:bg-brand-400" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#" className="btn-ghost">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white/60 text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white/60 text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 text-center"
              >
                <dd className="font-display text-2xl font-extrabold text-gradient sm:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs font-medium leading-snug text-slate-600 dark:text-slate-400">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-brand-600/30 via-blue-400/20 to-transparent blur-2xl" />
          <div className="absolute -left-6 top-10 hidden animate-floaty rounded-2xl glass-card px-4 py-3 text-sm font-semibold text-slate-700 shadow-card sm:block dark:text-slate-200">
            <span className="text-brand-600 dark:text-brand-400">&lt;/&gt;</span> MERN
          </div>
          <div className="absolute -right-4 top-1/3 hidden animate-floaty-slow rounded-2xl glass-card px-4 py-3 text-sm font-semibold text-slate-700 shadow-card sm:block dark:text-slate-200">
            2+ yrs
          </div>
          <div className="absolute bottom-8 left-2 hidden animate-floaty rounded-2xl glass-card px-4 py-3 text-sm font-semibold text-slate-700 shadow-card sm:block dark:text-slate-200">
            20+ Projects
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/30 bg-gradient-to-b from-brand-500/20 to-transparent shadow-glow-lg backdrop-blur">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand-500/30 [mask-image:linear-gradient(black,transparent_60%)]" />
            <img
              src={AVATAR}
              alt="Akshay Patel, MERN Stack Developer"
              loading="eager"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03060f]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-slate-300 p-1 dark:border-white/15">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1 rounded-full bg-brand-600 dark:bg-brand-400"
          />
        </span>
      </motion.div>
    </section>
  );
}
