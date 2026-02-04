import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ScrollToTop (single source of truth for scroll + reload redirect)
// Behavior:
// - On app mount, if the page was reloaded (detected via sessionStorage set by main.jsx), redirect to home ('/') and clear the flag.
// - On route changes: if location.hash exists and the matching element is found, smooth-scroll to it; otherwise jump to top.
// - Ensures no infinite redirect by only redirecting when the reload flag is present and current pathname !== '/'.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Run once on mount to handle reload redirect (if required)
  useEffect(() => {
    try {
      const wasReloaded = sessionStorage.getItem('app-was-reloaded');
      if (wasReloaded) {
        // Clear flag immediately to avoid repeated redirects
        sessionStorage.removeItem('app-was-reloaded');
        if (window.location.pathname !== '/') {
          // Replace current history entry and redirect to home without reload
          navigate('/', { replace: true });
          return; // let the pathname change trigger scroll handling
        } else {
          // already on home — ensure we are at top
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }
    } catch (e) {
      // ignore
    }
  }, [navigate]);

  // Handle normal navigation and hash scrolling
  useEffect(() => {
    // Wait for the page to render content
    requestAnimationFrame(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          // respect reduced-motion
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
          return;
        }
      }

      // No hash or element not found -> jump to top
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, hash]);

  return null;
}
