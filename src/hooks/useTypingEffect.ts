import { useEffect, useState } from 'react';

/** Typing/deleting loop for an array of phrases. */
export function useTypingEffect(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {},
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && text === current) {
      delay = pause;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
