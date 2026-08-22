import { useEffect, useRef, useState } from "react";

interface Options {
  /** Force the initial state to visible — for pages that mount already scrolled past `revealAfter`. */
  startVisible?: boolean;
}

/**
 * Nav header visibility: hidden while within `revealAfter` px of the top
 * (lets a full-bleed hero own that space), then shows on scroll-up and
 * hides on scroll-down beyond that point. With revealAfter = 0 it's
 * simply visible from the top and reacts to scroll direction throughout.
 */
function useNavVisibility(revealAfter = 0, { startVisible = false }: Options = {}): boolean {
  const [visible, setVisible] = useState(revealAfter === 0 || startVisible);
  const lastY = useRef(0);

  useEffect(() => {
    // Read fresh rather than relying on a value captured at first render —
    // a caller may have already jumped the scroll position (e.g. landing
    // directly on a page section) before this effect's listener attaches.
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < revealAfter) {
        setVisible(revealAfter === 0);
      } else if (y < lastY.current) {
        setVisible(true);
      } else if (y > lastY.current) {
        setVisible(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealAfter]);

  return visible;
}

export default useNavVisibility;
