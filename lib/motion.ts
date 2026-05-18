"use client";

import { useReducedMotion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  const viewport = { once: true, margin: "-80px" as const };

  return { prefersReducedMotion, transition, viewport };
}
