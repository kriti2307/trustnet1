import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Detect real reload
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // FORCE browser-level redirect to home (drops hash & scroll)
      window.location.replace("/");
      return;
    }

    // Normal SPA navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null;
}
