import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Ensure browser does not restore scroll position on reload/navigation.
// Set this as early as possible (before React mounts) so the browser won't
// restore previous scroll position after a reload.
if (typeof window !== "undefined") {
  try {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  } catch (e) {
    // ignore
  }

  // On 'pageshow' (including bfcache restores), detect reload or restore
  // and set a session flag so the React app can redirect to home on mount.
  window.addEventListener('pageshow', (event) => {
    try {
      const navEntries = performance.getEntriesByType('navigation');
      const navType = navEntries && navEntries[0] && navEntries[0].type;
      const isReload = navType === 'reload' || event.persisted === true || (performance && performance.navigation && performance.navigation.type === 1);
      if (isReload) {
        try { sessionStorage.setItem('app-was-reloaded', '1'); } catch (err) {}
        // Immediately force top to avoid flicker of restored position
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    } catch (e) {
      // ignore
    }
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
