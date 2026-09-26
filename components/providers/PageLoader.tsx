"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AGENCY_SHORT } from "@/lib/constants";

// Show the intro only when a visitor arrives from outside the site. Deciding
// from the navigation itself instead of a sessionStorage flag keeps the site
// free of anything stored on the device (§ 25 TDDDG).
function isEntryNavigation() {
  const [nav] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
  if (nav && nav.type !== "navigate") return false;
  if (!document.referrer) return true;
  return new URL(document.referrer).origin !== window.location.origin;
}

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isEntryNavigation()) return;

    let hideTimer: number;
    const showTimer = window.setTimeout(() => {
      setIsLoading(true);
      const duration = prefersReducedMotion === true ? 300 : 1800;
      hideTimer = window.setTimeout(() => setIsLoading(false), duration);
    }, 0);

    return () => {
      window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
          role="status"
          aria-label="Seite wird geladen"
          aria-live="polite"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl font-light tracking-wide text-white md:text-4xl"
          >
            {AGENCY_SHORT}
          </motion.p>
          <motion.div className="mt-8 h-px w-48 overflow-hidden bg-white/20">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 1.4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
