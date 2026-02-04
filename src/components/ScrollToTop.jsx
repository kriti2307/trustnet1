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
