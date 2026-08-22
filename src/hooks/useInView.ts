import { useEffect, useRef, useState, RefObject } from "react";

/**
 * `enabled` gates when observation starts. Callers should wait until the
 * observed element has its real, final layout size (e.g. an image has
 * loaded) before enabling — otherwise a not-yet-sized element measures as
 * "already visible" the instant it mounts, well before it's actually
 * scrolled into place.
 */
function useInView<T extends HTMLElement>(
  enabled: boolean,
  options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return [ref, inView];
}

export default useInView;
