import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Lightweight IntersectionObserver hook that flips a boolean once an
 * element scrolls into view, used to trigger the shared fade-up
 * animation defined in globals.css (.reveal / .reveal-visible).
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}
