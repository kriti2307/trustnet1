import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Ensure browser does not restore scroll position on navigation.
// Keep this as minimal as possible (no reload redirects here).
if (typeof window !== "undefined") {
  try {
    if ('scrollRestoration' in window.history) {
      // Disable browser auto-restoration so React controls scroll entirely
      window.history.scrollRestoration = 'manual';
    }
  } catch (e) {
    // ignore
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
