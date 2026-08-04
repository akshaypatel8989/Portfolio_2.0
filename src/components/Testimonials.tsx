import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Section } from '@/components/Section';
import { testimonials } from '@/data/testimonials';

const AUTO_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[index];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What clients say about working with me"
      className="relative overflow-hidden"
    >
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4 }}
              className="glass-card relative p-8 md:p-10"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-600/15 dark:text-brand-400/15" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500/40"
                />
                <div>
                  <p className="font-display font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/60 text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-brand-600' : 'w-2 bg-slate-300 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/60 text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
