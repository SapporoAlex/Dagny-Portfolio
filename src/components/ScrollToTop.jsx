import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the browser's scroll position across route changes,
 * which reads as a bug on a site styled to feel like separate pages.
 * Resetting on every pathname change makes each route open at its top.
 */
function ScrollToTop() {
  const { pathname, state } = useLocation();
  const scrollTarget = state?.scrollTarget;

  useEffect(() => {
    // A caller asking to land on a specific section (e.g. the "Galleries"
    // nav link) handles its own scrolling once that section has rendered.
    if (scrollTarget) return;
    window.scrollTo(0, 0);
  }, [pathname, scrollTarget]);

  return null;
}

export default ScrollToTop;
