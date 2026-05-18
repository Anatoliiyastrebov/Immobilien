"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/lib/data/stats";
import { fadeUp, useMotionConfig } from "@/lib/motion";

interface StatCardProps {
  stat: Stat;
  index?: number;
  dark?: boolean;
}

export function StatCard({ stat, index = 0, dark = true }: StatCardProps) {
  const { transition, viewport, prefersReducedMotion } = useMotionConfig();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...transition, delay: index * 0.1 }}
      className="text-center md:text-left"
    >
      <p
        className={`font-serif text-4xl font-light md:text-5xl ${dark ? "text-gold" : "text-gold"}`}
      >
        {stat.value}
        {stat.suffix && (
          <span className="text-2xl md:text-3xl">{stat.suffix}</span>
        )}
      </p>
      <p
        className={`mt-2 text-sm uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-muted"}`}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}
