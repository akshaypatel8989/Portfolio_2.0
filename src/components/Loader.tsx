import { AnimatePresence, motion } from 'framer-motion';
import { useLoaded } from '@/hooks/useLoaded';

export function Loader() {
  const loaded = useLoaded(1600);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#03060f]"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-24 w-24 rounded-full border-2 border-brand-500/30 animate-pulse-ring" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl font-extrabold text-gradient"
            >
              AP
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm font-medium tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            LOADING
          </motion.p>
          <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-600 to-blue-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
