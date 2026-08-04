import { Heart, ArrowUp } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { socials } from '@/data/socials';
import { SocialIcon } from '@/components/SocialIcon';

export function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-200/70 bg-slate-50/60 py-12 dark:border-white/10 dark:bg-[#0a0f1f]/60">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <button onClick={() => go('home')} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-display text-sm font-extrabold text-white">
                AP
              </span>
              <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Akshay<span className="text-brand-600 dark:text-brand-400">.</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              MERN Stack Developer building modern, scalable and high-performance web applications.
              Available for freelance and full-time opportunities.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-400"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>akshay.patel@example.com</li>
              <li>+91 90000 00000</li>
              <li>Pune, Maharashtra, India</li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 sm:flex-row dark:border-white/10 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Akshay Patel. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 fill-brand-600 text-brand-600" /> using React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
