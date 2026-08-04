import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/data/navLinks';
import { useScrolled } from '@/hooks/useScrolled';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTheme } from '@/context/ThemeContext';

export function Navbar() {
  const scrolled = useScrolled(40);
  const active = useScrollSpy(
    navLinks.map((l) => l.id),
    140,
  );
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#03060f]/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-display text-sm font-extrabold text-white shadow-glow transition-transform group-hover:scale-110">
            AP
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Akshay<span className="text-brand-600 dark:text-brand-400">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-brand-600 dark:bg-brand-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/60 text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
            className="hidden items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 sm:inline-flex dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
            className="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 active:scale-95 sm:inline-flex"
          >
            Hire Me
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/60 text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#03060f]/95"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.id
                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex gap-2 px-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    go('contact');
                  }}
                  className="btn-ghost flex-1"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    go('contact');
                  }}
                  className="btn-primary flex-1"
                >
                  Hire Me <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
