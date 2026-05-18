"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, useMotionConfig } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  dark = false,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { transition, viewport, prefersReducedMotion } = useMotionConfig();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={transition}
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span
        className={cn(
          "mb-4 block text-xs font-medium uppercase tracking-[0.3em]",
          dark ? "text-gold" : "text-gold",
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl text-balance",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
